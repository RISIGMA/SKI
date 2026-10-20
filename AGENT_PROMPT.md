# 🦋 PANDUAN & PROMPT AI AGENT: PROYEK STUDYMORPHO

Dokumen ini berisi konteks lengkap, arsitektur, filosofi desain, status implementasi terbaru, dan template instruksi bagi AI Agent untuk melanjutkan pengembangan proyek **StudyMorpho**.

---

## 📌 Ringkasan Proyek & Identitas

- **Nama Proyek**: **StudyMorpho** (Gamified Digital Learning Hub & Study Companion)
- **Target Pengguna**: Siswa & Mahasiswa (Studi Mandiri, Tugas, Evaluasi, & Kolaborasi Kampus)
- **Nama Pengguna Aktif**: **Faris** (ditampilkan di banner hero, selebrasi level up, badges, drawer, dll.)
- **Lokasi Folder Proyek**: `C:\Users\Faris\studyhub-web`
- **Tech Stack**: 
  - **Framework**: React 19 + Vite
  - **Styling**: Tailwind CSS (CDN Configured) + Custom Keyframe CSS (`src/index.css`)
  - **Ikonografi**: `lucide-react`
  - **Grafik & Maskot**: Custom Pure SVG Vektor (Bebas ketergantungan aset gambar eksternal)
- **Cara Menjalankan Server Lokal**:
  ```bash
  cd C:\Users\Faris\studyhub-web
  npm run dev
  # Buka di browser: http://localhost:5173
  ```

---

## 🎨 Filosofi Desain & Karakter Visual (Wajib Dipertahankan)

1. **Palet Warna Utama**:
   - **Mode Terang**: Biru langit lembut & segar (*Sky Blue, Soft Cyan, Pearl White* — `#F0F9FF`, `#E0F2FE`, `#38BDF8`, `#0284C7`).
   - **Mode Gelap**: Biru malam pekat obsidian (*Deep Midnight* — `#0B132B`, `#111C3A`, `#132042`) dengan pendaran neon cyan *bioluminescent*.
2. **Maskot & Simbol (Kupu-Kupu Biru Morpho)**:
   - Kupu-kupu biru melambangkan metamorfosis proses belajar siswa.
   - Di latar belakang terdapat **7 ekor kupu-kupu dinamis** (posisi, ukuran, dan sudut berbeda) yang **berpendar neon (*glow*) di mode malam**.
3. **Micro-Interaction "Butterfly Burst"**:
   - Setiap tombol menu navigasi diklik, muncul partikel kupu-kupu mini yang mengepakkan sayap cepat terbang melayang ke atas disertai taburan bintang (*sparkles* ✨).
4. **Responsivitas Multi-Perangkat**:
   - **Laptop / Layar Lebar (`md:` ke atas)**: Navigasi berupa **Sidebar Kiri Modern Glassmorphism**, Top Search Bar, dan tata letak *Multi-Column Bento Grid*.
   - **HP / Smartphone (`< md`)**: Navigasi otomatis berupa **Bottom Navigation Bar** modern (Dock style).
     - **Latar Bar Mobile**: Mengikuti nuansa sidebar laptop (`bg-white/90` di mode terang, `bg-[#111C3A]/90` di mode gelap, dengan `backdrop-blur-xl`, border tipis, dan bayangan halus dari bawah).
     - **Ikon Aktif Mobile**: Timbul naik ke atas 18px (`translateY(-18px)` dengan animasi spring bounce), berbalut bubble lingkaran bulat bergradien khas sidebar aktif (`bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30`), label teks disembunyikan saat aktif agar bersih dan minimalis.
     - *Catatan Desain*: User meminta **tidak ada** kupu-kupu menempel/hinggap di bubble bottom bar agar tampilan tetap bersih dan elegan.
   - *PENTING*: Jangan gunakan bingkai/bezel tiruan HP; aplikasi ini murni web responsif 100%.

---

## 🌿 Sistem Metamorfosis 4 Tahap (Evolusi Dinamis)

Banner utama beranda dan maskot besarnya bermutasi secara dinamis mengikuti 4 tahap. Setiap tahap menyebut nama user **Faris** pada teks greeting/sapaan banner:

| Tahap | Nama & Level | Wujud Maskot Besar | Ornamen Pinggiran Bingkai Kotak | Warna Mode Malam |
| :--- | :--- | :--- | :--- | :--- |
| **Tahap I** | **Kepompong Kristal** (Lv. 1–4) | Kepompong Kristal Faset bercahaya (`CrystalCocoonMascot`) | Pecahan Kristal Es Heksagonal (`CrystalCornerElements`) | Biru Es Kutub Dalam (`#041E34`) & Teks Cyan |
| **Tahap II** | **Morpho Muda** (Lv. 5–9) | Kupu-kupu hijau toska/mint segar (`YoungMorphoMascot`) | Sulur Dahan & Daun Muda Toska (`NatureVineCornerElements`) | Hutan Zamrud Bioluminescent (`#03261F`) & Teks Mint |
| **Tahap III** | **Radiant Morpho** (Lv. 10–15) *(Default)* | Kupu-kupu dewasa sayap biru elektrik (`RadiantMorphoMascot`) | Lengkungan Sayap Neon Cyan (`NeonWingCornerElements`) | Kobalt Elektrik & Deep Indigo (`#061838`) & Teks Biru Neon |
| **Tahap IV** | **Golden Emperor** (Lv. 16+) | Kupu-kupu Kaisar Emas Swallowtail 24K + Mahkota Ruby (`GoldenEmperorMascot`) | Ukiran Mahkota Emas Kerajaan (`ImperialGoldCornerElements`) | Obsidian Amber Emas Kuno (`#2B1800`) & Teks Emas 24K |

**Posisi Maskot Banner**: Pada tampilan laptop, maskot diposisikan agak ke kiri (bukan pojok). Teks banner dijaga ringkas—hanya menampilkan nama + gelar evolusi aktif.

---

## 🚀 Fitur & Modul yang Sudah Tersedia (Per 21 Oktober 2026)

### 1. Beranda / Dashboard (`activeTab === 'home'`)
- Hero Banner Dinamis Metamorfosis (mutasi warna, ornamen sudut, maskot proporsional di laptop, & personalisasi nama Faris di setiap 4 tahap).
- Pohon Evolusi "Taman Metamorfosis" (interaktif, klik untuk pratinjau wujud 4 tahap).
- 4 Kartu Metrik Belajar reaktif (Tugas aktif tersinkronisasi, streak 5 hari 🔥, diskusi, nilai 89.4 A).
- **Ringkasan Jadwal Kuliah Hari Ini** (Senin, 20 Okt) — menampilkan 2 mata kuliah hari ini + tombol navigasi "Jadwal Lengkap ➔" dan "Buka Kalender ➔" yang langsung berpindah ke tab Tugas & Jadwal.
- Misi Tugas Terdekat (3 teratas dari `pendingTasks`) dengan aksi cepat "Selesaikan ✓" dan link "Lihat Semua" ke tab Tugas.

### 2. Ruang Diskusi (`activeTab === 'discussion'`)
- Kolom pencarian, filter kategori kapsul, dan daftar kartu diskusi tanya jawab.

### 3. Tugas & Jadwal (`activeTab === 'tasks'`) — **DIPERBARUI**
Halaman ini sekarang menjadi pusat lengkap jadwal dan manajemen tugas:
- **Kolom Kiri**: **Jadwal Perkuliahan Mingguan (Senin–Jumat)** — 5 tombol pemilih hari, daftar mata kuliah dinamis sesuai hari terpilih (`weeklyScheduleData[selectedDay]`), footer info sesi kuliah.
- **Kolom Kanan**: **Kalender Akademik Interaktif (Oktober 2026)** — Grid tanggal 31 hari, penanda dot merah (tugas) & biru (kuliah), panel rincian agenda harian berdasarkan `selectedCalendarDate` (tgl 20, 21, 24 punya data khusus).
- **Pemisah Subtitle**: "Daftar Misi & Tugas Akademik" dengan counter `pendingTasks.length` belum selesai dan `completedTasksCount` tuntas.
- **Grid Kartu Tugas (CRUD + LocalStorage)**: Tambah Misi Baru via modal (`AddTaskModal`), selesaikan tugas (klaim XP), hapus misi, status terdata di `localStorage('studymorpho_tasks')`.
- **Slide-Over Drawer "Misi Tertunda" (Opsi B)**: `PendingTasksDrawer` meluncur dari kanan saat tombol "Misi Tertunda" diklik, menampilkan daftar tugas belum selesai dengan aksi Selesai & Detail.

### 4. Kuis & Arena Evaluasi (`activeTab === 'quiz'`)
- Tombol "Mulai Kuis" membuka modal evaluasi interaktif (`InteractiveQuizModal`) — soal pilihan ganda React/Informatika.
- Penjelasan instan untuk setiap jawaban, akumulasi skor, dan tombol klaim reward +150 XP.
- Grafik batang interaktif riwayat 5 kuis terakhir dan evaluasi nilai kumulatif.

### 5. Pusat Notifikasi (`activeTab === 'notifications'`)
- Filter notifikasi (Tugas, Diskusi, Kuis), badge unread, dan aksi tandai dibaca.

### 6. Ruang Fokus Belajar Zen (Pomodoro Room Bertema Biru Muda)
- Timer lingkaran 25 menit (Play/Pause/Reset) dengan preset 5, 15, 25 menit.
- Warna tema **biru muda / soft cyan** (`#F0F9FF`–`#D4EDFC`) dengan glassmorphism.
- **Sintesis Audio Alam Murni (Web Audio API)**: Hujan Lembut 🌧️, Ombak Laut 🌊, Angin Hutan 🌲, dan Api Unggun 🔥 lengkap dengan pengatur slider volume.

### 7. Sistem Gamifikasi, Lencana & Selebrasi Level Up
- Galeri Lencana Prestasi (`BadgesGalleryModal`) — *Morpho Badges* dengan status Terbuka/Terkunci (6 badges total).
- Modal selebrasi megah (`LevelUpCelebrationModal`) saat XP mencapai target 1.000 XP untuk naik tingkat level baru.
- XP & Level tersimpan persisten di `localStorage` (`studymorpho_xp`, `studymorpho_level`).

### 8. Navigasi Responsif Dual-Device
- Sidebar laptop (desktop view) + Floating Dock Bottom Nav (mobile view) dengan micro-interaction timbul saat tab aktif.
- Menu: Beranda, Ruang Diskusi, Tugas & Jadwal, Kuis & Laporan, Pusat Notifikasi.

---

## 📂 Arsitektur State Penting (`App()`)

| State Variable | Tipe | Deskripsi |
| :--- | :--- | :--- |
| `isDarkMode` | `boolean` | Toggle mode terang/gelap |
| `activeTab` | `string` | Tab navigasi aktif (`'home'`, `'discussion'`, `'tasks'`, `'quiz'`, `'notifications'`) |
| `selectedDay` | `string` | Hari terpilih pada jadwal mingguan (`'Senin'`–`'Jumat'`) |
| `selectedCalendarDate` | `number` | Tanggal terpilih pada kalender (default `20`) |
| `evolutionStage` | `number` | Tahap metamorfosis aktif (1–4, default `3`) |
| `userXP` | `number` | XP belajar saat ini (default `780`, max `1000` lalu level up & reset) |
| `userLevel` | `number` | Level pengguna (default `12`) |
| `tasksList` | `array` | Daftar tugas kuliah (CRUD, tersimpan di `localStorage`) |
| `pendingTasks` | `array` (derived) | Filter dari `tasksList` yang status ≠ `'Telah Dikumpulkan'` |
| `completedTasksCount` | `number` (derived) | Jumlah tugas dengan status `'Telah Dikumpulkan'` |
| `isQuizModalOpen` | `boolean` | Buka/tutup modal kuis interaktif |
| `isAddTaskModalOpen` | `boolean` | Buka/tutup modal tambah tugas |
| `isBadgesModalOpen` | `boolean` | Buka/tutup modal galeri lencana |
| `isLevelUpModalOpen` | `boolean` | Buka/tutup modal selebrasi naik level |
| `isZenModeOpen` | `boolean` | Buka/tutup overlay Ruang Fokus Zen |
| `isPendingTasksDrawerOpen` | `boolean` | Buka/tutup Slide-Over Drawer Misi Tertunda |
| `bursts` | `array` | Data partikel butterfly burst aktif |

---

## 📋 Aturan Khusus untuk AI Agent

1. **Bahasa Komentar**: Semua komentar di dalam kode sumber (`src/App.jsx` dan file lainnya) **wajib menggunakan Bahasa Indonesia** yang rapi dan deskriptif.
2. **Preferensi User Terkait Maskot**: **JANGAN** membuat maskot melayang (*floating widget buddy*) yang mengambang menutupi layar, pengguna menginginkan desain yang bersih, elegan, dan terintegrasi di banner/kartu.
3. **Verifikasi Build**: Selalu jalankan `npm --prefix "C:\Users\Faris\studyhub-web" run build` setelah modifikasi untuk memastikan tidak ada error.
4. **Dokumentasi Struktur File**:
   - 📄 [`src/App.jsx`](file:///C:/Users/Faris/studyhub-web/src/App.jsx): Seluruh logika UI, komponen SVG maskot, state navigasi, dan konten tab (~3100+ baris).
   - 📄 [`src/index.css`](file:///C:/Users/Faris/studyhub-web/src/index.css): Animasi keyframe CSS (kepakan sayap, pendaran neon, partikel butterfly burst, bubble pop, drawer slide).
   - 📄 [`index.html`](file:///C:/Users/Faris/studyhub-web/index.html): Konfigurasi Tailwind CSS dan font *Plus Jakarta Sans*.

---

## 💡 Prompt Instruksi untuk AI Agent Selanjutnya (Copy-Paste Langsung)

> **Salin teks di bawah ini ke AI Agent baru untuk melanjutkan pengembangan:**

```text
Halo AI Agent! Anda bertugas melanjutkan pengembangan proyek web "StudyMorpho" yang berlokasi di C:\Users\Faris\studyhub-web.

Baca dan pahami file C:\Users\Faris\studyhub-web\AGENT_PROMPT.md terlebih dahulu sebelum menulis atau memodifikasi kode apapun. File tersebut berisi konteks lengkap arsitektur, status fitur terkini, state management, dan aturan wajib.

Aturan utama yang wajib diikuti:
1. IDENTITAS: StudyMorpho adalah LMS / Digital Learning Hub responsif bergaya gamifikasi modern dengan maskot Kupu-Kupu Biru (Morpho) dan sistem evolusi metamorfosis 4 tahap (Kepompong Kristal -> Morpho Muda -> Radiant Morpho -> Golden Emperor).
2. TEMA & MODE: Mendukung Mode Terang & Gelap secara dinamis (palet Sky Blue di mode terang, Deep Midnight Obsidian dengan aksen neon bioluminescent di mode gelap).
3. NAVIGASI:
   - Laptop (>= md): Sidebar modern glassmorphism di sebelah kiri.
   - Mobile (< md): Bottom Navigation Bar dock-style (glassmorphism senada dengan sidebar laptop, ikon aktif timbul naik 18px dalam bubble lingkaran bergradien sky-cyan, tanpa ada kupu-kupu menempel di bubble).
4. INTERAKSI: Efek Butterfly Burst (kupu-kupu kecil + sparkles terbang ke atas saat tombol menu diklik) dan 7 kupu-kupu melayang di background wajib tetap aktif.
5. KETENTUAN KODE:
   - Semua komentar kode sumber WAJIB ditulis dalam Bahasa Indonesia.
   - JANGAN membuat floating buddy widget yang melayang menutupi konten (jaga tampilan tetap rapi, bersih, dan profesional).
   - Jalankan build test (`npm --prefix "C:\Users\Faris\studyhub-web" run build`) setelah selesai melakukan modifikasi untuk memastikan tidak ada error sintaks.
6. LAYOUT TERKINI:
   - Beranda menampilkan ringkasan jadwal hari ini + misi terdekat (ringkas, bukan jadwal lengkap).
   - Tab "Tugas & Jadwal" berisi jadwal perkuliahan lengkap Senin-Jumat, kalender akademik Oktober 2026, dan grid kartu CRUD tugas.
   - Nama pengguna "Faris" disebut di banner hero setiap tahap evolusi.

Rujukan detail arsitektur lengkap tercatat di C:\Users\Faris\studyhub-web\AGENT_PROMPT.md.

Tugas yang ingin saya kerjakan saat ini:
[TULISKAN TUGAS / FITUR YANG INGIN DITAMBAHKAN DI SINI, contoh:
- Menambahkan halaman profil pengguna dengan statistik belajar
- Mengintegrasikan fitur catatan belajar (Study Notes) per mata kuliah
- Menambahkan sistem leaderboard antar pengguna
- Memperkaya Ruang Diskusi dengan kolom balasan dan voting]
```
