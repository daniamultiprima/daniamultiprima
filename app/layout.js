import NextTopLoader from 'nextjs-toploader';
import { ThemeModeScript } from 'flowbite-react';
import { Golos_Text, Poppins } from 'next/font/google';
import Script from 'next/script'; // Penting untuk JSON-LD
import WhatsAppFloat from './ui/WhatsApp'; // Pastikan path ini sesuai
import "./globals.css";

// --- 1. SETUP FONTS ---
const golos = Golos_Text({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-golos'
});

const logo = Poppins({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-logo'
});

// --- 2. SEO METADATA SUPER LENGKAP ---
export const metadata = {
  metadataBase: new URL('https://dmp.bio'), // Pastikan domain ini benar
  
  // Title Template: "Halaman | PT. Dania Multi Prima"
  title: {
    default: "PT. Dania Multi Prima - IT Consultant & AI Solutions Indonesia",
    template: "%s | PT. Dania Multi Prima"
  },
  
  description: "Mitra Teknologi Terpercaya untuk Transformasi Digital. Spesialis AI Development, Smart City Government, SIMRS Rumah Sakit, dan Software Enterprise di Indonesia.",
  
  // Keywords sangat penting untuk pencarian
  keywords: [
    "IT Consultant Medan", 
    "IT Consultant Deli Serdang", 
    "IT Consultant Indonesia", 
    "Jasa Pembuatan Aplikasi Pemerintahan", 
    "AI Developer Medan", 
    "AI Programmer Medan", 
    "AI Developer Deli Serdang", 
    "AI Programmer Deli Serdang", 
    "AI Developer Indonesia", 
    "Software House Terpercaya", 
    "Sistem Informasi Manajemen Rumah Sakit (SIMRS)", 
    "Smart City Solutions",
    "PT Dania Multi Prima",
    "Jasa Pembuatan Website Medan",
    "Jasa Pembuatan Website Deli Serdang",
    "Jasa Pembuatan Aplikasi Medan",
    "Jasa Pembuatan Aplikasi Deli Serdang",
    "Konsultan IT Medan",
    "Konsultan IT Deli Serdang",
    "Kecerdasan Buatan Medan",
    "Kecerdasan Buatan Deli Serdang",
    "PT DMP",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL (Mencegah konten duplikat)
  alternates: {
    canonical: '/',
  },

  // Tampilan saat di-share di WA/FB/LinkedIn
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dmp.bio",
    title: "PT. Dania Multi Prima - IT Consultant & AI Solutions",
    description: "Solusi Teknologi Terdepan: AI, IoT, dan Enterprise Software untuk Pemerintah & Swasta.",
    siteName: "Dania Multi Prima",
    images: [
      {
        url: '/opengraph-image.jpg', // Pastikan gambar ini ada di folder public
        width: 1200,
        height: 630,
        alt: "PT. Dania Multi Prima Portfolio",
      },
    ],
  },

  // Tampilan saat di-share di Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: "PT. Dania Multi Prima - Tech Innovations",
    description: "IT Consultant & AI Developer. Membangun masa depan digital Indonesia.",
    images: ['/opengraph-image.jpg'],
  },

   
};

export default function RootLayout({ children }) {
  
  // --- 3. JSON-LD STRUCTURED DATA (RAHASIA SEO) ---
  // Ini membantu Google menampilkan "Knowledge Panel" di sebelah kanan hasil pencarian
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PT. Dania Multi Prima",
    "url": "https://dmp.bio",
    "logo": "https://dmp.bio/dmp.png", // Ganti dengan URL logo kamu
    "description": "Perusahaan Konsultan IT dan Pengembang AI terkemuka di Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Medan",
      "addressRegion": "Sumatera Utara",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-813-8050-510",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/daniamultiprima"
    ]
  };

  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${golos.variable} ${logo.variable} bg-[#020617]`}>
        
        {/* Loader Bar di atas */}
        <NextTopLoader 
          color="#2563EB" // Saya sesuaikan dengan warna biru logo Dania
          height={4}
          showSpinner={false}
          shadow="0 0 10px #2563EB,0 0 5px #2563EB"
        />

        {/* JSON-LD Script */}
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Main Content */}
        {children}

        {/* Floating WhatsApp Button (Fixed di semua halaman) */}
        <WhatsAppFloat />
        
      </body>
    </html>
  );
}