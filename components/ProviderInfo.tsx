import { Phone, Globe, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/case';

export function ProviderInfo() {
  return (
    <aside className="provider-info" aria-labelledby="provider-info-title">
      <img
        className="provider-brand"
        src={site.halongLogo}
        alt="Logo Hạ Long Tax do iMoca cung cấp"
        width={732}
        height={473}
      />
      <div className="provider-details">
        <div className="eyebrow">ĐƠN VỊ ĐƯỢC ĐỀ CẬP</div>
        <h2 id="provider-info-title">Kế toán Hạ Long · Hạ Long Tax</h2>
        <div className="provider-links">
          <a href={`tel:${site.halongPhone}`}>
            <Phone size={16} aria-hidden="true" />
            <span>{site.halongPhone}</span>
          </a>
          <a
            href={site.halongWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={16} aria-hidden="true" />
            <span>ketoanhalong.com</span>
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only"> (mở tab mới)</span>
          </a>
        </div>
        <p>
          Thông tin do iMoca cung cấp. Đây là hồ sơ trải nghiệm của iMoca, không
          phải website của Hạ Long Tax.
        </p>
      </div>
    </aside>
  );
}
