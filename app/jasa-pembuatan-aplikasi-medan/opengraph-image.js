import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";
import { getMedanPage } from "@/lib/medan-pages";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Layanan PT Dania Multi Prima di Medan";

export default async function Image() {
  const p = getMedanPage("jasa-pembuatan-aplikasi-medan");
  return ogImage({ kicker: "Kantor pusat · Medan", title: p.h1 });
}
