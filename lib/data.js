// Seluruh isi PK Pas (usaha fiktif di Makassar). Tidak ada nomor telepon, email, atau tarif di sini.
export const site = {
  nama: 'PK Pas',
  url: 'https://profil-ac.pintuweb.id',
  kota: 'Makassar',
  judul: 'PK Pas: Servis dan Pasang AC di Makassar',
  deskripsi:
    'Cuci AC, tambah freon, pindah unit, dan perbaikan untuk rumah, toko, dan kantor kecil di Makassar. Hitung dulu PK yang pas untuk ruanganmu.',
  tagline: 'Hitung dulu, baru pasang.',
  jam: { hari: 'Senin sampai Sabtu', buka: '08.00', tutup: '17.00', zona: 'WITA' },
  alamat: { jalan: 'Jl. Contoh No. 12 (alamat contoh)', kota: 'Makassar', provinsi: 'Sulawesi Selatan' },
};

export const navigasi = [
  { href: '/', label: 'Beranda' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/pilih-pk', label: 'Pilih PK', khas: true },
  { href: '/profil', label: 'Profil' },
  { href: '/kabar', label: 'Kabar' },
  { href: '/kontak', label: 'Kontak' },
];

export const kecamatan = [
  'Mariso', 'Mamajang', 'Tamalate', 'Rappocini', 'Makassar', 'Ujung Pandang', 'Wajo',
  'Bontoala', 'Ujung Tanah', 'Tallo', 'Panakkukang', 'Manggala', 'Tamalanrea', 'Biringkanaya',
];

export const layanan = [
  {
    id: 'cuci-ac',
    nama: 'Cuci AC',
    foto: '/images/unit-dalam.webp',
    fotoAlt: 'Unit AC dinding di dalam ruangan, terpasang miring di dekat lampu sorot',
    fotoKet: 'Unit dalam yang terpasang tinggi di dinding.',
    singkat: 'Filter, sirip, dan saluran air dibersihkan supaya angin kembali kencang dan tidak bau.',
    lama: '45 sampai 60 menit',
    lamaKet: 'per unit, contoh untuk AC dinding sampai 2 PK',
    kapan: [
      'Angin dari unit terasa lemah atau kurang dingin.',
      'Ada bau apek saat AC baru menyala.',
      'Air menetes dari unit dalam.',
      'AC dipakai hampir tiap hari dan sudah beberapa bulan belum dicuci.',
    ],
    kerja: [
      'Lantai dan perabot di sekitar unit ditutup.',
      'Penutup dan filter dilepas, lalu dicuci.',
      'Sirip unit dalam dan unit luar disemprot air bertekanan, bagian listrik ditutup dulu.',
      'Baling-baling dan bak penampung air dibersihkan.',
      'Saluran buang dicek supaya air mengalir lancar.',
      'AC dipasang kembali, dinyalakan, dan hasilnya kamu lihat langsung.',
    ],
  },
  {
    id: 'tambah-freon',
    nama: 'Tambah freon',
    foto: '/images/embun-tiang.webp',
    fotoAlt: 'Tiang pagar kayu tertutup embun beku saat matahari terbit',
    fotoKet: 'Foto kiasan: embun beku di tiang pagar.',
    singkat: 'Freon tidak habis karena dipakai. Kalau kurang, biasanya ada yang bocor, jadi sumbernya dicari dulu.',
    lama: '30 sampai 60 menit',
    lamaKet: 'belum termasuk mencari kebocoran, yang bisa lebih lama',
    kapan: [
      'AC menyala tapi tidak dingin, padahal filter sudah bersih.',
      'Ada es menempel di pipa atau di unit dalam.',
      'Unit luar menyala terus tapi ruangan tidak sejuk.',
      'Setelah AC dibongkar atau dipindah.',
    ],
    kerja: [
      'Tekanan freon diukur dengan manifold.',
      'Sambungan pipa diperiksa untuk mencari titik bocor.',
      'Sambungan diperbaiki bila perlu.',
      'Pipa divakum, lalu freon diisi sesuai jenis dan takaran di label unit.',
      'Suhu hembusan dan arus listrik dicek setelah pengisian.',
    ],
  },
  {
    id: 'bongkar-pasang',
    nama: 'Bongkar-pasang dan pindah unit',
    foto: '/images/unit-luar.webp',
    fotoAlt: 'Unit luar AC berkipas di atas dudukan, di samping tembok bata',
    fotoKet: 'Unit luar yang duduk di dudukan dekat tembok.',
    singkat: 'Unit dilepas, dipindah, lalu dipasang lagi dengan pipa dan kabel yang tertata. Bisa juga pasang unit baru.',
    lama: '3 sampai 5 jam',
    lamaKet: 'per unit untuk bongkar dan pasang kembali; pipa baru atau jarak jauh bisa lebih lama',
    kapan: [
      'Pindah rumah, ruko, atau kantor.',
      'Mau menggeser posisi unit di ruangan yang sama.',
      'Dinding atau plafon akan dicat atau direnovasi.',
      'Mengganti unit lama dengan yang baru.',
    ],
    kerja: [
      'Freon dikumpulkan dulu ke unit luar (pump down).',
      'Unit dalam dan unit luar dilepas, ujung pipa ditutup.',
      'Braket dipasang di tempat baru, kekuatan dinding dicek.',
      'Pipa, kabel, dan saluran buang disambung; yang sudah rapuh diganti.',
      'Pipa divakum, kran freon dibuka, sambungan dicek bocor atau tidak.',
      'AC dinyalakan sampai dingin, lalu pipa dirapikan.',
    ],
  },
  {
    id: 'perbaikan',
    nama: 'Perbaikan',
    foto: '/images/unit-atap.webp',
    fotoAlt: 'Unit luar AC berwarna putih di atas atap seng, dengan pipa tembaga dan selang hitam yang tersambung',
    fotoKet: 'Unit luar yang dipasang di atap.',
    singkat: 'Penyebabnya dicari dulu, pilihan perbaikan dijelaskan, baru suku cadang diganti kalau kamu setuju.',
    lama: 'Pengecekan sekitar 30 menit',
    lamaKet: 'lama perbaikan tergantung kerusakan dan ketersediaan suku cadang',
    kapan: [
      'AC tidak mau menyala.',
      'Lampu berkedip atau muncul kode di layar unit.',
      'Kipas unit luar tidak berputar atau bunyinya kasar.',
      'Air bocor sampai ke lantai.',
      'AC mati sendiri di tengah malam.',
    ],
    kerja: [
      'Gejala ditanyakan: kapan mulai dan seperti apa.',
      'Kode di layar, aliran listrik, kipas, sensor, dan papan kontrol dicek.',
      'Kerusakan dan pilihan perbaikannya dijelaskan sebelum ada yang diganti.',
      'Bagian yang rusak diperbaiki atau diganti setelah kamu setuju.',
      'AC diuji sampai dingin dan jalannya stabil.',
    ],
  },
  {
    id: 'kontrak-perawatan',
    nama: 'Kontrak perawatan toko dan kantor',
    foto: '/images/kafe.webp',
    fotoAlt: 'Ruang kafe kecil dengan bangku biru panjang dan meja kayu',
    fotoKet: 'Ruang usaha kecil yang dipakai tiap hari.',
    singkat: 'Jadwal cuci dan cek berkala untuk beberapa unit, dikerjakan di luar jam ramai.',
    lama: '3 sampai 4 jam',
    lamaKet: 'contoh satu kunjungan untuk 5 unit; jadwal dan jumlah unit disepakati di awal',
    kapan: [
      'Punya beberapa unit AC di toko atau kantor.',
      'Tidak mau repot mengingat jadwal cuci.',
      'Pekerjaan harus dilakukan saat tempat sedang sepi.',
      'Ingin ada catatan kondisi tiap unit.',
    ],
    kerja: [
      'Survei awal: PK, umur, dan kondisi tiap unit dicatat.',
      'Jadwal cuci berkala disepakati dengan pemilik tempat.',
      'Cek ringan tiap kunjungan: tekanan, arus, dan saluran buang.',
      'Catatan singkat per unit diberikan setelah kunjungan.',
      'Panggilan perbaikan di antara jadwal didahulukan.',
    ],
  },
];

// Kelas pasaran (BTU per jam). Angkanya pembulatan umum, bisa sedikit berbeda antarmerek.
export const kelasPK = [
  { label: '1/2 PK', btu: 5000 },
  { label: '3/4 PK', btu: 7000 },
  { label: '1 PK', btu: 9000 },
  { label: '1,5 PK', btu: 12000 },
  { label: '2 PK', btu: 18000 },
  { label: '2,5 PK', btu: 24000 },
];

// Slot contoh, bukan jadwal sungguhan.
export const slotKunjungan = [
  { id: 'sen', hari: 'Senin', jam: '09.00 sampai 11.00' },
  { id: 'sel', hari: 'Selasa', jam: '13.00 sampai 15.00' },
  { id: 'rab', hari: 'Rabu', jam: '09.00 sampai 11.00' },
  { id: 'kam', hari: 'Kamis', jam: '15.00 sampai 17.00' },
  { id: 'sab', hari: 'Sabtu', jam: '09.00 sampai 11.00' },
];

export const caraKerja = [
  { judul: 'Ceritakan', isi: 'Kirim pesan lewat WhatsApp: jenis AC, gejalanya, dan ukuran ruangan kalau tahu.' },
  { judul: 'Dicek di tempat', isi: 'Teknisi datang, melihat unitnya, lalu menjelaskan apa yang perlu dikerjakan.' },
  { judul: 'Dikerjakan', isi: 'Setelah kamu setuju, pekerjaan dimulai. Hasilnya kamu lihat sebelum teknisi pamit.' },
];

export const prinsip = [
  { judul: 'Hitung dulu', isi: 'Ukuran ruangan dan arah matahari dihitung sebelum bicara soal PK.' },
  { judul: 'Jelaskan dulu', isi: 'Kerusakan dan pilihan perbaikan disampaikan sebelum ada yang diganti.' },
  { judul: 'Rapikan dulu', isi: 'Pipa, kabel, dan lantai dirapikan sebelum teknisi pulang.' },
];

export const perlengkapan = [
  'Manifold dan pengukur tekanan',
  'Pompa vakum',
  'Pencuci bertekanan untuk sirip unit',
  'Penutup lantai dan perabot',
  'Tangga lipat dan sabuk pengaman',
];
