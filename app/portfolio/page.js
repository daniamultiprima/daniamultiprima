import JsonLd from "@/ui/JsonLd";
import PortfolioExplorer from "./PortfolioExplorer";
import { CTA, PageHero, Section, SectionHead, Stats } from "@/ui/blocks";
import { PROJECTS } from "@/lib/content";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Portofolio Proyek Website, Aplikasi, SIMRS & AI",
  description:
    "Hasil kerja PT Dania Multi Prima: chatbot AI Kementerian Komdigi, SIMRS RSUD, dashboard keuangan daerah, aplikasi smart city, sistem kampus, dan toko online.",
  path: "/portfolio",
});

const ld = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portofolio PT Dania Multi Prima",
  url: `${SITE.url}/portfolio`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "CreativeWork", name: p.title, description: p.desc, creator: { "@id": `${SITE.url}/#organization` }, sourceOrganization: p.client },
    })),
  },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={[{ name: "Portofolio", href: "/portfolio" }]}
        title="Hasil kerja kami"
        lead="Sistem untuk kementerian, pemerintah daerah, rumah sakit, kampus, dan perusahaan. Saring berdasarkan sektor untuk melihat contoh yang paling dekat dengan kebutuhan Anda."
      >
        <div className="mt-12">
          <Stats />
        </div>
      </PageHero>
      <Section>
        <SectionHead kicker="Daftar proyek" title="Pilih sektor, lihat contohnya" className="mb-10" />
        <PortfolioExplorer />
      </Section>
      <CTA title="Proyek Anda berikutnya?" />
    </>
  );
}
