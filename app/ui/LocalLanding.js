import Link from "next/link";
import JsonLd from "./JsonLd";
import Journey from "./Journey";
import PixelIcon from "./PixelIcon";
import { Reveal, RevealGroup, RevealItem } from "./Motion";
import { CaseGrid, CheckList, CTA, CtaButtons, FAQ, PageHero, RelatedPosts, Section, SectionHead, Visual } from "./blocks";
import { POSTS } from "@/artikel/posts";
import { PROJECTS } from "@/lib/content";
import { MEDAN_KECAMATAN, MEDAN_PAGES, MEDAN_SEKITAR } from "@/lib/medan-pages";
import { KABS } from "@/lib/regions";
import { SITE, faqLd, fullAddress, pageMeta } from "@/lib/site";

export function localMeta(page) {
  return pageMeta({ title: { absolute: `${page.metaTitle} | DMP` }, ogTitle: page.metaTitle, description: page.metaDescription, path: `/${page.slug}` });
}

export default function LocalLanding({ page }) {
  const projects = page.projects.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  const others = MEDAN_PAGES.filter((p) => p.slug !== page.slug);
  const url = `${SITE.url}/${page.slug}`;
  const crumbName = page.h1.replace(", Sejak 2017", "");
  const sumut = KABS.filter((k) => k.prov === "12");
  const nearLink = (n) => sumut.find((k) => k.nama.toLowerCase() === n.toLowerCase());

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: crumbName,
    serviceType: page.short,
    description: page.metaDescription,
    url,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: [{ "@type": "City", name: "Medan" }, ...MEDAN_SEKITAR.map((n) => ({ "@type": "AdministrativeArea", name: n }))],
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqLd(page.faqs)]} />
      <PageHero
        crumbs={[{ name: crumbName, href: `/${page.slug}` }]}
        kicker="Kantor pusat · Medan"
        title={page.h1}
        lead={page.lead}
        visual={<Visual type={page.visual} className={page.visual === "browser" ? "" : "flex justify-center"} />}
      >
        <CtaButtons message={`Halo DMP, saya ingin konsultasi soal ${page.short.toLowerCase()} di Medan.`} />
        <p className="mt-8 flex items-center gap-2 text-[14px] font-semibold text-ink-600">
          <PixelIcon name="pin" size={24} className="text-brand-600" /> {fullAddress}
        </p>
      </PageHero>

      <Section dots>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="t-h2">Kenapa {page.short.toLowerCase()} perlu digarap serius</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-600">
              {page.intro.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="px-box px-drop">
              <div className="bg-ink px-3 py-2 font-pixel text-[11px] uppercase tracking-wider text-white">kunjungi kantor kami</div>
              <div className="p-6">
                <p className="text-[15px] leading-relaxed text-ink-600">{fullAddress}</p>
                <p className="mt-1 text-[15px] text-ink-600">{SITE.hours}</p>
                <a href={`https://maps.google.com/?q=${encodeURIComponent("PT Dania Multi Prima " + fullAddress)}`} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-6 w-full">
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead kicker="Yang bisa kami buatkan" title={`Jenis ${page.short.toLowerCase()} yang kami kerjakan`} />
        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {page.types.map((t, i) => (
            <RevealItem key={t.t} className="px-box h-full p-6">
              <span className="font-pixel text-[22px] text-brand-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-h3 mt-3">{t.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{t.d}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section dots>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="px-box px-drop p-7 md:p-9">
            <h2 className="t-h3">Yang sudah termasuk</h2>
            <div className="mt-6">
              <CheckList items={page.included} cols={1} />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="px-box px-drop p-7 md:p-9" style={{ "--bg": "#0F1A33", "--sh": "#2563EB" }}>
            <h2 className="t-h3 !text-white">Berapa biayanya?</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-300">Setiap proyek berbeda. Harga ditentukan oleh:</p>
            <ul className="mt-5 space-y-3">
              {page.priceFactors.map((f) => (
                <li key={f} className="flex gap-3 text-[15px] text-ink-300">
                  <i className="mt-2 h-2 w-2 shrink-0 bg-brand-400" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-white">Kirim kebutuhan Anda, kami balas dengan rincian biaya dan jadwal tertulis.</p>
            {page.slug === "jasa-pembuatan-website-medan" && (
              <Link href="/artikel/biaya-pembuatan-website-medan" className="mt-3 inline-block text-[15px] font-bold text-brand-300 hover:underline">
                Baca: kisaran biaya pembuatan website di Medan →
              </Link>
            )}
          </Reveal>
        </div>
      </Section>

      <Section tone="blue">
        <SectionHead kicker="Prosesnya" title="Dari obrolan pertama sampai online" />
        <div className="mt-12">
          <Journey steps={page.steps} />
        </div>
      </Section>

      {projects.length > 0 && (
        <Section tone="white">
          <SectionHead kicker="Contoh proyek" title="Yang sudah kami kerjakan" />
          <div className="mt-12">
            <CaseGrid projects={projects.slice(0, 3)} />
          </div>
        </Section>
      )}

      <Section dots>
        <SectionHead kicker="Area layanan" title="Seluruh Medan dan sekitarnya" lead="Klien di wilayah ini bisa bertemu langsung dengan tim kami. Kota lain di Indonesia kami layani secara online." />
        <Reveal className="mt-10">
          <h3 className="font-pixel text-[11px] uppercase tracking-wider text-ink-600">21 kecamatan di Kota Medan</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {MEDAN_KECAMATAN.map((k) => (
              <li key={k} className="chip">
                {k}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-pixel text-[11px] uppercase tracking-wider text-ink-600">Sekitar Medan</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {MEDAN_SEKITAR.map((n) => {
              const k = nearLink(n);
              return <li key={n}>{k ? <Link href={k.href} className="chip">{n}</Link> : <span className="chip">{n}</span>}</li>;
            })}
          </ul>
        </Reveal>
      </Section>

      <Section tone="white" narrow>
        <SectionHead kicker="Tanya jawab" title={`Seputar ${page.short.toLowerCase()} di Medan`} />
        <div className="mt-10">
          <FAQ items={page.faqs} />
        </div>
        <div className="mt-14">
          <h2 className="text-[15px] font-bold text-ink">Layanan lain di Medan</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/${o.slug}`} className="chip">
                  {o.h1.replace(", Sejak 2017", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <RelatedPosts posts={[...POSTS.filter((p) => p.related === `/${page.slug}`), ...POSTS.filter((p) => p.related !== `/${page.slug}`)]} />
      <CTA message={`Halo DMP, saya ingin konsultasi soal ${page.short.toLowerCase()} di Medan.`} />
    </>
  );
}
