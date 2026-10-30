import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/ui/JsonLd";
import PixelIcon from "@/ui/PixelIcon";
import { KabShape, ProvinceMap } from "@/ui/maps";
import { Reveal, RevealGroup, RevealItem } from "@/ui/Motion";
import { CaseGrid, CTA, CtaButtons, FAQ, PageHero, RelatedPosts, Section, SectionHead } from "@/ui/blocks";
import { POSTS } from "../../../artikel/posts";
import { ISLAND_INTRO, kabFacts, kabIntro, kabSolutions } from "../../region-copy";
import { PROJECTS } from "@/lib/content";
import { MEDAN_PAGES } from "@/lib/medan-pages";
import { KABS, TZ_NOTE, fmtNum, getKab, profile, titleName } from "@/lib/regions";
import { SITE, faqLd, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return KABS.map((k) => ({ prov: k.province.slug, kota: k.slug }));
}

export async function generateMetadata({ params }) {
  const { prov, kota } = await params;
  const k = getKab(prov, kota);
  if (!k) return {};
  const isMedan = k.kode === "12.71";
  const name = titleName(k);
  const long = `Jasa Pembuatan Website & Konsultan IT ${name}`;
  const desc = `Jasa pembuatan website, aplikasi, dan konsultan IT di ${k.label}, ${k.province.nama}. Untuk pemda, sekolah, RS, dan UMKM. Konsultasi gratis.`;
  return pageMeta({
    title: isMedan ? "Layanan IT & Software House di Kota Medan" : long.length > 54 ? `Jasa Pembuatan Website ${name}` : long,
    description: desc.length > 160 ? `Jasa pembuatan website, aplikasi, dan konsultan IT di ${k.label}. Untuk pemda, sekolah, RS, dan UMKM. Konsultasi gratis.` : desc,
    path: k.href,
  });
}

export default async function KabPage({ params }) {
  const { prov, kota } = await params;
  const k = getKab(prov, kota);
  if (!k) notFound();

  const { density } = profile(k);
  const intro = kabIntro(k);
  const solutions = kabSolutions(k);
  const isMedan = k.kode === "12.71";
  const projects = k.projects.length ? k.projects : k.province.projects.length ? k.province.projects : PROJECTS.filter((x) => ["jare-ai", "simrs-amri", "dashboard-sergai"].includes(x.id));
  const projectNote = k.projects.length ? `Proyek di ${k.label}` : k.province.projects.length ? `Proyek di ${k.province.nama}` : "Contoh proyek";

  const faqs = [
    { q: `Apakah DMP melayani pembuatan website dan aplikasi di ${k.label}?`, a: `Ya. Klien di ${k.label} kami layani lewat rapat online, demo progres rutin, dan kunjungan ke lokasi saat implementasi atau pelatihan bila diperlukan.` },
    { q: `Apakah Pemerintah ${k.label} bisa membeli lewat E-Katalog?`, a: "Bisa. PT Dania Multi Prima terdaftar sebagai penyedia di E-Katalog LKPP (INAPROC), sehingga pengadaan dapat dilakukan melalui jalur resmi." },
    { q: `Bagaimana jadwal kerja dengan klien di ${k.nama}?`, a: `${k.label} berada di zona ${k.tz}. ${TZ_NOTE[k.tz]}` },
    { q: "Berapa lama dan berapa biayanya?", a: "Website sederhana umumnya 2–4 minggu, aplikasi atau sistem yang lebih besar 2–6 bulan. Biaya mengikuti fitur dan skala, dan dijelaskan tertulis setelah konsultasi gratis." },
  ];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Jasa pembuatan website, aplikasi & konsultan IT di ${k.label}`,
    url: `${SITE.url}${k.href}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: {
      "@type": k.tipe === "Kota" ? "City" : "AdministrativeArea",
      name: k.label,
      containedInPlace: { "@type": "AdministrativeArea", name: k.province.nama },
      geo: { "@type": "GeoCoordinates", latitude: +k.lat.toFixed(4), longitude: +k.lng.toFixed(4) },
    },
    serviceType: ["Pembuatan website", "Pembuatan aplikasi", "Konsultan IT", "Konsultan AI"],
  };

  return (
    <>
      <JsonLd data={[ld, faqLd(faqs)]} />
      <PageHero
        crumbs={[
          { name: "Wilayah", href: "/wilayah" },
          { name: k.province.nama, href: `/wilayah/${k.province.slug}` },
          { name: k.label, href: k.href },
        ]}
        kicker={`${k.province.nama} · ${k.tz}`}
        title={`Jasa pembuatan website, aplikasi & konsultan IT di ${k.label}`}
        lead={`Untuk pemerintah daerah, sekolah, rumah sakit, dan pelaku usaha di ${k.nama}. Konsultasi gratis, dikerjakan bertahap, dan didampingi sampai sistemnya dipakai.`}
        visual={
          <div className="px-box px-drop">
            <div className="flex items-center justify-between gap-3 bg-ink px-3 py-2 font-pixel text-[11px] uppercase tracking-wider text-white">
              <span className="min-w-0 truncate">{k.label}</span>
              <span className="hidden shrink-0 text-brand-300 sm:inline">
                {k.lat.toFixed(2)}, {k.lng.toFixed(2)}
              </span>
            </div>
            <div className="grid grid-cols-5 bg-brand-50 bg-pixel-dots">
              <div className="col-span-3 grid place-items-center p-5">
                {k.map.bits.length > 2 ? <KabShape kab={k} /> : <PixelIcon name="mapPinned" size={96} className="text-brand-600" />}
              </div>
              <div className="col-span-2 border-l-[3px] border-ink bg-white p-3">
                <p className="font-pixel text-[11px] uppercase text-ink-500">Di {k.province.nama}</p>
                <div className="mt-2">
                  <ProvinceMap prov={k.province} highlight={k.kode} />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <CtaButtons message={`Halo DMP, saya dari ${k.label} ingin konsultasi.`} />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 text-[17px] leading-relaxed text-ink-600 lg:col-span-7">
            <h2 className="t-h2">Kebutuhan digital di {k.label}</h2>
            {intro.map((t) => (
              <p key={t.slice(0, 30)}>{t}</p>
            ))}
            <p>{kabFacts(k)}</p>
            <p>{ISLAND_INTRO[k.pulau]}</p>
            {isMedan && (
              <div className="px-box p-5" style={{ "--bg": "#DCE8FF" }}>
                <p className="font-bold text-ink">Kantor pusat kami ada di Medan. Lihat layanan khusus untuk klien di Medan:</p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {MEDAN_PAGES.map((m) => (
                    <li key={m.slug}>
                      <Link href={`/${m.slug}`} className="chip">
                        {m.h1.replace(", Sejak 2017", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <dl className="px-box grid grid-cols-2">
              {[
                ["Jenis", k.tipe],
                ["Zona waktu", k.tz],
                ["Penduduk", fmtNum(k.penduduk)],
                ["Luas (km²)", fmtNum(k.luas)],
                ["Kepadatan /km²", fmtNum(density)],
                [k.tipe === "Kabupaten" ? "Ibu kota" : "Ketinggian", k.tipe === "Kabupaten" ? k.ibukota || "–" : `${fmtNum(k.elv)} m`],
              ].map(([label, v], i) => (
                <div key={label} className={`p-4 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 4 ? "border-b-2" : ""} border-line`}>
                  <dt className="text-[13px] text-ink-500">{label}</dt>
                  <dd className="mt-1 break-words font-pixel text-[18px] leading-tight text-ink sm:text-[22px]">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[12px] text-ink-400">Data wilayah: Kepmendagri No 300.2.2-2138 Tahun 2025.</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead kicker="Rekomendasi" title={`Solusi yang paling sering dibutuhkan di daerah seperti ${k.nama}`} />
        <RevealGroup className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-8">
          {solutions.map((s) => (
            <RevealItem key={s.t} className="h-full">
              <Link href={s.href} className="px-box px-drop px-lift group flex h-full gap-4 p-5 md:flex-col md:gap-0 md:p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-white group-hover:bg-brand-600 md:h-14 md:w-14">
                  <PixelIcon name={s.icon} size={48} className="max-md:scale-75" />
                </span>
                <div className="flex flex-1 flex-col">
                  <h3 className="t-h3 max-md:!text-[18px] md:mt-5">{s.t}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-500">{s.d}</p>
                  <span className="mt-3 text-[14px] font-bold text-brand-700 md:mt-4">Lihat layanan →</span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section dots>
        <SectionHead kicker={projectNote} title={k.projects.length ? "Sudah kami kerjakan di sini" : "Contoh pekerjaan kami"} />
        <div className="mt-12">
          <CaseGrid projects={projects.slice(0, 3)} />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="t-h3">Daerah terdekat dari {k.nama}</h2>
            <ul className="mt-5 space-y-3">
              {k.nearby.map((n) => (
                <li key={n.kode}>
                  <Link href={n.href} className="px-box px-lift flex items-center justify-between p-3.5">
                    <span className="font-semibold text-ink">{n.label}</span>
                    <span className="font-pixel text-[11px] text-ink-500">± {n.km} KM</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="t-h3">Di {k.province.nama}</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-600">
              {k.province.nama} terdiri dari {k.province.kabs.length} kabupaten/kota. Lihat peta dan daftar lengkapnya, atau langsung hubungi kami bila
              daerah Anda belum tercantum di halaman ini.
            </p>
            <Link href={`/wilayah/${k.province.slug}`} className="btn btn-light mt-6">
              Semua daerah di {k.province.nama} →
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section narrow dots>
        <SectionHead kicker="Tanya jawab" title={`Seputar layanan di ${k.nama}`} />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>
      <RelatedPosts posts={[...POSTS.filter((p) => solutions.some((s) => s.href === p.related)), ...POSTS].filter((p, i, a) => a.indexOf(p) === i).slice(0, 3)} />
      <CTA message={`Halo DMP, saya dari ${k.label} ingin konsultasi.`} />
    </>
  );
}
