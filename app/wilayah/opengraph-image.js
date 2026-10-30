import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Melayani 514 kabupaten/kota di 38 provinsi";

export default function Image() {
  return ogImage({ kicker: "Wilayah", title: "Melayani 514 kabupaten/kota di 38 provinsi" });
}
