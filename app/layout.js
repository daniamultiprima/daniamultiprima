


import NextTopLoader from 'nextjs-toploader';
import { ThemeModeScript } from 'flowbite-react'; 
import localFont from 'next/font/local' 

import {Golos_Text, Poppins} from 'next/font/google' 
const golos = Golos_Text({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-golos'
})

const logo = Poppins({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-logo'
})

 
 

import "./globals.css";


export const metadata = { 
  metadataBase: new URL('https://ajthinklab.com'), 
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  openGraph: {
    title: "PT. Dania Multi Prima",
    description: "IT Consultant and AI Projects",
    image: 'opengraph-image.png'
  },
  twitter: {
    card: 'summary_large_image', 
    title: "PT. Dania Multi Prima",
    description: "IT Consultant and AI Developer",
    image: 'opengraph-image.png'
  },
  title: "PT. Dania Multi Prima",
  description: "IT Consultant and AI Developer",
};

export default function RootLayout({ children }) {
   
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>   
      <body className={`${golos.variable} ${logo.variable}`}>
      <NextTopLoader 
      color="#f7b932"
        height={5}
        showSpinner={false}
      />
      {children}
      </body>
    </html>
  );
}
