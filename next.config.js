/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== "production";

// Content-Security-Policy: same-origin scripts plus the one inline theme script (hash in _document.tsx).
// Dev needs eval for hot reload and a websocket, so those are allowed in development only.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'sha256-WEWnGE0+xWiUblIxCYofy9Fb9nx9LzwKW5aEG54l9Ss='${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
