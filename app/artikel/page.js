import Link from "next/link";
import { RevealGroup, RevealItem } from "@/ui/Motion";
import { CTA, PageHero, Section } from "@/ui/blocks";
import { POSTS } from "./posts";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Artikel & Panduan Website, Aplikasi, dan AI",
  description: "Panduan praktis dari tim DMP: biaya pembuatan website, cara memilih software house, rekam medis elektronik, dan chatbot WhatsApp AI.",
  path: "/artikel",
});

const fmt = (d) => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

export default function ArtikelPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Artikel", href: "/artikel" }]}
        title="Artikel & panduan teknologi"
        lead="Panduan praktis seputar pembuatan website dan aplikasi, kecerdasan buatan, keamanan data, sistem rumah sakit, dan digitalisasi pemerintahan. Ditulis tim DMP dari pengalaman mengerjakan proyek nyata sejak 2017."
      >
        <ul className="mt-8 flex flex-wrap gap-3">
          {[...new Set(POSTS.map((p) => p.category))].map((c) => (
            <li key={c} className="chip">
              {c} · {POSTS.filter((p) => p.category === c).length}
            </li>
          ))}
        </ul>
      </PageHero>
      <Section dots>
        <RevealGroup className="grid gap-8 md:grid-cols-2">
          {POSTS.map((a) => (
            <RevealItem key={a.slug} className="h-full">
              <Link href={`/artikel/${a.slug}`} className="px-box px-drop px-lift group flex h-full flex-col p-7">
                <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-700">
                  {a.category} · {a.read} menit baca
                </p>
                <h2 className="mt-3 text-[21px] font-bold leading-snug text-ink group-hover:text-brand-700">{a.title}</h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{a.description}</p>
                <p className="mt-5 font-pixel text-[11px] text-ink-400">{fmt(a.date)}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTA />
    </>
  );
}
