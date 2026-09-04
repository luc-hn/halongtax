import { Database, LockKeyhole, ArrowDown, Building2 } from 'lucide-react';
export function HandoverDiagram() {
  return (
    <div className="handover-diagram">
      <div>
        <Building2 size={20} />
        <strong>Hạ Long Tax</strong>
      </div>
      <ArrowDown className="diagram-arrow" />
      <div className="data-node">
        <Database size={23} />
        <strong>Dữ liệu kế toán iMoca</strong>
      </div>
      <div className="blocked">
        <span />
        <LockKeyhole size={18} />
        <span />
      </div>
      <small>Khó khăn trong việc bàn giao</small>
      <ArrowDown className="diagram-arrow" />
      <div>
        <Building2 size={20} />
        <strong>Kế toán mới</strong>
      </div>
    </div>
  );
}
