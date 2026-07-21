import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ponytail: in-memory per-instance rate limit. Resets on cold start and isn't
// shared across regions/instances. Fine for a single low-traffic booking form;
// swap for Upstash Redis (@upstash/ratelimit) if this ever needs to hold under
// distributed abuse.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;
const hits = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export function proxy(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
