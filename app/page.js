import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "./ui/Hero";
import JsonLd from "./ui/JsonLd";
import ChatMock from "./ui/ChatMock";
import PixelIcon from "./ui/PixelIcon";
import IndoMap from "./ui/IndoMap";
import CityFinder from "./ui/CityFinder";
import Journey from "./ui/Journey";
import { Reveal, RevealGroup, RevealItem } from "./ui/Motion";
import { CaseGrid, CheckList, Credentials, CTA, FAQ, Kicker, LogoWall, PixelEdge, Section, SectionHead, ServiceShowcase, Stars, Stats } from "./ui/blocks";
import { HOME_FAQ, PROJECTS, SECTORS } from "./lib/content";
import { NATIONAL_MAP, POPULAR, TOTAL_KAB, mapPins, mapProvinces } from "./lib/regions";
import { POSTS } from "./artikel/posts";
import { SITE, faqLd, pageMeta } from "./lib/site";

export const metadata = pageMeta({
  title: { absolute: "Jasa Pembuatan Website, Aplikasi & Konsultan IT Indonesia | DMP" },
  ogTitle: "Jasa Pembuatan Website, Aplikasi & Konsultan IT untuk Seluruh Indonesia",
  description:
    "Software house & konsultan IT sejak 2017: jasa pembuatan website, aplikasi, chatbot AI, SIMRS, dan SPBE untuk 514 kabupaten/kota di Indonesia.",
  path: "/",
});

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  inLanguage: "id-ID",
  publisher: { "@id": `${SITE.url}/#organization` },
};

const STEPS = [
  { t: "Konsultasi gratis", d: "Ceritakan masalahnya. Kami dengarkan dulu, tidak langsung jualan.", time: "hari ini" },
  { t: "Proposal jelas", d: "Fitur, jadwal, dan biaya tertulis. Tanpa istilah membingungkan.", time: "3–7 hari" },
  { t: "Dikerjakan bertahap", d: "Ada demo rutin, jadi Anda bisa mencoba dan memberi masukan.", time: "per sprint" },
  { t: "Rilis & didampingi", d: "Tim Anda dilatih, dan kami tetap siap membantu setelahnya.", time: "seterusnya" },
];

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(1, 4);
  const jare = PROJECTS.find((p) => p.id === "jare-ai");
  return (
    <>
      <JsonLd data={[websiteLd, faqLd(HOME_FAQ)]} />
      <Hero />
      <LogoWall />

      <Section id="layanan" dots>
        <SectionHead
          kicker="Yang kami kerjakan"
          title="Satu tim untuk website, aplikasi, AI, sampai server"
          lead="Pilih yang paling dekat dengan kebutuhan Anda. Setiap layanan punya halaman sendiri berisi contoh, proses, dan tanya jawab."
          action={
            <Link href="/services" className="btn btn-light btn-sm shrink-0 self-start md:self-auto">
              Semua 24 layanan
            </Link>
          }
        />
        <div className="mt-14">
          <ServiceShowcase />
        </div>
      </Section>

      <Section id="proyek" tone="white">
        <SectionHead
          kicker="Hasil kerja"
          title="Sistem yang sudah dipakai setiap hari"
          action={
            <Link href="/portfolio" className="btn btn-light btn-sm shrink-0 self-start md:self-auto">
              Lihat 27 proyek
            </Link>
          }
        />
        <Reveal className="px-box px-drop mt-14 grid lg:grid-cols-2" style={{ "--bg": "#DCE8FF", "--sh": "#1E3A8A" }}>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-800">Studi kasus · {jare.client}</p>
            <h3 className="t-h2 mt-4 !text-[33px]">Chatbot WhatsApp AI yang menjawab warga 24 jam</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
              Warga bertanya lewat WhatsApp seperti biasa. Jare-AI mencari jawabannya di data resmi kementerian, lalu membalas dengan bahasa yang mudah
              dipahami. Pertanyaan yang tidak bisa dijawab diteruskan ke petugas.
            </p>
            <div className="mt-6">
              <CheckList cols={1} items={["Gemini + RAG: jawaban dari dokumen resmi", "Terhubung WhatsApp Business API resmi", "Melayani di luar jam kerja"]} />
            </div>
            <Link href="/services/konsultan-ai" className="mt-8 inline-flex w-fit items-center gap-1.5 text-[15px] font-bold text-brand-800 hover:underline">
              Pelajari layanan konsultan AI <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
          <div className="flex items-center justify-center border-t-[3px] border-ink bg-brand-200 bg-pixel-dots p-8 md:p-12 lg:border-l-[3px] lg:border-t-0">
            <ChatMock />
          </div>
        </Reveal>
        <div className="mt-12">
          <CaseGrid projects={featured} />
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink">
        <PixelEdge color="#FFFFFF" flip />
        <Stars />
        <div className="container-site relative py-20 md:py-24">
          <Reveal className="max-w-2xl">
            <Kicker dark>Sejak 2017</Kicker>
            <h2 className="t-h2 mt-4 !text-white">Dipercaya instansi dan bisnis dari Sabang sampai Merauke.</h2>
          </Reveal>
          <div className="mt-14">
            <Stats dark />
          </div>
        </div>
        <PixelEdge color="#F4F0E6" />
      </section>

      <Section id="sektor">
        <SectionHead kicker="Untuk siapa" title="Kami paham aturan main tiap sektor" lead="Sistem pemerintah, rumah sakit, dan kampus punya regulasinya sendiri. Kami sudah terbiasa dengan semuanya." />
        <RevealGroup className="mt-14 grid gap-8 lg:grid-cols-2">
          {SECTORS.map((s) => (
            <RevealItem key={s.id} className="h-full">
              <Link href={`/services/${s.slug}`} className="px-box px-drop px-lift group grid h-full gap-6 p-7 sm:grid-cols-2 md:p-8">
                <div className="flex flex-col">
                  <span className="grid h-14 w-14 place-items-center bg-ink text-white transition-colors group-hover:bg-brand-600">
                    <PixelIcon name={s.icon} size={48} className="group-hover:animate-hop" />
                  </span>
                  <p className="mt-5 font-pixel text-[11px] uppercase tracking-wider text-brand-700">{s.tagline}</p>
                  <h3 className="t-h3 mt-1">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{s.desc}</p>
                  <span className="mt-5 text-[14px] font-bold text-brand-700">Lihat solusi →</span>
                </div>
                <ul className="space-y-3 border-t-2 border-dashed border-line pt-5 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:pt-0">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] leading-snug text-ink-700">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-brand-600 text-white">
                        <PixelIcon name="check" size={24} className="scale-[0.65]" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="cara-kerja" tone="blue">
        <SectionHead kicker="Cara kerja" title="Jelas dari awal sampai sistemnya jalan" lead="Scroll pelan-pelan, robot kami akan menemani Anda melewati setiap tahap." />
        <div className="mt-12">
          <Journey steps={STEPS} />
        </div>
      </Section>

      <Section id="wilayah" tone="white">
        <SectionHead kicker="Wilayah layanan" title={`Melayani ${TOTAL_KAB} kabupaten/kota di 38 provinsi`} lead="Arahkan kursor ke peta untuk melihat provinsi, atau cari kota Anda di bawah. Setiap daerah punya halaman sendiri." />
        <Reveal className="mt-12">
          <div className="px-box p-4 md:p-8" style={{ "--bg": "#F4F0E6" }}>
            <IndoMap map={NATIONAL_MAP} provinces={mapProvinces()} pins={mapPins(POPULAR.slice(0, 8))} />
          </div>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <CityFinder popular={POPULAR.slice(0, 10).map((k) => ({ label: k.nama, href: k.href }))} />
        </div>
      </Section>

      <Section id="legalitas" dots>
        <SectionHead kicker="Legalitas" title="Resmi, terdaftar, dan bisa dicek" lead="Penting terutama untuk instansi: pengadaan bisa lewat E-Katalog, dan data dikelola sesuai aturan." />
        <div className="mt-14">
          <Credentials />
        </div>
      </Section>

      <Section id="artikel" tone="white">
        <SectionHead
          kicker="Panduan"
          title="Bacaan sebelum memulai proyek"
          action={
            <Link href="/artikel" className="btn btn-light btn-sm shrink-0 self-start md:self-auto">
              Semua artikel
            </Link>
          }
        />
        <RevealGroup className="mt-14 grid gap-8 md:grid-cols-3">
          {POSTS.slice(0, 3).map((a) => (
            <RevealItem key={a.slug} className="h-full">
              <Link href={`/artikel/${a.slug}`} className="px-box px-drop px-lift group flex h-full flex-col p-6">
                <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-700">
                  {a.category} · {a.read} menit
                </p>
                <h3 className="mt-3 text-[19px] font-bold leading-snug text-ink group-hover:text-brand-700">{a.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{a.description}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="faq" narrow dots>
        <SectionHead kicker="Tanya jawab" title="Pertanyaan yang sering muncul" />
        <div className="mt-10">
          <FAQ items={HOME_FAQ} />
        </div>
      </Section>

      <CTA />
    </>
  );
}
