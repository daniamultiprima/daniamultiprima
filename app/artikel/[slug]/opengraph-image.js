import { OG_SIZE, OG_TYPE, ogImage } from "@/lib/og";
import { getPost } from "../posts";
import { POSTS } from "../posts";
export const generateStaticParams = () => POSTS.map((p) => ({ slug: p.slug }));

export const size = OG_SIZE;
export const contentType = OG_TYPE;
export const alt = "Artikel PT Dania Multi Prima";

export default async function Image({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  return ogImage({ kicker: `Artikel · ${p.category}`, title: p.title });
}
