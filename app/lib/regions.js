import DATA from "./regions-data.json";
import { PROJECTS } from "./content";

// Sumber: kode & nama wilayah Kepmendagri No 300.2.2-2138 Tahun 2025 (dataset cahyadsn/wilayah),
// termasuk ibu kota, koordinat, luas, dan jumlah penduduk.

const PULAU = {
  Sumatera: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21"],
  Jawa: ["31", "32", "33", "34", "35", "36"],
  "Bali & Nusa Tenggara": ["51", "52", "53"],
  Kalimantan: ["61", "62", "63", "64", "65"],
  Sulawesi: ["71", "72", "73", "74", "75", "76"],
  "Maluku & Papua": ["81", "82", "91", "92", "93", "94", "95", "96"],
};
export const ISLANDS = Object.keys(PULAU);
const pulauOf = (kode) => ISLANDS.find((i) => PULAU[i].includes(kode));

const TZ = { 7: "WIB", 8: "WITA", 9: "WIT" };
export const TZ_NOTE = {
  WIB: "Jam kerja tim kami (WIB) sama dengan wilayah ini, jadi jadwal rapat online mudah diatur.",
  WITA: "Selisih satu jam dari WIB. Jam kerja kami setara 10.00–18.00 WITA.",
  WIT: "Selisih dua jam dari WIB. Jam kerja kami setara 11.00–19.00 WIT, dan rapat pagi bisa dijadwalkan khusus.",
};

// Proyek yang benar-benar dikerjakan di kab/kota tertentu
const PROJECT_AT = {
  "12.71": ["usu-pak", "rsgm-usu", "polmed-surat", "simlitabmas", "smp-web", "rs-prima"],
  "12.75": ["emas-binjai", "absensi-binjai", "smk-cbt"],
  "12.07": ["simrs-amri", "bpjs-bridging", "dprd-portal", "dprd-eoffice", "bapenda-ppj"],
  "12.18": ["dashboard-sergai"],
  "12.74": ["spmb-tjb"],
  "12.76": ["nurse-call"],
  "13.06": ["agam-realtime"],
  "31.71": ["jare-ai"],
};

const projectsOf = (ids = []) => ids.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);

export const KABS = DATA.kabs.map((k) => ({
  ...k,
  tz: TZ[k.tz] || "WIB",
  label: `${k.tipe} ${k.nama}`,
  projects: projectsOf(PROJECT_AT[k.kode]),
}));
const KAB_BY_KODE = Object.fromEntries(KABS.map((k) => [k.kode, k]));

export const PROVINCES = DATA.provinces.map((p) => {
  const kabs = KABS.filter((k) => k.prov === p.kode);
  return {
    ...p,
    tz: TZ[p.tz] || "WIB",
    pulau: pulauOf(p.kode),
    kabs,
    projects: kabs.flatMap((k) => k.projects),
  };
});
const PROV_BY_KODE = Object.fromEntries(PROVINCES.map((p) => [p.kode, p]));
for (const k of KABS) {
  k.province = PROV_BY_KODE[k.prov];
  k.href = `/wilayah/${k.province.slug}/${k.slug}`;
  k.pulau = k.province.pulau;
}
for (const k of KABS) k.nearby = k.near.map(([kode, km]) => ({ ...KAB_BY_KODE[kode], km }));

export const NATIONAL_MAP = DATA.national;
export const TOTAL_KAB = KABS.length;
export const getProvince = (slug) => PROVINCES.find((p) => p.slug === slug);
export const getKab = (provSlug, slug) => KABS.find((k) => k.province.slug === provSlug && k.slug === slug);
export const kabByName = (label) => KABS.find((k) => k.label === label);

// Kota-kota besar untuk tautan cepat
export const POPULAR = [
  "31.71", "35.78", "32.73", "12.71", "33.74", "73.71", "16.71", "21.71", "51.71", "34.71", "64.71", "14.71", "61.71", "71.71", "36.71", "18.71",
].map((k) => KAB_BY_KODE[k]).filter(Boolean);

export const fmtNum = (n) => (n == null ? "–" : Math.round(n).toLocaleString("id-ID"));

// Ringkasan karakter wilayah untuk teks yang berbeda di tiap halaman
export function profile(k) {
  const density = k.luas ? k.penduduk / k.luas : 0;
  const size = k.penduduk > 1_000_000 ? "besar" : k.penduduk > 400_000 ? "menengah" : "kecil";
  const urban = density > 1500;
  const remote = ["Maluku & Papua"].includes(k.pulau) || (k.luas > 8000 && density < 30);
  return { density, size, urban, remote };
}

// Data ringan untuk pencari kota (client)
export function finderItems() {
  return [
    ...PROVINCES.map((p) => ({ label: p.nama, sub: `Provinsi · ${p.kabs.length} kab/kota`, href: `/wilayah/${p.slug}` })),
    ...KABS.map((k) => ({ label: k.label, sub: k.province.nama, href: k.href })),
  ];
}

// Data ringan untuk peta nasional (urutan = indeks warna pada peta)
export const mapProvinces = () => PROVINCES.map((p) => ({ slug: p.slug, nama: p.nama, pulau: p.pulau, n: p.kabs.length }));

// --- Fakta pembeda per kab/kota: peringkat di provinsi & jarak ke ibu kota provinsi ---
const haversine = (a, b) => {
  const R = 6371, r = Math.PI / 180;
  const h = Math.sin(((b.lat - a.lat) * r) / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(((b.lng - a.lng) * r) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
for (const p of PROVINCES) {
  const capital = p.kabs.find((k) => k.tipe === "Kota" && k.nama === p.ibukota) || p.kabs.find((k) => k.ibukota === p.ibukota) || p.kabs.find((k) => p.ibukota.includes(k.nama));
  const byPop = [...p.kabs].sort((a, b) => b.penduduk - a.penduduk);
  const byDen = [...p.kabs].sort((a, b) => b.penduduk / b.luas - a.penduduk / a.luas);
  const byArea = [...p.kabs].sort((a, b) => b.luas - a.luas);
  for (const k of p.kabs) {
    k.rankPop = byPop.indexOf(k) + 1;
    k.rankDensity = byDen.indexOf(k) + 1;
    k.rankArea = byArea.indexOf(k) + 1;
    k.isCapital = capital?.kode === k.kode;
    k.capital = capital;
    k.kmToCapital = capital && !k.isCapital ? Math.round(haversine(k, capital)) : 0;
  }
}

// Nama untuk judul: bedakan Kota/Kabupaten yang namanya sama, atau sama dengan nama provinsi
const NAME_COUNT = KABS.reduce((m, k) => ((m[k.nama] = (m[k.nama] || 0) + 1), m), {});
const PROV_NAMES = new Set(PROVINCES.map((p) => p.nama));
export const titleName = (k) => (k.tipe === "Kota" && (NAME_COUNT[k.nama] > 1 || PROV_NAMES.has(k.nama)) ? `Kota ${k.nama}` : k.tipe === "Kabupaten" && (NAME_COUNT[k.nama] > 1 || PROV_NAMES.has(k.nama)) ? `Kabupaten ${k.nama}` : k.nama);

// Pin peta: hanya koordinat (jangan kirim objek kab lengkap ke client)
export const mapPins = (list) => list.map((k) => ({ kode: k.kode, x: k.nat.x, y: k.nat.y }));
