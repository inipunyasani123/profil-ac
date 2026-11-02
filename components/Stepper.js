'use client';

// Tombol bulat kurang/tambah dengan angka di tengah, seperti tombol suhu di remote AC.
export default function Stepper({ id, label, nilai, ubah, min, max, langkah = 0.5, satuan = 'm', cetak = (n) => String(n).replace('.', ',') }) {
  const bulat = (n) => Math.round(n * 10) / 10;
  return (
    <div role="group" aria-labelledby={`${id}-label`} className="flex items-center justify-between gap-3">
      <span id={`${id}-label`} className="label-mono">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <button type="button" className="tombol-bulat" aria-label={`Kurangi ${label.toLowerCase()}`} onClick={() => ubah(Math.max(min, bulat(nilai - langkah)))} disabled={nilai <= min}>
          <span aria-hidden="true">−</span>
        </button>
        <output className="mono min-w-[5rem] text-center text-xl font-bold">
          {cetak(nilai)} {satuan}
        </output>
        <button type="button" className="tombol-bulat" aria-label={`Tambah ${label.toLowerCase()}`} onClick={() => ubah(Math.min(max, bulat(nilai + langkah)))} disabled={nilai >= max}>
          <span aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  );
}
