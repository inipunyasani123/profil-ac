'use client';

import { useEffect, useRef, useState } from 'react';
import { kecamatan, layanan, slotKunjungan } from '@/lib/data';
import { waLink } from '@/lib/wa';

const kebutuhan = [...layanan.map((l) => l.nama), 'Belum tahu, mau tanya dulu'];
const waktu = ['Fleksibel', ...slotKunjungan.map((s) => `${s.hari}, ${s.jam}`)];

function Bidang({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="label-mono mb-1.5 block text-tinta-3">
        {label}
      </label>
      {children}
    </div>
  );
}

// Tidak mengirim apa pun ke server: isian disusun menjadi pesan WhatsApp tanpa nomor tujuan.
export default function FormKontak() {
  const [pesan, setPesan] = useState('');
  const hasil = useRef(null);

  useEffect(() => {
    if (pesan) hasil.current?.focus();
  }, [pesan]);

  function kirim(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const catatan = String(f.get('catatan') || '').trim();
    setPesan(
      [
        `Halo PK Pas, saya ${String(f.get('nama')).trim()}.`,
        `Kebutuhan: ${f.get('kebutuhan')}`,
        `Jumlah unit AC: ${f.get('unit')}`,
        `Kecamatan: ${f.get('kecamatan')}, Makassar`,
        `Waktu yang cocok: ${f.get('waktu')}`,
        catatan && `Catatan: ${catatan}`,
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }

  return (
    <div>
      <form onSubmit={kirim} className="space-y-4">
        <Bidang id="k-nama" label="Nama">
          <input id="k-nama" name="nama" required pattern=".*\S.*" title="Isi namamu" autoComplete="name" className="isian" placeholder="Nama panggilanmu" />
        </Bidang>
        <Bidang id="k-butuh" label="Kebutuhan">
          <select id="k-butuh" name="kebutuhan" required className="isian" defaultValue="">
            <option value="" disabled>
              Pilih satu
            </option>
            {kebutuhan.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </Bidang>
        <div className="grid gap-4 sm:grid-cols-2">
          <Bidang id="k-unit" label="Jumlah unit AC">
            <input id="k-unit" name="unit" type="number" inputMode="numeric" min="1" max="50" defaultValue="1" required className="isian" />
          </Bidang>
          <Bidang id="k-kec" label="Kecamatan">
            <select id="k-kec" name="kecamatan" required className="isian" defaultValue="">
              <option value="" disabled>
                Pilih satu
              </option>
              {kecamatan.map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </Bidang>
        </div>
        <Bidang id="k-waktu" label="Waktu yang cocok">
          <select id="k-waktu" name="waktu" className="isian" defaultValue="Fleksibel">
            {waktu.map((w) => (
              <option key={w}>{w}</option>
            ))}
          </select>
        </Bidang>
        <Bidang id="k-catatan" label="Catatan (boleh kosong)">
          <textarea id="k-catatan" name="catatan" className="isian" placeholder="Misalnya: AC tidak dingin sejak minggu lalu" />
        </Bidang>
        <button type="submit" className="tombol w-full sm:w-auto">
          Susun pesan WhatsApp
        </button>
      </form>

      {pesan && (
        <div ref={hasil} tabIndex={-1} className="mt-6 outline-offset-4" aria-labelledby="judul-pratinjau" role="region">
          <h3 id="judul-pratinjau" className="text-[1.3rem]">
            Pesanmu sudah tersusun
          </h3>
          <div className="lcd mt-3">
            <p className="lcd-label">Pratinjau pesan</p>
            <p className="mono mt-2 whitespace-pre-line text-[1.02rem] leading-relaxed">{pesan}</p>
          </div>
          <a href={waLink(pesan)} target="_blank" rel="noopener noreferrer" className="tombol mt-4 w-full sm:w-auto">
            Buka WhatsApp
          </a>
          <p className="mt-3 text-[0.95rem] text-tinta-3">WhatsApp terbuka tanpa nomor tujuan. Pilih sendiri kontaknya. Tidak ada data yang dikirim ke server.</p>
        </div>
      )}
    </div>
  );
}
