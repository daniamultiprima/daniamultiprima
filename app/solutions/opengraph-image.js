import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Pemerintahan, kesehatan, pendidikan & bisnis";

export default function Image() {
  return ogImage({ kicker: "Solusi per sektor", title: "Pemerintahan, kesehatan, pendidikan & bisnis" });
}
