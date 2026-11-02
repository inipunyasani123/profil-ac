import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { tulisan } from '@/lib/kabar';
import { tanggalPanjang } from '@/lib/format';
import { metaHalaman, jsonLdRoti } from '@/lib/seo';

export const metadata = metaHalaman({
  path: '/kabar',
  judul: 'Kabar: Tips Merawat dan Memilih AC',
  deskripsi: 'Tulisan singkat dari teknisi PK Pas: tanda AC perlu dicuci, cara memilih PK untuk kamar, dan urusan pindah rumah dengan AC.',
});

function Kartu({ t, besar }) {
  return (
    <article className={`panel overflow-hidden ${besar ? 'lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}`}>
      <Link href={`/kabar/${t.slug}`} className="group flex h-full flex-col">
        <div className={`relative border-b-[1.5px] border-tinta ${besar ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[380px] lg:flex-1' : 'aspect-[16/8]'}`}>
          <Image src={t.foto} alt={t.fotoAlt} fill sizes={besar ? '(min-width: 1024px) 1040px, 100vw' : '(min-width: 1024px) 40vw, 100vw'} className="object-cover" priority={besar} />
        </div>
        <div className="p-5 sm:p-6">
          <p className="label-mono text-tinta-3">
            <time dateTime={t.tanggal}>{tanggalPanjang(t.tanggal)}</time> · {t.menit} menit baca
          </p>
          <h2 className={`mt-2 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 ${besar ? '' : '!text-[1.45rem]'}`}>{t.judul}</h2>
          <p className="mt-2 text-tinta-2">{t.ringkas}</p>
        </div>
      </Link>
    </article>
  );
}

export default function Kabar() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-6 sm:px-6 lg:pt-10">
      <JsonLd data={jsonLdRoti([{ nama: 'Beranda', path: '/' }, { nama: 'Kabar', path: '/kabar' }])} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <header className="lg:col-span-12">
          <h1 className="max-w-[16ch]">Kabar dari lapangan</h1>
          <p className="mt-4 max-w-[56ch] text-lg text-tinta-2">Tulisan pendek soal merawat, memilih, dan memindahkan AC. Isinya contoh, ditulis dengan bahasa sehari-hari.</p>
        </header>
        {tulisan.map((t, i) => (
          <Kartu key={t.slug} t={t} besar={i === 0} />
        ))}
        <section aria-labelledby="judul-tanya" className="gelap panel panel-tua embun embun-kanan embun-besar p-6 sm:p-10 lg:col-span-12">
          <h2 id="judul-tanya" className="max-w-[24ch]">
            Ada pertanyaan soal AC-mu?
          </h2>
          <p className="mt-3 max-w-[54ch] text-[#cfe7f4]">Ceritakan gejalanya atau ukuran ruanganmu, nanti kami bantu jelaskan.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontak" className="tombol tombol-cyan">
              Tulis pesan
            </Link>
            <Link href="/pilih-pk" className="tombol tombol-garis">
              Hitung PK dulu
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
