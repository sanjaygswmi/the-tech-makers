import { createHash } from "node:crypto";

const RATE_LIMIT_SCRIPT = [
    "local count = redis.call('INCR', KEYS[1])",
    "if count == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end",
    "local ttl = redis.call('TTL', KEYS[1])",
    "return {count, ttl}",
].join("\n");

// Portable best-effort fallback. This is per process, not shared across instances.
const localWindows = new Map();
const MAX_LOCAL_KEYS = 5000;
let fallbackWarningLogged = false;

function getClientAddress(req) {
    // Prefer the platform-set header; use forwarded-for only as a fallback.
    const direct = req.headers.get("x-real-ip")?.trim();
    if (direct) return direct;
    const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    return forwarded || "unknown";
}

function getFingerprint(namespace, address, identity) {
    return createHash("sha256")
        .update(`${namespace}: ${address}: ${identity}`)
        .digest("hex");
}

function warnFallback(reason) {
    if (fallbackWarningLogged) return;
    fallbackWarningLogged = true;
    console.warn(`Rate limiting is using the in-memory fallback (${reason}); limits are per process.`);
}

function enforceLocalWindow(key, limit, windowSeconds, reason) {
    const now = Date.now();
    const windowMs = windowSeconds * 1000;

    // Opportunistically clear expired keys so the fallback map stays bounded.
    for (const [entryKey, entry] of localWindows) {
        if (entry.expiresAt <= now) localWindows.delete(entryKey);
    }

    let entry = localWindows.get(key);
    if (!entry || entry.expiresAt <= now) {
        if (localWindows.size >= MAX_LOCAL_KEYS) {
            const oldestKey = localWindows.keys().next().value;
            if (oldestKey !== undefined) localWindows.delete(oldestKey);
        }
        entry = { count: 0, expiresAt: now + windowMs };
        localWindows.set(key, entry);
    }
    entry.count += 1;
    // Refresh insertion order to make the capacity eviction approximate LRU.
    localWindows.delete(key);
    localWindows.set(key, entry);

    warnFallback(reason);
    const limited = entry.count > limit;
    return {
        allowed: !limited,
        limited,
        configured: false,
        retryAfter: limited ? Math.max(1, Math.ceil((entry.expiresAt - now) / 1000)) : 0,
    };
}

/**
 * Prefer a shared atomic Upstash Redis fixed-window limiter when configured.
 * Redis is optional: without it, or during provider failure, use a bounded
 * process-local fallback. The fallback is portable but does not coordinate
 * limits across multiple server instances or serverless invocations.
 */
export async function enforceRateLimit(req, {
    namespace,
    limit,
    windowSeconds,
    identity = "",
}) {
    const address = getClientAddress(req);
    const fingerprint = getFingerprint(namespace, address, identity);
    const localKey = `${namespace}:${fingerprint}`;
    const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
        return enforceLocalWindow(localKey, limit, windowSeconds, "Redis is not configured");
    }

    const key = `ttm:rate-limit:${namespace}:${fingerprint}`;
    try {
        const response = await fetch(`${url}/pipeline`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify([["EVAL", RATE_LIMIT_SCRIPT, "1", key, String(windowSeconds)]]),
            cache: "no-store",
            signal: AbortSignal.timeout(2500),
        });
        if (!response.ok) throw new Error("Rate-limit provider request failed");

        const payload = await response.json();
        const result = payload?.[0]?.result;
        if (!Array.isArray(result) || !Number.isFinite(Number(result[0]))) {
            throw new Error("Invalid rate-limit provider response");
        }

        const count = Number(result[0]);
        const ttl = Math.max(1, Number(result[1]) || windowSeconds);
        const limited = count > limit;
        return {
            allowed: !limited,
            limited,
            configured: true,
            retryAfter: limited ? ttl : 0,
        };
    } catch {
        return enforceLocalWindow(localKey, limit, windowSeconds, "Redis is unavailable");
    }
}
