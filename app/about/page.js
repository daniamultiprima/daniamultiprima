import Data from "./Data"

export const metadata = {
    title: 'Tentang Kami - Konsultan IT & Software House Terpercaya',
    
    description: 'Profil PT. Dania Multi Prima. Berpengalaman 8+ tahun sebagai Vendor IT, Sistem Enterprise, Jasa Pembuatan Aplikasi Pemerintahan (SPBE), SIMRS, dan Solusi Smart City di Indonesia.',
    
    keywords: ['Profil Perusahaan IT', 'Sejarah Dania Multi Prima', 'Visi Misi Perusahaan IT', 'Tim Developer Medan', 'Programmer Medan', 'Programmer Deli Serdang'],
    
    alternates: {
        canonical: '/about',
    },
}
 
export default async function About() {  
    return (
        <Data/>
    );
}