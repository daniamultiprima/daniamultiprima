'use client';

import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contacts', href: '/contacts' },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/10 pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-r from-blue-900/20 to-[#0B1120] border border-white/5 overflow-hidden relative group">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Siap untuk <span className="text-blue-500">Transformasi?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Jangan biarkan teknologi membatasi visi Anda. Konsultasikan kebutuhan IT & Aplikasi perusahaan Anda sekarang.
            </p>
          </div>
          <div className="relative z-10">
            <a href="https://wa.me/628138050510" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Hubungi Kami
              <div className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300"><ArrowUpRight size={20} /></div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20 border-b border-white/5">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-black text-3xl md:text-4xl tracking-tighter leading-none group-hover:text-gray-200 transition-colors">DANIA</span>
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-600 rounded-full mb-1 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="h-[1px] w-8 bg-blue-500" />
                  <span className="text-gray-400 text-[10px] md:text-[11px] font-bold tracking-[0.35em] uppercase">Multi Prima</span>
                </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Mitra transformasi digital terpercaya di Medan. Spesialisasi kami meliputi pengembangan Software, Mobile App, dan Solusi Smart City untuk masa depan Indonesia.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all border border-white/5 hover:border-blue-500"><Icon size={18} /></a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-6 space-y-8">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-b border-white/10 pb-4 w-fit">Menu</h4>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-blue-500 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase border-b border-white/10 pb-4 w-fit">Kantor Pusat</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5"><MapPin size={16} /></div>
                <span className="leading-relaxed group-hover:text-gray-300 transition-colors">
                  Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal, Deli Serdang, Sumatera Utara, 20351.
                </span>
              </div>
              <a href="mailto:daniamultiprima@gmail.com" className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5"><Mail size={16} /></div>
                <span className="group-hover:text-blue-400 transition-colors">daniamultiprima@gmail.com</span>
              </a>
              <a href="tel:+628138050510" className="flex items-center gap-4 text-gray-400 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all border border-white/5"><Phone size={16} /></div>
                <span className="group-hover:text-blue-400 transition-colors">+62 813-8050-510</span>
              </a>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium tracking-wide">
          <p>&copy; {currentYear} PT. Dania Multi Prima. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}