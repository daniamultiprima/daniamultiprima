import Data from "./Data"
import Script from "next/script"

export const metadata = {
    
    title: 'Kontak Software House Medan & Konsultan IT | PT. Dania Multi Prima',
    
    
    description: 'Hubungi PT. Dania Multi Prima (0813-8050-510). Konsultasi Gratis Jasa Pembuatan Aplikasi, Website, & Sistem Pemerintahan (SPBE) di Medan, Deli Serdang & Seluruh Indonesia.',
    
    
    keywords: [
        
        'Nomor WA Software House Medan',
        'Alamat Konsultan IT Medan',
        'Kontak Vendor IT Pemerintahan',
        'Jasa Pembuatan Aplikasi Deli Serdang',
        'Kantor Dania Multi Prima',
        
        
        'IT Consultant Sunggal',
        'Software House Binjai',
        'Web Developer Sumatera Utara',
        
        
        'Konsultasi IT Gratis',
        'Jasa Pembuatan SIMRS'
    ],
    
    alternates: {
        canonical: 'https://dmp.bio/contacts',
    },
    
    openGraph: {
        title: 'Hubungi Tim Ahli IT - PT. Dania Multi Prima',
        description: 'Butuh Solusi Digital? Chat WhatsApp Kami Sekarang (Fast Response).',
        url: 'https://dmp.bio/contacts',
        images: ['/opengraph-image.png'],
        type: 'website',
    }
}


const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "ProfessionalService",
            "name": "PT. Dania Multi Prima",
            "image": "https://dmp.bio/opengraph-image.png",
            "telephone": "+62-813-8050-510",
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
            
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-813-8050-510",
                "contactType": "customer service",
                "areaServed": "ID",
                "availableLanguage": ["Indonesian", "English"]
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        }
    }
];
 
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