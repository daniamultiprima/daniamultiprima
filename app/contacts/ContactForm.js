"use client";

import { useState } from "react";
import PixelIcon from "@/ui/PixelIcon";
import { SITE } from "@/lib/site";

const LIMITS = { name: 80, org: 120, contact: 120, topic: 120, message: 1500 };
const TOPICS = ["Pembuatan website", "Pembuatan aplikasi", "Chatbot / solusi AI", "SIMRS / rekam medis", "SPBE / sistem pemerintahan", "Keamanan siber", "Jaringan & server", "Lainnya"];

// Buang karakter kontrol & batasi panjang input
const clean = (v, max) => v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").slice(0, max);

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", org: "", contact: "", topic: TOPICS[0], message: "" });
  const [error, setError] = useState("");

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: clean(value, LIMITS[name] ?? 120) }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.message.trim().length < 10) {
      setError("Mohon isi nama dan ceritakan kebutuhan Anda (minimal 10 karakter).");
      return;
    }
    setError("");
    const text = [
      "Halo PT Dania Multi Prima, saya ingin berdiskusi.",
      "",
      `Nama: ${form.name.trim()}`,
      form.org.trim() ? `Instansi/Perusahaan: ${form.org.trim()}` : null,
      form.contact.trim() ? `Kontak: ${form.contact.trim()}` : null,
      `Topik: ${form.topic}`,
      "",
      form.message.trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");
    // encodeURIComponent mencegah input pengguna menyisipkan parameter URL
    window.open(`https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  const field = "w-full border-[3px] border-ink bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-400 focus:border-brand-600 focus:bg-brand-50 focus:outline-none";
  const label = "mb-2 block font-pixel text-[11px] uppercase tracking-wider text-ink-700";

  return (
    <form onSubmit={submit} noValidate className="px-box px-drop flex flex-col gap-5 p-6 md:p-9">
      <div>
        <h2 className="t-h2 !text-[33px]">Ceritakan proyek Anda</h2>
        <p className="mt-2 text-[15px] text-ink-500">Pesan dikirim lewat WhatsApp. Kami biasanya membalas di hari kerja yang sama.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className={label}>Nama *</span>
          <input name="name" required autoComplete="name" value={form.name} onChange={update} maxLength={LIMITS.name} placeholder="Nama Anda" className={field} />
        </label>
        <label className="block">
          <span className={label}>Instansi / perusahaan</span>
          <input name="org" autoComplete="organization" value={form.org} onChange={update} maxLength={LIMITS.org} placeholder="Opsional" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email / no. HP</span>
          <input name="contact" autoComplete="email" value={form.contact} onChange={update} maxLength={LIMITS.contact} placeholder="Untuk kami hubungi balik" className={field} />
        </label>
        <label className="block">
          <span className={label}>Topik</span>
          <select name="topic" value={form.topic} onChange={update} className={field}>
            {TOPICS.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className={label}>Kebutuhan Anda *</span>
        <textarea name="message" rows={5} required value={form.message} onChange={update} maxLength={LIMITS.message} placeholder="Contoh: kami butuh website company profile 6 halaman dan bisa dikelola sendiri..." className={`${field} resize-y`} />
        <span className="mt-1 block text-right text-[12px] text-ink-400">
          {form.message.length}/{LIMITS.message}
        </span>
      </label>
      {error && (
        <p role="alert" className="border-l-[6px] border-brand-600 bg-brand-100 px-4 py-3 text-[14px] font-semibold text-ink">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn-primary w-full">
        <PixelIcon name="send" size={24} /> Kirim lewat WhatsApp
      </button>
      <p className="text-center text-[13px] text-ink-400">Data Anda hanya dipakai untuk membalas pesan ini.</p>
    </form>
  );
}
