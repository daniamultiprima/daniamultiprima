import PixelIcon from "./PixelIcon";

// Ilustrasi antarmuka bergaya pixel (HTML/CSS, ringan & tajam).
// Nama & angka di dalamnya adalah contoh tampilan, bukan data klien.

function Bar({ title }) {
  return (
    <div className="flex items-center justify-between bg-ink px-3 py-2">
      <span className="font-pixel text-[11px] uppercase tracking-wider text-white">{title}</span>
      <span className="flex gap-1.5">
        <i className="h-2.5 w-2.5 bg-brand-400" />
        <i className="h-2.5 w-2.5 bg-[#64748B]" />
        <i className="h-2.5 w-2.5 bg-brand-400" />
      </span>
    </div>
  );
}

export function BrowserMock({ className = "" }) {
  return (
    <div className={`px-box px-drop ${className}`} aria-hidden>
      <Bar title="nusantara-agro.co.id" />
      <div className="p-4">
        <div className="flex items-center justify-between border-b-2 border-line pb-2">
          <span className="font-pixel text-[11px] text-ink">NUSANTARA AGRO</span>
          <span className="flex gap-3 text-[10px] font-semibold text-ink-500">
            <span>Profil</span>
            <span>Produk</span>
            <span>Kontak</span>
          </span>
        </div>
        <div className="mt-4 grid grid-cols-5 items-center gap-3">
          <div className="col-span-2 grid aspect-square place-items-center bg-brand-100">
            <svg viewBox="0 0 16 12" className="w-3/4" shapeRendering="crispEdges">
              <rect x="0" y="8" width="16" height="4" fill="#3F9F6E" />
              <rect x="2" y="3" width="2" height="5" fill="#8C6B4C" />
              <rect x="0" y="1" width="6" height="3" fill="#2F7D55" />
              <rect x="9" y="4" width="2" height="4" fill="#8C6B4C" />
              <rect x="7" y="2" width="6" height="3" fill="#3F9F6E" />
              <rect x="12" y="0" width="3" height="2" fill="#FBF9F4" />
            </svg>
          </div>
          <div className="col-span-3">
            <p className="text-[15px] font-extrabold leading-tight text-ink">Hasil kebun terbaik dari Sumatera</p>
            <p className="mt-1.5 text-[10px] leading-snug text-ink-500">Pemasok sawit & karet sejak 1998.</p>
            <span className="mt-2 inline-block bg-brand-600 px-2.5 py-1 text-[10px] font-bold text-white">Hubungi kami</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Sawit", "Karet", "Logistik"].map((t) => (
            <div key={t} className="border-2 border-line p-2">
              <div className="h-5 bg-sand" />
              <p className="mt-1.5 text-[10px] font-bold text-ink">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PhoneMock({ className = "" }) {
  return (
    <div className={`w-[208px] bg-ink p-2 px-drop ${className}`} style={{ boxShadow: "0 -3px 0 0 #0F1A33, 0 3px 0 0 #0F1A33, -3px 0 0 0 #0F1A33, 3px 0 0 0 #0F1A33" }} aria-hidden>
      <div className="bg-panel">
        <div className="flex items-center justify-between px-3 py-1.5 font-pixel text-[11px] text-ink">
          <span>07:28</span>
          <span className="h-2 w-12 bg-ink" />
          <span>▮▮▮</span>
        </div>
        <div className="px-3 pb-4">
          <p className="text-[10px] text-ink-500">Selamat pagi,</p>
          <p className="text-[14px] font-extrabold text-ink">Rina Siregar</p>
          <div className="mt-2.5 border-2 border-ink bg-white">
            <div className="relative h-20 bg-[linear-gradient(#E9E1CF_1px,transparent_1px),linear-gradient(90deg,#E9E1CF_1px,transparent_1px)] bg-[size:10px_10px]">
              <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 bg-brand-200/70" />
              <PixelIcon name="pin" size={24} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-700" />
            </div>
            <p className="border-t-2 border-ink px-2 py-1.5 text-[10px] font-semibold text-ink-600">✓ Di dalam area kantor</p>
          </div>
          <div className="mt-2.5 bg-brand-600 py-2.5 text-center text-[12px] font-bold text-white" style={{ boxShadow: "inset 0 -3px 0 #1E3A8A" }}>
            Absen masuk
          </div>
          {[
            ["Senin", "07:41"],
            ["Jumat", "07:55"],
          ].map(([d, t]) => (
            <div key={d} className="mt-1.5 flex items-center justify-between border-2 border-line bg-white px-2 py-1.5 text-[10px]">
              <span className="font-bold text-ink">{d}</span>
              <span className="font-pixel text-[11px] text-ink-500">{t}</span>
              <span className="font-semibold text-brand-700">Tepat waktu</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardMock({ className = "" }) {
  const bars = [42, 58, 51, 66, 72, 61, 78, 84, 70, 88, 92, 86];
  return (
    <div className={`px-box px-drop ${className}`} aria-hidden>
      <Bar title="anggaran 2026" />
      <div className="p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold text-ink-500">Realisasi</p>
            <p className="font-pixel text-[33px] leading-none text-ink">78,4%</p>
          </div>
          <span className="flex items-center gap-1.5 bg-brand-100 px-2 py-1 font-pixel text-[11px] text-brand-800">
            <i className="h-2 w-2 animate-blink bg-brand-600" /> LIVE
          </span>
        </div>
        <div className="mt-4 flex h-24 items-end gap-1">
          {bars.map((h, i) => (
            <span key={i} className={`mock-bar flex-1 ${i === bars.length - 1 ? "bg-brand-600" : "bg-brand-300"}`} style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 border-t-2 border-line pt-3">
          {[
            ["PAD", "412 M"],
            ["Belanja", "1,1 T"],
            ["OPD", "38"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[10px] text-ink-500">{k}</p>
              <p className="font-pixel text-[11px] text-ink">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QueueMock({ className = "" }) {
  const rows = [
    ["A-021", "Poli Anak", "Dipanggil", true],
    ["B-014", "Penyakit Dalam", "Menunggu", false],
    ["C-007", "Poli Gigi", "Menunggu", false],
  ];
  return (
    <div className={`px-box px-drop ${className}`} aria-hidden>
      <Bar title="antrean rawat jalan" />
      <div className="p-4">
        {rows.map(([no, poli, st, on]) => (
          <div key={no} className="flex items-center justify-between border-b-2 border-line py-2 text-[11px] last:border-0">
            <span className="font-pixel text-[11px] text-ink">{no}</span>
            <span className="flex-1 px-3 text-ink-500">{poli}</span>
            <span className={`px-2 py-0.5 font-bold ${on ? "animate-pulse bg-brand-600 text-white" : "bg-sand text-ink-500"}`}>{st}</span>
          </div>
        ))}
        <p className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-brand-800">
          <PixelIcon name="badge" size={24} className="-my-1 text-brand-600" /> Terkirim ke SATUSEHAT · klaim BPJS: 126
        </p>
      </div>
    </div>
  );
}

export function SecurityMock({ className = "" }) {
  const rows = [
    ["Kritis", 0],
    ["Tinggi", 1],
    ["Sedang", 3],
    ["Rendah", 6],
  ];
  return (
    <div className={`px-box px-drop ${className}`} aria-hidden>
      <Bar title="hasil pentest" />
      <div className="space-y-2.5 p-4">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center gap-3 text-[11px]">
            <span className="w-12 text-ink-500">{k}</span>
            <span className="flex h-3 flex-1 gap-0.5 bg-sand p-0.5">
              {Array.from({ length: 10 }, (_, i) => (
                <i key={i} className={`flex-1 ${i < v ? "bg-brand-600" : ""}`} />
              ))}
            </span>
            <span className="w-4 text-right font-pixel text-[11px] text-ink">{v}</span>
          </div>
        ))}
        <p className="bg-brand-100 px-2.5 py-1.5 text-[10px] font-semibold text-brand-800">1 temuan tinggi sudah diperbaiki</p>
      </div>
    </div>
  );
}

// Cuplikan chat statis (tanpa JavaScript) untuk kartu layanan
export function ChatStatic({ className = "" }) {
  return (
    <div className={`px-box px-drop w-full max-w-[290px] ${className}`} aria-hidden>
      <div className="flex items-center gap-2.5 bg-ink px-3 py-2.5">
        <span className="grid h-8 w-8 place-items-center bg-brand-600 font-pixel text-[11px] text-white">AI</span>
        <div className="leading-tight">
          <p className="text-[13px] font-bold text-white">Asisten Layanan</p>
          <p className="font-pixel text-[11px] text-brand-300">online</p>
        </div>
      </div>
      <div className="flex h-[200px] flex-col justify-end gap-2 bg-sand p-3">
        <p className="max-w-[86%] self-end border-2 border-ink bg-brand-600 px-2.5 py-1.5 text-[12px] leading-snug text-white">Sabtu buka nggak untuk urus KTP?</p>
        <p className="max-w-[86%] self-start border-2 border-ink bg-white px-2.5 py-1.5 text-[12px] leading-snug text-ink">
          Layanan tatap muka buka Senin–Jumat. Hari Sabtu bisa daftar lewat layanan online.
        </p>
        <span className="flex gap-1 self-start border-2 border-ink bg-white px-2.5 py-2.5">
          {[0, 1, 2].map((d) => (
            <i key={d} className="h-1.5 w-1.5 animate-dot bg-ink" style={{ animationDelay: `${d * 0.2}s` }} />
          ))}
        </span>
      </div>
    </div>
  );
}
