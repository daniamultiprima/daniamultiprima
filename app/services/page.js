import Data from "./Data"
import Script from "next/script"

export const metadata = {
    title: 'Layanan IT & Pengembangan Software (AI, IoT, ERP)',
    
    description: 'Jelajahi 18+ Layanan IT PT. Dania Multi Prima: Jasa Pembuatan Aplikasi (Android/iOS), Website, Solusi AI & IoT, Keamanan Siber (Pentest), hingga Infrastruktur Server & Jaringan di Indonesia.',
    
    keywords: [
        'Jasa Pembuatan Website Medan',
        'Jasa Pembuatan Aplikasi Medan',
        'Jasa Pembuatan Website Deli Serdang',
        'Jasa Pembuatan Aplikasi Deli Serdang',
        'Vendor IT Pemerintahan',
        'Vendor IT Pemerintahan Medan',
        'Vendor IT Pemerintahan Deli Serdang',
        'Jasa Instalasi Jaringan & Server',
        'Jasa Instalasi Jaringan & Server Medan',
        'Jasa Instalasi Jaringan & Server Deli Serdang',
        'Konsultan Cyber Security Indonesia',
        'Konsultan Cyber Security Medan',
        'Konsultan Cyber Security Deli Serdang',
        'Jasa Pembuatan Website Company Profile',
        'Jasa Pembuatan Website Company Profile Medan',
        'Jasa Pembuatan Website Company Profile Deli Serdang',
        'Solusi IoT dan Smart City',
        'Software House Terpercaya',
        'Implementasi ERP CRM'
    ],
    
    alternates: {
        canonical: '/services',
    },
    
    openGraph: {
        title: 'Katalog Layanan IT Lengkap - PT. Dania Multi Prima',
        description: 'End-to-End IT Solutions: Development, AI, Security, & Infrastructure.',
        url: 'https://dmp.bio/services',
        images: ['/opengraph-image.jpg'],
    }
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
        // DEVELOPMENT
        { "@type": "ListItem", "position": 1, "name": "Software Development (Custom App)" },
        { "@type": "ListItem", "position": 2, "name": "Mobile App Development (Android & iOS)" },
        { "@type": "ListItem", "position": 3, "name": "Web Development & E-Commerce" },
        
        // INTELLIGENCE
        { "@type": "ListItem", "position": 4, "name": "Artificial Intelligence (AI) & Machine Learning" },
        { "@type": "ListItem", "position": 5, "name": "Internet of Things (IoT) Solutions" },
        
        // INFRASTRUCTURE
        { "@type": "ListItem", "position": 6, "name": "Network Infrastructure & Cabling" },
        { "@type": "ListItem", "position": 7, "name": "Server Management & Cloud Computing" },
        
        // SECURITY
        { "@type": "ListItem", "position": 8, "name": "Cybersecurity & Penetration Testing" },
        
        // ENTERPRISE
        { "@type": "ListItem", "position": 9, "name": "System Integration & ERP" },
        { "@type": "ListItem", "position": 10, "name": "IT Procurement (Pengadaan Perangkat)" }
    ]
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