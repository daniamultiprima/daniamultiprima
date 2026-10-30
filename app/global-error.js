"use client";

import "./globals.css";

// Menggantikan root layout saat error fatal, jadi wajib punya <html> & <body>.
// Detail error tidak ditampilkan ke pengunjung (hanya kode digest untuk tim).
export default function GlobalError({ error, reset }) {
  return (
    <html lang="id">
      <body className="bg-paper font-sans text-ink-600">
        <main className="flex min-h-screen items-center justify-center px-5">
          <div className="max-w-lg text-center">
            <p className="font-mono text-sm font-bold uppercase tracking-widest text-brand-700">Error 500</p>
            <h1 className="mt-3 text-3xl font-extrabold text-ink">Terjadi gangguan sementara</h1>
            <p className="mt-4 leading-relaxed">Maaf, ada masalah di sisi kami. Silakan coba lagi beberapa saat.</p>
            {error?.digest && <p className="mt-4 font-mono text-xs text-ink-400">Kode: {error.digest}</p>}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button type="button" onClick={() => reset()} className="btn btn-primary">
                Coba lagi
              </button>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="btn btn-light">
                Ke beranda
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
