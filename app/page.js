import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import dynamic from "next/dynamic";
import Script from "next/script";

const LogoMarquee = dynamic(() => import("./ui/LogoMarque"), { ssr: false });
const ServicesBento = dynamic(() => import("./ui/Services"), { ssr: true });
const WhyChooseUs = dynamic(() => import("./ui/Why"), { ssr: true });
const ProjectShowcase = dynamic(() => import("./ui/Projects"), { ssr: true });
const TechStack = dynamic(() => import("./ui/TeachStack"), { ssr: true });
const PSE_EKatalog = dynamic(() => import("./ui/PSE_EKatalog"), { ssr: true });
const Footer = dynamic(() => import("./ui/Footer"), { ssr: true });

export const metadata = {
    title: "Software House Medan & IT Konsultan | PT DMP",

    description:
        "Konsultan IT & Software House Terbaik di Medan. Layanan Pembuatan Aplikasi Android/iOS, Website, SIMRS, Smart City, & SPBE. Hubungi PT DMP hari ini.",

    applicationName: "PT. Dania Multi Prima Website",
    authors: [{ name: "PT. Dania Multi Prima", url: "https://dmp.bio" }],
    generator: "Next.js",
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

        "Jasa Pembuatan Website",
        "Jasa Pembuatan Aplikasi Android",
        "Jasa Pembuatan Aplikasi iOS",
        "Software House Indonesia",
        "Software House Terbaik Indonesia",
        "Perusahaan IT BUMN",
        "Jasa Bikin Web Profil Perusahaan",
        "Jasa Pembuatan Aplikasi Kasir",
        "Software House Medan",
        "Jasa Pembuatan Aplikasi Medan",
        "Jasa Pembuatan Website Medan",
        "Konsultan IT Medan",
        "Programmer Medan",
        "Web Developer Medan",
        "Vendor IT Deli Serdang",
        "Jasa IT Support Medan",
        "Pembuatan Aplikasi Android Deli Serdang",
        "Perusahaan IT Terpercaya di Medan",
        "Jasa Web Design Medan",
        "Sistem Informasi Manajemen Rumah Sakit (SIMRS)",
        "Vendor SIMRS Terpercaya",
        "Aplikasi Smart City Indonesia",
        "Vendor Aplikasi SPBE Pemerintahan",
        "Sistem E-Katalog Pemerintah",
        "Vendor E-Katalog Lokal",
        "Software Klinik dan Apotek Terintegrasi",
        "Jasa Integrasi API",
        "Jasa Integrasi API Payment Gateway",
        "Pengembang AI Indonesia",
        "Internet of Things (IoT) Solutions",
        "Jasa Pembuatan Chatbot AI",
        "Implementasi Machine Learning Perusahaan",
        "Konsultan IT Bersertifikat",
        "Harga Jasa Pembuatan Aplikasi Android Perusahaan",
        "Biaya Pembuatan Website Toko Online",
        "Jasa IT Konsultan Profesional",
        "Bikin Aplikasi Custom Murah Berkualitas",
        
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
        "Pembuat aplikasi di Medan", "Pembuat software di Medan",
        
        // --- NEW KEYWORDS (AI, CYBERSECURITY, B2G, COMMUNICATION) ---
        "Jasa AI Agent Indonesia", "Agentic AI Indonesia", "Jasa Integrasi RAG", "Retrieval-Augmented Generation", 
        "Jasa Integrasi LLM", "Integrasi ChatGPT", "Konsultan AI Indonesia", "Jasa Pembuatan Chatbot WhatsApp AI",
        "Konsultan Cyber Security", "Jasa Konsultan UU PDP", "Data Protection Officer", "Audit Keamanan Sistem",
        "Jasa Integrasi WhatsApp Business API", "Omnichannel CRM", "Otomasi Proses Bisnis AI",
        "E-Katalog Lokal", "E-Katalog Nasional", "Vendor IT Pemko Medan", "Konsultan SPBE Sumatera Utara", 
        "SBU Spesialis IT", "ISO 27001 Tender IT", "Konsultan Transformasi Digital Bisnis"
    ],

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: "https://dmp.bio",
    },

    other: {
        "geo.region": "ID-SU",
        "geo.placename": "Medan",
        "geo.position": "3.600000;98.600000",
        ICBM: "3.600000, 98.600000",
    },

    openGraph: {
        title: "Software House Medan & IT Consultant - PT. Dania Multi Prima",
        description:
            "Solusi Teknologi End-to-End: Web, Mobile App, AI, IoT & Infrastruktur IT.",
        url: "https://dmp.bio",
        siteName: "PT. Dania Multi Prima",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "PT. Dania Multi Prima Portfolio & Services",
            },
        ],
        locale: "id_ID",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "PT. Dania Multi Prima - Software House Medan",
        description: "Jasa Pembuatan Aplikasi & Konsultan IT Terbaik.",
        images: ["/opengraph-image.jpg"],
    },
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "PT. Dania Multi Prima",
        image: "https://dmp.bio/opengraph-image.jpg",
        "@id": "https://dmp.bio",
        url: "https://dmp.bio",
        telephone: "+62-813-8050-510",
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal",
            addressLocality: "Deli Serdang",
            addressRegion: "Sumatera Utara",
            postalCode: "20351",
            addressCountry: "ID",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 3.6,
            longitude: 98.6,
        },
        areaServed: [
            { "@type": "City", name: "Medan" },
            { "@type": "City", name: "Binjai" },
            { "@type": "City", name: "Deli Serdang" },
            { "@type": "City", name: "Jakarta" },
            { "@type": "City", name: "Surabaya" },
            { "@type": "City", name: "Bandung" },
            { "@type": "AdministrativeArea", name: "Sumatera Utara" },
            { "@type": "Country", name: "Indonesia" },
        ],

        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "85",
            bestRating: "5",
            worstRating: "1",
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "09:00",
            closes: "17:00",
        },
        sameAs: [
            "https://www.instagram.com/daniamultiprima",
            "https://www.linkedin.com/company/dania-multi-prima",
        ],

        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Layanan IT & Software Development Terlengkap",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Jasa Pembuatan Aplikasi Android & iOS",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Jasa Pembuatan Website & E-Commerce",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Sistem Informasi Manajemen Rumah Sakit (SIMRS) & RME",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Konsultan IT, SPBE & Smart City Pemerintahan",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Pengembangan Artificial Intelligence (AI) & Machine Learning",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Pembuatan Software Custom (ERP, HRD, Keuangan)",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Internet of Things (IoT) Solutions",
                    },
                },
            ],
        },
    },

    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://dmp.bio",
        name: "PT. Dania Multi Prima",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://dmp.bio/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    },
];

export default async function Home() {
    return (
        <>
            <script
                id="home-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar />
            <Hero />
            <PSE_EKatalog />
            <LogoMarquee />
            <ServicesBento />
            <WhyChooseUs />
            <ProjectShowcase />
            <TechStack />
            <Footer />
        </>
    );
}
