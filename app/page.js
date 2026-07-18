import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import dynamic from 'next/dynamic';
import Script from "next/script";



const LogoMarquee = dynamic(() => import("./ui/LogoMarque"), { ssr: false });
const ServicesBento = dynamic(() => import("./ui/Services"), { ssr: true });
const WhyChooseUs = dynamic(() => import("./ui/Why"), { ssr: true });
const ProjectShowcase = dynamic(() => import("./ui/Projects"), { ssr: true });
const TechStack = dynamic(() => import("./ui/TeachStack"), { ssr: true });
const PSE_EKatalog = dynamic(() => import("./ui/PSE_EKatalog"), { ssr: true });
const Footer = dynamic(() => import("./ui/Footer"), { ssr: true }); 

export const metadata = {
  
  title: 'Software House Medan & IT Konsultan | PT DMP',
  
  description: 'Konsultan IT & Software House Terbaik di Medan. Layanan Pembuatan Aplikasi Android/iOS, Website, SIMRS, Smart City, & SPBE. Hubungi PT DMP hari ini.',
  
  applicationName: 'PT. Dania Multi Prima Website',
  authors: [{ name: 'PT. Dania Multi Prima', url: 'https://dmp.bio' }],
  generator: 'Next.js',
  keywords: [
    // --- KATA KUNCI UTAMA (High Volume) ---
    'Jasa Pembuatan Website',
    'Jasa Pembuatan Aplikasi Android',
    'Jasa Pembuatan Aplikasi iOS',
    'Software House Indonesia',
    'Software House Terbaik Indonesia',
    'Perusahaan IT BUMN',
    'Jasa Bikin Web Profil Perusahaan',
    'Jasa Pembuatan Aplikasi Kasir',
    
    // --- LOKAL MEDAN & SUMUT (Dominasi Lokal High Intent) ---
    'Software House Medan',
    'Jasa Pembuatan Aplikasi Medan',
    'Jasa Pembuatan Website Medan',
    'Konsultan IT Medan',
    'Programmer Medan',
    'Web Developer Medan',
    'Vendor IT Deli Serdang',
    'Jasa IT Support Medan',
    'Pembuatan Aplikasi Android Deli Serdang',
    'Perusahaan IT Terpercaya di Medan',
    'Jasa Web Design Medan',
    
    // --- ENTERPRISE, GOV & HEALTH (Niche Khusus) ---
    'Sistem Informasi Manajemen Rumah Sakit (SIMRS)',
    'Vendor SIMRS Terpercaya',
    'Aplikasi Smart City Indonesia',
    'Vendor Aplikasi SPBE Pemerintahan',
    'Sistem E-Katalog Pemerintah',
    'Vendor E-Katalog Lokal',
    'Software Klinik dan Apotek Terintegrasi',
    
    // --- TECH STACK & SERVICES (Advanced Tech) ---
    'Jasa Integrasi API',
    'Jasa Integrasi API Payment Gateway',
    'Pengembang AI Indonesia',
    'Internet of Things (IoT) Solutions',
    'Jasa Pembuatan Chatbot AI',
    'Implementasi Machine Learning Perusahaan',
    'Konsultan IT Bersertifikat',
    
    // --- LONG TAIL & BUYING INTENT ---
    'Harga Jasa Pembuatan Aplikasi Android Perusahaan',
    'Biaya Pembuatan Website Toko Online',
    'Jasa IT Konsultan Profesional',
    'Bikin Aplikasi Custom Murah Berkualitas'
  ],

  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://dmp.bio',
  },

  
  other: {
    "geo.region": "ID-SU",
    "geo.placename": "Medan",
    "geo.position": "3.600000;98.600000",
    "ICBM": "3.600000, 98.600000"
  }, 

  openGraph: {
    title: 'Software House Medan & IT Consultant - PT. Dania Multi Prima',
    description: 'Solusi Teknologi End-to-End: Web, Mobile App, AI, IoT & Infrastruktur IT.',
    url: 'https://dmp.bio',
    siteName: 'PT. Dania Multi Prima',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT. Dania Multi Prima Portfolio & Services',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PT. Dania Multi Prima - Software House Medan',
    description: 'Jasa Pembuatan Aplikasi & Konsultan IT Terbaik.',
    images: ['/opengraph-image.jpg'],
  },
}


const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PT. Dania Multi Prima",
    "image": "https://dmp.bio/opengraph-image.jpg",
    "@id": "https://dmp.bio",
    "url": "https://dmp.bio",
    "telephone": "+62-813-8050-510",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal",
      "addressLocality": "Deli Serdang",
      "addressRegion": "Sumatera Utara",
      "postalCode": "20351",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 3.600000, 
      "longitude": 98.600000
    },
    "areaServed": [
      { "@type": "City", "name": "Medan" },
      { "@type": "City", "name": "Binjai" },
      { "@type": "City", "name": "Deli Serdang" },
      { "@type": "AdministrativeArea", "name": "Sumatera Utara" },
      { "@type": "Country", "name": "Indonesia" }
    ],
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/daniamultiprima",
      "https://www.linkedin.com/company/dania-multi-prima", 
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan IT & Software Development",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Pembuatan Aplikasi Android & iOS"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Pembuatan Website & E-Commerce"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistem Informasi Manajemen Rumah Sakit (SIMRS)"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Konsultan IT & Smart City Pemerintahan"
          }
        }
      ]
    }
  },
  
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://dmp.bio",
    "name": "PT. Dania Multi Prima",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dmp.bio/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];

export default async function Home(){
  return (
    <>
      <script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar/>
      <Hero/>
      <PSE_EKatalog/>
      <LogoMarquee/>
      <ServicesBento/>
      <WhyChooseUs/>
      <ProjectShowcase/>
      <TechStack/>
      <Footer/> 
    </>
  )
}