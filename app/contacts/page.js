import JsonLd from "@/ui/JsonLd";
import PixelIcon from "@/ui/PixelIcon";
import ContactForm from "./ContactForm";
import { Reveal } from "@/ui/Motion";
import { FAQ, PageHero, Section, SectionHead } from "@/ui/blocks";
import Journey from "@/ui/Journey";
import { SITE, faqLd, fullAddress, pageMeta, waLink } from "@/lib/site";

export const metadata = pageMeta({
  title: "Kontak & Konsultasi Gratis",
  description:
    "Hubungi PT Dania Multi Prima di +62 813-8050-510 (WhatsApp) untuk konsultasi gratis pembuatan website, aplikasi, AI, SIMRS, dan SPBE dari seluruh Indonesia.",
  path: "/contacts",
});

const ld = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE.url}/contacts`,
  name: "Kontak PT Dania Multi Prima",
  mainEntity: { "@id": `${SITE.url}/#organization` },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent("Jl. Medan - Binjai Km 14,5 Diski Sunggal Deli Serdang")}&z=15&output=embed`;

export default function ContactPage() {
  const steps = [
    { t: "Kirim pesan", d: "Ceritakan kebutuhan lewat WhatsApp, telepon, email, atau formulir di halaman ini.", time: "1 menit" },
    { t: "Kami balas", d: "Tim kami menghubungi Anda untuk menjadwalkan sesi konsultasi.", time: "hari kerja" },
    { t: "Konsultasi gratis", d: "Bahas masalah, tujuan, dan perkiraan anggaran lewat video call atau tatap muka.", time: "30–60 menit" },
    { t: "Terima proposal", d: "Ruang lingkup, jadwal, dan biaya tertulis yang bisa Anda bandingkan.", time: "3–7 hari" },
  ];
  const faqs = [
    { q: "Apakah konsultasi pertama dikenakan biaya?", a: "Tidak. Sesi konsultasi pertama gratis dan tanpa kewajiban. Anda bebas memutuskan setelah menerima proposal." },
    { q: "Saya di luar Sumatera Utara, apakah bisa dilayani?", a: "Bisa. Kami melayani klien di 514 kabupaten/kota. Konsultasi dan rapat dilakukan online, dan tim kami datang ke lokasi saat implementasi bila diperlukan." },
    { q: "Apa saja yang perlu disiapkan sebelum menghubungi?", a: "Cukup gambaran masalah atau tujuan Anda. Bila ada, sertakan contoh website/aplikasi yang Anda suka, perkiraan jumlah pengguna, dan tenggat waktu." },
    { q: "Apakah instansi bisa meminta penawaran resmi?", a: "Bisa. Kirim permintaan lewat email untuk penawaran resmi bermeterai, atau pesan langsung melalui E-Katalog LKPP." },
    { q: "Kapan jam layanan tim DMP?", a: "Senin–Sabtu pukul 09.00–17.00 WIB. Pesan yang masuk di luar jam kerja akan dibalas pada hari kerja berikutnya." },
  ];
  const channels = [
    { icon: "chat", title: "WhatsApp", value: SITE.phoneDisplay, note: "Cara tercepat menghubungi kami", href: waLink(), external: true },
    { icon: "phone", title: "Telepon", value: SITE.phoneDisplay, note: SITE.hours, href: `tel:${SITE.phoneE164}` },
    { icon: "mail", title: "Email", value: SITE.email, note: "Untuk penawaran resmi & kerja sama", href: `mailto:${SITE.email}` },
  ];
  return (
    <>
      <JsonLd data={[ld, faqLd(faqs)]} />
      <PageHero
        crumbs={[{ name: "Kontak", href: "/contacts" }]}
        title="Mari bicara soal kebutuhan Anda"
        lead="Konsultasi pertama gratis. Ngobrol online dari kota mana pun di Indonesia, atau datang langsung ke kantor pusat kami."
      />
      <Section dots>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <a href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="px-box px-drop px-lift group flex items-center gap-5 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-ink text-white group-hover:bg-brand-600">
                    <PixelIcon name={c.icon} size={24} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-pixel text-[11px] uppercase tracking-wider text-ink-500">{c.title}</span>
                    <span className="block break-words font-bold text-ink">{c.value}</span>
                    <span className="block text-[14px] text-ink-500">{c.note}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="px-box">
              <div className="bg-ink px-3 py-2 font-pixel text-[11px] uppercase tracking-wider text-white">kantor pusat</div>
              <iframe title="Lokasi kantor pusat PT Dania Multi Prima" src={mapSrc} className="block h-60 w-full" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
              <p className="border-t-[3px] border-ink p-4 text-[15px] text-ink-600">
                {fullAddress}
                <br />
                {SITE.hours}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Section>
      <Section tone="blue">
        <SectionHead kicker="Setelah Anda menghubungi" title="Begini alurnya" lead="Tidak ada biaya sampai Anda setuju dengan proposal yang kami kirim." />
        <div className="mt-12">
          <Journey steps={steps} />
        </div>
      </Section>
      <Section narrow dots>
        <SectionHead kicker="Tanya jawab" title="Sebelum menghubungi kami" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>
    </>
  );
}
