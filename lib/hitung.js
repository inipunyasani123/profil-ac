import { kelasPK } from './data';

// Pemisah ribuan titik, desimal koma. Ditulis manual supaya sama di server dan di peramban.
export const ribu = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const desimal = (n, d = 1) => n.toFixed(d).replace('.', ',');

export const BTU_PER_M2 = 500;
export const TAMBAH_MATAHARI = 0.1;
export const TAMBAH_ATAP = 0.1;
export const BTU_PER_ORANG = 600;

// Aturan kasar: luas x 500 BTU, ditambah koreksi. Hasilnya perkiraan, bukan hitungan teknik.
export function hitungPK({ panjang, lebar, matahari, atas, orang }) {
  const luas = panjang * lebar;
  const dasar = luas * BTU_PER_M2;
  const dariMatahari = matahari ? Math.round(dasar * TAMBAH_MATAHARI) : 0;
  const dariAtap = atas ? Math.round(dasar * TAMBAH_ATAP) : 0;
  const dariOrang = Math.max(0, orang - 2) * BTU_PER_ORANG;
  const total = dasar + dariMatahari + dariAtap + dariOrang;
  const idx = kelasPK.findIndex((k) => k.btu >= total);
  const kelas = idx >= 0 ? kelasPK[idx] : null;
  const catatan = [];
  if (!kelas) {
    catatan.push('Kebutuhannya di atas kelas 2,5 PK. Ruangan sebesar ini biasanya memakai dua unit atau perlu disurvei dulu.');
  } else {
    const sisa = (kelas.btu - total) / kelas.btu;
    if (idx < kelasPK.length - 1 && sisa < 0.08) {
      catatan.push(`Hasilnya dekat batas ${kelas.label}. Kalau ruangan sering penuh atau tidak pernah bertirai, pertimbangkan ${kelasPK[idx + 1].label}.`);
    }
    if (idx === 0 && total < kelas.btu * 0.6) {
      catatan.push('Ruangannya kecil sekali. Kelas terkecil sudah lebih dari cukup.');
    }
    if (luas > 40) {
      catatan.push('Ruangan yang luas sering lebih merata dengan dua unit. Teknisi bisa membantu menimbang.');
    }
  }
  return { luas, dasar, dariMatahari, dariAtap, dariOrang, total, kelas, idx, catatan };
}

// Paket layanan contoh (tanpa harga) menurut kelas yang disarankan.
export function paketCocok(hasil, { atas, matahari }) {
  const { kelas, idx } = hasil;
  let paket;
  if (!kelas) {
    paket = {
      nama: 'Survei ruangan dulu',
      isi: ['Teknisi mengukur ruangan dan melihat sumber panasnya.', 'Dihitung ulang: satu unit besar atau dua unit.', 'Baru setelah itu pasang.'],
    };
  } else if (idx <= 2) {
    paket = {
      nama: 'Paket kamar: pasang satu unit',
      isi: ['Posisi unit dipilih supaya angin tidak langsung mengenai tempat tidur.', 'Pipa dan kabel standar sampai 4 meter (contoh).', 'Uji dingin sebelum teknisi pulang.'],
    };
  } else if (idx === 3) {
    paket = {
      nama: 'Paket ruang keluarga atau toko kecil: pasang satu unit',
      isi: ['Posisi unit dipilih supaya hembusan menjangkau sudut ruangan.', 'Aliran listrik dicek dulu sebelum unit dipasang.', 'Pipa dan kabel standar sampai 4 meter (contoh).'],
    };
  } else {
    paket = {
      nama: 'Paket ruang besar: survei lalu pasang',
      isi: ['Survei di tempat untuk menentukan satu unit besar atau dua unit.', 'Aliran listrik dicek dulu sebelum unit dipasang.', 'Uji dingin di beberapa sudut ruangan.'],
    };
  }
  const tambahan = [];
  if (atas) tambahan.push('Karena ruangan di bawah atap, unit luar sebaiknya diberi tempat yang teduh.');
  if (matahari) tambahan.push('Karena kena matahari langsung, tirai atau film jendela membantu meringankan beban AC.');
  return { ...paket, tambahan, layananId: 'bongkar-pasang' };
}

// Angka bulat tanpa desimal; selain itu sampai dua desimal berkoma tanpa nol di belakang (12,25 dan 4,5).
export const angka = (n) => String(Math.round(n * 100) / 100).replace('.', ',');
