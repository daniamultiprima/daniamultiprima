import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";
import { getKab } from "@/lib/regions";
import { KABS } from "@/lib/regions";
export const generateStaticParams = () => KABS.map((k) => ({ prov: k.province.slug, kota: k.slug }));

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Layanan IT per kabupaten/kota";

export default async function Image({ params }) {
  const { prov, kota } = await params;
  const k = getKab(prov, kota);
  return ogImage({ kicker: `${k.province.nama} · ${k.tz}`, title: `Website, aplikasi & konsultan IT di ${k.label}` });
}
