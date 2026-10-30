import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/ui/JsonLd";
import PixelIcon from "@/ui/PixelIcon";
import { ProvinceMap } from "@/ui/maps";
import { Reveal, RevealGroup, RevealItem } from "@/ui/Motion";
import { CaseGrid, CTA, CtaButtons, FAQ, PageHero, RelatedPosts, Section, SectionHead } from "@/ui/blocks";
import { POSTS } from "../../artikel/posts";
import { ISLAND_INTRO } from "../region-copy";
import { PROJECTS } from "@/lib/content";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { PROVINCES, TZ_NOTE, fmtNum, getProvince } from "@/lib/regions";
import { SITE, faqLd, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROVINCES.map((p) => ({ prov: p.slug }));
}

export async function generateMetadata({ params }) {
  const { prov: slug } = await params;
  const p = getProvince(slug);
  if (!p) return {};
  const long = `Jasa Pembuatan Website & Konsultan IT ${p.nama}`;
  return pageMeta({
    title: long.length > 54 ? `Jasa Pembuatan Website ${p.nama}` : long,
    description: `Jasa pembuatan website, aplikasi, chatbot AI, dan konsultan IT untuk ${p.kabs.length} kabupaten/kota di ${p.nama}. Konsultasi gratis.`,
    path: `/wilayah/${p.slug}`,
  });
}

export default async function ProvincePage({ params }) {
  const { prov: slug } = await params;
  const p = getProvince(slug);
  if (!p) notFound();

  const projects = p.projects.length ? p.projects : PROJECTS.filter((x) => ["jare-ai", "telkom-pm", "simrs-amri"].includes(x.id));
  const neighbors = PROVINCES.filter((x) => x.pulau === p.pulau && x.slug !== p.slug);
  const biggest = [...p.kabs].sort((a, b) => b.penduduk - a.penduduk).slice(0, 3);

  const faqs = [
    { q: `Apakah DMP melayani seluruh kabupaten/kota di ${p.nama}?`, a: `Ya, termasuk ${p.kabs.length} kabupaten/kota di ${p.nama}. Sebagian besar pekerjaan berjalan online, dan tim kami datang ke lokasi saat implementasi atau pelatihan.` },
    { q: `Apakah pemerintah daerah di ${p.nama} bisa memesan lewat E-Katalog?`, a: "Bisa. PT Dania Multi Prima terdaftar sebagai penyedia di E-Katalog LKPP (INAPROC), sehingga pengadaan bisa melalui jalur resmi." },
    { q: "Bagaimana jadwal rapat dengan perbedaan zona waktu?", a: TZ_NOTE[p.tz] },
    { q: "Berapa biaya pembuatan website atau aplikasi?", a: "Tergantung fitur dan skalanya. Setelah konsultasi gratis, Anda menerima proposal tertulis berisi rincian fitur, jadwal, dan biaya." },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Jasa pembuatan website, aplikasi & konsultan IT di ${p.nama}`,
    url: `${SITE.url}/wilayah/${p.slug}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: p.nama },
    serviceType: ["Pembuatan website", "Pembuatan aplikasi", "Konsultan IT", "Konsultan AI"],
  };

  return (
    <>
      <JsonLd data={[ld, faqLd(faqs)]} />
      <PageHero
        crumbs={[{ name: "Wilayah", href: "/wilayah" }, { name: p.nama, href: `/wilayah/${p.slug}` }]}
        kicker={`${p.pulau} · ${p.kabs.length} kabupaten/kota`}
        title={`Jasa pembuatan website, aplikasi & konsultan IT di ${p.nama}`}
        lead={`Untuk pemerintah daerah, rumah sakit, sekolah, dan pelaku usaha di ${p.kabs.length} kabupaten/kota ${p.nama}, dari ${biggest.map((k) => k.nama).join(", ")} sampai daerah terjauh.`}
        visual={
          <div className="px-box px-drop">
            <div className="bg-ink px-3 py-2 font-pixel text-[11px] uppercase tracking-wider text-white">peta {p.nama} — klik daerah</div>
            <div className="bg-brand-50 bg-pixel-dots p-4">
              <ProvinceMap prov={p} />
            </div>
          </div>
        }
      >
        <CtaButtons message={`Halo DMP, saya dari ${p.nama} ingin konsultasi.`} />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 text-[17px] leading-relaxed text-ink-600 lg:col-span-7">
            <h2 className="t-h2">Bekerja dengan klien di {p.nama}</h2>
            <p>{ISLAND_INTRO[p.pulau]}</p>
            <p>
              {p.nama} berpenduduk sekitar {fmtNum(p.penduduk)} jiwa dengan luas {fmtNum(p.luas)} km², terbagi atas {p.nKab} kabupaten dan {p.nKota} kota. Ibu
              kotanya {p.ibukota}. Setiap daerah punya kebutuhan berbeda, jadi kami selalu mulai dari obrolan untuk memahami kondisi setempat.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <dl className="px-box grid grid-cols-2">
              {[
                ["Ibu kota", p.ibukota],
                ["Zona waktu", p.tz],
                ["Penduduk", fmtNum(p.penduduk)],
                ["Luas (km²)", fmtNum(p.luas)],
                ["Kabupaten", p.nKab],
                ["Kota", p.nKota],
              ].map(([k, v], i) => (
                <div key={k} className={`p-4 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 4 ? "border-b-2" : ""} border-line`}>
                  <dt className="text-[13px] text-ink-500">{k}</dt>
                  <dd className="mt-1 font-pixel text-[18px] leading-tight text-ink sm:text-[22px]">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead kicker="Cakupan" title={`${p.kabs.length} kabupaten & kota di ${p.nama}`} lead="Pilih daerah Anda untuk melihat layanan, data wilayah, dan daerah terdekat." />
        <RevealGroup className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[...p.kabs]
            .sort((a, b) => (a.tipe === b.tipe ? a.nama.localeCompare(b.nama) : a.tipe === "Kota" ? -1 : 1))
            .map((k) => (
              <RevealItem key={k.kode}>
                <Link href={k.href} className="px-box px-lift group flex items-center justify-between gap-3 px-4 py-3 sm:p-4">
                  <span>
                    <span className="block font-bold text-ink group-hover:text-brand-700">{k.label}</span>
                    <span className="block text-[13px] text-ink-500">{fmtNum(k.penduduk)} jiwa</span>
                  </span>
                  <PixelIcon name="arrow" size={24} className="shrink-0 text-ink-400 group-hover:text-brand-700" />
                </Link>
              </RevealItem>
            ))}
        </RevealGroup>
      </Section>

      <Section dots>
        <SectionHead kicker="Layanan" title={`Yang bisa kami bantu di ${p.nama}`} />
        <RevealGroup className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_PAGES.map((s) => (
            <RevealItem key={s.slug} className="h-full">
              <Link href={`/services/${s.slug}`} className="px-box px-lift group flex h-full gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-white group-hover:bg-brand-600">
                  <PixelIcon name={s.icon} size={24} />
                </span>
                <span>
                  <span className="block font-bold text-ink group-hover:text-brand-700">{s.name}</span>
                  <span className="mt-1 block text-[14px] leading-relaxed text-ink-500">{s.lead}</span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="white">
        <SectionHead kicker={p.projects.length ? `Proyek di ${p.nama}` : "Contoh proyek"} title={p.projects.length ? "Sudah kami kerjakan di sini" : "Contoh pekerjaan kami"} />
        <div className="mt-12">
          <CaseGrid projects={projects.slice(0, 6)} />
        </div>
      </Section>

      <Section narrow dots>
        <SectionHead kicker="Tanya jawab" title={`Seputar layanan di ${p.nama}`} />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
        {neighbors.length > 0 && (
          <div className="mt-14">
            <h2 className="text-[15px] font-bold text-ink">Provinsi lain di {p.pulau}</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {neighbors.map((n) => (
                <li key={n.slug}>
                  <Link href={`/wilayah/${n.slug}`} className="chip">
                    {n.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>
      <RelatedPosts posts={[POSTS.find((x) => x.slug === "apa-itu-spbe"), POSTS.find((x) => x.slug === "website-atau-aplikasi"), POSTS.find((x) => x.slug === "cara-memilih-software-house")].filter(Boolean)} />
      <CTA message={`Halo DMP, saya dari ${p.nama} ingin konsultasi.`} />
    </>
  );
}
