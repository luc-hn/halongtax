import type { Metadata } from 'next';
import ChatHistory from './ChatHistory';

export const metadata: Metadata = {
  title: 'Thuế Hạ Long — Lịch sử Zalo',
  description: 'Lịch sử hội thoại từ 03/09 đến 05/09/2026.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/hoi-thoai-zalo' },
  openGraph: { title: 'Thuế Hạ Long — Lịch sử Zalo', description: 'Bản lưu hội thoại.', images: [] },
  twitter: { title: 'Thuế Hạ Long — Lịch sử Zalo', description: 'Bản lưu hội thoại.', images: [] },
};

export default function Page() { return <ChatHistory />; }
