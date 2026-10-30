import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import JsonLd from "./JsonLd";
import ChatMock from "./ChatMock";
import PixelIcon from "./PixelIcon";
import CaseCard from "./CaseCard";
import { BrowserMock, ChatStatic, DashboardMock, PhoneMock, QueueMock, SecurityMock } from "./Mockups";
import { Reveal, RevealGroup, RevealItem, CountUp } from "./Motion";
import { CERTIFICATIONS, CLIENTS, STATS } from "@/lib/content";
import { SITE, breadcrumbLd, waLink } from "@/lib/site";

export { default as CaseCard } from "./CaseCard";

/* ---------- Kerangka ---------- */

const TONES = { paper: "bg-paper", panel: "bg-panel", white: "bg-white", blue: "bg-brand-100", navy: "bg-ink text-ink-300" };

export function Section({ id, tone = "paper", className = "", children, narrow = false, dots = false }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${TONES[tone]} ${dots ? "bg-pixel-dots" : ""} ${className}`}>
      <div className={`container-site relative ${narrow ? "max-w-4xl" : ""}`}>{children}</div>
    </section>
  );
}

// Tepi dither antara dua section
export function PixelEdge({ color = "#0F1A33", flip = false }) {
  return <div aria-hidden className={`dither h-[12px] w-full ${flip ? "rotate-180" : ""}`} style={{ "--d1": color, maskImage: "linear-gradient(to bottom, #000 0 50%, transparent)" }} />;
}

export function Kicker({ children, dark = false }) {
  return (
    <p className={`flex items-center gap-2 text-[15px] font-bold ${dark ? "text-brand-300" : "text-brand-700"}`}>
      <i aria-hidden className={`h-2.5 w-2.5 ${dark ? "bg-brand-300" : "bg-brand-600"}`} />
      {children}
    </p>
  );
}

export function SectionHead({ kicker, title, lead, action, as: H = "h2", dark = false, center = false, className = "" }) {
  return (
    <Reveal className={`flex flex-col gap-6 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"} ${className}`}>
      <div className="max-w-2xl">
        {kicker && <Kicker dark={dark}>{kicker}</Kicker>}
        <H className={`rv rv-type t-h2 mt-4 ${dark ? "!text-white" : ""}`}>{title}</H>
        {lead && <p className={`lead mt-5 ${dark ? "!text-ink-300" : ""}`}>{lead}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function Breadcrumbs({ items }) {
  const all = [{ name: "Beranda", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbLd(all)} />
      <ol className="flex flex-wrap items-center gap-1.5 font-pixel text-[11px] uppercase tracking-wider text-ink-500">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden className="text-ink-300">›</span>}
            {i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-brand-700">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ crumbs, title, lead, children, visual, kicker }) {
  return (
    <section className="relative overflow-hidden bg-paper bg-pixel-dots">
      <div className={`container-site relative grid gap-12 pb-16 pt-8 md:pb-20 md:pt-10 ${visual ? "lg:grid-cols-12 lg:items-center" : ""}`}>
        <div className={visual ? "lg:col-span-7" : "max-w-3xl"}>
          {crumbs && <Breadcrumbs items={crumbs} />}
          {kicker && (
            <div className="mt-10">
              <Kicker>{kicker}</Kicker>
            </div>
          )}
          <h1 className={`t-hero ${kicker ? "mt-4" : "mt-10"}`}>{title}</h1>
          {lead && <p className="lead mt-6 max-w-2xl">{lead}</p>}
          {children}
        </div>
        {visual && <div className="relative lg:col-span-5">{visual}</div>}
      </div>
      <PixelEdge color="#E9E1CF" />
    </section>
  );
}

export function CtaButtons({ message, secondary = { href: "/portfolio", label: "Lihat hasil kerja" } }) {
  return (
    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
      <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        <MessageCircle size={18} strokeWidth={2.5} /> Konsultasi gratis
      </a>
      {secondary && (
        <Link href={secondary.href} className="btn btn-light group">
          {secondary.label} <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

/* ---------- Kepercayaan ---------- */

const sectorOf = (name) =>
  /RS|RSUD|Rumah Sakit/.test(name) ? "Kesehatan" : /Universitas|Politeknik|SMKN|Darussalam|ThinkLab/.test(name) ? "Pendidikan" : /Kementerian|Pemkab|Pemko|DPRD/.test(name) ? "Pemerintahan" : "Bisnis";

// Etalase klien: logo berwarna dalam kotak pixel seragam, lengkap dengan nama & sektor
export function LogoWall({ title = "Dipercaya kementerian, pemerintah daerah, rumah sakit, kampus, dan perusahaan" }) {
  return (
    <section aria-labelledby="klien" className="relative bg-sand py-16 md:py-20">
      <div className="container-site">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker>Klien kami</Kicker>
            <h2 id="klien" className="mt-3 max-w-2xl text-[22px] font-bold leading-snug text-ink md:text-[26px]">
              {title}
            </h2>
          </div>
          <Link href="/portfolio" className="btn btn-light btn-sm shrink-0 self-start md:self-auto">
            Lihat proyeknya →
          </Link>
        </Reveal>
        <ul className="rv-group mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {CLIENTS.map((c, i) => (
            <li key={c.name} className={`rv rv-pop ${i >= 8 ? "max-sm:hidden" : ""}`}>
              <div className="px-box px-lift group flex h-full flex-col" style={{ "--bg": "#fff" }}>
                <div className="relative aspect-[4/3]">
                  <Image src={c.logo} alt={`Logo ${c.name}`} fill sizes="(min-width:1024px) 180px, (min-width:640px) 30vw, 45vw" className="object-contain p-5 transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-1 border-t-2 border-line px-3 py-2.5">
                  <p className="line-clamp-2 text-[13px] font-semibold leading-snug text-ink">{c.name}</p>
                  <p className="font-pixel text-[11px] uppercase text-brand-700">{sectorOf(c.name)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[14px] font-semibold text-ink-500 sm:hidden">+{CLIENTS.length - 8} klien lainnya di halaman portofolio</p>
      </div>
    </section>
  );
}

export function Stats({ dark = false }) {
  return (
    <RevealGroup as="dl" className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
      {STATS.map((s) => (
        <RevealItem key={s.label} className="px-box flex flex-col-reverse justify-end p-4 sm:p-5" style={{ "--bg": dark ? "#18264A" : "#fff", "--bd": dark ? "#3A4766" : "#0F1A33" }}>
          {/* dt lebih dulu (urutan semantik), angka tetap tampil di atas lewat flex-col-reverse */}
          <dt className={`mt-2 text-[14px] font-medium leading-snug sm:mt-3 sm:text-[15px] ${dark ? "text-ink-300" : "text-ink-500"}`}>{s.label}</dt>
          <dd className={`font-pixel text-[33px] leading-none sm:text-[44px] ${dark ? "text-white" : "text-ink"}`}>
            <CountUp value={s.value} />
          </dd>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function Credentials() {
  return (
    <RevealGroup className="swipe-m grid gap-8 md:grid-cols-3">
      {CERTIFICATIONS.map((c) => (
        <RevealItem key={c.id} className="h-full">
          <article className="px-box px-drop px-lift flex h-full flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between">
            <span className="grid h-14 w-14 place-items-center bg-brand-100 text-brand-700">
              <PixelIcon name={c.icon} size={48} />
            </span>
            <span className="rotate-[-4deg] border-[3px] border-brand-600 px-2 py-1 font-pixel text-[11px] uppercase text-brand-700">Terverifikasi</span>
          </div>
          <h3 className="t-h3 mt-6">{c.title}</h3>
          <p className="mt-1 text-[14px] font-semibold text-ink-500">{c.org}</p>
          <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-500">{c.desc}</p>
          <p className="mt-6 border-t-2 border-dashed border-line pt-4 font-pixel text-[11px] uppercase tracking-wide text-ink-600">{c.ref}</p>
          {c.href && (
            <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex w-fit items-center gap-1 py-1.5 text-[14px] font-bold text-brand-700 hover:underline">
              Cek di situs resmi <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
          )}
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/* ---------- Layanan dengan visual ---------- */

const VISUALS = {
  browser: <BrowserMock className="w-full max-w-[400px]" />,
  phone: <PhoneMock className="mx-auto" />,
  chat: <ChatMock className="mx-auto" />,
  chatStatic: <ChatStatic className="mx-auto" />,
  dashboard: <DashboardMock className="w-full max-w-[360px]" />,
  queue: <QueueMock className="w-full max-w-[360px]" />,
  security: <SecurityMock className="w-full max-w-[340px]" />,
};

export function Visual({ type, className = "" }) {
  return <div className={className}>{VISUALS[type]}</div>;
}

const SHOWCASE = [
  { visual: "browser", icon: "web", title: "Website", text: "Company profile, toko online, dan portal instansi yang cepat dan mudah ditemukan di Google.", href: "/services/pembuatan-website" },
  { visual: "phone", icon: "mobile", title: "Aplikasi Android, iOS & web", text: "Absensi, kasir, layanan warga, sampai ERP. Dibuat sesuai cara kerja tim Anda.", href: "/services/pembuatan-aplikasi" },
  { visual: "chatStatic", icon: "bot", title: "Chatbot & solusi AI", text: "Asisten WhatsApp yang menjawab 24 jam memakai data resmi Anda sendiri.", href: "/services/konsultan-ai" },
  { visual: "queue", icon: "hospital", title: "SIMRS & rekam medis", text: "Antrean, rekam medis elektronik, klaim BPJS, dan SATUSEHAT dalam satu sistem.", href: "/services/simrs" },
  { visual: "dashboard", icon: "gov", title: "Sistem pemerintahan", text: "Dashboard pimpinan, e-office, dan layanan publik sesuai arsitektur SPBE.", href: "/services/spbe-smart-city" },
  { visual: "security", icon: "shield", title: "Keamanan & infrastruktur", text: "Pengujian keamanan, server, jaringan, dan kepatuhan UU PDP.", href: "/services/keamanan-siber" },
];

export function ServiceShowcase() {
  return (
    <RevealGroup className="swipe-m grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {SHOWCASE.map((s) => (
        <RevealItem key={s.title} className="h-full">
          <Link href={s.href} className="px-box px-drop px-lift group flex h-full flex-col">
            <div className="relative flex h-52 items-start justify-center overflow-hidden bg-brand-100 bg-pixel-dots px-4 pt-6 sm:h-60 sm:px-6 sm:pt-8">
              <div className="flex w-full origin-top scale-[0.9] justify-center transition-transform duration-300 group-hover:scale-[0.94] sm:scale-[0.78] sm:group-hover:scale-[0.82]">{VISUALS[s.visual]}</div>
              <div className="dither absolute inset-x-0 bottom-0 h-3" style={{ "--d1": "#fff" }} />
            </div>
            <div className="flex flex-1 flex-col border-t-[3px] border-ink p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <PixelIcon name={s.icon} size={24} className="shrink-0 text-brand-600" />
                <h3 className="t-h3">{s.title}</h3>
              </div>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand-700">
                Lihat layanan <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function CaseGrid({ projects }) {
  return (
    <RevealGroup className="swipe-m grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <RevealItem key={p.id} className="h-full">
          <CaseCard p={p} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function CheckList({ items, cols = 2 }) {
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[16px] text-ink-700">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-brand-600 text-white">
            <PixelIcon name="check" size={24} className="scale-75" />
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

/* ---------- FAQ & CTA ---------- */

export function FAQ({ items }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
        <details key={f.q} className="px-box group" style={{ "--bg": "#fff" }}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-5 md:p-6 [&::-webkit-details-marker]:hidden">
            <h3 className="text-[17px] font-bold leading-snug text-ink">{f.q}</h3>
            <span className="grid h-8 w-8 shrink-0 place-items-center bg-ink text-white transition-transform duration-150 group-open:rotate-45">
              <PixelIcon name="plus" size={24} className="scale-75" />
            </span>
          </summary>
          <p className="border-t-2 border-dashed border-line px-5 pb-6 pt-4 text-[16px] leading-relaxed text-ink-500 md:px-6">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

// Bintang pixel berkedip untuk latar gelap (posisi tetap, bukan acak, agar SSR stabil)
const STARS = Array.from({ length: 36 }, (_, i) => ({ x: (i * 37) % 100, y: (i * 53) % 100, d: (i % 7) * 0.35, s: i % 5 === 0 ? 6 : 3 }));
export function Stars() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {STARS.map((s, i) => (
        <i key={i} className="absolute animate-twinkle bg-brand-200" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }} />
      ))}
    </div>
  );
}

export function CTA({ title = "Punya ide sistem? Yuk ngobrol dulu.", lead = "Konsultasi pertama gratis dan tanpa kewajiban. Biasanya kami membalas di hari kerja yang sama.", message }) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <PixelEdge color="#F4F0E6" flip />
      <Stars />
      <div className="container-site relative grid gap-10 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-8">
          <Kicker dark>Mulai proyek</Kicker>
          <h2 className="t-h2 mt-4 !text-white">{title}</h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-300">{lead}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-4">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ "--ink": "#000" }}>
            <MessageCircle size={18} strokeWidth={2.5} /> Chat WhatsApp
          </a>
          <a href={`tel:${SITE.phoneE164}`} className="btn btn-light" style={{ "--ink": "#000" }}>
            <Phone size={17} strokeWidth={2.5} /> {SITE.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Artikel terkait (link internal ke konten panduan) ---------- */
export function RelatedPosts({ posts, title = "Panduan terkait" }) {
  if (!posts?.length) return null;
  return (
    <Section tone="white">
      <SectionHead kicker="Baca juga" title={title} />
      <RevealGroup className="swipe-m mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((a) => (
          <RevealItem key={a.slug} className="h-full">
            <Link href={`/artikel/${a.slug}`} className="px-box px-drop px-lift group flex h-full flex-col p-6">
              <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-700">
                {a.category} · {a.read} menit
              </p>
              <h3 className="mt-3 text-[18px] font-bold leading-snug text-ink group-hover:text-brand-700">{a.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">{a.description}</p>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
