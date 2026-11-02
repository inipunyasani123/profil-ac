// Metadata Open Graph per halaman (Next.js mengganti objek openGraph induk, tidak menggabungkannya)
// dan data terstruktur JSON-LD (HVACBusiness tanpa telepon, tanpa rating).
import { site, kecamatan } from './data';

export const OG_ALT = 'PK Pas: unit AC dinding dengan garis aliran angin dan remote yang menampilkan saran PK';

export function metaHalaman({ path = '', judul, deskripsi, gambar, tipe = 'website' }) {
  const url = `${site.url}${path}`;
  const title = judul ? `${judul} | ${site.nama}` : site.judul;
  const images = gambar ? [gambar] : [{ url: '/og.jpg', width: 1200, height: 630, alt: OG_ALT }];
  return {
    ...(judul ? { title: judul } : {}),
    description: deskripsi,
    alternates: { canonical: path || '/' },
    openGraph: { type: tipe, locale: 'id_ID', url, siteName: site.nama, title, description: deskripsi, images },
    twitter: { card: 'summary_large_image', title, description: deskripsi, images: images.map((g) => g.url) },
  };
}

const hari = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const jsonLdBisnis = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HVACBusiness',
      '@id': `${site.url}/#usaha`,
      name: site.nama,
      description: site.deskripsi,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/og.jpg`,
      slogan: site.tagline,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.alamat.jalan,
        addressLocality: site.alamat.kota,
        addressRegion: site.alamat.provinsi,
        addressCountry: 'ID',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: hari, opens: '08:00', closes: '17:00' },
      ],
      areaServed: [
        { '@type': 'City', name: 'Makassar' },
        ...kecamatan.map((k) => ({ '@type': 'AdministrativeArea', name: `Kecamatan ${k}, Makassar` })),
      ],
      knowsLanguage: 'id-ID',
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#situs`,
      name: site.nama,
      url: site.url,
      description: site.deskripsi,
      inLanguage: 'id-ID',
      publisher: { '@id': `${site.url}/#usaha` },
    },
  ],
};

export function jsonLdRoti(butir) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: butir.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.nama, item: `${site.url}${b.path}` })),
  };
}

export function jsonLdTulisan(t) {
  const url = `${site.url}/kabar/${t.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#tulisan`,
    headline: t.judul,
    description: t.deskripsi,
    datePublished: t.tanggal,
    dateModified: t.tanggal,
    inLanguage: 'id-ID',
    image: `${site.url}${t.foto}`,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: site.nama, url: site.url },
    publisher: { '@id': `${site.url}/#usaha` },
  };
}
