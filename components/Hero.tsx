import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { metrics } from '@/data/case';
import { MetricCard } from './MetricCard';
export function Hero() {
  return (
    <section id="overview" className="hero chapter">
      <div className="eyebrow">
        <span className="blue-dot" /> HỒ SƠ TRẢI NGHIỆM{' '}
        <span className="eyebrow-divider">/</span> 2024 — 2026
      </div>
      <h1>
        Trải nghiệm của iMoca
        <br />
        khi sử dụng dịch vụ kế toán
        <br />
        <span>Hạ Long Tax.</span>
      </h1>
      <p className="hero-description">
        Từ những trao đổi ban đầu đến vấn đề bàn giao dữ liệu.
        <br className="desktop-break" /> Một câu chuyện được nhìn lại qua sự
        kiện, số liệu và tài liệu.
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
