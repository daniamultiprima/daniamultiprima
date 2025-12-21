import Data from "./Data"
import Script from "next/script"

export const metadata = {
    title: 'Portfolio & Studi Kasus - Proyek Aplikasi Pemerintah & Swasta',
    
    description: 'Lihat rekam jejak PT. Dania Multi Prima dalam mengerjakan 35+ proyek strategis: Website, Aplikasi, Sistem Informasi RS (SIMRS), Smart City Pemerintahan, Dashboard Big Data, dan Aplikasi Kampus di Indonesia.',
    
    keywords: [
        'Portfolio Konsultan IT', 
        'Contoh Aplikasi Pemerintahan', 
        'Proyek Smart City Indonesia', 
        'Vendor SIMRS Terpercaya', 
        'Studi Kasus IT',
        'Portfolio Dania Multi Prima'
    ],
    
    alternates: {
        canonical: '/portfolio',
    },
    
    openGraph: {
        title: 'Portfolio Proyek IT - PT. Dania Multi Prima',
        description: '35+ Proyek Terselesaikan: Government, Health, & Enterprise.',
        url: 'https://dmp.bio/portfolio',
        images: ['/opengraph-image.png'],
    }
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio Proyek IT PT. Dania Multi Prima",
    "description": "Koleksi studi kasus dan proyek pengembangan perangkat lunak untuk Pemerintah dan Swasta.",
    "url": "https://dmp.bio/portfolio",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
            // --- 1. SPECIAL PROJECTS ---
            { "@type": "ListItem", "position": 1, "name": "Jare-AI Public Service - Kementerian Komunikasi & Digital" },
            
            // --- 2. GOVERNMENT ---
            { "@type": "ListItem", "position": 2, "name": "Sistem Laporan Keuangan Daerah - Pemkab Serdang Bedagai" },
            { "@type": "ListItem", "position": 3, "name": "Laporan Kegiatan Realtime - Kabupaten Agam" },
            { "@type": "ListItem", "position": 4, "name": "Sistem Penerimaan Murid Baru (SPMB) - Pemko Tanjung Balai" },
            { "@type": "ListItem", "position": 5, "name": "E-Mas Smart City Apps - Pemko Binjai" },
            { "@type": "ListItem", "position": 6, "name": "E-Absensi ASN - Pemko Binjai" },
            { "@type": "ListItem", "position": 7, "name": "Portal Informasi DPRD - DPRD Deli Serdang" },
            { "@type": "ListItem", "position": 8, "name": "Si-Kakakade (E-Office) - DPRD Deli Serdang" },
            { "@type": "ListItem", "position": 9, "name": "Sistem Laporan PPJ - Bapenda Deli Serdang" },
            
            // --- 3. HEALTH ---
            { "@type": "ListItem", "position": 10, "name": "SIMRS Terintegrasi - RSUD Drs. H. Amri Tambunan" },
            { "@type": "ListItem", "position": 11, "name": "Bridging BPJS V-Claim - RSUD Drs. H. Amri Tambunan" },
            { "@type": "ListItem", "position": 12, "name": "SIMRS Mata (Oftalmologi) - RS Prima Vision" },
            { "@type": "ListItem", "position": 13, "name": "SIMRS Gigi & Mulut - RSGM USU" },
            { "@type": "ListItem", "position": 14, "name": "IoT Nurse Call System - RS Sri Pamela" },
            
            // --- 4. EDUCATION ---
            { "@type": "ListItem", "position": 15, "name": "AJ ThinkLab - Amberjaini" },
            { "@type": "ListItem", "position": 16, "name": "Sistem PAK Dosen - Universitas Sumatera Utara" },
            { "@type": "ListItem", "position": 17, "name": "SIMLITABMAS - Poltekbang Medan" },
            { "@type": "ListItem", "position": 18, "name": "Sistem Surat & Disposisi - Politeknik Negeri Medan" },
            { "@type": "ListItem", "position": 19, "name": "Ujian Online (CBT) - SMKN 1 Kota Binjai" },
            { "@type": "ListItem", "position": 20, "name": "School Website - SMP Darussalam Medan" },
            
            // --- 5. BUSINESS ---
            { "@type": "ListItem", "position": 21, "name": "Project Management Dashboard - Telkom Indonesia" },
            { "@type": "ListItem", "position": 22, "name": "Website Company Profile - PT. Dat Daramenta Sejahtera" },
            { "@type": "ListItem", "position": 23, "name": "Global E-Commerce - Amberjaini" },
            { "@type": "ListItem", "position": 24, "name": "Auto Parts Store - Autolinx" },
            { "@type": "ListItem", "position": 25, "name": "Muslimah Fashion Store - Lagizha" },
            { "@type": "ListItem", "position": 26, "name": "Cafe Management System - Kian & Kei Cafe" },
            { "@type": "ListItem", "position": 27, "name": "Stok Gudang Sayur - Kamtibmas" }
        ]
    }
}
 
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