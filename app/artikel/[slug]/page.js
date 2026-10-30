import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import JsonLd from "@/ui/JsonLd";
import { Breadcrumbs, CTA } from "@/ui/blocks";
import { POSTS, getPost } from "../posts";
import { SITE, pageMeta, waLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const meta = pageMeta({ title: post.seoTitle || post.title, description: post.description, path: `/artikel/${slug}` });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date } };
}

const fmt = (d) => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { Body } = post;
  const others = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "id-ID",
    mainEntityOfPage: `${SITE.url}/artikel/${slug}`,
    image: `${SITE.url}/opengraph-image.jpg`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      <JsonLd data={ld} />
      <article className="bg-paper bg-pixel-dots">
        <header className="container-site max-w-3xl pb-10 pt-8 md:pt-10">
          <Breadcrumbs items={[{ name: "Artikel", href: "/artikel" }, { name: post.category, href: `/artikel/${slug}` }]} />
          <h1 className="t-h2 mt-10">{post.title}</h1>
          <p className="lead mt-5">{post.description}</p>
          <p className="mt-6 font-pixel text-[11px] uppercase tracking-wider text-ink-500">
            Tim PT Dania Multi Prima · <time dateTime={post.date}>{fmt(post.date)}</time> · {post.read} menit baca
          </p>
        </header>
        <div className="container-site max-w-3xl pb-20">
          <div className="px-box p-6 md:p-10">
            <div className="prose-px">
              <Body />
            </div>
          </div>

          <aside className="px-box px-drop mt-12 p-7 md:p-9" style={{ "--bg": "#0F1A33", "--sh": "#2563EB" }}>
            <p className="t-h3 !text-white">Punya pertanyaan soal ini?</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-300">Konsultasi pertama gratis. Ceritakan kebutuhan Anda lewat WhatsApp.</p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a href={waLink(`Halo DMP, saya baru membaca artikel "${post.title}" dan ingin bertanya.`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ "--ink": "#000" }}>
                <MessageCircle size={18} strokeWidth={2.5} /> Tanya via WhatsApp
              </a>
              <Link href={post.related} className="btn btn-light" style={{ "--ink": "#000" }}>
                Lihat layanan terkait →
              </Link>
            </div>
          </aside>

          <nav aria-label="Artikel lainnya" className="mt-14">
            <h2 className="font-pixel text-[11px] uppercase tracking-wider text-ink-500">Artikel lainnya</h2>
            <ul className="mt-4 space-y-4">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/artikel/${o.slug}`} className="px-box px-lift block p-4 font-bold text-ink hover:text-brand-700">
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
      <CTA />
    </>
  );
}
