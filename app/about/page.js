import JsonLd from "@/ui/JsonLd";
import PixelIcon from "@/ui/PixelIcon";
import { Reveal, RevealGroup, RevealItem } from "@/ui/Motion";
import { CheckList, Credentials, CTA, LogoWall, PageHero, Section, SectionHead, Stats } from "@/ui/blocks";
import { WHY } from "@/lib/content";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Tentang Kami: Software House & Konsultan IT Sejak 2017",
  description: "Profil PT Dania Multi Prima, software house dan konsultan IT sejak 2017 untuk pemerintah, rumah sakit, kampus, dan bisnis di seluruh Indonesia.",
  path: "/about",
});

const ld = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE.url}/about`,
  name: "Tentang PT Dania Multi Prima",
  mainEntity: { "@id": `${SITE.url}/#organization` },
};

const MISSION = [
  "Membuat aplikasi dan website yang tepat guna, bukan sekadar banyak fitur.",
  "Membantu rumah sakit dan pemerintah daerah membangun sistem yang terintegrasi dan sesuai regulasi.",
  "Menerapkan AI dan keamanan siber secara bertanggung jawab.",
  "Mendampingi klien jangka panjang lewat pelatihan, perawatan, dan dukungan teknis.",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={[{ name: "Tentang", href: "/about" }]}
        title="Tim teknologi yang bekerja untuk seluruh Indonesia"
        lead="PT Dania Multi Prima berdiri sejak 2017. Kami membantu instansi dan bisnis memakai teknologi dengan cara yang sederhana, aman, dan benar-benar berguna."
      />
      <Section dots>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 text-[17px] leading-relaxed text-ink-600 lg:col-span-7">
            <h2 className="t-h2">Cerita singkat</h2>
            <p>
              Kami memulai sebagai software house kecil di Sumatera Utara. Sekarang sistem buatan kami dipakai kementerian, pemerintah daerah, rumah sakit,
              kampus, dan perusahaan, dari chatbot AI layanan publik sampai SIMRS yang tersambung ke BPJS dan SATUSEHAT.
            </p>
            <p>
              Cara kerja kami sederhana: dengarkan dulu, jelaskan dengan bahasa yang mudah dipahami, lalu bangun bertahap bersama klien. Kami lebih bangga
              pada sistem yang dipakai setiap hari daripada fitur yang hanya bagus di presentasi.
            </p>
            <p>
              Selain aplikasi, kami juga mengerjakan jaringan, server, CCTV pintar, pengadaan perangkat, dan pelatihan. Jadi klien cukup bicara dengan satu
              tim untuk seluruh kebutuhan IT.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-8 lg:col-span-5">
            <div className="px-box px-drop p-7" style={{ "--bg": "#0F1A33", "--bd": "#0F1A33", "--sh": "#2563EB" }}>
              <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-300">Visi</p>
              <p className="mt-3 text-[19px] font-bold leading-snug text-white">
                Menjadi mitra IT tepercaya yang mempercepat transformasi digital bisnis dan pemerintahan di Indonesia.
              </p>
            </div>
            <div className="px-box p-7">
              <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-700">Misi</p>
              <div className="mt-4">
                <CheckList items={MISSION} cols={1} />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-20">
          <Stats />
        </div>
      </Section>
      <LogoWall title="Klien yang pernah bekerja sama dengan kami" />
      <Section tone="white">
        <SectionHead kicker="Nilai kami" title="Yang kami pegang di setiap proyek" />
        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-2">
          {WHY.map((w) => (
            <RevealItem key={w.title} className="px-box flex gap-5 p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-white">
                <PixelIcon name={w.icon} size={24} />
              </span>
              <div>
                <h3 className="t-h3">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{w.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <Section dots>
        <SectionHead kicker="Legalitas" title="Resmi dan bisa dicek" />
        <div className="mt-12">
          <Credentials />
        </div>
      </Section>
      <CTA />
    </>
  );
}
