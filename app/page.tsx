'use client';
import { useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  FileText,
  Share2,
  Check,
  Info,
  ArrowRight,
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { TimelineSection } from '@/components/TimelineSection';
import { BeforeAfterFlow } from '@/components/BeforeAfterFlow';
import { HandoverDiagram } from '@/components/HandoverDiagram';
import { EvidenceGallery } from '@/components/EvidenceGallery';
import { QualityEvidence } from '@/components/QualityEvidence';
import { FeeEvidence } from '@/components/FeeEvidence';
import { HandoverEvidence } from '@/components/HandoverEvidence';
import { EvidenceModal } from '@/components/EvidenceModal';
import { BusinessLesson } from '@/components/BusinessLesson';
import { Disclaimer } from '@/components/Disclaimer';
import { MobileProgressNav } from '@/components/MobileProgressNav';
import { fees, issues, site } from '@/data/case';
export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [shareStatus, setShareStatus] = useState('');
  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: site.title, url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        setShareStatus('Đã sao chép liên kết');
        setTimeout(() => setShareStatus(''), 3000);
      }
    } catch (e) {
      if ((e as Error).name !== 'AbortError')
        setShareStatus('Bạn có thể sao chép liên kết trên thanh địa chỉ.');
    }
  }
  const evidenceButton = (id: string, label = 'Xem tài liệu liên quan') => (
    <button className="text-link" onClick={() => setSelected(id)}>
      <FileText size={17} />
      {label}
      <ArrowUpRight size={16} />
    </button>
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Đến nội dung chính
      </a>
      <header className="site-header">
        <a className="wordmark" href="#overview" aria-label="iMoca — Tổng quan">
          iMoca<span className="brand-dot">.</span>
        </a>
        <span className="header-divider" />
        <span className="header-label">HỒ SƠ TRẢI NGHIỆM</span>
        <div className="header-right">
          <span className="draft-badge">
            <span />
            Đang bổ sung
          </span>
          <button className="share-button" onClick={share}>
            <Share2 size={16} />
            <span>Chia sẻ hồ sơ</span>
          </button>
        </div>
        <span className="share-status" role="status">
          {shareStatus}
        </span>
      </header>
      <div className="page-shell">
        <MobileProgressNav />
        <main id="main">
          <div className="breadcrumb">
            iMoca <span>/</span> Trải nghiệm dịch vụ <span>/</span> Hạ Long Tax
          </div>
          <Hero />
          <div className="timeline-start">
            <span>THEO DÒNG SỰ VIỆC</span>
            <ArrowDown size={16} />
            <span>2024 — 2026</span>
          </div>
          <TimelineSection
            id="beginning"
            number="01"
            kicker="NĂM 2024"
            title="Bắt đầu từ sự tin tưởng"
          >
            <p className="section-intro">
              Năm 2024, iMoca bắt đầu sử dụng dịch vụ kế toán thuế của Hạ Long
              Tax. Hai bên làm việc dựa trên sự tin tưởng.
            </p>
            <div className="agreement-card">
              <div>
                <span className="eyebrow">MỨC PHÍ ĐƯỢC TRAO ĐỔI</span>
                <div className="agreement-price">
                  <strong>
                    1.000.000đ <small>/ tháng</small>
                  </strong>
                  <span>=</span>
                  <strong>
                    3.000.000đ <small>/ quý</small>
                  </strong>
                </div>
              </div>
              <div className="agreement-note">
                <Info size={18} /> iMoca ghi nhận: không có hợp đồng dịch vụ rõ
                ràng.
              </div>
            </div>
            {evidenceButton(
              'agreement-01',
              'Xem tài liệu / trao đổi liên quan',
            )}
          </TimelineSection>
          <TimelineSection
            id="fees"
            number="02"
            kicker="TRONG QUÁ TRÌNH HỢP TÁC"
            title="Phí dịch vụ thay đổi"
          >
            <div className="fee-heading">
              <p>
                1 triệu/tháng → 1,5 triệu/tháng
                <br />
                Tương đương 3 triệu/quý → 4,5 triệu/quý
              </p>
              <span className="increase">
                +50% <small>so với ban đầu</small>
              </span>
            </div>
            <div
              className="fee-chart"
              aria-label="Mức ban đầu 3 triệu/quý, ảnh yêu cầu chuyển khoản 3,24 triệu và yêu cầu phí 4,5 triệu/quý"
            >
              <div className="chart-grid" />
              {fees.map((f, i) => (
                <div className={'fee-column fee-' + i} key={f.amount}>
                  <strong>
                    {f.amount}
                    <small>{f.unit}</small>
                  </strong>
                  <div className="fee-bar" style={{ height: f.height + '%' }} />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
            <p className="context-note">
              Theo trải nghiệm của iMoca, không có thỏa thuận rõ ràng về việc
              mức phí tăng tương ứng với phạm vi công việc nào.
            </p>
            <p className="source-pending">
              Khoản 3.240.000đ xuất hiện trong ảnh tạo yêu cầu chuyển khoản;
              chưa đủ thông tin để xác định phần chênh lệch 240.000đ. Không coi
              đây là một mức phí cơ bản mới.
            </p>
            <details className="payment-details">
              <summary>
                Xem chi tiết các khoản thanh toán <span>+</span>
              </summary>
              <p>
                03/11/2025: ảnh hiển thị chuyển thành công 3.000.000đ. Mốc gửi
                ảnh 14/02/2026: tạo yêu cầu chuyển khoản 3.240.000đ, chưa xác
                nhận hoàn tất. Phí quý 2: yêu cầu thanh toán 4.500.000đ, chưa có
                xác nhận thanh toán trong bộ ảnh này.
              </p>
              {evidenceButton('payment-01', 'Xem mục tài liệu thanh toán')}
            </details>
            <FeeEvidence onOpen={setSelected} />
          </TimelineSection>
          <TimelineSection
            id="automation"
            number="03"
            kicker="TỪ THÁNG 05/2026"
            title="iMoca tự động hóa xuất hóa đơn"
          >
            <BeforeAfterFlow />
            <div className="workload-strip">
              <strong>
                <ArrowDown size={18} /> Phần việc xuất hóa đơn giảm
              </strong>
              <span>
                Phí có thời điểm <b>4.500.000đ/quý</b>
              </span>
            </div>
            <p>
              Từ 05/2026, phần việc xuất hóa đơn cho khách hàng đã được iMoca tự
              động hóa và không còn cần kế toán nhập liệu thủ công cho phần công
              việc này.
            </p>
            {evidenceButton('automation-01', 'Xem hệ thống automation')}
          </TimelineSection>
          <TimelineSection
            id="issues"
            number="04"
            kicker="THEO TRẢI NGHIỆM CỦA IMOCA"
            title="Những vấn đề iMoca ghi nhận"
          >
            <div className="issues-grid">
              {issues.map((item, i) => (
                <article className="issue-card" key={item.title}>
                  <span className="issue-index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {evidenceButton(item.evidence, 'Xem bằng chứng')}
                </article>
              ))}
            </div>
            <QualityEvidence onOpen={setSelected} />
          </TimelineSection>
          <TimelineSection
            id="handover"
            number="05"
            kicker="VẤN ĐỀ BÀN GIAO DỮ LIỆU"
            title="Muốn dừng dịch vụ, nhưng khó bàn giao dữ liệu"
            className="handover-section"
          >
            <div className="handover-layout">
              <div>
                <p>
                  iMoca đề nghị dừng dịch vụ và bàn giao dữ liệu để kế toán mới
                  tiếp quản.
                </p>
                <p>Theo nội dung trao đổi, phía Hạ Long Tax:</p>
                <ul className="handover-list">
                  <li>
                    Không đồng ý bàn giao file dữ liệu mềm theo yêu cầu của
                    iMoca.
                  </li>
                  <li>
                    Nêu có bàn giao sổ sách, còn file mềm được cung cấp khi thuế
                    kiểm tra.
                  </li>
                </ul>
                {site.halongLogo && (
                  <img
                    className="provider-logo"
                    src={site.halongLogo}
                    alt="Logo chính thức Hạ Long Tax"
                  />
                )}
              </div>
              <HandoverDiagram />
            </div>
            <div className="consequence">
              <span className="eyebrow">HỆ QUẢ IMOCA GHI NHẬN</span>
              <p>
                Kế toán mới có nguy cơ phải nhập lại dữ liệu đã được xử lý trước
                đó.
              </p>
            </div>
            <button
              className="button primary"
              onClick={() => setSelected('handover-01')}
            >
              Xem trao đổi gốc <ArrowUpRight size={18} />
            </button>
            <p className="source-pending">
              Xem 2 ảnh trao đổi do iMoca cung cấp, giữ nguyên dấu khoanh đỏ sẵn
              có.
            </p>
            <HandoverEvidence onOpen={setSelected} />
          </TimelineSection>
          <TimelineSection
            id="evidence"
            number="06"
            kicker="ĐỐI CHIẾU & TỰ ĐÁNH GIÁ"
            title="Tài liệu & bằng chứng"
          >
            <EvidenceGallery onOpen={setSelected} />
          </TimelineSection>
          <TimelineSection
            id="lessons"
            number="07"
            kicker="BÀI HỌC CHO DOANH NGHIỆP"
            title="Rõ ràng ngay từ đầu"
          >
            <BusinessLesson />
          </TimelineSection>
          <Disclaimer />
        </main>
      </div>
      <EvidenceModal id={selected} onClose={() => setSelected(null)} />
    </>
  );
}
