import Image from "next/image";

// dense: di HP tampil sebagai baris ringkas (logo kiri, teks kanan) untuk daftar panjang
export default function CaseCard({ p, dense = false }) {
  return (
    <article className={`px-box px-drop px-lift group flex h-full flex-col ${dense ? "max-sm:flex-row" : ""}`}>
      <div className={`relative aspect-[16/9] bg-white bg-pixel-dots ${dense ? "max-sm:aspect-auto max-sm:w-[96px] max-sm:shrink-0 max-sm:border-r-[3px] max-sm:border-ink" : ""}`}>
        <Image
          src={p.logo}
          alt={`Logo ${p.client}`}
          fill
          sizes={dense ? "(min-width:1024px) 360px, (min-width:768px) 45vw, (min-width:640px) 90vw, 96px" : "(min-width:1024px) 360px, (min-width:768px) 45vw, 90vw"}
          className={`object-contain px-10 pb-6 pt-12 transition-transform duration-300 group-hover:scale-105 ${dense ? "max-sm:p-3" : ""}`}
        />
        <span className={`absolute left-3 top-3 bg-ink px-2 py-1 font-pixel text-[11px] uppercase tracking-wider text-white ${dense ? "max-sm:hidden" : ""}`}>{p.cat}</span>
      </div>
      <div className={`flex min-w-0 flex-1 flex-col border-t-[3px] border-ink p-5 sm:p-6 ${dense ? "max-sm:border-t-0 max-sm:p-4" : ""}`}>
        {dense && <p className="font-pixel text-[11px] uppercase tracking-wider text-brand-700 sm:hidden">{p.cat}</p>}
        <h3 className={`t-h3 ${dense ? "max-sm:mt-1 max-sm:!text-[17px]" : ""}`}>{p.title}</h3>
        <p className="mt-1 text-[14px] font-semibold text-brand-700">{p.client}</p>
        <p className={`mt-4 flex-1 text-[15px] leading-relaxed text-ink-500 ${dense ? "max-sm:mt-2 max-sm:line-clamp-3 max-sm:text-[14px]" : ""}`}>{p.desc}</p>
        <ul className={`mt-5 flex flex-wrap gap-2 ${dense ? "max-sm:hidden" : ""}`} aria-label="Teknologi">
          {p.tech.map((t) => (
            <li key={t} className="bg-sand px-2 py-1 font-pixel text-[11px] text-ink-700">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
