import { evidence } from '@/data/evidence';
import { EvidenceCard } from './EvidenceCard';

export function HandoverEvidence({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="quality-evidence">
      <h3>Trao đổi bàn giao · 2 ảnh do iMoca cung cấp</h3>
      <p>
        iMoca cung cấp các ảnh này làm cơ sở cho phản ánh về khó khăn khi bàn
        giao cho kế toán mới. Ảnh giữ nguyên nội dung và dấu khoanh đỏ sẵn có,
        sắp theo giờ hội thoại; chưa xác định ngày trao đổi.
      </p>
      <div className="evidence-grid">
        {evidence
          .filter((item) => item.group === 'data-handover')
          .map((item) => (
            <EvidenceCard
              key={item.id}
              item={item}
              onOpen={() => onOpen(item.id)}
            />
          ))}
      </div>
    </div>
  );
}
