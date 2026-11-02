import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { layanan } from '@/lib/data';
import { metaHalaman, jsonLdRoti } from '@/lib/seo';
import { waLink } from '@/lib/wa';

export const metadata = metaHalaman({
  path: '/layanan',
  judul: 'Layanan Cuci, Freon, dan Pasang AC',
  deskripsi: 'Cuci AC, tambah freon, bongkar-pasang, perbaikan, dan kontrak perawatan toko dan kantor di Makassar. Lihat kapan perlu dan apa yang dikerjakan.',
});

export default function Layanan() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-6 sm:px-6 lg:pt-10">
      <JsonLd data={jsonLdRoti([{ nama: 'Beranda', path: '/' }, { nama: 'Layanan', path: '/layanan' }])} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <header className="flex flex-col justify-end lg:col-span-7">
          <p className="label-mono text-tinta-3">Layanan PK Pas</p>
          <h1 className="mt-3 max-w-[18ch]">Lima pekerjaan untuk AC rumah, toko, dan kantor kecil</h1>
          <p className="mt-5 max-w-[52ch] text-lg text-tinta-2">
            Tiap pekerjaan punya tanda kapan perlu, lama kerja contoh, dan daftar yang dikerjakan teknisi. Lama kerja hanya contoh. Teknisi memastikannya di tempat.
          </p>
        </header>

        <nav aria-label="Loncat ke layanan" className="remote remote-es lg:col-span-5">
          <p className="label-mono text-tinta-3">Pilih pekerjaan</p>
          <ul className="mt-2">
            {layanan.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="baris-titik !min-h-[52px] items-center">
                  <span className="nama-baris flex-1">{l.nama}</span>
                  <span className="mono text-xl" aria-hidden="true">
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {layanan.map((l, i) => (
          <section key={l.id} id={l.id} aria-labelledby={`${l.id}-judul`} className="panel scroll-mt-24 overflow-hidden lg:col-span-12 lg:grid lg:grid-cols-12">
            <figure className={`relative min-h-[230px] border-b-[1.5px] border-tinta lg:col-span-4 lg:min-h-full lg:border-b-0 ${i % 2 ? 'lg:order-last lg:border-l-[1.5px]' : 'lg:border-r-[1.5px]'}`}>
              <Image src={l.foto} alt={l.fotoAlt} fill sizes="(min-width: 1024px) 1040px, 100vw" className="object-cover" />
              <figcaption className="label-mono absolute inset-x-0 bottom-0 bg-lcd px-3 py-2 text-lcd-teks">{l.fotoKet}</figcaption>
            </figure>
            <div className="p-5 sm:p-8 lg:col-span-8 lg:p-10">
              <h2 id={`${l.id}-judul`}>{l.nama}</h2>
              <p className="mt-3 max-w-[56ch] text-lg text-tinta-2">{l.singkat}</p>

              <div className="lcd mt-6 inline-block min-w-[min(100%,20rem)]">
                <p className="lcd-label">Lama kerja contoh</p>
                <p className="mono mt-1 text-[1.6rem] leading-tight">{l.lama}</p>
              </div>
              <p className="mt-2 max-w-[52ch] text-[0.95rem] text-tinta-3">{l.lamaKet}</p>

              <div className="mt-7 grid gap-7 md:grid-cols-2">
                <div>
                  <h3>Kapan perlu</h3>
                  <ul className="daftar-titik mt-1">
                    {l.kapan.map((k) => (
                      <li key={k}>{k}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Yang dikerjakan</h3>
                  <ol className="mt-1 list-decimal ps-6 marker:font-bold marker:text-biru">
                    {l.kerja.map((k) => (
                      <li key={k} className="mt-2.5 ps-1">
                        {k}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <a href={waLink(`Halo PK Pas, saya mau tanya soal ${l.nama.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="tombol tombol-garis mt-8">
                Tanya soal ini lewat WhatsApp
              </a>
            </div>
          </section>
        ))}

        <section aria-labelledby="judul-bingung" className="gelap panel panel-tua embun embun-kanan embun-besar p-6 sm:p-10 lg:col-span-12">
          <h2 id="judul-bingung" className="max-w-[22ch]">
            Belum tahu perlu yang mana?
          </h2>
          <p className="mt-3 max-w-[54ch] text-[#cfe7f4]">Ceritakan gejalanya atau ukuran ruanganmu. Kalau mau pasang unit baru, hitung dulu PK-nya.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pilih-pk" className="tombol tombol-cyan">
              Hitung PK ruanganmu
            </Link>
            <Link href="/kontak" className="tombol tombol-garis">
              Tulis pesan
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
