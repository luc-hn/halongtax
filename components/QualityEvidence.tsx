import { evidence } from '@/data/evidence';
import { EvidenceCard } from './EvidenceCard';

export function QualityEvidence({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="quality-evidence">
      <h3>Trao đổi & xử lý · 4 ảnh do iMoca cung cấp</h3>
      <p>
        iMoca cung cấp các ảnh dưới đây làm cơ sở cho đánh giá về tính chuyên
        nghiệp trong quá trình làm việc. Ảnh được sắp theo diễn biến hội thoại;
        ngày trao đổi chưa được xác định.
      </p>
      <div className="evidence-grid">
        {evidence
          .filter((item) => item.group === 'service-quality')
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
