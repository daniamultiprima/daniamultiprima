import Link from "next/link";
import PixelIcon from "./ui/PixelIcon";
import { POPULAR } from "./lib/regions";

export const metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="bg-paper bg-pixel-dots py-24 md:py-32">
      <div className="container-site max-w-2xl text-center">
        <PixelIcon name="search" size={96} className="mx-auto text-brand-600" />
        <p className="mt-6 font-pixel text-[88px] leading-none text-ink">404</p>
        <h1 className="t-h3 mt-4">Halaman ini tidak ditemukan</h1>
        <p className="lead mx-auto mt-4 max-w-md">Mungkin alamatnya salah ketik atau halamannya sudah dipindahkan. Coba salah satu halaman berikut.</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Ke beranda
          </Link>
          <Link href="/wilayah" className="btn btn-light">
            Cari kota Anda
          </Link>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {POPULAR.slice(0, 8).map((k) => (
            <li key={k.kode}>
              <Link href={k.href} className="chip">
                {k.nama}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
