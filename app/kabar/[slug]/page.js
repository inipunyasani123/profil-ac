import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { tulisan, cariTulisan } from '@/lib/kabar';
import { tanggalPanjang } from '@/lib/format';
import { metaHalaman, jsonLdRoti, jsonLdTulisan } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return tulisan.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = cariTulisan(slug);
  if (!t) return {};
  return metaHalaman({ path: `/kabar/${t.slug}`, judul: t.judul, deskripsi: t.deskripsi, tipe: 'article' });
}

// Paragraf boleh memuat tautan [label](/alamat)
function Teks({ x }) {
  return x.split(/(\[[^\]]+\]\([^)]+\))/g).map((b, i) => {
    const m = b.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <Link key={i} href={m[2]}>
        {m[1]}
      </Link>
    ) : (
      b
    );
  });
}

function Blok({ b }) {
  if (b.t === 'h2') return <h2>{b.x}</h2>;
  if (b.t === 'p')
    return (
      <p>
        <Teks x={b.x} />
      </p>
    );
  if (b.t === 'ul')
    return (
      <ul>
        {b.x.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  if (b.t === 'tabel')
    return (
      <div className="tabel-gulir" tabIndex={0} role="region" aria-label="Tabel kelas PK">
        <table>
          <thead>
            <tr>
              {b.kepala.map((k) => (
                <th key={k} scope="col">
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.baris.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => (i === 0 ? <th key={c} scope="row" className="!bg-es-1 !font-display !text-[1rem] !normal-case !tracking-normal !text-tinta !font-bold">{c}</th> : <td key={c}>{c}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  return null;
}

export default async function Tulisan({ params }) {
  const { slug } = await params;
  const t = cariTulisan(slug);
  if (!t) notFound();
  const lain = tulisan.filter((x) => x.slug !== t.slug);

  return (
    <article className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-6 sm:px-6 lg:pt-10">
      <JsonLd data={jsonLdRoti([{ nama: 'Beranda', path: '/' }, { nama: 'Kabar', path: '/kabar' }, { nama: t.judul, path: `/kabar/${t.slug}` }])} />
      <JsonLd data={jsonLdTulisan(t)} />
      <nav aria-label="Jejak halaman" className="label-mono text-tinta-3">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="inline-block py-1.5 underline underline-offset-4">
              Beranda
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/kabar" className="inline-block py-1.5 underline underline-offset-4">
              Kabar
            </Link>
          </li>
        </ol>
      </nav>

      <header className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h1 className="max-w-[18ch]">{t.judul}</h1>
          <p className="mt-4 max-w-[52ch] text-lg text-tinta-2">{t.ringkas}</p>
          <p className="label-mono mt-5 text-tinta-3">
            Oleh PK Pas · <time dateTime={t.tanggal}>{tanggalPanjang(t.tanggal)}</time> · {t.menit} menit baca
          </p>
        </div>
        <figure className="panel relative aspect-[16/10] overflow-hidden lg:col-span-5">
          <Image src={t.foto} alt={t.fotoAlt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" priority />
        </figure>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="prosa lg:col-span-8">
          {t.isi.map((b, i) => (
            <Blok key={i} b={b} />
          ))}
        </div>
        <aside aria-label="Langkah berikutnya" className="lg:col-span-4">
          <div className="remote remote-biru embun embun-kanan gelap lg:sticky lg:top-24 [--embun-ukuran:110px]">
            <h2 className="text-[1.6rem]">Hitung PK ruanganmu</h2>
            <p className="mt-2 text-[#cfe7f4]">Isi ukuran ruangan, lalu lihat hitungannya satu per satu.</p>
            <Link href="/pilih-pk" className="tombol tombol-cyan mt-5 w-full">
              Buka Pilih PK
            </Link>
            <Link href="/kontak" className="tombol tombol-garis mt-3 w-full">
              Tulis pesan
            </Link>
          </div>
        </aside>
      </div>

      <section aria-labelledby="judul-lain" className="mt-14">
        <h2 id="judul-lain" className="!text-[1.7rem]">
          Tulisan lain
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {lain.map((x) => (
            <Link key={x.slug} href={`/kabar/${x.slug}`} className="panel group block p-5 hover:bg-es-1">
              <p className="label-mono text-tinta-3">
                <time dateTime={x.tanggal}>{tanggalPanjang(x.tanggal)}</time> · {x.menit} menit baca
              </p>
              <h3 className="mt-2 group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">{x.judul}</h3>
              <p className="mt-2 text-tinta-2">{x.ringkas}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
