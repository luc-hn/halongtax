import { Star } from 'lucide-react';
import { serviceRating } from '@/data/case';

export function ServiceRating() {
  return (
    <aside className="service-rating" aria-labelledby="service-rating-title">
      <div className="rating-summary">
        <div
          className="rating-score"
          aria-label={`${serviceRating.score} trên ${serviceRating.total} sao`}
        >
          <strong>{serviceRating.score}</strong>
          <span>/{serviceRating.total}</span>
        </div>
        <div className="rating-stars" aria-hidden="true">
          {Array.from({ length: serviceRating.total }, (_, index) => (
            <Star
              key={index}
              size={19}
              className={index < serviceRating.score ? 'filled' : ''}
            />
          ))}
        </div>
      </div>
      <div className="rating-copy">
        <h2 id="service-rating-title">{serviceRating.title}</h2>
        <p>{serviceRating.description}</p>
        <a className="text-link" href="#issues">
          Xem các vấn đề iMoca ghi nhận →
        </a>
      </div>
    </aside>
  );
}
