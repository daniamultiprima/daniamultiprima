import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "./ui/Header";
import { POPULAR } from "./lib/regions";
import Footer from "./ui/Footer";
import WhatsAppFloat from "./ui/WhatsApp";
import JsonLd from "./ui/JsonLd";
import Effects from "./ui/Effects";
import { SITE, organizationLd } from "./lib/site";
import "./globals.css";

// Plus Jakarta Sans: dirancang oleh foundry Indonesia (Tokotype), selaras dengan wordmark logo DMP
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
// Departure Mono (MIT, Helena Zhang & Tobias Fried): font pixel untuk judul & label
// display "optional": tidak ada swap terlambat yang menunda LCP; font tetap di-preload
const pixel = localFont({ src: "./fonts/DepartureMono-Regular.woff2", display: "optional", variable: "--font-pixel", weight: "400", fallback: ["ui-monospace", "Menlo", "Consolas", "monospace"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport = {
  themeColor: "#F4F0E6",
};

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jasa Pembuatan Website, Aplikasi & Konsultan IT Indonesia | DMP",
    template: "%s | DMP",
  },
  description:
    "Software house & konsultan IT sejak 2017. Jasa pembuatan website, aplikasi, chatbot AI, SIMRS, dan SPBE untuk bisnis dan instansi di 514 kabupaten/kota Indonesia.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": "ID-SU",
    "geo.placename": "Medan",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sans.variable} ${pixel.variable}`} suppressHydrationWarning>
      <head>
        {/* Tandai bahwa JS aktif sebelum render, agar animasi masuk tidak berkedip */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <JsonLd data={organizationLd} />
        <Header popular={POPULAR.map((k) => ({ name: k.nama, href: k.href }))} />
        <main id="konten">{children}</main>
        <Footer />
        <Effects />
        <WhatsAppFloat />
        {GA_ID && /^G-[A-Z0-9]+$/.test(GA_ID) && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
