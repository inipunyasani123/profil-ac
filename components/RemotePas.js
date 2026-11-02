'use client';

import Link from 'next/link';
import { useState } from 'react';
import Stepper from './Stepper';
import { hitungPK, ribu, desimal, angka } from '@/lib/hitung';
import { kelasPK } from '@/lib/data';

// Remote mini di beranda: dua tombol ukuran dan satu sakelar matahari, hasilnya saran PK awal.
export default function RemotePas({ className = '' }) {
  const [panjang, setPanjang] = useState(4);
  const [lebar, setLebar] = useState(3);
  const [matahari, setMatahari] = useState(false);
  const h = hitungPK({ panjang, lebar, matahari, atas: false, orang: 2 });
  const href = `/pilih-pk?p=${panjang}&l=${lebar}&m=${matahari ? 1 : 0}`;

  return (
    <section aria-labelledby="judul-remote" className={`remote remote-biru embun embun-kanan gelap flex flex-col [--embun-ukuran:150px] ${className}`}>
      <h2 id="judul-remote" className="text-[1.65rem] leading-[1.05] sm:text-[1.9rem]">
        Berapa PK untuk ruanganmu?
      </h2>
      <p className="mt-2 text-[#cfe7f4]">Atur ukuran di remote ini. Hasilnya langsung muncul di layar.</p>

      <div className="lcd mt-5">
        <p className="lcd-label">Luas ruangan</p>
        <p className="digit-besar mt-1">
          {angka(h.luas)}
          <span className="ms-2 text-[1.4rem]">m²</span>
        </p>
        <p className="lcd-label mt-1">
          {desimal(panjang)} × {desimal(lebar)} m
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <Stepper id="rp-panjang" label="Panjang" nilai={panjang} ubah={setPanjang} min={1} max={20} />
        <Stepper id="rp-lebar" label="Lebar" nilai={lebar} ubah={setLebar} min={1} max={20} />
        <button type="button" role="switch" aria-checked={matahari} onClick={() => setMatahari((v) => !v)} className="sakelar">
          <span className="jalur" aria-hidden="true" />
          <span className="font-semibold">Kena matahari langsung</span>
        </button>
      </div>

      <div className="lcd mt-5" role="status">
        <p className="lcd-label">Saran awal</p>
        <p className="digit-besar mt-1">{h.kelas ? h.kelas.label : '> 2,5 PK'}</p>
        <p className="lcd-label mt-1">
          {ribu(h.total)} BTU per jam dibutuhkan
        </p>
      </div>
      <ol className="skala mt-3" aria-label="Kelas PK yang dijual">
        {kelasPK.map((k, i) => (
          <li key={k.label} aria-current={i === h.idx ? 'true' : undefined}>
            {k.label.replace(' PK', '')}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-[#cfe7f4]">Perkiraan kasar: luas dikali 500 BTU, ditambah 10 persen bila kena matahari.</p>

      <div className="mt-auto pt-5">
        <Link href={href} className="tombol tombol-cyan w-full">
          Hitung lengkap
        </Link>
      </div>
    </section>
  );
}
