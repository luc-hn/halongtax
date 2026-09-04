'use client';
import { useMemo, useState } from 'react';
import { ArrowLeft, Search, Menu, Download, Phone, ChevronDown, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import data from '@/data/zalo-conversation.json';
import styles from './chat.module.css';

const base = '/conversation-thue-ha-long/';
const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();
const dayLabel = (s: string) => s.slice(0, 10).split('-').reverse().join('/');

export default function ChatHistory() {
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [photo, setPhoto] = useState<{ url: string; name: string; originalUrl: string | null } | null>(null);
  const messages = useMemo(() => data.messages.filter(m => normalize(`${m.text} ${m.sender} ${m.originalFilenames.join(' ')}`).includes(normalize(query))), [query]);
  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <a href="/" aria-label="Trở về hồ sơ halongtax" className={styles.icon}><ArrowLeft /></a>
        <div className={styles.heading}><h1>Thuế Hạ Long</h1><span>{dayLabel(data.dateFrom)} – {dayLabel(data.dateTo)} · {data.total} tin nhắn</span></div>
        <button className={styles.icon} aria-label="Tìm tin nhắn" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}><Search /></button>
        <button className={styles.icon} aria-label="Thông tin và tải lịch sử" aria-expanded={infoOpen} onClick={() => setInfoOpen(!infoOpen)}><Menu /></button>
      </header>
      {searchOpen && <div className={styles.search}><Search size={18} /><input autoFocus aria-label="Tìm trong cuộc hội thoại" placeholder="Tìm tin nhắn, tên file…" value={query} onChange={e => setQuery(e.target.value)} /><span>{messages.length}/{data.total}</span><button aria-label="Đóng tìm kiếm" onClick={() => {setQuery(''); setSearchOpen(false);}}><X size={18} /></button></div>}
      {infoOpen && <section className={styles.info} aria-label="Thông tin bản lưu"><p><strong>Lực Hoàng ↔ Thuế Hạ Long</strong><br />{Object.entries(data.counts).map(([label, count]) => `${count} ${label.toLowerCase()}`).join(' · ')}</p><p>{data.scopeNote} Tin hiện có: {dayLabel(data.firstTime)} – {dayLabel(data.lastTime)}. Giờ Việt Nam (UTC+7).</p><div className={styles.downloads}>{['csv','json','html','zip'].map(ext => <a key={ext} href={`${base}conversation.${ext}`} download><Download size={15} />{ext === 'zip' ? 'Tất cả + media' : ext.toUpperCase()}</a>)}</div></section>}
      <div className={styles.thread}>
        <div className={styles.notice}>Bản lưu lịch sử Zalo · Chỉ đọc</div>
        {messages.length === 0 && <p className={styles.empty}>Không tìm thấy tin nhắn phù hợp.</p>}
        {messages.map((m, i) => {
          const prev = messages[i-1];
          const next = messages[i+1];
          const day = m.time.slice(0,10);
          const newDay = !prev || prev.time.slice(0,10) !== day;
          const startGroup = newDay || prev.senderId !== m.senderId || m.timestamp - prev.timestamp > 300000;
          const endGroup = !next || next.senderId !== m.senderId || next.time.slice(0,16) !== m.time.slice(0,16);
          return <div key={m.id} id={`tin-${m.id}`}>
            {newDay && <div className={styles.date}><span>{dayLabel(m.time)}</span></div>}
            <article className={`${styles.row} ${m.outgoing ? styles.outgoing : ''} ${startGroup ? styles.groupStart : ''}`} aria-label={`${m.sender}, ${m.time.slice(11,19)}, ${dayLabel(m.time)}`}>
              {!m.outgoing && <div className={styles.avatar}>{startGroup && <img src="/brand/halongtax-logo.png" alt="Thuế Hạ Long" />}</div>}
              <div className={`${styles.bubble} ${m.media.length ? styles.mediaBubble : ''}`}>
                {m.type === 6 && <span className={styles.call}><Phone size={19} /> Cuộc gọi</span>}
                {m.text && <div className={styles.text}>{m.text}</div>}
                {m.media.map((asset, index) => <div key={index}><button className={styles.imageButton} aria-label={`Mở ${asset.kind === 'sticker' ? 'sticker' : 'ảnh'} ${asset.name}`} onClick={() => setPhoto(asset)}><img loading="lazy" className={asset.kind === 'sticker' ? styles.sticker : styles.photo} src={base + asset.url} alt={asset.kind === 'sticker' ? 'Sticker' : asset.name} /></button></div>)}
                {(endGroup || m.media.length > 0) && <time className={styles.time} dateTime={m.time} title={`${m.sender} · ${m.time}`}>{m.time.slice(11,16)}</time>}
              </div>
            </article>
          </div>;
        })}
        <div id="cuoi-hoi-thoai" className={styles.notice}>Hết lịch sử trong khoảng đã chọn</div>
      </div>
      <footer className={styles.footer}><span>Lịch sử đã lưu · Không thể gửi tin nhắn</span><a href="#cuoi-hoi-thoai" aria-label="Đến cuối hội thoại"><ChevronDown /></a></footer>
      <Dialog open={!!photo} onOpenChange={open => {if (!open) setPhoto(null);}}><DialogContent className={styles.viewer}><DialogTitle>Ảnh trong hội thoại</DialogTitle><DialogDescription>{photo?.name}</DialogDescription>{photo && <><img src={base + photo.url} alt={photo.name} /><a href={base + (photo.originalUrl || photo.url)} download>Tải ảnh{photo.originalUrl ? ' gốc (JXL)' : ''}</a></>}</DialogContent></Dialog>
    </main>
  );
}
