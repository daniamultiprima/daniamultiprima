import Link from "next/link";

// Artikel pilar tambahan (topical authority untuk kata kunci teknologi umum)
export const POSTS_2 = [
  {
    slug: "apa-itu-software-house",
    title: "Apa Itu Software House? Bedanya dengan Freelancer dan Konsultan IT",
    seoTitle: "Apa Itu Software House? Bedanya dengan Freelancer",
    description: "Penjelasan sederhana tentang software house, apa yang dikerjakan, bedanya dengan freelancer dan konsultan IT, serta kapan Anda membutuhkannya.",
    date: "2026-10-30",
    read: 5,
    category: "Dasar",
    related: "/services/pembuatan-aplikasi",
    Body: () => (
      <>
        <p>
          Istilah <strong>software house</strong> sering muncul saat perusahaan atau instansi ingin membuat aplikasi. Tapi apa bedanya dengan menyewa
          programmer lepas atau memakai jasa konsultan IT? Berikut penjelasan singkatnya.
        </p>
        <h2>Pengertian software house</h2>
        <p>
          Software house adalah perusahaan yang merancang, membangun, dan merawat perangkat lunak sesuai pesanan klien. Hasilnya bisa berupa website,
          aplikasi Android dan iOS, sistem internal kantor, sampai integrasi antar sistem. Berbeda dengan membeli aplikasi jadi, software house membuat
          sistem yang mengikuti proses kerja klien.
        </p>
        <h2>Apa saja yang dikerjakan software house?</h2>
        <ul>
          <li>Analisis kebutuhan dan perancangan alur sistem</li>
          <li>Desain tampilan (UI/UX) dan prototipe</li>
          <li>Pemrograman aplikasi web, mobile, dan backend</li>
          <li>Pengujian, termasuk pengujian keamanan</li>
          <li>Pemasangan di server, pelatihan pengguna, dan perawatan</li>
        </ul>
        <h2>Software house, freelancer, atau konsultan IT?</h2>
        <table>
          <thead>
            <tr>
              <th>Pilihan</th>
              <th>Cocok untuk</th>
              <th>Yang perlu diperhatikan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Freelancer</td>
              <td>Pekerjaan kecil dengan ruang lingkup jelas</td>
              <td>Bergantung pada satu orang; dukungan jangka panjang tidak selalu terjamin</td>
            </tr>
            <tr>
              <td>Software house</td>
              <td>Aplikasi atau sistem yang perlu dirawat dan dikembangkan</td>
              <td>Pastikan ada kontrak, dokumentasi, dan masa garansi</td>
            </tr>
            <tr>
              <td>Konsultan IT</td>
              <td>Saat Anda belum yakin solusi apa yang dibutuhkan</td>
              <td>Fokus pada perencanaan; eksekusi bisa oleh pihak lain atau tim yang sama</td>
            </tr>
          </tbody>
        </table>
        <h2>Kapan Anda butuh software house?</h2>
        <p>
          Biasanya saat aplikasi jadi di pasaran tidak cocok dengan proses kerja Anda, saat data tersebar di banyak tempat, atau saat sistem harus
          terhubung dengan pihak lain seperti BPJS, SATUSEHAT, bank, atau WhatsApp. Untuk proyek instansi, pilih penyedia yang memiliki legalitas jelas
          dan bisa melalui jalur pengadaan resmi.
        </p>
        <p>
          Ingin tahu lebih lanjut? Baca <Link href="/artikel/cara-memilih-software-house">cara memilih software house</Link> atau lihat{" "}
          <Link href="/services/pembuatan-aplikasi">layanan pembuatan aplikasi</Link> kami.
        </p>
      </>
    ),
  },
  {
    slug: "website-atau-aplikasi",
    title: "Website atau Aplikasi: Mana yang Sebenarnya Dibutuhkan Bisnis Anda?",
    seoTitle: "Website atau Aplikasi? Cara Memilih yang Tepat untuk Bisnis",
    description: "Perbandingan sederhana website dan aplikasi mobile: kegunaan, biaya perawatan, dan contoh kasus, supaya Anda tidak membangun yang belum perlu.",
    date: "2026-10-30",
    read: 5,
    category: "Website",
    related: "/services/pembuatan-website",
    Body: () => (
      <>
        <p>
          Banyak usaha langsung ingin membuat aplikasi Android, padahal yang dibutuhkan sebenarnya website. Sebaliknya, ada juga instansi yang memaksakan
          semuanya lewat website padahal petugas lapangannya butuh aplikasi yang bisa dipakai tanpa sinyal. Berikut cara menimbangnya.
        </p>
        <h2>Pilih website bila...</h2>
        <ul>
          <li>Tujuan utamanya ditemukan orang baru lewat Google</li>
          <li>Pengunjung hanya datang sesekali, misalnya mencari informasi atau kontak</li>
          <li>Anda ingin satu alamat yang bisa dibuka di HP maupun laptop tanpa instalasi</li>
          <li>Anggaran awal terbatas dan ingin mulai cepat</li>
        </ul>
        <h2>Pilih aplikasi bila...</h2>
        <ul>
          <li>Pengguna memakainya setiap hari, misalnya absensi, kasir, atau pencatatan lapangan</li>
          <li>Butuh fitur perangkat seperti kamera, GPS, notifikasi, atau pemindai</li>
          <li>Harus tetap bisa dipakai saat internet tidak stabil (mode offline)</li>
        </ul>
        <h2>Bagaimana kalau butuh keduanya?</h2>
        <p>
          Sering kali jawabannya adalah gabungan: website untuk publik dan pencarian Google, ditambah aplikasi web (dashboard) untuk tim internal. Aplikasi
          mobile baru dibuat bila memang ada kebutuhan yang tidak bisa dipenuhi lewat browser. Pendekatan bertahap seperti ini biasanya lebih hemat.
        </p>
        <h2>Jangan lupa biaya setelah jadi</h2>
        <p>
          Website membutuhkan domain, hosting, dan pembaruan keamanan. Aplikasi mobile menambah biaya publikasi di toko aplikasi dan pembaruan mengikuti
          versi Android dan iOS terbaru. Hitung biaya ini sejak awal agar sistem tetap terawat.
        </p>
        <p>
          Masih bingung? Lihat <Link href="/services/pembuatan-website">jasa pembuatan website</Link>,{" "}
          <Link href="/services/pembuatan-aplikasi">jasa pembuatan aplikasi</Link>, atau konsultasikan gratis dengan tim kami.
        </p>
      </>
    ),
  },
  {
    slug: "apa-itu-spbe",
    title: "Apa Itu SPBE? Panduan Singkat untuk Pemerintah Daerah",
    seoTitle: "Apa Itu SPBE? Panduan Singkat untuk Pemerintah Daerah",
    description: "Pengertian Sistem Pemerintahan Berbasis Elektronik (SPBE), dasar hukumnya, dan langkah praktis yang bisa dimulai pemerintah daerah.",
    date: "2026-10-30",
    read: 6,
    category: "Pemerintahan",
    related: "/services/spbe-smart-city",
    Body: () => (
      <>
        <p>
          <strong>SPBE (Sistem Pemerintahan Berbasis Elektronik)</strong> adalah penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi
          untuk memberikan layanan kepada pengguna, baik masyarakat maupun instansi lain. Dasar hukumnya adalah Peraturan Presiden Nomor 95 Tahun 2018
          tentang Sistem Pemerintahan Berbasis Elektronik.
        </p>
        <h2>Kenapa SPBE penting bagi pemda?</h2>
        <p>
          Tujuannya sederhana: layanan yang lebih cepat, transparan, dan tidak tumpang-tindih. Banyak daerah memiliki puluhan aplikasi yang tidak saling
          terhubung, sehingga data harus diinput berulang dan sulit dipantau pimpinan. SPBE mendorong aplikasi dan data dikelola secara terpadu.
        </p>
        <p>
          Pemerintah juga menerbitkan Peraturan Presiden Nomor 82 Tahun 2023 tentang Percepatan Transformasi Digital dan Keterpaduan Layanan Digital
          Nasional, yang menekankan keterpaduan layanan digital antar instansi.
        </p>
        <h2>Pelaksanaan SPBE dievaluasi</h2>
        <p>
          Pelaksanaan SPBE di instansi pusat dan pemerintah daerah dievaluasi secara berkala oleh Kementerian Pendayagunaan Aparatur Negara dan
          Reformasi Birokrasi (KemenPAN-RB), dan hasilnya berupa indeks SPBE. Karena itu, aplikasi yang dibangun sebaiknya tidak berdiri sendiri, tetapi
          mendukung tata kelola, integrasi data, dan keamanan informasi.
        </p>
        <h2>Langkah praktis yang bisa dimulai</h2>
        <ol>
          <li>
            <strong>Inventarisasi aplikasi</strong> yang sudah ada di setiap OPD: siapa pemiliknya, di mana servernya, dan data apa yang disimpan.
          </li>
          <li>
            <strong>Prioritaskan layanan</strong> yang paling sering dipakai warga, misalnya pengaduan, perizinan, atau informasi publik.
          </li>
          <li>
            <strong>Satukan data</strong> lewat integrasi (API) supaya pimpinan bisa melihat dashboard tanpa menunggu rekap manual.
          </li>
          <li>
            <strong>Perhatikan keamanan</strong>: hak akses, backup, dan pengujian keamanan sebelum aplikasi dipakai publik.
          </li>
          <li>
            <strong>Latih ASN</strong> sebagai pengguna dan admin agar sistem benar-benar dipakai.
          </li>
        </ol>
        <h2>Pengadaan</h2>
        <p>
          Layanan pengembangan aplikasi dapat diadakan melalui E-Katalog LKPP bila penyedia terdaftar. Pastikan dokumen kebutuhan (KAK/TOR) menjelaskan
          ruang lingkup, integrasi, dan dukungan setelah aplikasi berjalan.
        </p>
        <p>
          Kami membantu pemerintah daerah membangun dashboard pimpinan, e-office, dan layanan publik. Lihat{" "}
          <Link href="/services/spbe-smart-city">layanan SPBE & Smart City</Link>.
        </p>
        <p className="text-[14px] text-ink-400">Catatan: ringkasan umum, bukan nasihat hukum. Rujuk teks resmi peraturan untuk ketentuan lengkap.</p>
      </>
    ),
  },
  {
    slug: "uu-pdp-untuk-perusahaan",
    title: "UU PDP untuk Perusahaan: Hal yang Perlu Disiapkan pada Sistem Anda",
    seoTitle: "UU PDP untuk Perusahaan: Hal yang Perlu Disiapkan",
    description: "Ringkasan kewajiban pengendali data menurut UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi dan langkah teknis yang bisa diterapkan pada sistem Anda.",
    date: "2026-10-30",
    read: 6,
    category: "Keamanan",
    related: "/services/keamanan-siber",
    Body: () => (
      <>
        <p>
          Undang-Undang Nomor 27 Tahun 2022 tentang <strong>Pelindungan Data Pribadi (UU PDP)</strong> mengatur bagaimana data pribadi dikumpulkan,
          diproses, disimpan, dan dihapus. Undang-undang ini berlaku bagi perusahaan maupun instansi yang mengelola data pribadi, dengan masa
          penyesuaian dua tahun sejak diundangkan pada Oktober 2022.
        </p>
        <h2>Siapa yang terkena?</h2>
        <p>
          Hampir semua organisasi yang memiliki sistem digital: toko online yang menyimpan alamat pelanggan, rumah sakit dengan rekam medis, sekolah dengan
          data siswa, hingga perusahaan yang mengelola data karyawan. Dalam UU PDP, pihak yang menentukan tujuan pemrosesan disebut pengendali data
          pribadi.
        </p>
        <h2>Hal yang perlu disiapkan</h2>
        <ol>
          <li>
            <strong>Dasar pemrosesan yang jelas</strong>, misalnya persetujuan atau pelaksanaan perjanjian, untuk setiap data yang dikumpulkan.
          </li>
          <li>
            <strong>Kumpulkan seperlunya</strong>. Jangan meminta data yang tidak dipakai.
          </li>
          <li>
            <strong>Hak subjek data</strong>: sediakan cara bagi pengguna untuk mengakses, memperbaiki, atau meminta penghapusan datanya.
          </li>
          <li>
            <strong>Keamanan teknis</strong>: hak akses berdasarkan peran, enkripsi, catatan akses (audit log), dan backup yang teruji.
          </li>
          <li>
            <strong>Prosedur kebocoran data</strong>: UU PDP mewajibkan pemberitahuan tertulis kepada subjek data dan lembaga terkait paling lambat 3 x 24 jam
            bila terjadi kegagalan pelindungan data pribadi.
          </li>
          <li>
            <strong>Penilaian dampak</strong> untuk pemrosesan yang berisiko tinggi, seperti data kesehatan atau pemantauan berskala besar.
          </li>
          <li>
            <strong>Pejabat pelindungan data</strong> pada kondisi tertentu, misalnya pemrosesan data berskala besar atau data yang bersifat spesifik.
          </li>
        </ol>
        <h2>Mulai dari mana?</h2>
        <p>
          Langkah pertama yang paling praktis adalah memetakan data: data apa saja yang disimpan, di sistem mana, siapa yang bisa mengakses, dan berapa lama
          disimpan. Dari peta itu, celah keamanan dan kebijakan yang belum ada biasanya langsung terlihat.
        </p>
        <p>
          Kami membantu pengujian keamanan dan pendampingan kepatuhan pada sisi teknis. Lihat <Link href="/services/keamanan-siber">layanan keamanan siber</Link>.
        </p>
        <p className="text-[14px] text-ink-400">Catatan: ringkasan umum, bukan nasihat hukum. Untuk kepastian, rujuk teks resmi UU No. 27 Tahun 2022 dan konsultan hukum.</p>
      </>
    ),
  },
];
