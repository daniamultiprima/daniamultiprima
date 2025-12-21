import Data from "./Data"
import Script from "next/script"

export const metadata = {
    title: 'Solusi IT Terintegrasi: Smart City, SIMRS, Kampus Digital & ERP Bisnis',
    
    description: 'Solusi Teknologi End-to-End untuk transformasi digital: E-Government (Smart City), Manajemen Rumah Sakit (SIMRS), Sistem Akademik Kampus, dan Otomasi Bisnis (ERP/CRM).',
    
    keywords: [
        'Solusi Smart City Indonesia',
        'Aplikasi Pemerintahan SPBE',
        'Sistem Informasi Manajemen Rumah Sakit',
        'Vendor SIMRS BPJS',
        'Sistem Informasi Akademik Kampus',
        'Software ERP Indonesia',
        'Solusi IT Korporat'
    ],
    
    alternates: {
        canonical: '/solutions',
    },
    
    openGraph: {
        title: 'Solusi Digital Sektoral - PT. Dania Multi Prima',
        description: 'Spesialis IT untuk Pemerintah, Kesehatan, Pendidikan, & Bisnis.',
        url: 'https://ajthinklab.com/solutions',
        images: ['/opengraph-image.png'],
    }
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Solusi E-Government & Smart City",
            "serviceType": "Public Service",
            "description": "Dashboard Eksekutif, E-Office, Tata Naskah Dinas, dan Aplikasi Pelayanan Publik.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" }
        },
        {
            "@type": "Service",
            "name": "Solusi Kesehatan (HealthTech)",
            "serviceType": "Healthcare IT",
            "description": "SIMRS Terintegrasi, Bridging BPJS V-Claim, E-Resep, dan IoT Nurse Call.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" }
        },
        {
            "@type": "Service",
            "name": "Solusi Pendidikan (EdTech)",
            "serviceType": "Educational Software",
            "description": "Sistem Informasi Akademik, Portal Mahasiswa, Perpustakaan Digital, dan Sistem Remunerasi Dosen.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" }
        },
        {
            "@type": "Service",
            "name": "Solusi Enterprise (Bisnis)",
            "serviceType": "Business Automation",
            "description": "Custom ERP, CRM, Point of Sales (POS), dan E-Commerce.",
            "provider": { "@type": "Organization", "name": "PT. Dania Multi Prima" }
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