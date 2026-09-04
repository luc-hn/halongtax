import type { Metadata } from 'next';
import { site } from '@/data/case';
import './globals.css';
export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.origin),
  alternates: { canonical: '/' },
  robots: { index: false, follow: false },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.origin,
    type: 'website',
    locale: 'vi_VN',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/og.png'],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
