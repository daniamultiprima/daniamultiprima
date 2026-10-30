import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/ui/JsonLd";
import PixelIcon from "@/ui/PixelIcon";
import Journey from "@/ui/Journey";
import { Reveal, RevealGroup, RevealItem } from "@/ui/Motion";
import { CaseGrid, CTA, CtaButtons, FAQ, PageHero, RelatedPosts, Section, SectionHead, Visual } from "@/ui/blocks";
import { POSTS, postsFor } from "../../artikel/posts";
import { SERVICE_PAGES, getServicePage } from "@/lib/service-pages";
import { PROJECTS } from "@/lib/content";
import { POPULAR } from "@/lib/regions";
import { SITE, faqLd, pageMeta } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return pageMeta({ title: page.metaTitle, description: page.metaDescription, path: `/services/${slug}` });
}

const VISUAL = {
  "konsultan-it": "dashboard",
  "konsultan-ai": "chat",
  "pembuatan-aplikasi": "phone",
  "pembuatan-website": "browser",
  simrs: "queue",
  "spbe-smart-city": "dashboard",
  "keamanan-siber": "security",
};

const STEPS = [
  { t: "Konsultasi", d: "Kami pahami masalah dan target Anda.", time: "gratis" },
  { t: "Proposal", d: "Ruang lingkup, jadwal, dan biaya tertulis.", time: "3–7 hari" },
  { t: "Pengerjaan", d: "Bertahap, dengan demo rutin.", time: "per sprint" },
  { t: "Pendampingan", d: "Pelatihan, garansi, dan perawatan.", time: "seterusnya" },
];

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const projects = page.projects.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
  const others = SERVICE_PAGES.filter((p) => p.slug !== slug);
  const url = `${SITE.url}/services/${slug}`;
  const type = VISUAL[slug];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.name,
    serviceType: page.name,
    description: page.metaDescription,
    url,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "Indonesia" },
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqLd(page.faqs)]} />
      <PageHero
        crumbs={[
          { name: "Layanan", href: "/services" },
          { name: page.name, href: `/services/${slug}` },
        ]}
        kicker={page.name}
        title={page.h1}
        lead={page.lead}
        visual={<Visual type={type} className={type === "browser" ? "" : "flex justify-center"} />}
      >
        <CtaButtons message={`Halo DMP, saya ingin konsultasi tentang ${page.name}.`} />
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="t-h2">Gambaran singkat</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-600">
              {page.intro.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="px-box px-drop p-7" style={{ "--bg": "#DCE8FF" }}>
              <h3 className="t-h3">Masalah yang sering kami temui</h3>
              <ul className="mt-5 space-y-5">
                {page.problems.map((pr) => (
                  <li key={pr.t} className="flex gap-3">
                    <span className="mt-1 h-3 w-3 shrink-0 bg-brand-600" />
                    <div>
                      <p className="font-bold text-ink">{pr.t}</p>
                      <p className="mt-1 text-[15px] text-ink-600">{pr.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <SectionHead kicker="Cakupan" title={`Yang Anda dapatkan`} />
        <RevealGroup className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {page.features.map((f) => (
            <RevealItem key={f.t} className="px-box flex h-full gap-4 p-5 md:block md:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-ink text-white md:h-12 md:w-12">
                <PixelIcon name={f.icon} size={24} />
              </span>
              <div>
                <h3 className="t-h3 max-md:!text-[18px] md:mt-5">{f.t}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500 md:mt-2">{f.d}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="blue">
        <SectionHead kicker="Prosesnya" title="Sederhana dan terbuka" />
        <div className="mt-12">
          <Journey steps={STEPS} />
        </div>
      </Section>

      {projects.length > 0 && (
        <Section dots>
          <SectionHead kicker="Contoh proyek" title="Sudah kami kerjakan" />
          <div className="mt-12">
            <CaseGrid projects={projects} />
          </div>
        </Section>
      )}

      <Section tone="white" narrow>
        <SectionHead kicker="Tanya jawab" title={`Seputar ${page.name}`} />
        <div className="mt-10">
          <FAQ items={page.faqs} />
        </div>
        <div className="mt-14">
          <h2 className="text-[15px] font-bold text-ink">{page.name} di kota Anda</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {POPULAR.slice(0, 12).map((k) => (
              <li key={k.kode}>
                <Link href={k.href} className="chip">
                  {k.nama}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/wilayah" className="chip">
                Semua 514 kab/kota →
              </Link>
            </li>
          </ul>
          <h2 className="mt-10 text-[15px] font-bold text-ink">Layanan lainnya</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="chip">
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <RelatedPosts posts={[...postsFor(`/services/${slug}`), ...POSTS.filter((p) => p.related !== `/services/${slug}`)].slice(0, 3)} />
      <CTA message={`Halo DMP, saya ingin konsultasi tentang ${page.name}.`} />
    </>
  );
}
