import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Panduan teknologi untuk bisnis & instansi";

export default function Image() {
  return ogImage({ kicker: "Artikel", title: "Panduan teknologi untuk bisnis & instansi" });
}
