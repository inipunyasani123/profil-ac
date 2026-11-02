import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FormKontak from '@/components/FormKontak';
import { PetaMakassar } from '@/components/Motif';
import { site, kecamatan } from '@/lib/data';
import { metaHalaman, jsonLdRoti } from '@/lib/seo';

export const metadata = metaHalaman({
  path: '/kontak',
  judul: 'Kontak dan Jam Kerja',
  deskripsi: 'Tulis kebutuhan AC-mu, pilih kecamatan dan waktu, lalu kirim lewat WhatsApp. Jam kerja Senin sampai Sabtu 08.00 sampai 17.00 WITA di Makassar.',
});

export default function Kontak() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-6 sm:px-6 lg:pt-10">
      <JsonLd data={jsonLdRoti([{ nama: 'Beranda', path: '/' }, { nama: 'Kontak', path: '/kontak' }])} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <header className="lg:col-span-12">
          <h1 className="max-w-[16ch]">Ceritakan AC-mu</h1>
          <p className="mt-4 max-w-[56ch] text-lg text-tinta-2">
            Isi formulir singkat ini. Isinya disusun jadi pesan WhatsApp yang siap kamu kirim sendiri. Kami tidak memasang nomor telepon di situs ini.
          </p>
        </header>

        <div className="space-y-5 lg:col-span-7">
          <section aria-labelledby="judul-form" className="remote remote-es">
            <h2 id="judul-form" className="text-[1.7rem]">
              Susun pesanmu
            </h2>
            <div className="mt-5">
              <FormKontak />
            </div>
          </section>

          <section aria-labelledby="judul-tips" className="panel p-5 sm:p-6">
            <h2 id="judul-tips" className="text-[1.5rem]">
              Supaya cepat dijawab
            </h2>
            <ul className="daftar-titik mt-2">
              <li>Sebut gejalanya: kurang dingin, bocor air, berbunyi, atau mati.</li>
              <li>Sebut jenis AC kalau tahu: dinding, kaset, atau berdiri.</li>
              <li>Setelah WhatsApp terbuka, lampirkan foto unit beserta label di sisinya.</li>
              <li>
                Mau pasang unit baru? Hitung dulu di{' '}
                <Link href="/pilih-pk" className="tautan">
                  Pilih PK
                </Link>
                .
              </li>
            </ul>
          </section>
        </div>

        <div className="space-y-5 lg:col-span-5">
          <section aria-labelledby="judul-jam" className="gelap panel panel-tua embun embun-kanan p-5 sm:p-6">
            <h2 id="judul-jam" className="text-[1.5rem]">
              Jam kerja
            </h2>
            <div className="lcd mt-4">
              <p className="lcd-label">{site.jam.hari}</p>
              <p className="digit-besar mt-1 !text-[clamp(2rem,1.5rem+2.2vw,2.8rem)]">
                {site.jam.buka} - {site.jam.tutup}
              </p>
              <p className="lcd-label mt-1">{site.jam.zona}, hari Minggu tutup</p>
            </div>
            <p className="mt-4 text-[#cfe7f4]">Pesan di luar jam kerja dibaca saat kami buka kembali.</p>
          </section>

          <section aria-labelledby="judul-alamat" className="panel p-5 sm:p-6">
            <h2 id="judul-alamat" className="text-[1.5rem]">
              Alamat
            </h2>
            <p className="mt-3 text-lg">
              {site.alamat.jalan}
              <br />
              {site.alamat.kota}, {site.alamat.provinsi}
            </p>
            <p className="mt-2 text-tinta-3">Teknisi datang ke tempatmu. Belum ada toko yang bisa dikunjungi.</p>
          </section>

          <section aria-labelledby="judul-area" className="panel panel-es overflow-hidden">
            <div className="relative border-b-[1.5px] border-tinta">
              <PetaMakassar className="block w-full" />
              <span className="label-mono absolute left-3 top-3 text-tinta-2">Selat Makassar</span>
            </div>
            <div className="p-5 sm:p-6">
              <h2 id="judul-area" className="text-[1.5rem]">
                Kecamatan yang dilayani
              </h2>
              <p className="mt-3">{kecamatan.join(', ')}.</p>
              <p className="mt-2 text-[0.95rem] text-tinta-3">Peta ilustrasi, bukan skala.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
