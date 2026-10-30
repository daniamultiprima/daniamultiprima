// Halaman layanan mendalam. Setiap halaman punya isi unik (bukan template ganti-kata)
// agar aman dari kebijakan "doorway page" Google.

export const SERVICE_PAGES = [
  {
    slug: "konsultan-it",
    icon: "handshake",
    name: "Konsultan IT",
    metaTitle: "Konsultan IT untuk Perusahaan & Instansi di Indonesia",
    metaDescription:
      "Jasa konsultan IT untuk bisnis dan instansi: audit sistem, perencanaan teknologi, transformasi digital, dan pendampingan proyek. Konsultasi gratis.",
    h1: "Konsultan IT untuk bisnis dan instansi",
    lead: "Kami bantu Anda memilih teknologi yang tepat, menghitung anggaran yang masuk akal, dan memastikan proyek IT benar-benar selesai.",
    intro: [
      "Banyak proyek IT gagal bukan karena teknologinya, tapi karena perencanaannya. Fitur terlalu banyak, anggaran tidak realistis, atau vendor tidak paham proses bisnis. Sebagai konsultan IT yang sudah bekerja sejak 2017, kami duduk di sisi Anda sejak awal.",
      "Kami memetakan kebutuhan, mengaudit sistem yang sudah ada, lalu menyusun peta jalan (roadmap) yang bisa dijalankan bertahap. Kalau dibutuhkan, tim kami juga yang membangunnya, jadi tidak ada informasi yang hilang di tengah jalan.",
    ],
    problems: [
      { t: "Sistem lama lambat & tidak saling terhubung", d: "Data tersebar di Excel, aplikasi terpisah, dan grup WhatsApp." },
      { t: "Bingung harus mulai dari mana", d: "Banyak pilihan teknologi, tapi tidak jelas mana yang cocok untuk skala Anda." },
      { t: "Anggaran sudah keluar, hasil belum terasa", d: "Proyek sebelumnya molor atau tidak dipakai oleh tim." },
    ],
    features: [
      { icon: "search", t: "Audit sistem & proses", d: "Kami cek apa yang sudah berjalan, apa yang bocor, dan apa yang bisa diotomasi." },
      { icon: "target", t: "Roadmap transformasi digital", d: "Rencana bertahap 6–24 bulan lengkap dengan prioritas dan estimasi biaya." },
      { icon: "layers", t: "Arsitektur sistem", d: "Rancangan teknis yang bisa tumbuh, aman, dan mudah dirawat." },
      { icon: "filecheck", t: "Dokumen pengadaan", d: "Bantuan menyusun KAK/TOR dan spesifikasi teknis untuk tender atau E-Katalog." },
      { icon: "users", t: "Pendampingan vendor", d: "Kami bisa jadi pengawas teknis bila proyek dikerjakan pihak lain." },
      { icon: "training", t: "Pelatihan tim", d: "Tim Anda dibekali supaya bisa mengelola sistem secara mandiri." },
    ],
    projects: ["dashboard-sergai", "telkom-pm", "simrs-amri"],
    faqs: [
      { q: "Apa bedanya konsultan IT dengan software house?", a: "Konsultan IT fokus pada perencanaan dan keputusan teknologi, sedangkan software house membangun aplikasinya. DMP melakukan keduanya, jadi rencana dan eksekusi dipegang tim yang sama." },
      { q: "Apakah konsultasi awal berbayar?", a: "Tidak. Sesi konsultasi pertama gratis. Kami dengarkan kebutuhan Anda dan memberi gambaran solusi sebelum ada komitmen apa pun." },
      { q: "Apakah bisa untuk instansi pemerintah?", a: "Bisa. Kami terbiasa dengan arsitektur SPBE, aturan pengadaan, dan terdaftar di E-Katalog LKPP." },
      { q: "Apakah melayani di luar Sumatera Utara?", a: "Ya. Konsultasi bisa dilakukan online untuk seluruh Indonesia, dan tim kami bisa datang ke lokasi bila diperlukan." },
    ],
  },
  {
    slug: "konsultan-ai",
    icon: "sparkles",
    name: "Konsultan AI",
    metaTitle: "Konsultan AI & Jasa Pembuatan Chatbot AI Indonesia",
    metaDescription:
      "Jasa konsultan AI dan pembuatan AI: chatbot WhatsApp, AI Agent, RAG, dan integrasi ChatGPT/Gemini untuk bisnis dan instansi di seluruh Indonesia.",
    h1: "Konsultan AI yang fokus pada hasil nyata",
    lead: "Chatbot, AI Agent, dan otomasi berbasis AI yang memakai data Anda sendiri, bukan sekadar demo yang keren di presentasi.",
    intro: [
      "AI bisa menghemat banyak waktu, asal diterapkan di tempat yang tepat. Kami mulai dari pertanyaan sederhana: pekerjaan apa yang paling sering diulang tim Anda? Dari situ kami rancang solusi AI yang terukur manfaatnya.",
      "Kami sudah membangun chatbot AI layanan publik untuk Kementerian Komunikasi & Digital (Jare-AI) yang menjawab warga 24 jam memakai data resmi. Pengalaman yang sama kami bawa untuk bisnis dan instansi Anda.",
    ],
    problems: [
      { t: "Pertanyaan pelanggan menumpuk", d: "Admin kewalahan menjawab hal yang sama berulang kali." },
      { t: "Dokumen internal sulit dicari", d: "SOP, regulasi, dan laporan tersebar dan makan waktu untuk dibaca." },
      { t: "Takut data bocor ke AI publik", d: "Ingin pakai AI tapi khawatir soal kerahasiaan data." },
    ],
    features: [
      { icon: "bot", t: "Chatbot WhatsApp AI", d: "Menjawab pertanyaan, mencatat pesanan, dan meneruskan ke admin bila perlu." },
      { icon: "database", t: "RAG: AI dengan data Anda", d: "AI menjawab berdasarkan dokumen dan database Anda, lengkap dengan sumbernya." },
      { icon: "zap", t: "AI Agent & otomasi", d: "AI yang menjalankan tugas: membuat laporan, mengisi formulir, merangkum rapat." },
      { icon: "puzzle", t: "Integrasi ChatGPT & Gemini", d: "Menyambungkan model AI ke aplikasi, CRM, atau sistem internal Anda." },
      { icon: "lock", t: "Aman & sesuai UU PDP", d: "Kontrol akses, penyamaran data sensitif, dan opsi pemasangan di server sendiri." },
      { icon: "chart", t: "Ukur dampaknya", d: "Dashboard jumlah percakapan, waktu yang dihemat, dan pertanyaan yang belum terjawab." },
    ],
    projects: ["jare-ai", "dashboard-sergai"],
    faqs: [
      { q: "Apa itu RAG?", a: "RAG (Retrieval-Augmented Generation) adalah cara membuat AI menjawab berdasarkan dokumen dan data milik Anda. Hasilnya jauh lebih akurat dibanding AI umum dan bisa menyertakan sumber jawabannya." },
      { q: "Apakah data kami aman jika memakai AI?", a: "Kami merancang sistem agar data sensitif tidak dipakai untuk melatih model publik, membatasi akses per pengguna, dan bisa memasang solusi di server Anda sendiri bila dibutuhkan." },
      { q: "Berapa lama membuat chatbot AI?", a: "Chatbot WhatsApp AI dengan basis pengetahuan dasar biasanya siap dalam 2–4 minggu. Integrasi yang lebih dalam ke sistem internal bisa lebih lama, tergantung cakupannya." },
      { q: "Model AI apa yang dipakai?", a: "Kami memilih model sesuai kebutuhan dan anggaran, misalnya Gemini atau ChatGPT, dan bisa menggantinya di kemudian hari tanpa membangun ulang sistem." },
    ],
  },
  {
    slug: "pembuatan-aplikasi",
    icon: "mobile",
    name: "Jasa Pembuatan Aplikasi",
    metaTitle: "Jasa Pembuatan Aplikasi Android, iOS & Web",
    metaDescription:
      "Jasa pembuatan aplikasi Android, iOS, dan web custom: ERP, kasir, sistem akademik, hingga layanan publik untuk klien di seluruh Indonesia.",
    h1: "Jasa pembuatan aplikasi yang benar-benar dipakai",
    lead: "Aplikasi Android, iOS, dan web yang dibuat mengikuti cara kerja tim Anda: cepat, ringan, dan mudah dipelajari.",
    intro: [
      "Aplikasi yang bagus bukan yang paling banyak fiturnya, tapi yang dipakai setiap hari. Karena itu kami mulai dengan memahami alur kerja Anda, membuat prototipe yang bisa dicoba, lalu membangunnya bertahap.",
      "Sebagai software house sejak 2017, kami sudah membuat aplikasi untuk pemda, kampus, rumah sakit, dan bisnis, dari absensi ASN berbasis wajah sampai sistem kasir multi-cabang.",
    ],
    problems: [
      { t: "Proses masih manual", d: "Formulir kertas, rekap Excel, dan laporan yang memakan waktu berhari-hari." },
      { t: "Aplikasi lama sulit dikembangkan", d: "Tiap ada perubahan kecil, butuh waktu dan biaya besar." },
      { t: "Aplikasi jadi, tapi tidak dipakai", d: "Tampilan membingungkan sehingga tim kembali ke cara lama." },
    ],
    features: [
      { icon: "mobile", t: "Android & iOS", d: "Aplikasi mobile untuk pelanggan, petugas lapangan, atau warga." },
      { icon: "web", t: "Aplikasi web", d: "Bisa dibuka dari browser mana pun tanpa instalasi." },
      { icon: "layout", t: "Desain UI/UX", d: "Prototipe yang bisa dicoba dulu sebelum mulai coding." },
      { icon: "layers", t: "ERP, POS & HRIS", d: "Sistem operasional bisnis yang saling terhubung." },
      { icon: "puzzle", t: "Integrasi", d: "Payment gateway, peta, WhatsApp, BPJS, dan sistem lain." },
      { icon: "wrench", t: "Perawatan jangka panjang", d: "Update, perbaikan, dan pengembangan fitur setelah rilis." },
    ],
    projects: ["absensi-binjai", "emas-binjai", "kian-pos"],
    faqs: [
      { q: "Berapa biaya membuat aplikasi?", a: "Biaya ditentukan oleh jumlah fitur, platform (Android, iOS, web), dan integrasi yang dibutuhkan. Setelah konsultasi gratis, kami kirim proposal dengan rincian biaya per tahap." },
      { q: "Apakah source code menjadi milik kami?", a: "Ya, untuk proyek custom source code diserahkan kepada klien sesuai kesepakatan kontrak." },
      { q: "Apakah aplikasi bisa dipublikasikan ke Play Store dan App Store?", a: "Bisa. Kami bantu proses publikasi sampai aplikasi tersedia di toko aplikasi." },
      { q: "Bagaimana jika kebutuhan berubah di tengah proyek?", a: "Kami bekerja bertahap. Perubahan bisa dimasukkan ke tahap berikutnya dengan dampak waktu dan biaya yang dijelaskan secara terbuka." },
    ],
  },
  {
    slug: "pembuatan-website",
    icon: "web",
    name: "Jasa Pembuatan Website",
    metaTitle: "Jasa Pembuatan Website Perusahaan & Instansi",
    metaDescription:
      "Jasa pembuatan website company profile, toko online, dan portal instansi yang cepat, aman, dan siap SEO, untuk klien di seluruh Indonesia.",
    h1: "Website perusahaan yang cepat, rapi, dan mudah ditemukan",
    lead: "Company profile, toko online, dan portal instansi yang terbuka dalam hitungan detik dan siap bersaing di Google.",
    intro: [
      "Website sering menjadi kesan pertama calon klien. Kalau lambat dibuka di HP atau sulit ditemukan di Google, peluang hilang begitu saja. Kami membangun website dengan teknologi modern yang cepat dan aman sejak awal.",
      "Setiap website kami siapkan dengan dasar SEO teknis: struktur heading yang benar, metadata, data terstruktur (schema), dan performa yang baik, supaya lebih mudah muncul saat orang mencari layanan Anda.",
    ],
    problems: [
      { t: "Website lama lambat", d: "Pengunjung keburu pergi sebelum halaman selesai dimuat." },
      { t: "Tidak muncul di Google", d: "Orang mencari layanan Anda, tapi yang muncul justru kompetitor." },
      { t: "Sulit diperbarui", d: "Ganti satu foto saja harus menghubungi developer." },
    ],
    features: [
      { icon: "zap", t: "Cepat & ringan", d: "Dibangun dengan Next.js dan optimasi gambar agar lolos Core Web Vitals." },
      { icon: "mobile", t: "Rapi di semua layar", d: "Tampil sempurna di HP, tablet, dan desktop." },
      { icon: "target", t: "Siap SEO", d: "Metadata, schema, sitemap, dan struktur konten yang ramah mesin pencari." },
      { icon: "store", t: "Toko online", d: "Katalog produk, keranjang, dan pembayaran online." },
      { icon: "gear", t: "Mudah dikelola", d: "Panel admin sederhana untuk mengubah konten sendiri." },
      { icon: "shield", t: "Aman", d: "HTTPS, header keamanan, dan pembaruan rutin." },
    ],
    projects: ["dds-web", "dprd-portal", "amber-ecom"],
    faqs: [
      { q: "Berapa lama membuat website company profile?", a: "Umumnya 2–4 minggu sejak materi (teks dan foto) lengkap." },
      { q: "Apakah termasuk domain dan hosting?", a: "Bisa kami siapkan sekaligus, atau kami pasang di domain dan hosting yang sudah Anda miliki." },
      { q: "Apakah website dijamin halaman 1 Google?", a: "Tidak ada pihak yang bisa menjamin posisi Google. Yang kami jamin adalah fondasi teknis SEO yang benar dan konten yang disusun untuk kata kunci yang relevan dengan bisnis Anda." },
      { q: "Apakah bisa membuat website instansi pemerintah?", a: "Bisa. Kami pernah membangun portal informasi DPRD dan website sekolah, termasuk fitur berita dan dokumen publik." },
    ],
  },
  {
    slug: "simrs",
    icon: "hospital",
    name: "SIMRS & Rekam Medis Elektronik",
    metaTitle: "SIMRS & Rekam Medis Elektronik Terintegrasi SATUSEHAT",
    metaDescription:
      "Vendor SIMRS dan Rekam Medis Elektronik (RME) terdaftar SATUSEHAT Kemenkes, dengan bridging BPJS V-Claim. Untuk rumah sakit dan klinik di seluruh Indonesia.",
    h1: "SIMRS & Rekam Medis Elektronik yang tersambung ke SATUSEHAT",
    lead: "Dari pendaftaran online sampai klaim BPJS dalam satu sistem, supaya tenaga kesehatan bisa fokus ke pasien.",
    intro: [
      "Rumah sakit dan klinik kini wajib memakai rekam medis elektronik yang terhubung ke SATUSEHAT. PT Dania Multi Prima sudah terverifikasi sebagai penyedia sistem RME di platform SATUSEHAT Kemenkes.",
      "SIMRS kami dipakai di RSUD Drs. H. Amri Tambunan, dengan modul pendaftaran, rekam medis, farmasi, laboratorium, radiologi, kasir, hingga bridging BPJS V-Claim.",
    ],
    problems: [
      { t: "Antrean panjang di pendaftaran", d: "Pasien menunggu lama karena data masih dicatat manual." },
      { t: "Klaim BPJS sering tertunda", d: "Data klinis dan administrasi tidak sinkron." },
      { t: "Kewajiban integrasi SATUSEHAT", d: "Sistem lama belum siap mengirim data ke Kemenkes." },
    ],
    features: [
      { icon: "users", t: "Pendaftaran & antrean online", d: "Pasien daftar dari rumah, antrean lebih tertib." },
      { icon: "filecheck", t: "Rekam Medis Elektronik", d: "Riwayat pasien lengkap dan aman, bisa diakses dokter yang berwenang." },
      { icon: "puzzle", t: "Bridging BPJS & SATUSEHAT", d: "Klaim V-Claim, cek rujukan, dan kirim data ke SATUSEHAT otomatis." },
      { icon: "activity", t: "Farmasi, lab & radiologi", d: "Order dan hasil pemeriksaan tercatat dalam satu alur." },
      { icon: "iot", t: "Nurse call IoT", d: "Panggilan pasien langsung masuk ke nurse station." },
      { icon: "chart", t: "Dashboard manajemen", d: "Pendapatan, kunjungan, dan kinerja layanan dalam satu layar." },
    ],
    projects: ["simrs-amri", "bpjs-bridging", "nurse-call"],
    faqs: [
      { q: "Apakah SIMRS DMP terdaftar di SATUSEHAT?", a: "Ya. PT Dania Multi Prima terverifikasi sebagai penyedia sistem Rekam Medis Elektronik di platform SATUSEHAT Kementerian Kesehatan." },
      { q: "Apakah bisa untuk klinik kecil?", a: "Bisa. Modul dapat disesuaikan, dari klinik pratama sampai rumah sakit tipe B." },
      { q: "Apakah data lama bisa dipindahkan?", a: "Bisa. Kami membantu migrasi data pasien dari sistem lama dengan validasi agar tidak ada data yang hilang." },
      { q: "Bagaimana dengan keamanan data pasien?", a: "Akses dibatasi per peran, aktivitas tercatat (audit log), dan data dienkripsi sesuai prinsip UU Pelindungan Data Pribadi." },
    ],
  },
  {
    slug: "spbe-smart-city",
    icon: "gov",
    name: "SPBE & Smart City",
    metaTitle: "Aplikasi SPBE & Smart City untuk Pemerintah Daerah",
    metaDescription:
      "Pengembang aplikasi SPBE dan Smart City: dashboard eksekutif, e-office, layanan pengaduan warga, dan absensi ASN. Terdaftar di E-Katalog LKPP.",
    h1: "Aplikasi SPBE & Smart City untuk pemerintah daerah",
    lead: "Layanan publik lebih cepat, data pimpinan lebih akurat, dan proses birokrasi lebih ringan.",
    intro: [
      "Kami sudah membangun sistem untuk Pemkab Serdang Bedagai, Pemko Binjai, Pemko Tanjung Balai, Pemkab Agam, dan DPRD Deli Serdang. Mulai dari dashboard keuangan daerah sampai aplikasi pengaduan warga.",
      "Setiap aplikasi dirancang mengikuti arsitektur SPBE dan bisa diadakan melalui E-Katalog LKPP, sehingga proses pengadaan lebih sederhana bagi instansi.",
    ],
    problems: [
      { t: "Data dinas tersebar", d: "Pimpinan sulit mendapat angka terbaru untuk mengambil keputusan." },
      { t: "Surat-menyurat masih kertas", d: "Disposisi lambat dan dokumen mudah tercecer." },
      { t: "Indeks SPBE perlu naik", d: "Butuh aplikasi yang terintegrasi dan sesuai standar." },
    ],
    features: [
      { icon: "chart", t: "Dashboard eksekutif", d: "PAD, serapan anggaran, dan kinerja OPD dalam satu layar." },
      { icon: "chat", t: "Pengaduan & layanan warga", d: "Warga melapor dari HP, langsung diteruskan ke dinas terkait." },
      { icon: "mail", t: "E-Office (TNDE)", d: "Tata naskah dinas elektronik, disposisi tanpa kertas." },
      { icon: "pin", t: "Absensi ASN berbasis lokasi", d: "GPS dan pengenalan wajah untuk kedisiplinan pegawai." },
      { icon: "school", t: "PPDB / SPMB online", d: "Penerimaan murid baru dengan hitung zonasi otomatis." },
      { icon: "cart", t: "Bisa lewat E-Katalog", d: "Pengadaan resmi melalui INAPROC." },
    ],
    projects: ["dashboard-sergai", "emas-binjai", "spmb-tjb"],
    faqs: [
      { q: "Apakah bisa dibeli lewat E-Katalog?", a: "Bisa. PT Dania Multi Prima terdaftar sebagai penyedia di E-Katalog LKPP (INAPROC)." },
      { q: "Apakah aplikasinya sesuai arsitektur SPBE?", a: "Ya. Kami merancang aplikasi agar mendukung interoperabilitas, keamanan, dan tata kelola sesuai arsitektur SPBE nasional." },
      { q: "Apakah server bisa dipasang di data center pemda?", a: "Bisa. Aplikasi dapat dipasang di server milik pemerintah daerah maupun di cloud sesuai kebijakan instansi." },
      { q: "Apakah ada pelatihan untuk ASN?", a: "Ada. Setiap implementasi disertai pelatihan pengguna dan admin, serta pendampingan setelah aplikasi berjalan." },
    ],
  },
  {
    slug: "keamanan-siber",
    icon: "shield",
    name: "Keamanan Siber",
    metaTitle: "Konsultan Keamanan Siber & Penetration Testing",
    metaDescription:
      "Jasa audit keamanan sistem, penetration testing, hardening server, dan pendampingan kepatuhan UU PDP untuk perusahaan dan instansi di Indonesia.",
    h1: "Keamanan siber yang bisa diukur, bukan sekadar janji",
    lead: "Kami temukan celah sebelum orang lain menemukannya, lalu bantu menutupnya sampai tuntas.",
    intro: [
      "Serangan ransomware dan kebocoran data makin sering menimpa instansi dan perusahaan di Indonesia. Sementara itu, UU Pelindungan Data Pribadi menuntut pengelolaan data yang lebih ketat.",
      "Tim kami melakukan pengujian keamanan secara etis, memberi laporan yang mudah dipahami, dan mendampingi perbaikannya. Anda tahu persis risiko yang ada dan apa yang harus dilakukan.",
    ],
    problems: [
      { t: "Tidak tahu seberapa aman sistemnya", d: "Belum pernah diuji, padahal menyimpan data penting." },
      { t: "Pernah kena serangan", d: "Website diretas, data bocor, atau server terkena ransomware." },
      { t: "Wajib patuh UU PDP", d: "Perlu bukti bahwa data pribadi dikelola dengan benar." },
    ],
    features: [
      { icon: "search", t: "Penetration testing", d: "Uji web, mobile, dan API dengan metode standar industri (OWASP)." },
      { icon: "server", t: "Hardening server", d: "Konfigurasi server, firewall, dan jaringan agar lebih tahan serangan." },
      { icon: "lock", t: "Pendampingan UU PDP", d: "Pemetaan data pribadi, kebijakan, dan kontrol yang dibutuhkan." },
      { icon: "filecheck", t: "Laporan yang jelas", d: "Temuan diurutkan dari yang paling berisiko, lengkap dengan cara memperbaikinya." },
      { icon: "database", t: "Backup & pemulihan", d: "Strategi backup supaya data bisa dipulihkan saat terjadi insiden." },
      { icon: "training", t: "Pelatihan kesadaran", d: "Tim belajar mengenali phishing dan praktik aman sehari-hari." },
    ],
    projects: ["simrs-amri", "jare-ai"],
    faqs: [
      { q: "Apa itu penetration testing?", a: "Penetration testing adalah simulasi serangan yang dilakukan secara legal dan terkontrol untuk menemukan celah keamanan di aplikasi atau jaringan Anda sebelum dimanfaatkan pihak yang tidak bertanggung jawab." },
      { q: "Apakah pengujian mengganggu sistem yang sedang berjalan?", a: "Pengujian dijadwalkan dan dibatasi ruang lingkupnya bersama Anda. Untuk sistem kritis, pengujian bisa dilakukan di lingkungan staging." },
      { q: "Apa yang kami terima setelah pengujian?", a: "Laporan berisi daftar temuan, tingkat risiko, bukti, dan rekomendasi perbaikan, serta sesi penjelasan bersama tim Anda." },
      { q: "Apakah membantu kepatuhan UU PDP?", a: "Ya. Kami membantu memetakan data pribadi, menilai risiko, dan menerapkan kontrol teknis yang dibutuhkan." },
    ],
  },
];

export const getServicePage = (slug) => SERVICE_PAGES.find((p) => p.slug === slug);
