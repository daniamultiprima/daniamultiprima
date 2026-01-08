'use client';

import React, { useState } from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, ArrowRight, 
  Send, MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;

    if (!firstName || !message) {
      alert("Mohon isi Nama dan Pesan setidaknya agar kami bisa membantu.");
      return;
    }

    const waNumber = "628138050510"; 
    const text = `Halo Admin *PT. Dania Multi Prima*,%0a%0aSaya ingin diskusi mengenai solusi IT.%0a%0a--------------------------------%0a*DATA PENGIRIM*%0a--------------------------------%0a👤 *Nama:* ${firstName} ${lastName}%0a📧 *Email:* ${email}%0a📝 *Topik:* ${subject}%0a--------------------------------%0a%0a*PESAN:*%0a${message}`;

    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-green-400">
              Online & Ready to Discuss
            </span>
          </motion.div>


          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Hubungi Konsultan <br />
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.5)]">
              IT Medan.
            </span>
          </motion.h1>


          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Diskusikan kebutuhan Software & Aplikasi Anda bersama tim ahli kami. Melayani wilayah <strong>Medan, Binjai, Deli Serdang</strong>, dan seluruh Indonesia secara Remote maupun On-Site.
          </motion.p>
        </div>
      </section>


      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Kontak Resmi</h2>
                <p className="text-gray-400">
                  Silakan hubungi kami melalui saluran berikut untuk respon cepat.
                </p>
              </div>

              <div className="space-y-6">
                <ContactCard 
                  icon={MapPin}
                  title="Alamat Kantor Pusat"
                  
                  content="Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal, Deli Serdang, Sumatera Utara, 20351."
                  subContent="Indonesia"
                  action="Buka di Google Maps"
                  href="https://maps.google.com/?q=PT.+Dania+Multi+Prima" // Ganti dengan link Google Maps Asli Anda
                  delay={0.1}
                />

                <ContactCard 
                  icon={Phone}
                  title="WhatsApp & Telepon"
                  content="+62 813-8050-510"
                  subContent="Senin - Sabtu, 09:00 - 17:00 WIB"
                  action="Chat Langsung"
                  href="https://wa.me/628138050510"
                  delay={0.2}
                />

                <ContactCard 
                  icon={Mail}
                  title="Email Bisnis"
                  content="daniamultiprima@gmail.com"
                  subContent="Untuk Penawaran Resmi & Kerjasama"
                  action="Kirim Email"
                  href="mailto:daniamultiprima@gmail.com"
                  delay={0.3}
                />
              </div>

              <div className="w-full h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-white/5 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  title="Lokasi Kantor PT Dania Multi Prima"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.926227653787!2d98.599!3d3.600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMzYnMDAuMCJOIDk4wrAzNicwMC4wIkU!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                ></iframe>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-xl transform rotate-3" />
              
              <div className="relative bg-[#0B1120] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Mulai Proyek Anda</h3>
                  <MessageSquare className="text-blue-500 animate-bounce" size={24} />
                </div>

                <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label="Nama Depan" name="firstName" placeholder="Nama Anda" value={formData.firstName} onChange={handleChange} />
                    <InputGroup label="Nama Belakang" name="lastName" placeholder="Perusahaan (Opsional)" value={formData.lastName} onChange={handleChange} />
                  </div>

                  <InputGroup label="Email / No. HP" name="email" placeholder="example@gmail.com" type="text" value={formData.email} onChange={handleChange} />
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Layanan yang Diminati</label>
                    <input 
                      type="text"
                      name="subject"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Cth: Pembuatan Website / Aplikasi Android"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Ceritakan Kebutuhan Anda</label>
                    <textarea 
                      name="message"
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Jelaskan fitur yang Anda inginkan..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full group bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25"
                  >
                    Kirim Pesan (WhatsApp) 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Gratis Konsultasi awal 15 Menit. Data Anda aman bersama kami.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactCard({ icon: Icon, title, content, subContent, action, href, delay }) {
  const Component = href ? 'a' : 'div';
  return (
    <Component 
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-gray-300 font-medium leading-relaxed">{content}</p>
        <p className="text-sm text-gray-500 mt-1 mb-3">{subContent}</p>
        <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors">
          {action} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Component>
  )
}

function InputGroup({ label, name, placeholder, type = "text", value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">{label}</label>
      <input 
        type={type} 
        name={name}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}