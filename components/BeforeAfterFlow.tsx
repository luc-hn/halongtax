import {
  UserRound,
  ArrowRight,
  Workflow,
  CheckCircle2,
  FileText,
} from 'lucide-react';
export function BeforeAfterFlow() {
  return (
    <div className="before-after">
      <div className="flow-card">
        <div className="eyebrow">TRƯỚC ĐÂY</div>
        <div className="flow">
          <UserRound />
          <span>Khách hàng</span>
          <ArrowRight />
          <FileText />
          <strong>Kế toán xử lý hóa đơn</strong>
        </div>
        <p>Nhập và xử lý thủ công</p>
      </div>
      <div className="flow-card automated">
        <div className="eyebrow">TỪ THÁNG 05/2026</div>
        <div className="flow">
          <UserRound />
          <span>Khách hàng</span>
          <ArrowRight />
          <Workflow />
          <strong>Hệ thống iMoca</strong>
        </div>
        <p>
          <CheckCircle2 size={16} /> Tự động xuất hóa đơn
        </p>
      </div>
    </div>
  );
}
