import { SITE } from "./lib/site";
import { SERVICE_PAGES } from "./lib/service-pages";
import { MEDAN_PAGES } from "./lib/medan-pages";
import { KABS, PROVINCES } from "./lib/regions";
import { POSTS } from "./artikel/posts";

// Tanggal pembaruan konten (bukan new Date(), agar Google tidak mengira semua halaman berubah tiap crawl).
const UPDATED = new Date("2026-10-30");

export default function sitemap() {
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    ...SERVICE_PAGES.map((p) => ({ path: `/services/${p.slug}`, priority: 0.9, changeFrequency: "monthly" })),
    ...MEDAN_PAGES.map((p) => ({ path: `/${p.slug}`, priority: 0.85, changeFrequency: "monthly" })),
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/solutions", priority: 0.7, changeFrequency: "monthly" },
    { path: "/wilayah", priority: 0.8, changeFrequency: "monthly" },
    ...PROVINCES.map((p) => ({ path: `/wilayah/${p.slug}`, priority: 0.7, changeFrequency: "monthly" })),
    ...KABS.map((k) => ({ path: k.href, priority: 0.6, changeFrequency: "monthly" })),
    { path: "/artikel", priority: 0.6, changeFrequency: "weekly" },
    ...POSTS.map((p) => ({ path: `/artikel/${p.slug}`, priority: 0.6, changeFrequency: "yearly", lastModified: new Date(p.date) })),
    { path: "/about", priority: 0.5, changeFrequency: "yearly" },
    { path: "/contacts", priority: 0.7, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({ url: `${SITE.url}${p.path}`, lastModified: p.lastModified || UPDATED, changeFrequency: p.changeFrequency, priority: p.priority }));
}
