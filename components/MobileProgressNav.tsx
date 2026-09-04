'use client';
import { useEffect, useState } from 'react';
import { chapters } from '@/data/case';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
export function MobileProgressNav() {
  const [active, setActive] = useState('overview');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - innerHeight;
      setProgress(total > 0 ? scrollY / total : 0);
      let current = 'overview';
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= 170) current = c.id;
      }
      setActive(current);
    };
    update();
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    return () => {
      removeEventListener('scroll', update);
      removeEventListener('resize', update);
    };
  }, []);
  return (
    <>
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <aside className="chapter-nav">
        <div className="eyebrow">TRONG HỒ SƠ NÀY</div>
        <nav aria-label="Điều hướng chương">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={'#' + c.id}
              aria-current={active === c.id ? 'location' : undefined}
              className={active === c.id ? 'active' : ''}
            >
              <span>{c.number}</span>
              {c.label}
              {active === c.id && <span className="nav-dot" />}
            </a>
          ))}
        </nav>
        <div className="sidebar-note">
          <span className="blue-dot" />
          <p>
            Một góc nhìn từ iMoca.
            <br />
            Tài liệu để bạn tự đánh giá.
          </p>
        </div>
        <a className="text-link" href="#evidence">
          Khám phá tài liệu <ArrowUpRight size={17} />
        </a>
      </aside>
      <nav className="mobile-chapters" aria-label="Chương trên điện thoại">
        {chapters.map((c) => (
          <a
            key={c.id}
            className={active === c.id ? 'active' : ''}
            aria-current={active === c.id ? 'location' : undefined}
            href={'#' + c.id}
            aria-label={c.label}
          >
            {c.number}
          </a>
        ))}
      </nav>
      {progress > 0.12 && (
        <a className="back-top" href="#overview" aria-label="Về đầu trang">
          <ArrowUp size={19} />
          <span>Về đầu</span>
        </a>
      )}
    </>
  );
}
