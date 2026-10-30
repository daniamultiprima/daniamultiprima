import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Sistem yang sudah kami bangun dan masih dipakai";

export default function Image() {
  return ogImage({ kicker: "Portofolio", title: "Sistem yang sudah kami bangun dan masih dipakai" });
}
