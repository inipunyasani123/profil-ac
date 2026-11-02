import JsonLd from '@/components/JsonLd';
import PilihPK from '@/components/PilihPK';
import { metaHalaman, jsonLdRoti } from '@/lib/seo';

export const metadata = metaHalaman({
  path: '/pilih-pk',
  judul: 'Pilih PK AC untuk Ruanganmu',
  deskripsi: 'Isi ukuran ruangan, matahari, lantai, dan jumlah orang. Dapat saran PK kasar, paket layanan yang cocok, dan slot kunjungan teknisi contoh.',
});

export default function PilihPKHalaman() {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-14 pt-6 sm:px-6 lg:pt-10">
      <JsonLd data={jsonLdRoti([{ nama: 'Beranda', path: '/' }, { nama: 'Pilih PK', path: '/pilih-pk' }])} />
      <header className="mb-6 lg:mb-8">
        <h1 className="max-w-[16ch]">Pilih PK untuk ruanganmu</h1>
        <p className="mt-4 max-w-[58ch] text-lg text-tinta-2">
          Isi ukuran ruangan dan beberapa hal lain. Kamu dapat saran PK, paket layanan yang cocok, dan slot kunjungan contoh, lalu ringkasannya bisa dikirim lewat WhatsApp.
        </p>
      </header>
      <PilihPK />
    </div>
  );
}
