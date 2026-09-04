'use client';
import { useState } from 'react';
import { categories, evidence } from '@/data/evidence';
import { EvidenceCard } from './EvidenceCard';
export function EvidenceGallery({ onOpen }: { onOpen: (id: string) => void }) {
  const [filter, setFilter] = useState('all');
  const items = evidence.filter(
    (e) => filter === 'all' || e.category === filter,
  );
  return (
    <>
      <p className="section-intro">
        Từng tài liệu, từng ngữ cảnh. Mở để xem đầy đủ và tự đánh giá.
      </p>
      <div className="filter-list" aria-label="Lọc tài liệu">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            aria-pressed={filter === key}
            className={filter === key ? 'active' : ''}
            onClick={() => setFilter(key)}
          >
            {label}
            {key === 'all' && <span>{evidence.length}</span>}
          </button>
        ))}
      </div>
      <p className="sample-line">
        Các mục bên dưới là vị trí mẫu, chưa đính kèm tài liệu gốc.
      </p>
      <div className="evidence-grid">
        {items.map((item) => (
          <EvidenceCard
            key={item.id}
            item={item}
            onOpen={() => onOpen(item.id)}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="empty-state">Chưa có tài liệu trong nhóm này.</div>
      )}
    </>
  );
}
