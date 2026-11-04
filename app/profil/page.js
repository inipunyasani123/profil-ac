import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { Teknisi } from '@/components/Motif';
import { site, prinsip, perlengkapan } from '@/lib/data';
import { metaHalaman, jsonLdRoti } from '@/lib/seo';

export const metadata = metaHalaman({
  path: '/profil',
  judul: 'Profil Tim Servis AC di Makassar',
  deskripsi: 'Kenali PK Pas: teknisi AC di Makassar yang menghitung ukuran ruangan dulu, menjelaskan kerusakan, dan merapikan pekerjaan sebelum pulang.',
});

export default function Profil() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-6 sm:px-6 lg:pt-10">
      <JsonLd data={jsonLdRoti([{ nama: 'Beranda', path: '/' }, { nama: 'Profil', path: '/profil' }])} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <header className="flex flex-col justify-end lg:col-span-7">
          <p className="label-mono text-tinta-3">Profil PK Pas</p>
          <h1 className="mt-3 max-w-[16ch]">Teknisi AC dari Makassar yang menghitung dulu.</h1>
          <p className="mt-5 max-w-[50ch] text-lg text-tinta-2">
            Pertanyaan yang paling sering kami dengar di lapangan: AC ini sebenarnya cocok berapa PK? Dari situ lahir kebiasaan kami, yaitu mengukur ruangan sebelum memasang apa pun.
          </p>
        </header>

        <figure className="gelap panel panel-tua embun embun-kanan flex items-center justify-center p-6 lg:col-span-5 lg:row-span-2">
          <Teknisi className="h-auto w-full max-w-[460px]" />
        </figure>

        <section aria-labelledby="judul-cerita" className="panel p-5 sm:p-8 lg:col-span-7">
          <h2 id="judul-cerita">Cerita singkat</h2>
          <div className="mt-4 max-w-[60ch] space-y-4 text-lg text-tinta-2">
            <p>PK Pas adalah usaha servis AC kecil di {site.kota}. Kami mengerjakan AC dinding untuk rumah, toko, dan kantor kecil: cuci, tambah freon, bongkar-pasang, dan perbaikan.</p>
            <p>Cara kerja kami bisa kamu lihat sendiri: ruangan diukur, kerusakan dijelaskan, dan hasilnya ditunjukkan sebelum teknisi pulang.</p>
            <p>AC sentral gedung besar dan mesin pendingin industri di luar bidang kami. Kalau kebutuhanmu ke sana, kami akan bilang terus terang.</p>
          </div>
        </section>

        {prinsip.map((p) => (
          <section key={p.judul} aria-labelledby={`p-${p.judul}`} className="remote remote-es lg:col-span-4">
            <h2 id={`p-${p.judul}`} className="lcd mono !text-[1.35rem] !font-normal uppercase !tracking-[0.08em]">
              {p.judul}
            </h2>
            <p className="mt-4 text-lg text-tinta-2">{p.isi}</p>
          </section>
        ))}

        <section aria-labelledby="judul-alat" className="panel overflow-hidden lg:col-span-6">
          <figure className="border-b-[1.5px] border-tinta">
            <div className="relative aspect-[16/9]">
              <Image src="/images/perkakas-teknisi.svg" alt="Ilustrasi perkakas teknisi AC: manifold dengan dua pengukur dan tiga selang, pompa vakum, alat flare, pemotong pipa, dan gulungan pipa tembaga" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" unoptimized />
            </div>
            <figcaption className="label-mono bg-lcd px-3 py-2 text-lcd-teks">Ilustrasi: perkakas servis AC.</figcaption>
          </figure>
          <div className="p-5 sm:p-8">
            <h2 id="judul-alat">Perlengkapan teknisi</h2>
            <ul className="daftar-titik mt-3">
              {perlengkapan.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="judul-wilayah" className="gelap panel panel-tua flex flex-col overflow-hidden lg:col-span-6">
          <div className="relative aspect-[16/9] border-b-[1.5px] border-tinta">
            <Image src="/images/makassar.webp" alt="Pemandangan Makassar dari atas: atap-atap rumah dan gedung biru di antara pepohonan" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
            <div className="kaca-embun kaca-embun-kanan" aria-hidden="true" />
          </div>
          <div className="p-5 sm:p-8">
            <h2 id="judul-wilayah">Berlokasi di {site.kota}</h2>
            <p className="mt-3 text-[#cfe7f4]">
              Teknisi datang ke rumah, toko, dan kantor di kecamatan-kecamatan kota. Jam kerja: {site.jam.hari}, {site.jam.buka} sampai {site.jam.tutup} {site.jam.zona}.
            </p>
            <Link href="/kontak" className="tombol tombol-cyan mt-5">
              Lihat kontak
            </Link>
          </div>
        </section>

        <section aria-labelledby="judul-mulai" className="panel panel-es p-6 sm:p-10 lg:col-span-12">
          <h2 id="judul-mulai" className="max-w-[24ch]">
            Mau mulai dari mana?
          </h2>
          <p className="mt-3 max-w-[54ch] text-lg text-tinta-2">Kalau mau pasang unit, hitung dulu PK-nya. Kalau AC-mu bermasalah, ceritakan gejalanya.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pilih-pk" className="tombol">
              Hitung PK ruanganmu
            </Link>
            <Link href="/layanan" className="tombol tombol-garis">
              Lihat layanan
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
