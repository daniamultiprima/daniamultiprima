// Seluruh konten situs di satu tempat, dipakai oleh halaman & structured data.

export const STATS = [
  { value: "2017", label: "Berdiri sejak" },
  { value: "35+", label: "Proyek selesai" },
  { value: "20+", label: "Klien instansi & bisnis" },
  { value: "514", label: "Kabupaten/kota terjangkau" },
];

export const CERTIFICATIONS = [
  {
    id: "ekatalog",
    icon: "cart",
    title: "E-Katalog LKPP",
    org: "Pengadaan pemerintah (INAPROC)",
    desc: "Instansi bisa membeli layanan kami langsung lewat E-Katalog nasional, sektoral, maupun lokal. Proses pengadaan jadi lebih cepat dan transparan.",
    ref: "Toko: PT Dania Multi Prima",
    href: "https://katalog.inaproc.id/gusfahmi-alghazali",
  },
  {
    id: "pse",
    icon: "shield",
    title: "PSE Komdigi",
    org: "Penyelenggara Sistem Elektronik",
    desc: "Terdaftar resmi sebagai PSE. Sistem yang kami bangun siap mengikuti aturan Pelindungan Data Pribadi (UU PDP).",
    ref: "No. 021471.01/DJAI.PSE/12/2025",
    href: null,
  },
  {
    id: "satusehat",
    icon: "hospital",
    title: "SATUSEHAT Kemenkes",
    org: "Penyedia Rekam Medis Elektronik",
    desc: "Terverifikasi di platform SATUSEHAT sebagai penyedia sistem RME, jadi data pasien rumah sakit dan klinik bisa tersambung ke Kemenkes.",
    ref: "Terdaftar di daftar sistem RME",
    href: "https://satusehat.kemkes.go.id/platform/system-rme-list/1224",
  },
];

export const SERVICE_CATEGORIES = ["Semua", "Pengembangan", "AI & Data", "Infrastruktur", "Keamanan", "Enterprise"];

export const SERVICES = [
  { id: "software", cat: "Pengembangan", icon: "code", title: "Software Custom", desc: "Sistem yang dibuat khusus mengikuti cara kerja tim Anda, bukan sebaliknya. Dari aplikasi kasir (POS) sampai ERP.", slug: "pembuatan-aplikasi" },
  { id: "mobile", cat: "Pengembangan", icon: "mobile", title: "Aplikasi Android & iOS", desc: "Aplikasi mobile yang cepat, ringan, dan mudah dipakai, untuk pelanggan maupun tim internal.", slug: "pembuatan-aplikasi" },
  { id: "web", cat: "Pengembangan", icon: "web", title: "Website Perusahaan", desc: "Website company profile, toko online, dan portal yang cepat dibuka, rapi di HP, dan mudah ditemukan di Google.", slug: "pembuatan-website" },
  { id: "uiux", cat: "Pengembangan", icon: "layout", title: "Desain UI/UX", desc: "Tampilan yang enak dilihat dan alur yang tidak membingungkan, diuji dulu sebelum dibangun." },
  { id: "ai", cat: "AI & Data", icon: "sparkles", title: "Solusi AI", desc: "Chatbot, AI Agent, dan RAG yang menjawab pakai data Anda sendiri. Pelanggan dilayani 24 jam, tim lebih hemat waktu.", slug: "konsultan-ai" },
  { id: "chatbot", cat: "AI & Data", icon: "bot", title: "Chatbot WhatsApp AI", desc: "Asisten AI di WhatsApp Business yang bisa menjawab pertanyaan, mencatat pesanan, dan meneruskan ke admin.", slug: "konsultan-ai" },
  { id: "dashboard", cat: "AI & Data", icon: "chart", title: "Dashboard & Analitik", desc: "Data dari berbagai sistem dirangkum dalam satu layar, supaya keputusan bisa diambil lebih cepat." },
  { id: "iot", cat: "AI & Data", icon: "iot", title: "Internet of Things", desc: "Sensor dan perangkat yang terhubung untuk memantau aset, gedung, kebun, atau pabrik secara real-time." },
  { id: "cctv", cat: "Infrastruktur", icon: "cctv", title: "CCTV Pintar", desc: "CCTV dengan pengenalan wajah dan analitik video untuk keamanan kantor, gedung, dan area publik." },
  { id: "network", cat: "Infrastruktur", icon: "network", title: "Jaringan & Fiber Optik", desc: "Instalasi LAN, WAN, dan fiber optik dengan konfigurasi Mikrotik/Cisco yang stabil dan aman." },
  { id: "server", cat: "Infrastruktur", icon: "server", title: "Server & Cloud", desc: "Setup server fisik, VPS, dan cloud (AWS/GCP), lengkap dengan backup dan pemantauan." },
  { id: "procurement", cat: "Infrastruktur", icon: "cart", title: "Pengadaan Perangkat IT", desc: "Laptop, server, videotron, dan lisensi software resmi bergaransi, bisa lewat E-Katalog." },
  { id: "migration", cat: "Infrastruktur", icon: "database", title: "Migrasi Sistem & Data", desc: "Pindah dari sistem lama ke yang baru tanpa kehilangan data dan dengan gangguan seminimal mungkin." },
  { id: "security", cat: "Keamanan", icon: "shield", title: "Keamanan Siber", desc: "Audit keamanan, hardening server, dan perlindungan dari ransomware untuk sistem Anda.", slug: "keamanan-siber" },
  { id: "pentest", cat: "Keamanan", icon: "search", title: "Penetration Testing", desc: "Kami coba “bobol” aplikasi Anda secara etis untuk menemukan celah sebelum orang lain menemukannya.", slug: "keamanan-siber" },
  { id: "pdp", cat: "Keamanan", icon: "lock", title: "Kepatuhan UU PDP", desc: "Pendampingan agar pengelolaan data pribadi di sistem Anda sesuai Undang-Undang Pelindungan Data Pribadi.", slug: "keamanan-siber" },
  { id: "integration", cat: "Enterprise", icon: "puzzle", title: "Integrasi Sistem & API", desc: "Menyambungkan aplikasi Anda dengan payment gateway, BPJS, SATUSEHAT, atau WhatsApp Business API." },
  { id: "erp", cat: "Enterprise", icon: "layers", title: "ERP & CRM", desc: "Keuangan, stok, penjualan, dan pelanggan dikelola dalam satu sistem yang saling terhubung." },
  { id: "simrs", cat: "Enterprise", icon: "hospital", title: "SIMRS & Rekam Medis", desc: "Sistem rumah sakit dan klinik dari pendaftaran sampai klaim BPJS, tersambung ke SATUSEHAT.", slug: "simrs" },
  { id: "spbe", cat: "Enterprise", icon: "gov", title: "SPBE & Smart City", desc: "Aplikasi layanan publik, e-office, dan dashboard pimpinan daerah sesuai arsitektur SPBE.", slug: "spbe-smart-city" },
  { id: "maintenance", cat: "Enterprise", icon: "wrench", title: "Maintenance & IT Support", desc: "Kontrak perawatan rutin dan bantuan teknis, supaya sistem tetap jalan tanpa drama." },
  { id: "training", cat: "Enterprise", icon: "training", title: "Pelatihan IT", desc: "Workshop teknologi yang praktis untuk tim perusahaan dan ASN, dari dasar sampai AI." },
  { id: "seo", cat: "Pengembangan", icon: "target", title: "Optimasi SEO", desc: "Website Anda dibenahi dari sisi teknis dan konten supaya lebih mudah ditemukan calon klien di Google." },
  { id: "consulting", cat: "Enterprise", icon: "handshake", title: "Konsultasi IT", desc: "Bingung mulai dari mana? Kami bantu petakan kebutuhan, pilih teknologi, dan hitung anggaran yang masuk akal.", slug: "konsultan-it" },
];

export const SECTORS = [
  {
    id: "gov",
    icon: "gov",
    title: "Pemerintahan",
    tagline: "SPBE & Smart City",
    desc: "Layanan publik yang lebih cepat dan transparan, dengan data yang bisa dipantau pimpinan setiap saat.",
    features: ["Dashboard eksekutif pimpinan daerah", "Aplikasi pengaduan & layanan warga", "E-Office / Tata Naskah Dinas Elektronik", "JDIH & arsip digital"],
    slug: "spbe-smart-city",
  },
  {
    id: "health",
    icon: "hospital",
    title: "Kesehatan",
    tagline: "SIMRS & RME",
    desc: "Rumah sakit dan klinik yang lebih rapi: antrean online, rekam medis elektronik, sampai klaim BPJS.",
    features: ["SIMRS terintegrasi (bridging BPJS)", "Rekam Medis Elektronik (RME)", "Integrasi SATUSEHAT Kemenkes", "Nurse call berbasis IoT"],
    slug: "simrs",
  },
  {
    id: "edu",
    icon: "school",
    title: "Pendidikan",
    tagline: "Kampus & Sekolah",
    desc: "Administrasi akademik yang lebih ringan, dari penerimaan siswa sampai remunerasi dosen.",
    features: ["Sistem Informasi Akademik (SIAKAD)", "Ujian online (CBT)", "PPDB / SPMB online", "Sistem remunerasi & angka kredit dosen"],
    slug: "pembuatan-aplikasi",
  },
  {
    id: "biz",
    icon: "briefcase",
    title: "Bisnis & Korporasi",
    tagline: "Otomasi Bisnis",
    desc: "Stok, keuangan, penjualan, dan SDM dalam satu sistem, ditambah AI yang membantu tim bekerja lebih cepat.",
    features: ["ERP & CRM custom", "Kasir (POS) multi-cabang", "Toko online & pembayaran", "HRIS & payroll"],
    slug: "konsultan-it",
  },
];

export const PROCESS = [
  { step: "01", title: "Ngobrol dulu", desc: "Konsultasi gratis. Kami dengarkan masalahnya, bukan langsung jualan." },
  { step: "02", title: "Rancang solusi", desc: "Anda dapat proposal jelas: fitur, jadwal, dan biaya. Tanpa istilah yang membingungkan." },
  { step: "03", title: "Bangun & uji", desc: "Dikerjakan bertahap, Anda bisa lihat progres dan mencoba sebelum rilis." },
  { step: "04", title: "Rilis & dampingi", desc: "Sistem dipasang, tim Anda dilatih, dan kami tetap siap bantu setelahnya." },
];

export const WHY = [
  { icon: "clock", title: "Berpengalaman sejak 2017", desc: "Sudah menangani proyek kementerian, pemda, rumah sakit, kampus, dan swasta. Kami paham ritme dan aturan mainnya." },
  { icon: "layers", title: "Satu tim untuk semuanya", desc: "Dari aplikasi, AI, jaringan, sampai pengadaan perangkat. Anda cukup bicara dengan satu pihak." },
  { icon: "shield", title: "Aman sejak desain", desc: "Keamanan bukan tambahan di akhir. Setiap sistem dirancang dengan kontrol akses, enkripsi, dan audit." },
  { icon: "filecheck", title: "Resmi & siap tender", desc: "Terdaftar di E-Katalog, PSE Komdigi, dan SATUSEHAT, jadi proses administrasi instansi lebih mulus." },
];

export const TECH = {
  build: ["Next.js", "React", "Node.js", "TypeScript", "Python", "Go", "Laravel", "PHP", "Android"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "Kafka", "Docker", "Nginx", "Apache", "Ubuntu", "Cisco", "Mikrotik"],
  ai: ["Gemini", "ChatGPT", "RAG", "AI Agent", "WhatsApp Business API", "Socket.io"],
};

export const CLIENTS = [
  { name: "Kementerian Komunikasi dan Digital", logo: "/images/clients/komdigi.png" },
  { name: "Telkom Indonesia", logo: "/images/clients/telkom.png" },
  { name: "Universitas Sumatera Utara", logo: "/images/clients/usu.png" },
  { name: "Pemkab Deli Serdang", logo: "/images/clients/deliserdang.png" },
  { name: "Pemko Binjai", logo: "/images/clients/binjai.png" },
  { name: "Pemkab Serdang Bedagai", logo: "/images/clients/sergai.png" },
  { name: "Pemko Tanjung Balai", logo: "/images/clients/tanjung_balai.png" },
  { name: "Pemkab Agam", logo: "/images/clients/agam.png" },
  { name: "RSUD Drs. H. Amri Tambunan", logo: "/images/clients/tambunan.png" },
  { name: "RS Sri Pamela", logo: "/images/clients/sripamela.png" },
  { name: "RS Prima Vision", logo: "/images/clients/prima.png" },
  { name: "Politeknik Negeri Medan", logo: "/images/clients/polmed.png" },
  { name: "Politeknik Penerbangan Medan", logo: "/images/clients/poltekbang.png" },
  { name: "SMKN 1 Binjai", logo: "/images/clients/smkn1.png" },
  { name: "PT Dat Daramenta Sejahtera", logo: "/images/clients/dds.png" },
  { name: "AJ ThinkLab", logo: "/images/clients/ajthinklab.png" },
  { name: "Amberjaini", logo: "/images/clients/amberjaini.png" },
  { name: "Autolinx", logo: "/images/clients/autolinx.png" },
  { name: "Lagizha", logo: "/images/clients/lagizha.png" },
  { name: "Kian & Kei Cafe", logo: "/images/clients/kian.jpg" },
  { name: "Gudang Sayur Kamtibmas", logo: "/images/clients/kamtibmas.png" },
  { name: "Darussalam", logo: "/images/clients/darussalam.png" },
];

export const PROJECT_CATEGORIES = ["Semua", "Pemerintahan", "Kesehatan", "Pendidikan", "Bisnis"];

export const PROJECTS = [
  { id: "jare-ai", featured: true, cat: "Pemerintahan", client: "Kementerian Komunikasi & Digital", title: "Jare-AI: Chatbot Layanan Publik", desc: "Chatbot WhatsApp berbasis Generative AI (Gemini + RAG) yang menjawab pertanyaan masyarakat 24 jam memakai data resmi kementerian.", tech: ["Gemini", "RAG", "WhatsApp API", "Next.js"], logo: "/images/clients/komdigi.png" },
  { id: "simrs-amri", featured: true, cat: "Kesehatan", client: "RSUD Drs. H. Amri Tambunan", title: "SIMRS Terintegrasi", desc: "Satu sistem untuk pendaftaran online, rekam medis elektronik, farmasi, lab, radiologi, sampai kasir dan klaim BPJS.", tech: ["PostgreSQL", "BPJS API", "Microservices"], logo: "/images/clients/tambunan.png" },
  { id: "dashboard-sergai", featured: true, cat: "Pemerintahan", client: "Pemkab Serdang Bedagai", title: "Dashboard Keuangan Daerah", desc: "Bupati bisa memantau PAD dan serapan anggaran secara real-time, langsung dari satu layar.", tech: ["Analytics", "Socket.io", "Dashboard"], logo: "/images/clients/sergai.png" },
  { id: "telkom-pm", featured: true, cat: "Bisnis", client: "Telkom Indonesia", title: "Dashboard Manajemen Proyek", desc: "Pemantauan progres proyek infrastruktur telekomunikasi nasional secara real-time.", tech: ["Dashboard", "Analytics"], logo: "/images/clients/telkom.png", dark: true },
  { id: "usu-pak", featured: true, cat: "Pendidikan", client: "Universitas Sumatera Utara", title: "Sistem PAK & Remunerasi Dosen", desc: "Penilaian angka kredit dosen dihitung otomatis untuk kenaikan pangkat dan remunerasi.", tech: ["Laravel", "MySQL"], logo: "/images/clients/usu.png" },
  { id: "ajthinklab", featured: true, cat: "Pendidikan", client: "AJ ThinkLab", title: "Platform Kursus Online (LMS)", desc: "LMS kursus bahasa Inggris dengan dashboard guru, murid, dan admin, plus pembayaran Stripe.", tech: ["Next.js", "MongoDB", "Stripe"], logo: "/images/clients/ajthinklab.png" },
  { id: "agam-realtime", cat: "Pemerintahan", client: "Pemkab Agam", title: "Laporan Kegiatan Real-time", desc: "Command center yang menampilkan kegiatan pimpinan daerah secara langsung di videotron.", tech: ["Realtime", "TV Display"], logo: "/images/clients/agam.png" },
  { id: "spmb-tjb", cat: "Pemerintahan", client: "Pemko Tanjung Balai", title: "Penerimaan Murid Baru Online", desc: "PPDB/SPMB untuk SD & SMP se-kota dengan hitung jarak zonasi otomatis lewat Google Maps.", tech: ["Next.js", "Maps API", "GIS"], logo: "/images/clients/tanjung_balai.png" },
  { id: "emas-binjai", cat: "Pemerintahan", client: "Pemko Binjai", title: "E-Mas Smart City", desc: "Super-app warga untuk melapor keluhan langsung ke dinas terkait, di Android dan web.", tech: ["Android", "GIS", "Web"], logo: "/images/clients/binjai.png" },
  { id: "absensi-binjai", cat: "Pemerintahan", client: "Pemko Binjai", title: "E-Absensi ASN", desc: "Absensi pegawai berbasis lokasi GPS dan pengenalan wajah.", tech: ["Android", "GPS", "Biometrik"], logo: "/images/clients/binjai.png" },
  { id: "dprd-portal", cat: "Pemerintahan", client: "DPRD Deli Serdang", title: "Portal Informasi DPRD", desc: "Website resmi berisi profil, jadwal rapat, risalah, dan berita kegiatan dewan.", tech: ["CMS", "SEO"], logo: "/images/clients/deliserdang.png" },
  { id: "dprd-eoffice", cat: "Pemerintahan", client: "DPRD Deli Serdang", title: "Si-Kakakade (E-Office)", desc: "Tata naskah dinas elektronik untuk disposisi surat masuk dan keluar tanpa kertas.", tech: ["E-Office", "PDF"], logo: "/images/clients/deliserdang.png" },
  { id: "bapenda-ppj", cat: "Pemerintahan", client: "Bapenda Deli Serdang", title: "Rekonsiliasi Pajak PPJ", desc: "Pencocokan data tagihan Pajak Penerangan Jalan kabupaten secara otomatis.", tech: ["Data Matching"], logo: "/images/clients/deliserdang.png" },
  { id: "bpjs-bridging", cat: "Kesehatan", client: "RSUD Drs. H. Amri Tambunan", title: "Bridging BPJS V-Claim", desc: "Modul penghubung sistem RS dengan BPJS untuk klaim dan cek rujukan otomatis.", tech: ["API", "BPJS"], logo: "/images/clients/tambunan.png" },
  { id: "rs-prima", cat: "Kesehatan", client: "RS Prima Vision", title: "SIMRS Rumah Sakit Mata", desc: "Sistem khusus rumah sakit mata dengan modul pemeriksaan visus dan refraksi.", tech: ["Custom ERP", "Medical"], logo: "/images/clients/prima.png", dark: true },
  { id: "rsgm-usu", cat: "Kesehatan", client: "RSGM USU", title: "SIMRS Gigi & Mulut", desc: "Pendaftaran, odontogram, dan rekam medis digital untuk rumah sakit gigi.", tech: ["Web App"], logo: "/images/clients/usu.png" },
  { id: "nurse-call", cat: "Kesehatan", client: "RS Sri Pamela", title: "Nurse Call IoT", desc: "Tombol pasien terhubung real-time ke nurse station lewat perangkat IoT.", tech: ["IoT", "Realtime"], logo: "/images/clients/sripamela.png" },
  { id: "simlitabmas", cat: "Pendidikan", client: "Poltekbang Medan", title: "SIMLITABMAS", desc: "Pemantauan penelitian dan pengabdian masyarakat para dosen.", tech: ["Reporting"], logo: "/images/clients/poltekbang.png" },
  { id: "polmed-surat", cat: "Pendidikan", client: "Politeknik Negeri Medan", title: "Surat & Disposisi Digital", desc: "Surat-menyurat dan disposisi internal kampus secara elektronik.", tech: ["E-Office"], logo: "/images/clients/polmed.png" },
  { id: "smk-cbt", cat: "Pendidikan", client: "SMKN 1 Binjai", title: "Ujian Online (CBT)", desc: "Ujian berbasis komputer dengan soal acak dan penilaian otomatis.", tech: ["CBT"], logo: "/images/clients/smkn1.png" },
  { id: "smp-web", cat: "Pendidikan", client: "SMP Darussalam Medan", title: "Website Sekolah", desc: "Profil sekolah, info guru, dan pendaftaran murid baru.", tech: ["Web", "CMS"], logo: "/images/clients/darussalam.png" },
  { id: "dds-web", cat: "Bisnis", client: "PT Dat Daramenta Sejahtera", title: "Website Korporat", desc: "Company profile perusahaan kelapa sawit yang modern dan ramah SEO.", tech: ["Next.js", "SEO"], logo: "/images/clients/dds.png" },
  { id: "amber-ecom", cat: "Bisnis", client: "Amberjaini", title: "Toko Online Global", desc: "E-commerce fashion anak dengan pembayaran PayPal dan kartu kredit untuk pasar luar negeri.", tech: ["PayPal", "E-commerce"], logo: "/images/clients/amberjaini.png" },
  { id: "autolinx", cat: "Bisnis", client: "Autolinx", title: "Toko Suku Cadang Mobil", desc: "Marketplace sparepart dashboard mobil dengan pembayaran internasional.", tech: ["Stripe", "Katalog"], logo: "/images/clients/autolinx.png", dark: true },
  { id: "lagizha", cat: "Bisnis", client: "Lagizha", title: "Toko Busana Muslimah", desc: "Toko online dengan manajemen stok otomatis.", tech: ["E-commerce"], logo: "/images/clients/lagizha.png" },
  { id: "kian-pos", cat: "Bisnis", client: "Kian & Kei Cafe", title: "Sistem Kasir Kafe", desc: "POS layar sentuh, stok dapur, dan laporan penjualan harian.", tech: ["POS", "Inventori"], logo: "/images/clients/kian.jpg" },
  { id: "gudang-sayur", cat: "Bisnis", client: "Gudang Sayur Kamtibmas", title: "Stok Gudang Sayur", desc: "Pencatatan keluar-masuk logistik sayur untuk menjaga stabilitas harga.", tech: ["Inventori"], logo: "/images/clients/kamtibmas.png" },
];

export const HOME_FAQ = [
  { q: "Apakah DMP melayani klien di kota saya?", a: "Ya. Kami melayani 514 kabupaten/kota di 38 provinsi. Sebagian besar pekerjaan berjalan online lewat rapat video dan demo rutin, dan tim kami datang ke lokasi saat implementasi atau pelatihan bila dibutuhkan." },
  { q: "Berapa biaya membuat aplikasi atau website?", a: "Tergantung fitur dan skalanya. Website company profile tentu berbeda dengan SIMRS atau ERP. Setelah konsultasi gratis, Anda akan menerima proposal dengan rincian fitur, jadwal, dan biaya yang jelas." },
  { q: "Apakah instansi pemerintah bisa membeli lewat E-Katalog?", a: "Bisa. PT Dania Multi Prima terdaftar sebagai penyedia di E-Katalog LKPP (INAPROC), sehingga instansi dapat memesan layanan kami melalui jalur pengadaan resmi." },
  { q: "Bisakah AI seperti ChatGPT atau Gemini dipakai untuk bisnis saya?", a: "Bisa. Kami membangun chatbot dan AI Agent yang menjawab memakai data Anda sendiri (RAG), misalnya untuk layanan pelanggan di WhatsApp, pencarian dokumen internal, atau otomasi laporan." },
  { q: "Berapa lama proses pembuatannya?", a: "Website sederhana biasanya 2–4 minggu. Aplikasi atau sistem yang lebih kompleks umumnya 2–6 bulan, dikerjakan bertahap supaya bagian penting bisa dipakai lebih dulu." },
  { q: "Setelah sistem jadi, apakah ada dukungan?", a: "Ada. Kami menyediakan pelatihan pengguna, garansi perbaikan, dan kontrak maintenance agar sistem tetap aman dan berjalan lancar." },
];

// Wilayah layanan untuk peta & teks (bukan halaman doorway per kota)
export const REGIONS = [
  { name: "Sumatera", items: ["Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Sumatera Selatan", "Bengkulu", "Lampung", "Bangka Belitung"] },
  { name: "Jawa & Bali", items: ["DKI Jakarta", "Banten", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur", "Bali"] },
  { name: "Kalimantan", items: ["Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara"] },
  { name: "Sulawesi", items: ["Sulawesi Utara", "Gorontalo", "Sulawesi Tengah", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tenggara"] },
  { name: "Nusa Tenggara, Maluku & Papua", items: ["Nusa Tenggara Barat", "Nusa Tenggara Timur", "Maluku", "Maluku Utara", "Papua", "Papua Barat", "Papua Barat Daya", "Papua Tengah", "Papua Pegunungan", "Papua Selatan"] },
];

// Titik kota di peta (lon, lat). Medan = kantor pusat.
export const MAP_CITIES = [
  { name: "Medan", lon: 98.67, lat: 3.59, hq: true },
  { name: "Banda Aceh", lon: 95.32, lat: 5.55 },
  { name: "Padang", lon: 100.35, lat: -0.95 },
  { name: "Pekanbaru", lon: 101.45, lat: 0.51 },
  { name: "Palembang", lon: 104.76, lat: -2.98 },
  { name: "Jakarta", lon: 106.85, lat: -6.2 },
  { name: "Bandung", lon: 107.6, lat: -6.9 },
  { name: "Semarang", lon: 110.42, lat: -6.97 },
  { name: "Surabaya", lon: 112.75, lat: -7.25 },
  { name: "Denpasar", lon: 115.22, lat: -8.65 },
  { name: "Pontianak", lon: 109.33, lat: -0.03 },
  { name: "Balikpapan", lon: 116.85, lat: -1.24 },
  { name: "Banjarmasin", lon: 114.59, lat: -3.32 },
  { name: "Makassar", lon: 119.43, lat: -5.14 },
  { name: "Manado", lon: 124.84, lat: 1.47 },
  { name: "Kupang", lon: 123.6, lat: -10.17 },
  { name: "Ambon", lon: 128.18, lat: -3.69 },
  { name: "Jayapura", lon: 140.7, lat: -2.53 },
];
