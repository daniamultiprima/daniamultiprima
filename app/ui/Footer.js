import Link from "next/link";
import Logo from "./Logo";
import { SITE, fullAddress } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { MEDAN_PAGES } from "@/lib/medan-pages";
import { POPULAR, PROVINCES } from "@/lib/regions";

const COMPANY = [
  { name: "Tentang kami", href: "/about" },
  { name: "Portofolio", href: "/portfolio" },
  { name: "Solusi per sektor", href: "/solutions" },
  { name: "Semua layanan", href: "/services" },
  { name: "Artikel", href: "/artikel" },
  { name: "Kontak", href: "/contacts" },
];

function Col({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-pixel text-[11px] uppercase tracking-wider text-brand-300">{title}</h2>
      <ul className="mt-3 space-y-1 text-[14px] leading-snug sm:mt-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-block py-1 text-ink-300 hover:text-white">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-300">
      <div className="container-site grid gap-12 border-t-[3px] border-ink-700 py-14 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo tone="light" size="lg" />
          <p className="mt-6 text-[14px] leading-relaxed">
            Software house dan konsultan IT. Membangun website, aplikasi, dan sistem untuk bisnis dan instansi di seluruh Indonesia sejak 2017.
          </p>
          <address className="mt-6 space-y-1.5 text-[14px] not-italic">
            <p className="font-semibold text-white">Kantor pusat</p>
            <p>{fullAddress}</p>
            <p>
              <a href={`tel:${SITE.phoneE164}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-white">
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-9 lg:grid-cols-4">
          <Col title="Layanan" links={SERVICE_PAGES.map((s) => ({ name: s.name, href: `/services/${s.slug}` }))} />
          <Col title="Kota populer" links={[...POPULAR.slice(0, 10).map((k) => ({ name: k.nama, href: k.href })), { name: "Semua 514 kab/kota", href: "/wilayah" }]} />
          <Col
            title="Provinsi"
            links={["dki-jakarta", "jawa-barat", "jawa-timur", "jawa-tengah", "sumatera-utara", "sulawesi-selatan", "kalimantan-timur", "bali", "papua"].map((s) => {
              const p = PROVINCES.find((x) => x.slug === s);
              return { name: p.nama, href: `/wilayah/${s}` };
            })}
          />
          <div className="space-y-10">
            <Col title="Perusahaan" links={COMPANY} />
            <Col title="Kantor Medan" links={MEDAN_PAGES.map((p) => ({ name: p.h1.replace(", Sejak 2017", ""), href: `/${p.slug}` }))} />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-ink-700">
        <div className="container-site flex flex-col gap-3 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>© {year} PT Dania Multi Prima. Hak cipta dilindungi.</p>
          <p className="flex gap-5 font-pixel text-[11px] uppercase tracking-wider">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
