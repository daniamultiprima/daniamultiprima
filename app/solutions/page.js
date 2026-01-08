import Data from "./Data"
import Script from "next/script"

export const metadata = {
    
    title: 'Solusi Smart City, SIMRS, & Sistem Kampus Terbaik Medan | PT. Dania Multi Prima',
    
    
    description: 'Solusi IT Terintegrasi untuk Transformasi Digital: E-Government (SPBE), Manajemen Rumah Sakit (SIMRS Satu Sehat), Sistem Akademik Kampus, dan ERP Bisnis di Indonesia.',
    
    
    keywords: [
        
        'Solusi Smart City Indonesia',
        'Aplikasi Pemerintahan SPBE',
        'Vendor E-Government Medan',
        'Sistem Command Center Daerah',
        
        
        'Sistem Informasi Manajemen Rumah Sakit',
        'Vendor SIMRS BPJS',
        'Integrasi Satu Sehat Kemenkes',
        'Rekam Medis Elektronik (RME)',
        
        
        'Sistem Informasi Akademik Kampus (SIAKAD)',
        'Software Kampus Merdeka',
        
        
        'Software ERP Indonesia',
        'Solusi IT Korporat',
        'Aplikasi Kasir POS Terintegrasi'
    ],
    
    alternates: {
        canonical: 'https://dmp.bio/solutions',
    },
    
    openGraph: {
        title: 'Solusi Digital Pemerintahan & Korporat - PT. Dania Multi Prima',
        description: 'Spesialis Implementasi Sistem: SPBE, SIMRS, SIAKAD & ERP.',
        url: 'https://dmp.bio/solutions',
        images: ['/opengraph-image.jpg'],
        type: 'website',
    },

    
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        }
    }
}


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Katalog Solusi Digital PT. Dania Multi Prima",
    "description": "Daftar solusi perangkat lunak terintegrasi untuk berbagai sektor industri.",
    "itemListElement": [
        {
            "@type": "Service",
            "position": 1,
            "name": "Solusi E-Government (Smart City)",
            "serviceType": "Public Sector IT",
            "description": "Dashboard Eksekutif, E-Office, Tata Naskah Dinas, dan Aplikasi Pelayanan Publik sesuai standar SPBE.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" },
            "areaServed": "Indonesia"
        },
        {
            "@type": "Service",
            "position": 2,
            "name": "Solusi Kesehatan (HealthTech)",
            "serviceType": "Healthcare IT",
            "description": "SIMRS Terintegrasi, Bridging BPJS V-Claim, E-Resep, dan IoT Nurse Call (Satu Sehat Ready).",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" },
            "areaServed": "Indonesia"
        },
        {
            "@type": "Service",
            "position": 3,
            "name": "Solusi Pendidikan (EdTech)",
            "serviceType": "Educational Software",
            "description": "Sistem Informasi Akademik (SIAKAD), Portal Mahasiswa, Perpustakaan Digital, dan Sistem Remunerasi Dosen.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" },
            "areaServed": "Indonesia"
        },
        {
            "@type": "Service",
            "position": 4,
            "name": "Solusi Enterprise (Bisnis)",
            "serviceType": "Business Automation",
            "description": "Custom ERP, CRM, Point of Sales (POS), dan E-Commerce Omnichannel.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" },
            "areaServed": "Indonesia"
        }
    ]
}
 
export default async function Solutions() {  
    return (
        <>
            <Script
                id="solutions-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Data/>
        </>
    );
}