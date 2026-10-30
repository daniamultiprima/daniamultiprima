import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";
import { getProvince } from "@/lib/regions";
import { PROVINCES } from "@/lib/regions";
export const generateStaticParams = () => PROVINCES.map((p) => ({ prov: p.slug }));

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Layanan IT per provinsi";

export default async function Image({ params }) {
  const { prov } = await params;
  const p = getProvince(prov);
  return ogImage({ kicker: `${p.pulau} · ${p.kabs.length} kab/kota`, title: `Website, aplikasi & konsultan IT di ${p.nama}` });
}
