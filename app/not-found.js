import Link from 'next/link';
import { Aliran } from '@/components/Motif';

export const metadata = { title: 'Halaman tidak ditemukan', alternates: { canonical: null }, robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 pt-8 sm:px-6 lg:pt-14">
      <section aria-labelledby="judul-404" className="gelap remote remote-biru embun relative mx-auto max-w-[560px]">
        <Aliran className="pointer-events-none absolute inset-0 z-0 h-full w-full text-lcd-teks/25" />
        <div className="relative">
          <div className="lcd">
            <p className="lcd-label">Kode galat</p>
            <p className="digit-besar mt-1">E-404</p>
          </div>
          <h1 id="judul-404" className="mt-6 text-[2rem] sm:text-[2.6rem]">
            Halaman ini tidak ada
          </h1>
          <p className="mt-3 text-lg text-[#cfe7f4]">Mungkin alamatnya salah ketik, atau halamannya sudah pindah. Kembali ke beranda atau hitung PK ruanganmu.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="tombol tombol-cyan">
              Ke beranda
            </Link>
            <Link href="/pilih-pk" className="tombol tombol-garis">
              Pilih PK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
