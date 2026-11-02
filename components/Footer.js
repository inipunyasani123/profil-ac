import Link from 'next/link';
import { LogoPK, Aliran } from './Motif';
import { navigasi, site, kecamatan } from '@/lib/data';
import { waLink } from '@/lib/wa';

export default function Footer() {
  return (
    <footer className="gelap panel-tua embun embun-bawah relative mt-4 border-t-[1.5px] [--embun-ukuran:min(40%,300px)]">
      <Aliran className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 text-cyan/15 md:block" />
      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <LogoPK className="h-11 w-11" />
            <span className="font-display text-3xl font-extrabold tracking-tight">{site.nama}</span>
          </div>
          <p className="mt-4 max-w-sm text-[#cfe7f4]">Servis dan pasang AC untuk rumah, toko, dan kantor kecil di {site.kota}. {site.tagline}</p>
          <a href={waLink('Halo PK Pas, saya mau tanya soal AC.')} target="_blank" rel="noopener noreferrer" className="tombol tombol-cyan mt-6">
            Tanya lewat WhatsApp
          </a>
        </div>

        <nav aria-label="Peta situs" className="md:col-span-3">
          <p className="label-mono text-[#9fd4e6]">Halaman</p>
          <ul className="mt-3 space-y-1">
            {navigasi.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-block py-1.5 text-lg font-semibold hover:text-lcd-teks">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="label-mono text-[#9fd4e6]">Jam kerja</p>
          <p className="mt-3 text-lg font-semibold">
            {site.jam.hari}, {site.jam.buka} sampai {site.jam.tutup} {site.jam.zona}
          </p>
          <p className="mt-6 label-mono text-[#9fd4e6]">Alamat</p>
          <p className="mt-3">
            {site.alamat.jalan}, {site.alamat.kota}, {site.alamat.provinsi}
          </p>
          <p className="mt-6 label-mono text-[#9fd4e6]">Kecamatan yang dilayani</p>
          <p className="mt-3 text-[#cfe7f4]">{kecamatan.join(', ')}</p>
        </div>
      </div>
      <div className="relative border-t border-white/20 bg-tinta">
        <p className="mx-auto max-w-[1240px] px-4 py-5 text-sm text-[#cfe7f4] sm:px-6">PK Pas adalah usaha fiktif. Nama, alamat, jadwal, dan isinya rekaan.</p>
      </div>
    </footer>
  );
}
