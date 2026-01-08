import Data from "./Data"
import Script from "next/script"

export const metadata = {
    // TITLE: Keyword Utama + Lokasi + Brand
    title: 'Layanan IT & Jasa Pembuatan Aplikasi Medan | PT. Dania Multi Prima',
    
    // DESCRIPTION: Copywriting "Menjual" dengan keyword lengkap
    description: 'Jelajahi 18+ Layanan IT Terbaik di Medan & Indonesia: Jasa Pembuatan Aplikasi Android/iOS, Website, Sistem SIMRS, Smart City (IoT), Keamanan Siber, hingga Pengadaan Perangkat IT Pemerintahan.',
    
    // KEYWORDS: Kombinasi Jasa + Lokasi
    keywords: [
        // Development
        'Jasa Pembuatan Aplikasi Medan',
        'Software House Medan',
        'Jasa Pembuatan Website Deli Serdang',
        'Web Developer Profesional Sumut',
        
        // Government & Enterprise
        'Vendor IT Pemerintahan',
        'Konsultan SPBE Medan',
        'Sistem Informasi Manajemen Rumah Sakit (SIMRS)',
        'Aplikasi Smart City Indonesia',
        
        // Infrastructure & Security
        'Jasa Instalasi Jaringan Medan',
        'Konsultan Cyber Security Indonesia',
        'Jasa Penetration Testing (Pentest)',
        'Pengadaan Server & Komputer Medan',
        
        // Advanced Tech
        'Solusi IoT Pertanian & Kota',
        'Jasa Implementasi AI (Artificial Intelligence)'
    ],
    
    alternates: {
        canonical: 'https://dmp.bio/services',
    },
    
    openGraph: {
        title: 'Katalog Layanan IT Lengkap - PT. Dania Multi Prima',
        description: 'End-to-End IT Solutions: Development, AI, Security, & Infrastructure.',
        url: 'https://dmp.bio/services',
        images: ['/opengraph-image.jpg'],
        type: 'website',
    }
}

// SCHEMA MARKUP (Service & OfferCatalog)
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PT. Dania Multi Prima",
    "url": "https://dmp.bio/services",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Deli Serdang",
        "addressRegion": "Sumatera Utara",
        "addressCountry": "ID"
    },
    // INI KUNCI AGAR MUNCUL DI PENCARIAN LOKAL
    "areaServed": [
        { "@type": "City", "name": "Medan" },
        { "@type": "City", "name": "Deli Serdang" },
        { "@type": "City", "name": "Binjai" },
        { "@type": "AdministrativeArea", "name": "Sumatera Utara" },
        { "@type": "Country", "name": "Indonesia" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Layanan IT & Software Development",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Development (Custom App)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development (Android & iOS)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development & E-Commerce" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Artificial Intelligence (AI) Solutions" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Internet of Things (IoT) Smart City" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity & Penetration Testing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Procurement (Pengadaan Barang)" } }
        ]
    }
}
 
export default async function Services() {  
    return (
        <>
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Data/>
        </>
    );
}