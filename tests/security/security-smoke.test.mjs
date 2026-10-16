import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const rateLimitSource = await readFile(new URL("../../src/utils/rateLimit.js", import.meta.url), "utf8");
const rateLimitModuleUrl = `data:text/javascript;base64,${Buffer.from(rateLimitSource).toString("base64")}`;
const { enforceRateLimit } = await import(rateLimitModuleUrl);

function request(address, extraHeaders = {}) {
    return new Request("https://security-test.invalid/api", {
        headers: { "x-real-ip": address, ...extraHeaders },
    });
}

function withEnv(values, fn) {
    const previous = {};
    for (const key of Object.keys(values)) {
        previous[key] = process.env[key];
        if (values[key] === undefined) delete process.env[key];
        else process.env[key] = values[key];
    }
    return Promise.resolve()
        .then(fn)
        .finally(() => {
            for (const key of Object.keys(values)) {
                if (previous[key] === undefined) delete process.env[key];
                else process.env[key] = previous[key];
            }
        });
}

test("in-memory fallback enforces the configured threshold and returns Retry-After", async () => {
    await withEnv({ UPSTASH_REDIS_REST_URL: undefined, UPSTASH_REDIS_REST_TOKEN: undefined }, async () => {
        const req = request("198.51.100.11");
        const first = await enforceRateLimit(req, { namespace: "test-threshold", limit: 2, windowSeconds: 60 });
        const second = await enforceRateLimit(req, { namespace: "test-threshold", limit: 2, windowSeconds: 60 });
        const third = await enforceRateLimit(req, { namespace: "test-threshold", limit: 2, windowSeconds: 60 });
        assert.equal(first.allowed, true);
        assert.equal(second.allowed, true);
        assert.equal(third.allowed, false);
        assert.equal(third.limited, true);
        assert.ok(third.retryAfter >= 1 && third.retryAfter <= 60);
    });
});

test("rate-limit namespaces and client addresses are isolated", async () => {
    await withEnv({ UPSTASH_REDIS_REST_URL: undefined, UPSTASH_REDIS_REST_TOKEN: undefined }, async () => {
        const a = request("198.51.100.12");
        const b = request("198.51.100.13");
        for (let i = 0; i < 2; i++) {
            await enforceRateLimit(a, { namespace: "test-isolation-a", limit: 1, windowSeconds: 60 });
        }
        const otherAddress = await enforceRateLimit(b, { namespace: "test-isolation-a", limit: 1, windowSeconds: 60 });
        const otherNamespace = await enforceRateLimit(a, { namespace: "test-isolation-b", limit: 1, windowSeconds: 60 });
        assert.equal(otherAddress.allowed, true);
        assert.equal(otherNamespace.allowed, true);
    });
});

test("Redis provider failures fall back instead of failing open or crashing", async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => { throw new Error("simulated provider outage"); };
    try {
        await withEnv({
            UPSTASH_REDIS_REST_URL: "https://redis-test.invalid",
            UPSTASH_REDIS_REST_TOKEN: "test-token",
        }, async () => {
            const req = request("198.51.100.14");
            const first = await enforceRateLimit(req, { namespace: "test-provider-failure", limit: 1, windowSeconds: 60 });
            const second = await enforceRateLimit(req, { namespace: "test-provider-failure", limit: 1, windowSeconds: 60 });
            assert.equal(first.allowed, true);
            assert.equal(second.allowed, false);
            assert.equal(second.limited, true);
        });
    } finally {
        globalThis.fetch = originalFetch;
    }
});

test("Redis requests hash client identifiers rather than sending raw addresses", async () => {
    const originalFetch = globalThis.fetch;
    let requestBody = "";
    globalThis.fetch = async (_url, options) => {
        requestBody = options.body;
        return new Response(JSON.stringify([{ result: [1, 60] }]), {
            status: 200,
            headers: { "content-type": "application/json" },
        });
    };
    try {
        await withEnv({
            UPSTASH_REDIS_REST_URL: "https://redis-test.invalid/",
            UPSTASH_REDIS_REST_TOKEN: "test-token",
        }, async () => {
            const result = await enforceRateLimit(request("203.0.113.42"), {
                namespace: "test-redis-hash",
                limit: 3,
                windowSeconds: 60,
            });
            assert.equal(result.allowed, true);
            assert.equal(result.configured, true);
            assert.equal(requestBody.includes("203.0.113.42"), false);
            assert.match(requestBody, /[a-f0-9]{64}/);
        });
    } finally {
        globalThis.fetch = originalFetch;
    }
});

test("contact, auth, reset, upload, and security-header safeguards remain present", async () => {
    const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
    const [contact, auth, reset, upload, config, hubspot, mail] = await Promise.all([
        read("../../src/app/api/contact/route.js"),
        read("../../src/lib/authMiddleware.js"),
        read("../../src/app/api/users/reset-password/route.js"),
        read("../../src/app/api/blogs/route.js"),
        read("../../next.config.js"),
        read("../../src/utils/hubspot.js"),
        read("../../src/utils/sendMail.js"),
    ]);
    assert.match(contact, /MAX_BODY_BYTES/);
    assert.match(contact, /FIELD_LIMITS/);
    assert.match(contact, /EMAIL_PATTERN/);
    assert.match(contact, /enforceRateLimit/);
    assert.match(auth, /jwt\.verify\(token, JWT_SECRET\)/);
    assert.match(auth, /requiredRoles\.includes\(user\.role\)/);
    assert.match(reset, /MAX_RESET_BODY_BYTES/);
    assert.match(reset, /readResetBody/);
    assert.match(reset, /randomBytes\(32\)/);
    assert.match(reset, /passwordResetExpires/);
    assert.match(reset, /bcrypt\.compare\(token, user\.passwordResetToken\)/);
    assert.match(reset, /user\.passwordResetToken = undefined/);
    assert.match(upload, /hasValidImageSignature/);
    assert.match(upload, /5 \* 1024 \* 1024/);
    assert.match(config, /X-Content-Type-Options/);
    assert.match(config, /X-Frame-Options/);
    assert.match(config, /Referrer-Policy/);
    assert.match(hubspot, /escapeHtml/);
    assert.match(mail, /escapeHtml/);
});


test("security CI runs verification without canceling an in-progress check", async () => {
    const workflow = await readFile(new URL("../../.github/workflows/security-checks.yml", import.meta.url), "utf8");
    assert.match(workflow, /cancel-in-progress:\s*false/);
    assert.match(workflow, /npm run test:security/);
    assert.match(workflow, /npm run lint/);
    assert.match(workflow, /npm run build/);
    assert.doesNotMatch(workflow, /vercel deploy|vercel --prod/i);
});
