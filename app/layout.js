import NextTopLoader from "nextjs-toploader";
import { ThemeModeScript } from "flowbite-react";
import { Golos_Text, Poppins, Press_Start_2P, DM_Sans } from "next/font/google";
import Script from "next/script"; // Penting untuk JSON-LD
import WhatsAppFloat from "./ui/WhatsApp"; // Pastikan path ini sesuai
import "./globals.css";

// --- 1. SETUP FONTS ---
const golos = Golos_Text({
    weight: ["400", "500", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-golos",
});

const logo = Poppins({
    weight: ["400", "500", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-logo",
});

const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-press-start",
});

// Setup font DM Sans untuk teks biasa, menu, & tombol
const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-dm-sans",
});

// --- 2. SEO METADATA SUPER LENGKAP ---
export const metadata = {
    metadataBase: new URL("https://dmp.bio"), // Pastikan domain ini benar

    // Title Template: "Halaman | PT. Dania Multi Prima"
    title: {
        default:
            "PT. Dania Multi Prima - IT Consultant & AI Solutions Indonesia",
        template: "%s | PT. Dania Multi Prima",
    },

    description:
        "Mitra Teknologi Terpercaya untuk Transformasi Digital. Spesialis AI Development, Smart City Government, SIMRS Rumah Sakit, dan Software Enterprise di Indonesia.",

    // Keywords sangat penting untuk pencarian
    keywords: [
        // --- SKALA NASIONAL (INDONESIA) ---
        "Konsultan IT di Indonesia",
        "Konsultan IT Terbaik di Indonesia",
        "Perusahaan IT di Indonesia",
        "Jasa Konsultan IT Indonesia",
        "Software House Indonesia",
        "Software House Terbaik di Indonesia",
        "Jasa Programmer Indonesia",
        "Programmer Profesional Indonesia",
        "Jasa Pembuatan Aplikasi Indonesia",
        "Vendor IT Seluruh Indonesia",
        "Konsultan Teknologi Informasi Indonesia",

        // --- PEMERINTAH & BUMN (GOV & ENTERPRISE) ---
        "Konsultan IT Pemerintah",
        "Konsultan IT Pemerintahan",
        "Vendor IT Pemerintahan",
        "Jasa Pembuatan Aplikasi SPBE",
        "Aplikasi Smart City Pemerintah",
        "Software House Pemerintahan",
        "Pengembang Sistem E-Government Indonesia",
        "Konsultan Teknologi Pemerintahan Indonesia",
        "Vendor E-Katalog Pemerintah Daerah",
        "Vendor E-Katalog Nasional",
        "Jasa Software House BUMN dan Pemerintah",
        "Sistem Informasi Pemerintahan",
        "Pembuatan Aplikasi SPBE Pemerintahan",

        // --- KOTA & PROVINSI DI INDONESIA (SUMATERA) ---
        "Konsultan IT Aceh",
        "Software House Aceh",
        "Vendor IT Banda Aceh",
        "Konsultan IT Medan",
        "Software House Medan",
        "Programmer Medan",
        "Vendor IT Sumatera Utara",
        "Konsultan IT Padang",
        "Software House Padang",
        "Vendor IT Sumatera Barat",
        "Konsultan IT Pekanbaru",
        "Software House Riau",
        "Konsultan IT Batam",
        "Software House Kepulauan Riau",
        "Konsultan IT Tanjungpinang",
        "Konsultan IT Jambi",
        "Konsultan IT Palembang",
        "Software House Sumatera Selatan",
        "Konsultan IT Bengkulu",
        "Konsultan IT Bangka Belitung",
        "Konsultan IT Pangkalpinang",
        "Konsultan IT Bandar Lampung",
        "Software House Lampung",

        // --- KOTA & PROVINSI DI INDONESIA (JAWA & BALI) ---
        "Konsultan IT Jakarta",
        "Software House Jakarta",
        "Vendor IT DKI Jakarta",
        "Konsultan IT Serang",
        "Konsultan IT Banten",
        "Konsultan IT Tangerang",
        "Konsultan IT Bandung",
        "Software House Bandung",
        "Vendor IT Jawa Barat",
        "Konsultan IT Semarang",
        "Software House Semarang",
        "Vendor IT Jawa Tengah",
        "Konsultan IT Yogyakarta",
        "Software House Jogja",
        "Vendor IT DIY",
        "Konsultan IT Surabaya",
        "Software House Surabaya",
        "Vendor IT Jawa Timur",
        "Konsultan IT Malang",
        "Konsultan IT Denpasar",
        "Konsultan IT Bali",
        "Software House Bali",

        // --- KOTA & PROVINSI DI INDONESIA (KALIMANTAN) ---
        "Konsultan IT Pontianak",
        "Konsultan IT Kalimantan Barat",
        "Konsultan IT Palangkaraya",
        "Konsultan IT Kalimantan Tengah",
        "Konsultan IT Banjarmasin",
        "Konsultan IT Banjarbaru",
        "Konsultan IT Kalimantan Selatan",
        "Konsultan IT Samarinda",
        "Konsultan IT Balikpapan",
        "Konsultan IT Kalimantan Timur",
        "Konsultan IT IKN Nusantara",
        "Konsultan IT Tarakan",
        "Konsultan IT Kalimantan Utara",

        // --- KOTA & PROVINSI DI INDONESIA (SULAWESI) ---
        "Konsultan IT Makassar",
        "Software House Makassar",
        "Vendor IT Sulawesi Selatan",
        "Konsultan IT Manado",
        "Konsultan IT Sulawesi Utara",
        "Konsultan IT Palu",
        "Konsultan IT Sulawesi Tengah",
        "Konsultan IT Kendari",
        "Konsultan IT Sulawesi Tenggara",
        "Konsultan IT Gorontalo",
        "Konsultan IT Mamuju",
        "Konsultan IT Sulawesi Barat",

        // --- KOTA & PROVINSI DI INDONESIA (NUSA TENGGARA, MALUKU, PAPUA) ---
        "Konsultan IT Mataram",
        "Konsultan IT NTB",
        "Nusa Tenggara Barat",
        "Konsultan IT Kupang",
        "Konsultan IT NTT",
        "Nusa Tenggara Timur",
        "Konsultan IT Ambon",
        "Konsultan IT Maluku",
        "Konsultan IT Ternate",
        "Konsultan IT Maluku Utara",
        "Konsultan IT Jayapura",
        "Konsultan IT Papua",
        "Konsultan IT Sorong",
        "Konsultan IT Papua Barat",
        "Konsultan IT Manokwari",
        "Konsultan IT Merauke",
        "Konsultan IT Nabire",
        "Konsultan IT Wamena",

        // --- LSI & VARIANT UMUM (Broad Topics) ---
        "IT Consultant Medan",
        "IT Consultant Deli Serdang",
        "Konsultan IT Bersertifikat Indonesia",
        "Jasa Pembuatan Aplikasi Pemerintahan (SPBE)",
        "Software House Terpercaya di Sumatera Utara",

        // --- FOKUS AI & KECERDASAN BUATAN (LOKAL & NASIONAL) ---
        "AI Developer Medan",
        "AI Developer Indonesia",
        "Jasa Machine Learning & AI Indonesia",
        "Perusahaan AI di Jakarta",
        "Perusahaan AI di Medan",
        "Perusahaan AI di Indonesia",
        "Konsultan Kecerdasan Buatan di Medan",
        "Konsultan Kecerdasan Buatan di Jakarta",
        "Konsultan Kecerdasan Buatan Indonesia",
        "Jasa Pembuatan AI Indonesia",
        "Vendor Kecerdasan Buatan",
        "Vendor AI Indonesia",
        "Vendor AI Jakarta",
        "Vendor AI Medan",
        "Jasa Pembuatan Chatbot AI",
        "Jasa Chatbot AI Medan",
        "Jasa Chatbot AI Jakarta",
        "Jasa Pembuatan Chatbot WhatsApp AI",
        "Jasa Machine Learning Indonesia",
        "Jasa Machine Learning Medan",
        "Jasa Machine Learning Jakarta",
        "Pengembang AI Sumatera Utara",
        "Pengembang AI Deli Serdang",
        "AI Developer Jakarta",
        "AI Developer Surabaya",
        "AI Developer Bandung",
        "AI Developer Bali",
        "Perusahaan Artificial Intelligence Indonesia",
        "Solusi AI untuk Perusahaan",
        "Jasa Integrasi AI ChatGPT",
        "Konsultan Implementasi AI",
        "Jasa Pembuatan Software AI Indonesia",
        "Jasa Pembuatan Sistem AI",

        // --- FOKUS APLIKASI & TEKNOLOGI SPESIFIK (LOKAL & NASIONAL) ---
        "Konsultan Aplikasi Medan",
        "Konsultan Aplikasi Jakarta",
        "Konsultan Aplikasi Indonesia",
        "Jasa Pembuatan Aplikasi Medan",
        "Jasa Pembuatan Aplikasi Jakarta",
        "Jasa Pembuatan Aplikasi Custom Indonesia",
        "Vendor SIMRS Jakarta",
        "SIMRS Jakarta",
        "Vendor SIMRS Medan",
        "Sistem Informasi Rumah Sakit Indonesia",
        "Aplikasi Rekam Medis Medan",
        "Aplikasi Rekam Medis Jakarta",
        "Vendor E-Rekam Medis Indonesia",
        "Vendor Aplikasi ERP Jakarta",
        "Vendor Aplikasi ERP Medan",
        "Jasa Pembuatan ERP Indonesia",
        "Pembuatan Aplikasi Keuangan",
        "Sistem e-Ticketing Indonesia",
        "Jasa Pembuatan Aplikasi Koperasi",
        "Jasa IoT Jakarta",
        "Jasa Internet of Things Medan",
        "Konsultan IoT Indonesia",
        "Software House SPBE Jakarta",
        "Konsultan SPBE Jakarta",
        "Konsultan SPBE Indonesia",
        "Aplikasi Perkantoran Jakarta",
        "Sistem HRD Custom Indonesia",
        "Vendor Aplikasi Payroll Indonesia",

        // --- JASA PEMBUATAN SISTEM SPESIFIK (HIGH CONVERSION) ---
        "Pembuatan sistem ERP di Medan",
        "Jasa pembuatan ERP di Medan",
        "Pembuatan ERP custom Indonesia",
        "Pembuatan SIMRS di Medan",
        "Jasa pembuatan SIMRS di Medan",
        "Pembuatan SIMRS Nasional",
        "Pembuatan aplikasi POS di Medan",
        "Jasa pembuatan aplikasi kasir POS Medan",
        "Pembuatan POS custom Indonesia",
        "Jasa custom software di Medan",
        "Pembuatan custom software Medan",
        "Pembuatan custom software Indonesia",
        "Jasa integrasi payment gateway Medan",
        "Pembuatan payment gateway Indonesia",
        "Jasa payment gateway",
        "Jasa pembuatan aplikasi keuangan di Medan",
        "Pembuatan software akuntansi Medan",

        // --- HEALTHCARE SPECIFIC ---
        "Sistem Informasi Manajemen Rumah Sakit (SIMRS) Terbaik",
        "Smart City Solutions Indonesia",
        "Aplikasi Rekam Medis Elektronik (RME)",
        "Vendor E-Katalog Pemerintah Sumut",

        // --- CORPORATE IDENTITY ---
        "PT Dania Multi Prima",
        "PT DMP",
        "DMP IT Consultant",

        // --- HIGH-INTENT SERVICES ---
        "Jasa Pembuatan Website Perusahaan Medan",
        "Jasa Pembuatan Website Perusahaan Indonesia",
        "Jasa Pembuatan Aplikasi Mobile Android iOS",
        "Jasa Bikin Web Toko Online",
        "Jasa IT Custom Seluruh Indonesia",

        // --- BRIDGING & INTEGRATION ---
        "Jasa Bridging BPJS V-Claim & PCare",
        "Integrasi SATUSEHAT Kemenkes",
        "Pembuatan API Payment Gateway",

        // --- ERP & CUSTOM SOFTWARE ---
        "Pembuatan Software ERP Custom",
        "Aplikasi Kasir POS Terintegrasi",
        "Aplikasi E-Office Tata Naskah Dinas",
        
        // --- BROAD & GENERAL TECH QUERIES (UMUM) ---
        "Perusahaan IT", "Perusahaan Teknologi", "Startup IT Indonesia",
        "Bikin Aplikasi", "Bikin Website", "Jasa Pembuatan Aplikasi", "Jasa Bikin Web",
        "Web Developer Indonesia", "App Developer Indonesia", "Konsultan Teknologi",
        "Pakar IT Indonesia", "Jasa IT Terpercaya", "Vendor IT Terbaik", "Solusi IT Perusahaan",
        "Digitalisasi Bisnis", "Transformasi Digital Perusahaan", "Jasa Digitalisasi Perusahaan",
        "Layanan IT Support", "Jasa Programmer", "Cari Programmer", "Cari Vendor IT",
        "Perusahaan Software", "Jasa Coding", "Jasa Sistem Informasi", "Bikin Sistem Web",
        "Pembuatan Sistem Informasi", "Konsultan Software",
        
        // --- BROAD AI & FUTURE TECH ---
        "Pakar AI Indonesia", "Solusi Kecerdasan Buatan", "Penerapan AI untuk Bisnis",
        "Jasa Bikin AI", "Buat Chatbot Sendiri", "Integrasi Sistem AI", "Konsultan Machine Learning",
        "Jasa Data Science", "Perusahaan Data Analytics", "Internet of Things Indonesia",
        "Otomatisasi Bisnis", "Solusi Smart City",
        
        // --- SPESIFIK LOKASI UNTUK PENCARIAN UMUM (MEDAN, SUMUT, NASIONAL & PROVINSI) ---
        "Perusahaan IT Medan", "Perusahaan IT Sumatera Utara", "Perusahaan IT Jakarta", "Perusahaan IT Surabaya",
        "Bikin Aplikasi Medan", "Bikin Aplikasi Sumatera Utara", "Bikin Aplikasi Jakarta", "Bikin Aplikasi Surabaya",
        "Bikin Website Medan", "Bikin Website Sumatera Utara", "Bikin Website Jakarta", "Bikin Website Bali",
        "Cari Programmer Medan", "Cari Programmer Jakarta", "Cari Programmer Indonesia",
        "Vendor IT Medan", "Vendor IT Sumatera Utara", "Vendor IT Jakarta", "Vendor IT Jawa Barat",
        "Layanan IT Support Medan", "Layanan IT Support Jakarta", "Layanan IT Support Indonesia",
        "Pakar AI Medan", "Pakar AI Sumatera Utara", "Pakar AI Jakarta", 
        "Jasa Bikin AI Medan", "Jasa Bikin AI Jakarta", "Jasa Bikin AI Indonesia",
        "Solusi Digitalisasi Medan", "Solusi Digitalisasi Jakarta",
        "Software House Aceh", "Software House Padang", "Software House Pekanbaru", "Software House Palembang",
        "Software House Bandung", "Software House Semarang", "Software House Yogyakarta",
        "Software House Pontianak", "Software House Balikpapan", "Software House Makassar", "Software House Manado",
        "Software House Bali", "Software House Lombok", "Software House Papua",
        "Jasa IT Aceh", "Jasa IT Riau", "Jasa IT Kepri", "Jasa IT Jambi", "Jasa IT Lampung",
        "Jasa IT Banten", "Jasa IT Jawa Tengah", "Jasa IT Jawa Timur", 
        "Jasa IT Kalimantan", "Jasa IT Sulawesi", "Jasa IT Maluku", "Jasa IT NTB", "Jasa IT NTT",
        
        // --- KATA KUNCI "BUAT WEB" & COMPANY PROFILE SPESIFIK ---
        "Buat web di Medan", "Buat web company profile di Medan", "Buat web company profile Medan",
        "Jasa buat web di Medan", "Tempat buat web di Medan", "Biaya buat web di Medan",
        "Buat aplikasi di Medan", "Jasa buat aplikasi di Medan", "Buat software di Medan",
        "Bikin web company profile di Medan", "Bikin web company profile Indonesia",
        "Pembuatan website company profile Medan", "Jasa pembuatan website company profile",
        "Buat website murah di Medan", "Buat website profesional di Medan",
        "Jasa buat website Medan", "Jasa buat web Medan", "Pembuat web di Medan",
        "Pembuat aplikasi di Medan", "Pembuat software di Medan"
    ],

    authors: [{ name: "PT. Dania Multi Prima" }],
    creator: "PT. Dania Multi Prima",
    publisher: "PT. Dania Multi Prima",

    // Agar Google Bot mau meng-crawl website
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Canonical URL (Mencegah konten duplikat)
    alternates: {
        canonical: "/",
    },

    // Tampilan saat di-share di WA/FB/LinkedIn
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: "https://dmp.bio",
        title: "PT. Dania Multi Prima - IT Consultant & AI Solutions",
        description:
            "Solusi Teknologi Terdepan: AI, IoT, dan Enterprise Software untuk Pemerintah & Swasta.",
        siteName: "Dania Multi Prima",
        images: [
            {
                url: "https://dmp.bio/opengraph-image.jpg", // URL absolut diperlukan NextJS
                width: 1200,
                height: 630,
                alt: "PT. Dania Multi Prima Portfolio",
            },
        ],
    },

    // Tampilan saat di-share di Twitter/X
    twitter: {
        card: "summary_large_image",
        title: "PT. Dania Multi Prima - Tech Innovations",
        description:
            "IT Consultant & AI Developer. Membangun masa depan digital Indonesia.",
        images: ["https://dmp.bio/opengraph-image.jpg"],
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
    // --- 3. JSON-LD STRUCTURED DATA (RAHASIA SEO) ---
    // Ini membantu Google menampilkan "Knowledge Panel" di sebelah kanan hasil pencarian
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PT. Dania Multi Prima",
        url: "https://dmp.bio",
        logo: "https://dmp.bio/dmp.png", // Ganti dengan URL logo kamu
        description:
            "Perusahaan Konsultan IT dan Pengembang AI terkemuka di Indonesia.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Medan",
            addressRegion: "Sumatera Utara",
            addressCountry: "ID",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-813-8050-510",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["Indonesian", "English"],
        },
        sameAs: ["https://www.instagram.com/daniamultiprima"],
    };

    return (
        <html lang="en">
            <head>
                <ThemeModeScript />

                {/* Google Analytics Placeholder */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
                </Script>
            </head>
            <body
                className={`${golos.variable} ${logo.variable} ${pressStart2P.variable} ${dmSans.variable} bg-[#020617] text-paragraph font-sans antialiased`}>
                {/* Loader Bar di atas */}
                <NextTopLoader
                    color="#2563EB" // Saya sesuaikan dengan warna biru logo Dania
                    height={4}
                    showSpinner={false}
                    shadow="0 0 10px #2563EB,0 0 5px #2563EB"
                />

                {/* JSON-LD Script */}
                <script
                    id="json-ld-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Main Content */}
                <main>{children}</main>

                {/* Floating WhatsApp Button (Fixed di semua halaman) */}
                <WhatsAppFloat />
            </body>
        </html>
    );
}
