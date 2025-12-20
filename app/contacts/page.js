'use client';

import React, { useState } from 'react';
import Navbar from '@/ui/Navbar';
import Footer from '@/ui/Footer';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, ArrowRight, 
  Send, BrandWhatsapp 
} from 'lucide-react';

export default function ContactPage() {
  // State untuk menyimpan data inputan user
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Logic kirim ke WhatsApp
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Destructure data
    const { firstName, lastName, email, subject, message } = formData;

    // Validasi sederhana
    if (!firstName || !message) {
      alert("Mohon isi Nama dan Pesan setidaknya.");
      return;
    }

    // Format Pesan WhatsApp (menggunakan %0a untuk baris baru)
    const waNumber = "6282166216671"; // Nomor dari PDF
    const text = `Halo Admin *PT. Dania Multi Prima*,%0a%0aSaya ingin diskusi mengenai project baru.%0a%0a--------------------------------%0a*DATA PENGIRIM*%0a--------------------------------%0a👤 *Nama:* ${firstName} ${lastName}%0a📧 *Email:* ${email}%0a📝 *Subject:* ${subject}%0a--------------------------------%0a%0a*PESAN:*%0a${message}`;

    // Redirect ke WA
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="bg-[#020617] min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">Open for Partnership</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Let&#39;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              The Future.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Punya visi besar? Kami punya teknologinya. Hubungi tim ahli kami untuk konsultasi transformasi digital perusahaan Anda.
          </motion.p>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* LEFT COLUMN: CONTACT INFO */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-gray-400">Pilih saluran komunikasi yang paling nyaman untuk Anda.</p>
              </div>

              <div className="space-y-6">
                {/* Address Card */}
                <ContactCard 
                  icon={MapPin}
                  title="Headquarters"
                  content="Jln. Medan-Binjai, Diski, Km. 14.5, Sunggal, Deli Serdang, Sumatera Utara, 20351."
                  subContent="Indonesia"
                  action="View on Map"
                  delay={0.1}
                />

                {/* Email Card */}
                <ContactCard 
                  icon={Mail}
                  title="Email Inquiry"
                  content="daniamultiprima@gmail.com"
                  subContent="Respon dalam 24 Jam"
                  action="Send Email"
                  href="mailto:daniamultiprima@gmail.com"
                  delay={0.2}
                />

                {/* Phone Card */}
                <ContactCard 
                  icon={Phone}
                  title="Direct Line / WhatsApp"
                  content="+62 821-6621-6671"
                  subContent="Mon-Fri, 9am - 5pm WIB"
                  action="Chat on WA"
                  href="https://wa.me/6282166216671"
                  delay={0.3}
                />
              </div>
            </motion.div>

            {/* RIGHT COLUMN: FORM (WHATSAPP INTEGRATED) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Glow Behind Form */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-xl transform rotate-3" />
              
              <div className="relative bg-[#0B1120] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                   <div className="px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                      Direct to WhatsApp
                   </div>
                </div>
                
                <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup 
                      label="First Name" 
                      name="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <InputGroup 
                      label="Last Name" 
                      name="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <InputGroup 
                    label="Email Address" 
                    name="email" 
                    placeholder="john@company.com" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <InputGroup 
                    label="Subject / Project Type" 
                    name="subject" 
                    placeholder="Ex: Custom ERP Development" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                    <textarea 
                      name="message"
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Ceritakan sedikit tentang kebutuhan proyek Anda..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full group bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    Send to WhatsApp <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                     Pesan akan otomatis terbuka di aplikasi WhatsApp Anda.
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

// --- SUB-COMPONENTS ---

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