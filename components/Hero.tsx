import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { metrics } from '@/data/case';
import { MetricCard } from './MetricCard';
import { ServiceRating } from './ServiceRating';
import { ProviderInfo } from './ProviderInfo';
export function Hero() {
  return (
    <section id="overview" className="hero chapter">
      <ServiceRating />
      <div className="eyebrow">
        <span className="blue-dot" /> HỒ SƠ TRẢI NGHIỆM{' '}
        <span className="eyebrow-divider">/</span> 2024 — 2026
      </div>
      <h1>
        Trải nghiệm của iMoca
        <br />
        khi sử dụng dịch vụ kế toán thuế
        <br />
        <span>Hạ Long Tax.</span>
      </h1>
      <p className="hero-description">
        Hồ sơ trải nghiệm của iMoca với Kế toán Hạ Long (Hạ Long Tax): từ thỏa
        thuận phí, quá trình làm việc đến bàn giao dữ liệu cho kế toán mới. Các
        ảnh trao đổi được đính kèm để người đọc đối chiếu.
      </p>
      <div className="story-line">
        <strong>1 triệu/tháng</strong>
        <ArrowUpRight size={19} />
        <span>
          Có quý lên tới <strong>4,5 triệu</strong>
        </span>
        <ArrowUpRight size={19} />
        <span>Khó khăn khi bàn giao</span>
      </div>
      <ProviderInfo />
      <div className="hero-actions">
        <a className="button primary" href="#beginning">
          Xem toàn bộ diễn biến <ArrowDown size={17} />
        </a>
        <a className="text-link" href="#evidence">
          <FileText size={17} /> Kho tài liệu
        </a>
      </div>
      <div className="metrics">
        {metrics.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>
      <p className="hero-note">
        Nội dung phản ánh trải nghiệm và các trao đổi của iMoca. Người đọc có
        thể đối chiếu tài liệu để tự đánh giá.
      </p>
    </section>
  );
}
