import './globals.css';
import { Red_Hat_Display, Red_Hat_Text, Share_Tech_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/data';
import { jsonLdBisnis, OG_ALT } from '@/lib/seo';

const display = Red_Hat_Display({ subsets: ['latin'], variable: '--font-rh-display', display: 'swap' });
const teks = Red_Hat_Text({ subsets: ['latin'], variable: '--font-rh-text', display: 'swap' });
const mono = Share_Tech_Mono({ weight: '400', subsets: ['latin'], variable: '--font-share-mono', display: 'swap', preload: false });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.judul, template: `%s | ${site.nama}` },
  description: site.deskripsi,
  applicationName: site.nama,
  keywords: ['servis AC Makassar', 'cuci AC', 'tambah freon', 'pasang AC', 'pindah AC', 'pilih PK AC', 'perawatan AC toko dan kantor'],
  authors: [{ name: 'PintuWeb', url: 'https://www.pintuweb.id' }],
  creator: 'PintuWeb',
  publisher: 'PintuWeb',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: site.url,
    siteName: site.nama,
    title: site.judul,
    description: site.deskripsi,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.judul,
    description: site.deskripsi,
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

export const viewport = {
  themeColor: '#f1f8fc',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${teks.variable} ${mono.variable}`}>
      <body className="antialiased">
        <a href="#isi" className="lompat">
          Langsung ke isi
        </a>
        <Header />
        <main id="isi">{children}</main>
        <Footer />
        <JsonLd data={jsonLdBisnis} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=ac" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-block', padding: '8px 4px' }}>Buat yang seperti ini →</a>
        </aside>
      </body>
    </html>
  );
}
