import { ImageResponse } from 'next/og'

// Gunakan runtime 'edge' agar cepat
export const runtime = 'edge'

export const alt = 'PT. Dania Multi Prima - IT Consultant'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // 1. LOAD FONT DARI CDN (JSDelivr lebih stabil daripada GitHub Raw)
  // Kita gunakan Promise.all agar download font berjalan paralel (lebih cepat)
  const [fontBoldData, fontMediumData] = await Promise.all([
    fetch('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/plusjakartasans/PlusJakartaSans-ExtraBold.ttf').then((res) => res.arrayBuffer()),
    fetch('https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/plusjakartasans/PlusJakartaSans-Medium.ttf').then((res) => res.arrayBuffer())
  ]);

  return new ImageResponse(
    (
      // --- CONTAINER UTAMA ---
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#020617', // Background Dark Brand
          fontFamily: '"Plus Jakarta Sans"', // Panggil Font Disini
          position: 'relative',
        }}
      >
        {/* --- BACKGROUND GRID (Sangat Halus) --- */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
            backgroundSize: '70px 70px',
            opacity: 0.15,
          }}
        />

        {/* --- AMBIENT GLOW (Biru Mewah di Tengah) --- */}
        <div
          style={{
            position: 'absolute',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* --- MAIN CONTENT WRAPPER --- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, marginTop: -20 }}>
          
          {/* 1. LOGO BRANDING */}
          <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: 10 }}>
            {/* DANIA */}
            <span style={{ 
                fontSize: 100, 
                fontWeight: 900, // Extra Bold
                color: '#ffffff', 
                letterSpacing: '-3px',
                lineHeight: 1,
                marginRight: 10
            }}>
              DANIA
            </span>
            
            {/* TITIK BIRU (Visual Identity) */}
            <div style={{ 
                width: 24, 
                height: 24, 
                borderRadius: '50%', 
                backgroundColor: '#2563EB', 
                marginBottom: 20,
                boxShadow: '0 0 40px #2563EB' // Glowing dot
            }} />
          </div>

          {/* MULTI PRIMA */}
          <div style={{ 
              fontSize: 28, 
              color: '#9CA3AF', // Abu-abu premium
              fontWeight: 600, 
              letterSpacing: '10px', // Spacing lebar biar elegan
              textTransform: 'uppercase',
              marginBottom: 50
          }}>
            Multi Prima
          </div>

          {/* GARIS PEMISAH GRADASI */}
          <div style={{ 
            width: 120, 
            height: 4, 
            background: 'linear-gradient(90deg, transparent, #2563EB, transparent)', 
            marginBottom: 50,
            borderRadius: 4
          }} />

          {/* 2. TAGLINE UTAMA */}
          <div style={{ 
              fontSize: 48, 
              color: '#F3F4F6', 
              fontWeight: 800, // Bold tapi enak dibaca
              textAlign: 'center',
              letterSpacing: '-0.5px',
              lineHeight: 1.2
          }}>
            IT Consultant & AI Solutions
          </div>
          
          {/* Sub-tagline kecil */}
          <div style={{ 
              fontSize: 24, 
              color: '#60A5FA', // Biru muda
              marginTop: 15,
              fontWeight: 500
          }}>
            Software Development • Smart City • SIMRS
          </div>

        </div>

        {/* --- FOOTER INFO (Bawah) --- */}
        <div style={{ 
            position: 'absolute', 
            bottom: 50, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 20,
            padding: '10px 25px',
            backgroundColor: 'rgba(255,255,255,0.03)', // Glass effect tipis
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: 50
        }}>
            <div style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 600 }}>dmp.bio</div>
            <div style={{ width: 1, height: 15, backgroundColor: '#4B5563' }} />
            <div style={{ fontSize: 20, color: '#9CA3AF', fontWeight: 500 }}>Medan, Indonesia</div>
        </div>

      </div>
    ),
    // Config Fonts
    {
      ...size,
      fonts: [
        {
          name: 'Plus Jakarta Sans',
          data: fontBoldData,
          style: 'normal',
          weight: 900,
        },
        {
          name: 'Plus Jakarta Sans',
          data: fontMediumData,
          style: 'normal',
          weight: 500,
        },
      ],
    }
  )
}