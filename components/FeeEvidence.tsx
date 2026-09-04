import { evidence } from '@/data/evidence';
import { EvidenceCard } from './EvidenceCard';

export function FeeEvidence({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="quality-evidence">
      <h3>Thỏa thuận & thay đổi phí · 4 ảnh trao đổi</h3>
      <p>
        Ảnh do iMoca cung cấp về mức 3 triệu/quý ban đầu và yêu cầu phí 4,5
        triệu/quý sau đó. Các khoản yêu cầu thanh toán được phân biệt với ảnh
        xác nhận chuyển tiền.
      </p>
      <div className="evidence-grid">
        {evidence
          .filter((item) => item.group === 'service-fees')
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
