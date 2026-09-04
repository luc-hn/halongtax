import { ArrowUpRight, FileText } from 'lucide-react';
import { categories, type Evidence } from '@/data/evidence';
export function EvidenceCard({
  item,
  onOpen,
}: {
  item: Evidence;
  onOpen: () => void;
}) {
  return (
    <article className="evidence-card">
      <button
        className="evidence-thumbnail"
        onClick={onOpen}
        aria-label={`Xem ${item.title}`}
      >
        <img
          src={item.image}
          alt={
            item.sample ? 'Tài liệu mẫu, chưa có bằng chứng gốc' : item.title
          }
          width="1200"
          height="900"
          loading="lazy"
        />
        <span className="sample-tag">
          {item.sample ? 'TÀI LIỆU MẪU' : 'TÀI LIỆU IMOCA CUNG CẤP'}
        </span>
        <span className="thumbnail-open">
          <ArrowUpRight size={19} />
        </span>
      </button>
      <div className="evidence-content">
        <div className="evidence-meta">
          <span>{categories[item.category]}</span>
          <span>
            {item.date
              ? new Date(item.date).toLocaleDateString('vi-VN')
              : 'Chưa có ngày'}
          </span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button className="text-link" onClick={onOpen}>
          <FileText size={16} /> Xem tài liệu <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
