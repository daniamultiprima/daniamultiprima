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
  
  title: 'PT. Dania Multi Prima - Jasa Pembuatan Aplikasi & Konsultan IT Terbaik Indonesia',
  
  description: 'Mitra Transformasi Digital Pemerintah & Korporat. Spesialis Jasa Pembuatan Aplikasi (Android/iOS), Website, SIMRS, Smart City, & Solusi AI di Indonesia. 35+ Proyek Sukses.',
  
  keywords: [
	  'Jasa Pembuatan Website',
	  'Jasa Pembuatan Aplikasi Android',
	  'Jasa Pembuatan Website Medan',
	  'Jasa Pembuatan Aplikasi Android Medan',
	  'Jasa Pembuatan Website Deli Serdang',
	  'Jasa Pembuatan Aplikasi Android Deli Serdang',
	  'Jasa Pembuatan Website Profesional',
    'Konsultan IT Pemerintahan',
    'Konsultan IT Pemerintahan Medan',
    'Konsultan IT Pemerintahan Deli Serdang',
    'Software House Medan',
    'Software House Deli Serdang',
    'Vendor Aplikasi SPBE',
    'Vendor Aplikasi SPBE Medan',
    'Vendor Aplikasi SPBE Deli Serdang',
    'Pengembang AI Indonesia',
    'Pengembang AI Medan',
    'Pengembang AI Deli Serdang',
    'Jasa IT Support Perusahaan'
  ],

  alternates: {
    canonical: 'https://dmp.bio',
  },

  openGraph: {
    title: 'PT. Dania Multi Prima - IT Consultant & Software House',
    description: 'Solusi Teknologi End-to-End: Dari Perancangan Sistem hingga Implementasi AI.',
    url: 'https://dmp.bio',
    images: ['/opengraph-image.jpg'],
    type: 'website',
  }
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/daniamultiprima", 
    ]
  },
  
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://dmp.bio",
    "name": "PT. Dania Multi Prima", 
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