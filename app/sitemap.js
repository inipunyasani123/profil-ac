import { site } from '@/lib/data';
import { tulisan } from '@/lib/kabar';

export default function sitemap() {
  const halaman = [
    { path: '', prioritas: 1, ubah: 'monthly' },
    { path: '/profil', prioritas: 0.6, ubah: 'yearly' },
    { path: '/layanan', prioritas: 0.9, ubah: 'monthly' },
    { path: '/pilih-pk', prioritas: 0.8, ubah: 'monthly' },
    { path: '/kabar', prioritas: 0.7, ubah: 'weekly' },
    { path: '/kontak', prioritas: 0.6, ubah: 'yearly' },
  ].map((h) => ({ url: `${site.url}${h.path}`, changeFrequency: h.ubah, priority: h.prioritas }));
  const kabar = tulisan.map((t) => ({ url: `${site.url}/kabar/${t.slug}`, lastModified: t.tanggal, changeFrequency: 'yearly', priority: 0.6 }));
  return [...halaman, ...kabar];
}
