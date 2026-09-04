import type { ReactNode } from 'react';
export function TimelineSection({
  id,
  number,
  kicker,
  title,
  children,
  className = '',
}: {
  id: string;
  number: string;
  kicker: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`chapter timeline-section ${className}`}>
      <div className="chapter-heading">
        <span className="chapter-number">{number}</span>
        <div>
          <div className="eyebrow">{kicker}</div>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="chapter-body">{children}</div>
    </section>
  );
}
