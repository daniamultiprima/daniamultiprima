import Data from "./Data"
import Script from "next/script"

export const metadata = {
    title: 'Hubungi Kami - Konsultasi IT Gratis',
    
    description: 'Hubungi PT. Dania Multi Prima (Medan). Konsultasi gratis proyek pembuatan aplikasi, website, SIMRS, Smart City, dan solusi AI. Chat WhatsApp sekarang! Melayani seluruh Indonesia.',
    
    keywords: ['Alamat Dania Multi Prima', 'Nomor WA Konsultan IT', 'Nomor WA Konsultan IT Medan', 'Nomor WA Konsultan IT Deli Serdang', 'Kantor Software House Medan', 'Kantor Software House Deli Serdang', 'Jasa IT Support Sumatera Utara', 'Jasa IT Support Medan', 'Jasa IT Support Deli Serdang', "Jasa Website / Aplikasi Medan", "Jasa Website / Aplikasi Deli Serdang", "Jasa AI Medan", "Jasa AI Deli Serdang"],
    
    alternates: {
        canonical: '/contacts',
    },
    
    openGraph: {
        title: 'Hubungi Tim Ahli IT - PT. Dania Multi Prima',
        description: 'Diskusikan proyek digital Anda bersama kami. Fast Response via WhatsApp.',
        url: 'https://dmp.bio/contacts',
    }
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT. Dania Multi Prima",
    "image": "https://dmp.bio/opengraph-image.png",
    "telephone": "+62-821-6621-6671",
    "email": "daniamultiprima@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal",
        "addressLocality": "Deli Serdang",
        "addressRegion": "Sumatera Utara",
        "postalCode": "20351",
        "addressCountry": "ID"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 3.600000, 
        "longitude": 98.600000
    },
    "url": "https://dmp.bio/contacts",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "09:00",
        "closes": "17:00"
    }
}
 
export default async function Contacts() {  
    return (
        <>
            <Script
                id="contact-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Data/>
        </>
    );
}