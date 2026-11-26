// Writes public/robots.txt and public/sitemap.xml from NEXT_PUBLIC_SITE_URL.
// Runs before every build (see the "prebuild" script in package.json).
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.venkateshm.me").replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);

writeFileSync(join(root, "public", "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

writeFileSync(
  join(root, "public", "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/resume</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`,
);

console.log(`SEO files written for ${siteUrl}`);
