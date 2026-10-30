import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Software house & konsultan IT sejak 2017";

export default function Image() {
  return ogImage({ kicker: "Tentang kami", title: "Software house & konsultan IT sejak 2017" });
}
