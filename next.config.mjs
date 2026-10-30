import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

const isDev = process.env.NODE_ENV !== "production";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

// CSP statis (tanpa nonce) supaya halaman tetap bisa di-cache statis.
// 'unsafe-inline' untuk script masih dibutuhkan oleh hydration Next.js,
// tapi sumber script eksternal tetap dibatasi ketat.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${gaId ? " https://www.googletagmanager.com" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google.com https://*.gstatic.com https://*.googleapis.com",
  "font-src 'self'",
  `connect-src 'self'${gaId ? " https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com" : ""}${isDev ? " ws:" : ""}`,
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // 1.100+ halaman & gambar OG dibuat paralel; batas 60 dtk bawaan memicu percobaan ulang yang tidak perlu
  staticPageGenerationTimeout: 180,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/wilayah/cari.json", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
  async redirects() {
    // Beberapa tombol lama mengarah ke /contact (404)
    return [{ source: "/contact", destination: "/contacts", permanent: true }];
  },
};

export default nextConfig;
