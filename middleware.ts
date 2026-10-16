// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.thetechmakers.com";
const PRODUCTION_HOSTS = new Set(["thetechmakers.com", CANONICAL_HOST]);

function isLocalOrIpHost(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/^\[|\]$/g, "");

  // Keep local development hosts and direct-IP testing URLs untouched.
  if (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host === "127.0.0.1" ||
    host === "::1" ||
    host.endsWith(".local")
  ) {
    return true;
  }

  // IPv4 literal.
  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(host)) return true;

  // Any IPv6 literal (brackets are removed above).
  if (host.includes(":")) return true;

  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = (request.nextUrl.hostname || request.headers.get("host") || "")
    .toLowerCase()
    .replace(/:\d+$/, "");

  // Do not force a public production hostname for localhost, LAN/IP testing,
  // Vercel preview deployments, or unrelated custom domains.
  if (!isLocalOrIpHost(hostname) && PRODUCTION_HOSTS.has(hostname)) {
    const forwardedProto = request.headers
      .get("x-forwarded-proto")
      ?.split(",")[0]
      ?.trim()
      .toLowerCase();
    const isHttps = forwardedProto
      ? forwardedProto === "https"
      : request.nextUrl.protocol === "https:";

    if (hostname !== CANONICAL_HOST || !isHttps) {
      const canonicalUrl = request.nextUrl.clone();
      canonicalUrl.protocol = "https:";
      canonicalUrl.hostname = CANONICAL_HOST;
      canonicalUrl.port = "";
      return NextResponse.redirect(canonicalUrl, 308);
    }
  }

  // Preserve the existing /admin -> /admin/dashboard behavior.
  const normalizedPathname = pathname.replace(/\/$/, "");
  if (normalizedPathname === "/admin") {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run host canonicalization site-wide while leaving Next.js internals alone.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
