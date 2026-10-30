import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Konsultasi gratis dari kota mana pun di Indonesia";

export default function Image() {
  return ogImage({ kicker: "Kontak", title: "Konsultasi gratis dari kota mana pun di Indonesia" });
}
