import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import LogoMarquee from "./ui/LogoMarque";
import ServicesBento from "./ui/Services";
import WhyChooseUs from "./ui/Why";
import ProjectShowcase from "./ui/Projects";
import TechStack from "./ui/TeachStack";
import Footer from "./ui/Footer";  
import PSE_EKatalog from "./ui/PSE_EKatalog";  
import Script from "next/script"; 

export const metadata = {
  
  title: 'Jasa Pembuatan Aplikasi & Software House Medan | PT. Dania Multi Prima',
  
  
  description: 'Software House & Konsultan IT Terbaik di Medan & Indonesia. Melayani Jasa Pembuatan Aplikasi Android/iOS, Website, SIMRS, Smart City, IoT & SPBE Pemerintahan. Hubungi kami untuk solusi digital.',
  
  applicationName: 'PT. Dania Multi Prima Website',
  authors: [{ name: 'PT. Dania Multi Prima', url: 'https://dmp.bio' }],
  generator: 'Next.js',
  keywords: [
    // --- KATA KUNCI UTAMA ---
    'Jasa Pembuatan Website',
    'Jasa Pembuatan Aplikasi Android',
    'Software House Indonesia',
    
    // --- LOKAL MEDAN & SUMUT (Dominasi Lokal) ---
    'Software House Medan',
    'Jasa Pembuatan Aplikasi Medan',
    'Jasa Pembuatan Website Medan',
    'Konsultan IT Medan',
    'Programmer Medan',
    'Web Developer Medan',
    'Vendor IT Deli Serdang',
    'Jasa IT Support Medan',
    'Pembuatan Aplikasi Android Deli Serdang',
    
    
    'Sistem Informasi Manajemen Rumah Sakit (SIMRS)',
    'Aplikasi Smart City Indonesia',
    'Vendor Aplikasi SPBE Pemerintahan',
    'Jasa Integrasi API',
    'Pengembang AI Indonesia',
    'Internet of Things (IoT) Solutions',
    'Sistem E-Katalog Pemerintah',
    
    
    'Harga Jasa Pembuatan Aplikasi',
    'Jasa IT Konsultan Profesional',
    'Perusahaan IT Terpercaya di Medan'
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
      <Script
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