import Link from "next/link";
import JsonLd from "@/ui/JsonLd";
import IndoMap from "@/ui/IndoMap";
import CityFinder from "@/ui/CityFinder";
import { Reveal } from "@/ui/Motion";
import { CTA, PageHero, Section, SectionHead } from "@/ui/blocks";
import { ISLANDS, NATIONAL_MAP, POPULAR, PROVINCES, TOTAL_KAB, mapPins, mapProvinces } from "@/lib/regions";
import { SITE, pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Wilayah Layanan: 38 Provinsi & 514 Kabupaten/Kota",
  description: "Jasa pembuatan website, aplikasi, dan konsultan IT untuk 38 provinsi dan 514 kabupaten/kota di Indonesia. Cari kota Anda dan lihat layanannya.",
  path: "/wilayah",
});

export default function WilayahPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wilayah layanan PT Dania Multi Prima",
    itemListElement: PROVINCES.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.nama, url: `${SITE.url}/wilayah/${p.slug}` })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={[{ name: "Wilayah", href: "/wilayah" }]}
        title="Layanan IT di seluruh Indonesia"
        lead={`Kami melayani ${TOTAL_KAB} kabupaten/kota di 38 provinsi lewat rapat online, demo rutin, dan kunjungan saat implementasi. Cari daerah Anda untuk melihat detailnya.`}
      >
        <div className="mt-9 max-w-2xl">
          <CityFinder popular={POPULAR.slice(0, 8).map((k) => ({ label: k.nama, href: k.href }))} />
        </div>
      </PageHero>

      <Section tone="white">
        <SectionHead kicker="Peta" title="Pilih provinsi di peta" lead="Ketuk atau klik provinsi untuk membuka daftar kabupaten/kotanya. Di bawah peta ada daftar lengkapnya." />
        <Reveal className="mt-12">
          <div className="px-box p-4 md:p-8" style={{ "--bg": "#F4F0E6" }}>
            <IndoMap map={NATIONAL_MAP} provinces={mapProvinces()} pins={mapPins(POPULAR.slice(0, 10))} />
          </div>
        </Reveal>
      </Section>

      <Section dots>
        <div className="space-y-16">
          {ISLANDS.map((island) => (
            <Reveal key={island}>
              <h2 className="t-h2">{island}</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROVINCES.filter((p) => p.pulau === island).map((p) => (
                  <div key={p.slug} className="px-box p-5">
                    <Link href={`/wilayah/${p.slug}`} className="flex items-baseline justify-between gap-3 hover:text-brand-700">
                      <h3 className="text-[18px] font-bold text-ink">{p.nama}</h3>
                      <span className="shrink-0 font-pixel text-[11px] text-ink-500">{p.kabs.length} KAB/KOTA</span>
                    </Link>
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[13px]">
                      {p.kabs.map((k) => (
                        <li key={k.kode}>
                          <Link href={k.href} className="text-ink-500 hover:text-brand-700 hover:underline">
                            {k.tipe === "Kota" ? `Kota ${k.nama}` : k.nama}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
