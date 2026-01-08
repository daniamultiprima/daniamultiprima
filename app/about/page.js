import Data from "./Data"
import Script from "next/script"

export const metadata = {
    
    title: 'Tentang Kami - Software House & Konsultan IT Terbaik Medan | DMP',
    
    
    description: 'Profil PT. Dania Multi Prima (DMP). Perusahaan Teknologi & Software House di Medan yang berpengalaman 8+ tahun sebagai Vendor IT Pemerintahan (SPBE), Pembuatan Aplikasi Android, Website, dan SIMRS di Indonesia.',
    
    
    keywords: [
        
        'Profil PT Dania Multi Prima', 
        'Sejarah Dania Multi Prima', 
        'Visi Misi Dania Multi Prima',
        
        
        'Software House Medan', 
        'Konsultan IT Medan', 
        'Jasa Pembuatan Aplikasi Medan', 
        'Vendor IT Pemerintahan Sumut',
        'Jasa Pembuatan Website Profesional',
        
        
        'Programmer Deli Serdang', 
        'IT Consultant North Sumatra',
        'Perusahaan IT Terpercaya Indonesia',
        
        
        'Pengembang AI Indonesia',
        'Sistem Smart City',
        'Vendor SIMRS BPJS'
    ],
    
    alternates: {
        canonical: 'https://dmp.bio/about',
    },

    openGraph: {
        title: 'Tentang Kami - PT. Dania Multi Prima',
        description: 'Membangun Masa Depan Digital Indonesia Sejak 2017.',
        url: 'https://dmp.bio/about',
        images: ['/opengraph-image.png'],
        type: 'website',
    }
}


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@type": "ProfessionalService",
        "name": "PT. Dania Multi Prima",
        "foundingDate": "2017",
        "foundingLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Deli Serdang",
                "addressRegion": "Sumatera Utara",
                "addressCountry": "Indonesia"
            }
        },
        "description": "Perusahaan Konsultan IT dan Software House yang berfokus pada pengembangan aplikasi pemerintahan, rumah sakit, dan korporasi.",
        "knowsAbout": [
            "Software Development",
            "Artificial Intelligence",
            "Smart City Solutions",
            "Cyber Security",
            "Hospital Management Systems"
        ],
        "image": "https://dmp.bio/opengraph-image.png"
    }
}
 
export default async function About() {  
    return (
        <>
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Data/>
        </>
    );
}