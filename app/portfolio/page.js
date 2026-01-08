import Data from "./Data"
import Script from "next/script"

export const metadata = {
    
    title: 'Portfolio & Studi Kasus - Proyek Aplikasi Pemerintah & Swasta | PT. Dania Multi Prima',
    
    
    description: 'Lihat rekam jejak PT. Dania Multi Prima dalam mengerjakan 35+ proyek strategis: Sistem Informasi RS (SIMRS), Smart City Pemerintahan (SPBE), Dashboard Big Data, dan Aplikasi Kampus di Indonesia.',
    
    
    keywords: [
        
        'Portfolio Konsultan IT', 
        'Studi Kasus Software House',
        'Contoh Aplikasi Pemerintahan',
        
        
        'Proyek Smart City Indonesia', 
        'Vendor SIMRS Terpercaya', 
        'Sistem E-Office DPRD',
        'Dashboard Eksekutif Pemerintahan',
        
        
        'Portfolio Dania Multi Prima',
        'Software House Medan Portfolio'
    ],
    
    alternates: {
        canonical: 'https://dmp.bio/portfolio',
    },
    
    
    openGraph: {
        title: 'Portfolio Proyek IT - PT. Dania Multi Prima',
        description: '35+ Proyek Terselesaikan: Government, Health, & Enterprise.',
        url: 'https://dmp.bio/portfolio',
        siteName: 'PT. Dania Multi Prima',
        images: [{
            url: '/opengraph-image.png',
            width: 1200,
            height: 630,
            alt: 'Showcase Proyek PT. Dania Multi Prima'
        }],
        type: 'website',
    },

    
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    }
}


const jsonLd = [
    
    {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Portfolio Proyek IT PT. Dania Multi Prima",
        "description": "Koleksi studi kasus dan proyek pengembangan perangkat lunak untuk Pemerintah, Rumah Sakit, Edukasi, dan Bisnis.",
        "url": "https://dmp.bio/portfolio",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Jare-AI Public Service - Kementerian Komunikasi & Digital" },
                { "@type": "ListItem", "position": 2, "name": "Sistem Laporan Keuangan Daerah - Pemkab Serdang Bedagai" },
                { "@type": "ListItem", "position": 3, "name": "SIMRS Terintegrasi - RSUD Drs. H. Amri Tambunan" },
                { "@type": "ListItem", "position": 4, "name": "Sistem Akademik & Remunerasi - Universitas Sumatera Utara" },
                { "@type": "ListItem", "position": 5, "name": "Smart City Apps & E-Absensi - Pemko Binjai" },
                { "@type": "ListItem", "position": 6, "name": "Project Management Dashboard - Telkom Indonesia" },
                { "@type": "ListItem", "position": 7, "name": "Sistem Penerimaan Murid Baru (SPMB) - Pemko Tanjung Balai" },
                { "@type": "ListItem", "position": 8, "name": "Portal Informasi & E-Office - DPRD Deli Serdang" }
            ]
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dmp.bio"
        },{
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://dmp.bio/portfolio"
        }]
    }
];
 
export default async function Portfolio() {  
    return (
        <>
            <Script
                id="portfolio-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Data/>
        </>
    );
}