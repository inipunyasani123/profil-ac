import Link from 'next/link';
import Image from 'next/image';
import RemotePas from '@/components/RemotePas';
import { Aliran } from '@/components/Motif';
import { site, layanan, caraKerja } from '@/lib/data';
import { tulisan } from '@/lib/kabar';
import { tanggalPanjang } from '@/lib/format';
import { metaHalaman } from '@/lib/seo';
import { waLink } from '@/lib/wa';

export const metadata = metaHalaman({ path: '', deskripsi: site.deskripsi });

export default function Beranda() {
  const terbaru = tulisan.slice(0, 2);
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-5 sm:px-6 lg:pt-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Unit AC: judul halaman */}
        <section aria-labelledby="judul-beranda" className="unit-ac lg:col-span-8 lg:col-start-1 lg:row-start-1">
          <div className="flex items-start justify-between gap-4">
            <p className="label-mono text-tinta-3">PK Pas, Makassar</p>
            <div className="lcd !px-3 !py-2 text-right" aria-hidden="true">
              <p className="lcd-label">Cool</p>
              <p className="mono text-[2rem] leading-none">
                24<span className="text-lg">°C</span>
              </p>
            </div>
          </div>
          <h1 id="judul-beranda" className="mt-4 max-w-[19ch] lg:text-[3.5rem]">
            Servis dan pasang AC di Makassar. PK-nya pas untuk ruanganmu.
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg text-tinta-2">
            Cuci, tambah freon, pindah unit, dan perbaikan untuk rumah, toko, dan kantor kecil. Belum yakin berapa PK? Coba hitung dulu.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/pilih-pk" className="tombol">
              Hitung PK ruanganmu
            </Link>
            <Link href="/layanan" className="tombol tombol-garis">
              Lihat layanan
            </Link>
          </div>
        </section>

        {/* Foto unit, dengan garis angin yang keluar dari celah unit di atasnya */}
        <figure className="panel relative min-h-[240px] lg:col-span-3 lg:col-start-1 lg:row-start-2">
          <Aliran className="pointer-events-none absolute -top-[52px] left-5 z-10 h-[62%] w-[calc(100%-2.5rem)] text-cyan" />
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <Image src="/images/unit-dalam.webp" alt="Unit dalam AC dinding berwarna putih terpasang di dinding, dengan penutup celah hembusan yang terbuka sedikit di bagian bawahnya" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-[22%_18%]" priority />
          </div>
          <figcaption className="label-mono absolute inset-x-0 bottom-0 rounded-b-[12px] bg-lcd px-3 py-2 text-lcd-teks">Unit dalam yang terpasang di dinding.</figcaption>
        </figure>

        {/* Remote hitung PK */}
        <RemotePas className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1" />

        {/* Daftar pekerjaan */}
        <section aria-labelledby="judul-kerja" className="panel p-5 sm:p-6 lg:col-span-5 lg:col-start-4 lg:row-start-2">
          <h2 id="judul-kerja">Yang kami kerjakan</h2>
          <ul className="mt-3">
            {layanan.map((l) => (
              <li key={l.id}>
                <Link href={`/layanan#${l.id}`} className="baris-titik">
                  <span className="min-w-0 flex-1">
                    <span className="nama-baris block">{l.nama}</span>
                    <span className="mono mt-0.5 block text-[0.9rem] font-normal text-tinta-3">{l.lama}</span>
                  </span>
                  <span className="mono text-xl" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Kabar terbaru */}
        <section aria-labelledby="judul-kabar" className="panel panel-es p-5 sm:p-6 lg:col-span-7">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="judul-kabar">Kabar dari lapangan</h2>
            <Link href="/kabar" className="tautan shrink-0">
              Semua tulisan
            </Link>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {terbaru.map((t) => (
              <article key={t.slug}>
                <Link href={`/kabar/${t.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] border-[1.5px] border-tinta">
                    <Image src={t.foto} alt={t.fotoAlt} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
                  </div>
                  <h3 className="mt-3 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">{t.judul}</h3>
                  <p className="mt-1 text-tinta-2">{t.ringkas}</p>
                  <p className="label-mono mt-2 text-tinta-3">
                    <time dateTime={t.tanggal}>{tanggalPanjang(t.tanggal)}</time>
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Wilayah dan jam */}
        <section aria-labelledby="judul-wilayah" className="gelap panel panel-tua flex flex-col overflow-hidden lg:col-span-5">
          <div className="relative aspect-[16/9] border-b-[1.5px] border-tinta">
            <Image src="/images/makassar.webp" alt="Pemandangan Makassar dari atas: atap-atap rumah dan gedung biru di antara pepohonan" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="kaca-embun kaca-embun-kanan" aria-hidden="true" />
          </div>
          <div className="p-5 sm:p-6">
            <h2 id="judul-wilayah">Melayani kota Makassar</h2>
            <p className="mt-3 text-[#cfe7f4]">
              {site.jam.hari}, {site.jam.buka} sampai {site.jam.tutup} {site.jam.zona}.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/kontak" className="tombol tombol-cyan">
                Tulis pesan
              </Link>
              <a href={waLink('Halo PK Pas, saya mau tanya soal AC.')} target="_blank" rel="noopener noreferrer" className="tombol tombol-garis">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Alur kerja sebagai jalur pipa */}
        <section aria-labelledby="judul-cara" className="panel p-5 sm:p-8 lg:col-span-12 lg:p-10">
          <h2 id="judul-cara">Dari pesan sampai dingin</h2>
          <ol className="pipa mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-8">
            {caraKerja.map((c) => (
              <li key={c.judul} className="relative pl-14 md:pl-0 md:pt-16 md:text-center">
                <span className="simpul" aria-hidden="true" />
                <h3>{c.judul}</h3>
                <p className="mt-2 text-tinta-2 md:mx-auto md:max-w-[34ch]">{c.isi}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
