import Link from "next/link";

// Lockup logo resmi DMP: tiga kotak huruf, garis biru, lalu nama perusahaan
export default function Logo({ tone = "dark", size = "md", className = "" }) {
  const big = size === "lg";
  return (
    <Link href="/" aria-label="Dania Multi Prima, ke beranda" className={`group inline-flex flex-col items-center gap-1 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-mark.svg" alt="" width={big ? 150 : 96} height={big ? 44 : 28} className={`${big ? "h-11" : "h-7"} w-auto`} />
      <span aria-hidden className="h-px w-[110%] bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      <span
        className={`whitespace-nowrap font-bold uppercase ${tone === "light" ? "text-white" : "text-ink"} ${
          big ? "text-[13px] tracking-[0.3em]" : "text-[10px] tracking-[0.24em]"
        }`}
      >
        Dania Multi Prima
      </span>
    </Link>
  );
}
