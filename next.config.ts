import type { NextConfig } from "next";

// ponytail: 'unsafe-inline' on script-src is required because Next.js injects
// inline hydration bootstrap scripts. The strict alternative (nonce-based CSP)
// forces every page to dynamic (server-rendered) rendering, which would kill
// static generation for this whole marketing site. Since nothing here uses
// dangerouslySetInnerHTML with user input (React escapes everything else),
// this is the tradeoff Next's own docs recommend for static-first apps.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["localhost", "127.0.0.1", "127.0.0.2", "127.0.0.3", "127.0.0.4", "127.0.0.5"],

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
