import Image from "next/image";

export default function CaseCard({ p }) {
  return (
    <article className="px-box px-drop px-lift group flex h-full flex-col">
      <div className="relative aspect-[16/9] bg-white bg-pixel-dots">
        <Image src={p.logo} alt={`Logo ${p.client}`} fill sizes="(min-width:1024px) 360px, (min-width:768px) 45vw, 90vw" className="object-contain p-10 transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute left-3 top-3 bg-ink px-2 py-1 font-pixel text-[11px] uppercase tracking-wider text-white">{p.cat}</span>
      </div>
      <div className="flex flex-1 flex-col border-t-[3px] border-ink p-6">
        <h3 className="t-h3">{p.title}</h3>
        <p className="mt-1 text-[14px] font-semibold text-brand-700">{p.client}</p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-500">{p.desc}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Teknologi">
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
