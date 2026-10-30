import JsonLd from "@/ui/JsonLd";
import ServicesExplorer from "./ServicesExplorer";
import { CTA, CtaButtons, PageHero, Section, SectionHead, ServiceShowcase } from "@/ui/blocks";
import { SERVICES } from "@/lib/content";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Layanan IT: Website, Aplikasi, AI, SIMRS & SPBE",
  description:
    "24 layanan IT: pembuatan website & aplikasi, chatbot AI, SIMRS, SPBE, jaringan, server, keamanan siber, dan pengadaan perangkat IT untuk seluruh Indonesia.",
  path: "/services",
});

const catalogLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Layanan IT PT Dania Multi Prima",
  url: `${SITE.url}/services`,
  itemListElement: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.desc, provider: { "@id": `${SITE.url}/#organization` }, areaServed: "Indonesia" },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={catalogLd} />
      <PageHero
        crumbs={[{ name: "Layanan", href: "/services" }]}
        title="Layanan IT, dari website sampai server"
        lead="Satu tim untuk seluruh kebutuhan teknologi: bikin website dan aplikasi, menerapkan AI, memasang jaringan, sampai pengadaan perangkat lewat E-Katalog."
      >
        <CtaButtons />
      </PageHero>
      <Section dots>
        <SectionHead kicker="Paling sering dicari" title="Layanan utama" />
        <div className="mt-14">
          <ServiceShowcase />
        </div>
      </Section>
      <Section tone="white">
        <SectionHead kicker="Katalog lengkap" title="Semua 24 layanan" lead="Pilih kategori untuk menyaring." />
        <div className="mt-10">
          <ServicesExplorer />
        </div>
      </Section>
      <CTA title="Belum yakin butuh yang mana?" lead="Ceritakan masalahnya saja. Kami bantu menentukan solusi yang paling masuk akal untuk anggaran Anda." />
    </>
  );
}
