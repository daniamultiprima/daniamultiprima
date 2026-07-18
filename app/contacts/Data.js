"use client";

import React, { useState } from "react";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import { motion } from "framer-motion";
import {
    MapPin,
    Mail,
    Phone,
    ArrowRight,
    Send,
    MessageSquare,
    Radio,
    Terminal,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, subject, message } = formData;

        if (!firstName || !message) {
            alert(
                "Mohon isi Nama dan Pesan setidaknya agar kami bisa membantu.",
            );
            return;
        }

        const waNumber = "628138050510";
        const text = `Halo Admin *PT. Dania Multi Prima*,%0a%0aSaya ingin diskusi mengenai solusi IT.%0a%0a--------------------------------%0a*DATA PENGIRIM*%0a--------------------------------%0a👤 *Nama:* ${firstName} ${lastName}%0a📧 *Email:* ${email}%0a📝 *Topik:* ${subject}%0a--------------------------------%0a%0a*PESAN:*%0a${message}`;

        window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
    };

    return (
        <main className="bg-[#020617] min-h-screen text-white selection:bg-green-500 selection:text-black font-sans">
            <Navbar />

            {/* HEADER: SECURE COMMS LINK */}
            <section className="relative w-full pt-32 md:pt-48 pb-16 px-6 overflow-hidden bg-[#020617] border-b-[8px] border-black">
                {/* Radar/Grid Background */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-green-500/20 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-green-500/30 rounded-full pointer-events-none" />

                <div className="max-w-[1200px] mx-auto relative z-10 text-center flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black text-white leading-[1.1] tracking-tighter font-logo uppercase drop-shadow-[4px_4px_0_#000] md:drop-shadow-[6px_6px_0_#000] mb-8 break-words">
                        Hubungi Konsultan <br />
                        <span className="text-green-500 drop-shadow-[6px_6px_0_#000]">
                            IT Medan.
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black border-[4px] border-gray-600 p-6 max-w-2xl shadow-[8px_8px_0_0_#000]">
                        <p className="font-sans text-sm md:text-lg font-bold text-gray-300 leading-relaxed">
                            Diskusikan kebutuhan Software & Aplikasi Anda
                            bersama tim ahli kami. Melayani wilayah{" "}
                            <strong className="text-white bg-green-900 px-1 border-[2px] border-black">
                                Medan, Binjai, Deli Serdang
                            </strong>
                            , dan seluruh Indonesia secara Remote maupun
                            On-Site.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 bg-[#0a0f1c] relative z-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
                        {/* LEFT: RETRO PDA DEVICE (Contacts & Map) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col space-y-8 bg-gray-300 border-[8px] border-black shadow-[16px_16px_0_0_#000] p-4 md:p-8 relative">
                            {/* PDA Speaker Grill */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
                                <div className="w-12 h-2 bg-gray-500 rounded-full border-[2px] border-black" />
                                <div className="w-12 h-2 bg-gray-500 rounded-full border-[2px] border-black" />
                            </div>

                            <div className="mt-4 bg-black border-[4px] border-gray-600 p-4 shadow-[inset_4px_4px_0_0_#1e293b]">
                                <h2 className="font-logo text-2xl font-black text-white uppercase tracking-widest mb-2 border-b-[4px] border-gray-700 pb-2">
                                    <span className="text-green-500">&gt;</span>{" "}
                                    Kontak Resmi
                                </h2>
                                <p className="font-sans text-xs md:text-sm font-bold text-gray-400">
                                    Silakan hubungi kami melalui saluran berikut
                                    untuk respon cepat.
                                </p>
                            </div>

                            {/* Contact Cards (Rolodex Style) */}
                            <div className="space-y-4">
                                <ContactCard
                                    icon={MapPin}
                                    title="Alamat Kantor Pusat"
                                    content="Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal, Deli Serdang, Sumatera Utara, 20351."
                                    subContent="Indonesia"
                                    action="Buka di Google Maps"
                                    href="https://maps.google.com/?q=PT.+Dania+Multi+Prima"
                                />

                                <ContactCard
                                    icon={Phone}
                                    title="WhatsApp & Telepon"
                                    content="+62 813-8050-510"
                                    subContent="Senin - Sabtu, 09:00 - 17:00 WIB"
                                    action="Chat Langsung"
                                    href="https://wa.me/628138050510"
                                />

                                <ContactCard
                                    icon={Mail}
                                    title="Email Bisnis"
                                    content="daniamultiprima&#64;gmail.com"
                                    subContent="Untuk Penawaran Resmi & Kerjasama"
                                    action="Kirim Email"
                                    href="mailto:daniamultiprima&#64;gmail.com"
                                />
                            </div>

                            {/* Map as Retro GPS Screen */}
                            <div className="bg-black border-[6px] border-gray-600 p-2 shadow-[inset_4px_4px_0_0_#000] relative group">
                                <div className="absolute top-0 right-0 px-2 bg-green-500 text-black font-mono text-[9px] font-black uppercase tracking-widest border-b-[2px] border-l-[2px] border-black z-10">
                                    GPS_UPLINK_ACTIVE
                                </div>
                                <div className="w-full h-64 md:h-80 relative bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden border-[2px] border-black">
                                    <iframe
                                        title="Lokasi Kantor PT Dania Multi Prima"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.926227653787!2d98.599!3d3.600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzYnMDAuMCJOIDk4wrAzNicwMC4wIkU!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"></iframe>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: NEO-BRUTALIST FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border-[8px] border-black shadow-[16px_16px_0_0_#000] p-6 md:p-10 relative flex flex-col">
                            {/* Form Header */}
                            <div className="flex items-center justify-between border-b-[6px] border-black pb-4 mb-8">
                                <h3 className="font-logo text-2xl md:text-3xl font-black text-black uppercase tracking-widest">
                                    Mulai Proyek Anda
                                </h3>
                                <MessageSquare
                                    className="text-blue-600 animate-bounce"
                                    size={32}
                                    strokeWidth={3}
                                />
                            </div>

                            <form
                                className="space-y-6 flex-1 flex flex-col"
                                onSubmit={handleWhatsAppSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputGroup
                                        label="Nama Depan"
                                        name="firstName"
                                        placeholder="Cth: Budi"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <InputGroup
                                        label="Nama Belakang"
                                        name="lastName"
                                        placeholder="Cth: Perusahaan (Opsional)"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <InputGroup
                                    label="Email / No. HP"
                                    name="email"
                                    placeholder="admin@perusahaan.com"
                                    type="text"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                                <InputGroup
                                    label="Layanan yang Diminati"
                                    name="subject"
                                    placeholder="Cth: Pembuatan Website / Aplikasi Android"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />

                                <div className="space-y-2 flex-1 flex flex-col">
                                    <label className="font-mono text-xs font-black uppercase tracking-widest text-black">
                                        Ceritakan Kebutuhan Anda
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        className="w-full bg-gray-100 border-[4px] border-black px-4 py-3 font-sans text-sm font-bold text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#2563eb] transition-all resize-none flex-1"
                                        placeholder="Jelaskan fitur yang Anda inginkan di sini..."
                                        value={formData.message}
                                        onChange={handleChange}></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group bg-green-600 text-white font-logo text-xl md:text-2xl font-black uppercase tracking-widest py-5 border-[6px] border-black shadow-[6px_6px_0_0_#000] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_0_#000] hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-4 mt-8">
                                    Kirim Pesan (WhatsApp)
                                </button>

                                <p className="text-center font-mono text-[10px] md:text-xs text-gray-500 mt-4 font-bold uppercase tracking-widest">
                                    Gratis Konsultasi. Data Anda aman bersama
                                    kami.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ContactCard({ icon: Icon, title, content, subContent, action, href }) {
    const Component = href ? "a" : "div";
    return (
        <Component
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white border-[4px] border-black shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all duration-200 cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 border-[4px] border-black flex items-center justify-center flex-shrink-0 shadow-[inset_2px_2px_0_0_#93c5fd] group-hover:bg-blue-500 group-hover:text-white text-black transition-colors">
                <Icon size={28} className="stroke-[2.5px]" />
            </div>
            <div className="flex-1">
                <h4 className="font-logo text-lg font-black text-black uppercase mb-1">
                    {title}
                </h4>
                <p className="font-sans text-sm font-bold text-gray-700 leading-snug">
                    {content}
                </p>
                <p className="font-mono text-[10px] text-gray-500 mt-1 uppercase font-bold">
                    {subContent}
                </p>
            </div>
            <div className="hidden md:flex bg-black text-white p-2 border-[2px] border-black group-hover:bg-blue-500 transition-colors">
                <ArrowRight size={20} className="stroke-[3px]" />
            </div>
        </Component>
    );
}

function InputGroup({
    label,
    name,
    placeholder,
    type = "text",
    value,
    onChange,
}) {
    return (
        <div className="space-y-2">
            <label className="font-mono text-xs font-black uppercase tracking-widest text-black">
                {label}
            </label>
            <input
                type={type}
                name={name}
                className="w-full bg-gray-100 border-[4px] border-black px-4 py-3 font-sans text-sm font-bold text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0_0_#2563eb] transition-all"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
