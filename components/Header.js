'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogoPK } from './Motif';
import { navigasi, site } from '@/lib/data';

export default function Header() {
  const path = usePathname();
  const [buka, setBuka] = useState(false);

  useEffect(() => {
    setBuka(false);
  }, [path]);

  useEffect(() => {
    if (!buka) return;
    const tutup = (e) => e.key === 'Escape' && setBuka(false);
    document.addEventListener('keydown', tutup);
    return () => document.removeEventListener('keydown', tutup);
  }, [buka]);

  const aktif = (href) => (href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-40 border-b-[1.5px] border-tinta bg-kertas">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.nama}, ke beranda`}>
          <LogoPK className="h-10 w-10" />
          <span className="font-display text-[1.45rem] font-extrabold leading-none tracking-tight">{site.nama}</span>
        </Link>

        <nav aria-label="Utama" className="hidden items-center gap-1 lg:flex">
          {navigasi.map((n) =>
            n.khas ? (
              <Link key={n.href} href={n.href} aria-current={aktif(n.href) ? 'page' : undefined} className="tombol mx-2 !min-h-[42px] !px-5 !text-base">
                {n.label}
              </Link>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                aria-current={aktif(n.href) ? 'page' : undefined}
                className={`rounded-full px-4 py-2 font-display text-base font-bold hover:bg-es-1 ${aktif(n.href) ? 'bg-es-2' : ''}`}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="tombol tombol-garis !min-h-[44px] !px-4 !text-base lg:!hidden"
          aria-expanded={buka}
          aria-controls="menu-utama"
          onClick={() => setBuka((v) => !v)}
        >
          {buka ? 'Tutup' : 'Menu'}
        </button>
      </div>

      <nav id="menu-utama" aria-label="Menu utama" hidden={!buka} className="absolute inset-x-3 top-[76px] lg:hidden">
        <div className="remote remote-es !pt-12 !pb-3">
          <ul>
            {navigasi.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={aktif(n.href) ? 'page' : undefined}
                  className={`baris-titik !min-h-[52px] items-center ${aktif(n.href) ? 'text-biru' : ''}`}
                >
                  <span className="nama-baris flex-1">{n.label}</span>
                  <span className="label-mono text-tinta-3" aria-hidden="true">
                    {aktif(n.href) ? 'Sedang dibuka' : ''}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
