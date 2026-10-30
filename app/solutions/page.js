import Link from "next/link";
import JsonLd from "@/ui/JsonLd";
import PixelIcon from "@/ui/PixelIcon";
import { Reveal } from "@/ui/Motion";
import { CheckList, CTA, PageHero, Section, Visual } from "@/ui/blocks";
import { SECTORS } from "@/lib/content";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Solusi IT untuk Pemerintah, Rumah Sakit & Kampus",
  description:
    "Solusi IT per sektor: SPBE untuk pemda, SIMRS & RME untuk rumah sakit, SIAKAD untuk kampus, serta ERP & AI untuk bisnis di seluruh Indonesia.",
  path: "/solutions",
});

const VISUAL = { gov: "dashboard", health: "queue", edu: "phone", biz: "browser" };

export default function SolutionsPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solusi IT per sektor",
    itemListElement: SECTORS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Service", name: `${s.title}: ${s.tagline}`, description: s.desc, provider: { "@id": `${SITE.url}/#organization` }, areaServed: "Indonesia" },
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={[{ name: "Solusi", href: "/solutions" }]}
        title="Solusi yang paham cara kerja sektor Anda"
        lead="Pemerintah, rumah sakit, kampus, dan bisnis punya aturan dan kebiasaan kerja yang berbeda. Sistem yang kami bangun menyesuaikan itu."
      >
        <div className="mt-8 max-w-2xl space-y-4 text-[16px] leading-relaxed text-ink-600">
          <p>
            Pemerintah daerah perlu aplikasi yang mendukung arsitektur SPBE dan bisa diadakan lewat E-Katalog. Rumah sakit wajib menjalankan rekam medis
            elektronik yang tersambung ke SATUSEHAT dan BPJS. Kampus mengejar pelaporan akademik yang rapi, sementara bisnis butuh stok, keuangan, dan
            penjualan dalam satu sistem.
          </p>
          <p>Di bawah ini ringkasan solusi per sektor, lengkap dengan fitur yang paling sering dibutuhkan dan contoh tampilannya.</p>
        </div>
      </PageHero>
      {SECTORS.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <Section key={s.id} id={s.id} tone={flip ? "white" : "paper"} dots={!flip}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <span className="grid h-14 w-14 place-items-center bg-ink text-white">
                  <PixelIcon name={s.icon} size={48} />
                </span>
                <p className="mt-6 font-pixel text-[11px] uppercase tracking-wider text-brand-700">{s.tagline}</p>
                <h2 className="t-h2 mt-2">{s.title}</h2>
                <p className="lead mt-4">{s.desc}</p>
                <div className="mt-7">
                  <CheckList items={s.features} cols={1} />
                </div>
                <Link href={`/services/${s.slug}`} className="btn btn-light mt-9">
                  Lihat detail →
                </Link>
              </Reveal>
              <Reveal delay={0.1} className={`px-box grid place-items-center bg-pixel-dots p-5 sm:p-8 md:p-12 ${flip ? "lg:order-1" : ""}`} style={{ "--bg": "#DCE8FF" }}>
                <Visual type={VISUAL[s.id]} className="flex w-full max-w-[420px] justify-center" />
              </Reveal>
            </div>
          </Section>
        );
      })}
      <CTA title="Kebutuhan Anda tidak ada di daftar?" lead="Tim analis sistem kami terbiasa merancang solusi khusus sesuai anggaran daerah maupun perusahaan." />
    </>
  );
}
