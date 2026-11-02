const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

// "2026-10-06" -> "6 Oktober 2026" (tanpa zona waktu, supaya sama di server dan peramban)
export const tanggalPanjang = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${bulan[m - 1]} ${y}`;
};
