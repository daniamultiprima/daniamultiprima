import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";
import { getServicePage } from "@/lib/service-pages";
import { SERVICE_PAGES } from "@/lib/service-pages";
export const generateStaticParams = () => SERVICE_PAGES.map((p) => ({ slug: p.slug }));

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Layanan PT Dania Multi Prima";

export default async function Image({ params }) {
  const { slug } = await params;
  const p = getServicePage(slug);
  return ogImage({ kicker: `Layanan · ${p.name}`, title: p.h1 });
}
