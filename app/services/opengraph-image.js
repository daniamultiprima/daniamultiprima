import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "24 layanan IT: website, aplikasi, AI, SIMRS & SPBE";

export default function Image() {
  return ogImage({ kicker: "Layanan", title: "24 layanan IT: website, aplikasi, AI, SIMRS & SPBE" });
}
