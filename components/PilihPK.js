'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Stepper from './Stepper';
import { DenahRuang } from './Motif';
import { hitungPK, paketCocok, ribu, angka, BTU_PER_M2, BTU_PER_ORANG } from '@/lib/hitung';
import { kelasPK, slotKunjungan } from '@/lib/data';
import { waLink } from '@/lib/wa';

function Pilihan({ nama, nilai, pilih, ubah, judul, ket }) {
  return (
    <label className="pilihan">
      <input type="radio" name={nama} value={nilai} checked={pilih === nilai} onChange={() => ubah(nilai)} />
      <span className="block font-display text-[1.05rem] font-bold leading-tight">{judul}</span>
      {ket && <span className="mt-0.5 block text-[0.9rem] opacity-80">{ket}</span>}
    </label>
  );
}

export default function PilihPK() {
  const [panjang, setPanjang] = useState(4);
  const [lebar, setLebar] = useState(3);
  const [matahari, setMatahari] = useState('tidak');
  const [lantai, setLantai] = useState('bawah');
  const [orang, setOrang] = useState(2);
  const [slot, setSlot] = useState('');

  // Nilai awal dari remote di beranda: ?p=4&l=3&m=1
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const p = parseFloat(q.get('p'));
    const l = parseFloat(q.get('l'));
    if (p >= 1 && p <= 20) setPanjang(Math.round(p * 2) / 2);
    if (l >= 1 && l <= 20) setLebar(Math.round(l * 2) / 2);
    if (q.get('m') === '1') setMatahari('ya');
  }, []);

  const adaMatahari = matahari === 'ya';
  const atas = lantai === 'atas';
  const h = hitungPK({ panjang, lebar, matahari: adaMatahari, atas, orang });
  const paket = paketCocok(h, { atas, matahari: adaMatahari });
  const slotPilihan = slotKunjungan.find((s) => s.id === slot);

  const rincian = [
    [`Luas ${angka(h.luas)} m² × ${ribu(BTU_PER_M2)} BTU`, h.dasar],
    adaMatahari && ['Kena matahari langsung, tambah 10 persen', h.dariMatahari],
    atas && ['Lantai paling atas, tambah 10 persen', h.dariAtap],
    orang > 2 && [`${orang - 2} orang setelah yang kedua × ${BTU_PER_ORANG} BTU`, h.dariOrang],
  ].filter(Boolean);

  const saran = h.kelas ? `${h.kelas.label} (sekitar ${ribu(h.kelas.btu)} BTU per jam)` : 'lebih dari 2,5 PK, perlu survei dulu';
  const pesan = [
    'Halo PK Pas, saya mau tanya soal pasang AC.',
    `Ruangan: ${angka(panjang)} × ${angka(lebar)} m (${angka(h.luas)} m²)`,
    `Kena matahari langsung: ${adaMatahari ? 'ya' : 'tidak'}`,
    `Letak ruangan: ${atas ? 'lantai atas, di bawah atap' : 'lantai bawah atau tengah'}`,
    `Jumlah orang: ${orang}`,
    `Saran dari hitungan kasar: ${saran}`,
    `Paket yang cocok: ${paket.nama}`,
    `Slot kunjungan: ${slotPilihan ? `${slotPilihan.hari}, ${slotPilihan.jam}` : 'ikut saran teknisi'}`,
    '(Contoh perhitungan, bukan penawaran harga.)',
  ].join('\n');

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      {/* Remote isian */}
      <form className="remote remote-es lg:col-span-5 lg:self-start lg:[@media(min-height:700px)]:sticky lg:[@media(min-height:700px)]:top-[88px]" onSubmit={(e) => e.preventDefault()} aria-label="Data ruangan">
        <h2 className="text-[1.7rem]">Isi data ruangan</h2>
        {/* Di ponsel hasil ada di bawah formulir; layar kecil ini menampilkan saran terbaru sambil mengisi */}
        <div className="lcd mt-4 flex items-end justify-between gap-3 lg:hidden" aria-hidden="true">
          <div>
            <p className="lcd-label">Saran sementara</p>
            <p className="mono mt-1 text-[1.9rem] leading-none">{h.kelas ? h.kelas.label : '> 2,5 PK'}</p>
          </div>
          <p className="lcd-label text-right">{ribu(h.total)} BTU</p>
        </div>
        <p className="mt-2 lg:hidden">
          <a href="#judul-hasil" className="tautan">
            Lihat hitungan lengkap
          </a>
        </p>
        <div className="mt-5 space-y-4">
          <Stepper id="pk-panjang" label="Panjang" nilai={panjang} ubah={setPanjang} min={1} max={20} />
          <Stepper id="pk-lebar" label="Lebar" nilai={lebar} ubah={setLebar} min={1} max={20} />
        </div>

        <fieldset className="mt-6">
          <legend className="label-mono text-tinta-3">Kena matahari langsung?</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Pilihan nama="matahari" nilai="tidak" pilih={matahari} ubah={setMatahari} judul="Tidak" ket="Teduh atau bertirai" />
            <Pilihan nama="matahari" nilai="ya" pilih={matahari} ubah={setMatahari} judul="Ya" ket="Jendela kena sinar" />
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="label-mono text-tinta-3">Letak ruangan</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Pilihan nama="lantai" nilai="bawah" pilih={lantai} ubah={setLantai} judul="Lantai bawah" ket="Atau di tengah" />
            <Pilihan nama="lantai" nilai="atas" pilih={lantai} ubah={setLantai} judul="Lantai atas" ket="Tepat di bawah atap" />
          </div>
        </fieldset>

        <div className="mt-6">
          <Stepper id="pk-orang" label="Jumlah orang" nilai={orang} ubah={setOrang} min={1} max={12} langkah={1} satuan="orang" cetak={String} />
        </div>
      </form>

      <div className="space-y-5 lg:col-span-7">
        {/* Hasil */}
        <section aria-labelledby="judul-hasil" className="panel overflow-hidden">
          <p className="label-mono bg-lcd px-4 py-2.5 text-lcd-teks">Contoh perhitungan, bukan penawaran harga</p>
          <div className="grid gap-5 p-5 sm:p-6 md:grid-cols-2">
            <div>
              <h2 id="judul-hasil" className="text-[1.5rem]">
                Saran PK
              </h2>
              <div className="lcd mt-3" role="status">
                <p className="lcd-label">Kelas yang disarankan</p>
                <p className="digit-besar mt-1">{h.kelas ? h.kelas.label : '> 2,5 PK'}</p>
                <p className="lcd-label mt-1">
                  {h.kelas ? `${ribu(h.kelas.btu)} BTU per jam` : 'Perlu survei dulu'}
                </p>
              </div>
              <p className="mt-3 text-[0.95rem] text-tinta-3">Kebutuhan hasil hitungan</p>
              <p className="mono text-lg font-bold">{ribu(h.total)} BTU per jam</p>
            </div>
            <div>
              <DenahRuang panjang={panjang} lebar={lebar} matahari={adaMatahari} atas={atas} orang={orang} className="w-full" />
              <p className="mono mt-1 text-center text-[0.95rem] text-tinta-3">
                {angka(panjang)} × {angka(lebar)} m = {angka(h.luas)} m²
              </p>
            </div>
          </div>

          <div className="border-t-[1.5px] border-tinta p-5 sm:p-6">
            <h3>Cara hitungnya</h3>
            <dl className="mt-3">
              {rincian.map(([ket, nilai], i) => (
                <div key={ket} className="flex items-baseline justify-between gap-4 border-b border-dotted border-es-3 py-2">
                  <dt>{ket}</dt>
                  <dd className="mono shrink-0 font-bold">
                    {i > 0 ? '+' : ''}
                    {ribu(nilai)}
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 pt-3">
                <dt className="font-display text-lg font-bold">Total kebutuhan</dt>
                <dd className="mono shrink-0 text-lg font-bold">{ribu(h.total)} BTU</dd>
              </div>
            </dl>
            {h.catatan.length > 0 && (
              <ul className="daftar-titik mt-4">
                {h.catatan.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-[0.95rem] text-tinta-3">
              Ini perkiraan kasar dari aturan luas dikali {BTU_PER_M2} BTU, bukan hitungan teknik. Teknisi tetap perlu melihat ruangannya. Kelas yang dijual: {kelasPK.map((k) => `${k.label} (${ribu(k.btu)})`).join(', ')}.
            </p>
          </div>
        </section>

        {/* Paket */}
        <section aria-labelledby="judul-paket" className="panel panel-es p-5 sm:p-6">
          <h2 id="judul-paket" className="text-[1.5rem]">
            Paket layanan yang cocok
          </h2>
          <p className="mt-3 font-display text-xl font-bold">{paket.nama}</p>
          <ul className="daftar-titik mt-1">
            {[...paket.isi, ...paket.tambahan].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href={`/layanan#${paket.layananId}`} className="tautan">
              Lihat isi pekerjaan bongkar-pasang
            </Link>
          </p>
        </section>

        {/* Slot dan WhatsApp */}
        <section aria-labelledby="judul-slot" className="gelap panel panel-tua embun embun-kanan p-5 sm:p-6 [--embun-ukuran:150px]">
          <h2 id="judul-slot" className="text-[1.5rem]">
            Pilih slot kunjungan teknisi
          </h2>
          <p className="mt-2 text-[#cfe7f4]">Slot di bawah ini contoh, bukan jadwal sungguhan.</p>
          <fieldset className="mt-4">
            <legend className="sr-only">Slot kunjungan</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              <Pilihan nama="slot" nilai="" pilih={slot} ubah={setSlot} judul="Belum pilih" ket="Ikut saran teknisi" />
              {slotKunjungan.map((s) => (
                <Pilihan key={s.id} nama="slot" nilai={s.id} pilih={slot} ubah={setSlot} judul={s.hari} ket={s.jam} />
              ))}
            </div>
          </fieldset>
          <a href={waLink(pesan)} target="_blank" rel="noopener noreferrer" className="tombol tombol-cyan mt-6 w-full sm:w-auto">
            Kirim ringkasan lewat WhatsApp
          </a>
          <p className="mt-3 text-[0.95rem] text-[#cfe7f4]">Tombol ini membuka WhatsApp dengan pesan yang sudah tersusun, tanpa nomor tujuan. Tidak ada data yang dikirim ke server.</p>
        </section>
      </div>
    </div>
  );
}
