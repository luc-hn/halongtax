import { Check } from 'lucide-react';
import { lessons } from '@/data/case';
export function BusinessLesson() {
  return (
    <div className="lesson-content">
      <p className="lesson-quote">
        Đừng thuê dịch vụ kế toán
        <br />
        <span>chỉ bằng sự tin tưởng.</span>
      </p>
      <p>Năm nội dung doanh nghiệp nên thống nhất ngay từ đầu.</p>
      <div className="lesson-list">
        {lessons.map((l, i) => (
          <div key={l}>
            <span>0{i + 1}</span>
            <strong>{l}</strong>
            <Check size={19} />
          </div>
        ))}
      </div>
    </div>
  );
}
