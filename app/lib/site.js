export const SITE = {
  url: "https://dmp.bio",
  name: "PT Dania Multi Prima",
  shortName: "Dania Multi Prima",
  foundingYear: 2017,
  phoneDisplay: "+62 813-8050-510",
  phoneE164: "+628138050510",
  waNumber: "628138050510",
  email: "daniamultiprima@gmail.com",
  hours: "Senin–Sabtu, 09.00–17.00 WIB",
  address: {
    street: "Jln. Medan–Binjai Km 14,5, Diski, Sunggal",
    locality: "Deli Serdang",
    region: "Sumatera Utara",
    postalCode: "20351",
    country: "ID",
  },
  // Ganti dengan koordinat persis dari Google Business Profile bila sudah ada
  geo: { lat: 3.6, lng: 98.6 },
  social: {
    instagram: "https://www.instagram.com/daniamultiprima",
    linkedin: "https://www.linkedin.com/company/dania-multi-prima",
  },
  ekatalog: "https://katalog.inaproc.id/gusfahmi-alghazali",
};

export const fullAddress = `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`;

export const yearsActive = () => new Date().getFullYear() - SITE.foundingYear;

export function waLink(message = "Halo DMP, saya ingin konsultasi teknologi.") {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { name: "Layanan", href: "/services", menu: true },
  { name: "Portofolio", href: "/portfolio" },
  { name: "Solusi", href: "/solutions" },
  { name: "Artikel", href: "/artikel" },
  { name: "Tentang", href: "/about" },
  { name: "Kontak", href: "/contacts" },
];

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: ["Dania Multi Prima", "DMP", "PT DMP"],
  url: SITE.url,
  logo: `${SITE.url}/brand/logo-512.png`,
  image: `${SITE.url}/opengraph-image.jpg`,
  description:
    "Software house dan konsultan IT sejak 2017 yang melayani pemerintah, rumah sakit, kampus, dan bisnis di 514 kabupaten/kota di Indonesia.",
  foundingDate: String(SITE.foundingYear),
  telephone: SITE.phoneE164,
  email: SITE.email,
  priceRange: "Rp",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  areaServed: [
    { "@type": "City", name: "Medan" },
    { "@type": "AdministrativeArea", name: "Deli Serdang" },
    { "@type": "City", name: "Binjai" },
    { "@type": "AdministrativeArea", name: "Sumatera Utara" },
    { "@type": "Country", name: "Indonesia" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "17:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneE164,
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
  slogan: "Software house & konsultan IT untuk seluruh Indonesia",
  identifier: [{ "@type": "PropertyValue", propertyID: "Tanda Daftar PSE Komdigi", value: "021471.01/DJAI.PSE/12/2025" }],
  hasMap: `https://maps.google.com/?q=${encodeURIComponent("PT Dania Multi Prima, Jln. Medan-Binjai Km 14,5, Sunggal, Deli Serdang")}`,
  knowsAbout: [
    "Konsultan IT",
    "Kecerdasan Buatan (AI)",
    "Pengembangan Aplikasi",
    "SIMRS",
    "SPBE",
    "Smart City",
    "Keamanan Siber",
    "Internet of Things",
  ],
  sameAs: [SITE.social.instagram, SITE.social.linkedin],
};

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.href === "/" ? "" : it.href}`,
    })),
  };
}

export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Metadata dasar per halaman: canonical, OG, Twitter konsisten
export function pageMeta({ title, description, path = "/", ogTitle }) {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url,
      siteName: SITE.name,
      title: ogTitle || title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description,
    },
  };
}
