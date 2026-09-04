'use client';
import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  X,
  ExternalLink,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { evidence, categories } from '@/data/evidence';
export function EvidenceModal({
  id,
  onClose,
}: {
  id: string | null;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const start = useRef<number | null>(null);
  useEffect(() => {
    if (id) {
      setIndex(
        Math.max(
          0,
          evidence.findIndex((e) => e.id === id),
        ),
      );
      setZoom(false);
    }
  }, [id]);
  const item = evidence[index];
  function move(delta: number) {
    setIndex((i) => (i + delta + evidence.length) % evidence.length);
    setZoom(false);
  }
  return (
    <Dialog
      open={!!id}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="evidence-modal"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') move(-1);
          if (e.key === 'ArrowRight') move(1);
        }}
      >
        <div className="viewer-header">
          <div>
            <span className="eyebrow">
              {categories[item.category]} · {index + 1} / {evidence.length}
            </span>
            <DialogTitle>{item.title}</DialogTitle>
          </div>
          <DialogClose className="icon-button" aria-label="Đóng tài liệu">
            <X />
          </DialogClose>
        </div>
        <div
          className={`viewer-stage ${zoom ? 'zoomed' : ''}`}
          onTouchStart={(e) => {
            start.current =
              e.touches.length === 1 ? e.touches[0].clientX : null;
          }}
          onTouchEnd={(e) => {
            if (start.current !== null && !zoom) {
              const delta = e.changedTouches[0].clientX - start.current;
              if (Math.abs(delta) > 60) move(delta < 0 ? 1 : -1);
            }
            start.current = null;
          }}
        >
          {item.type === 'pdf' ? (
            <div className="pdf-open">
              <p>Tài liệu PDF được mở ở tab riêng để đọc đầy đủ.</p>
              <a
                className="button primary"
                href={item.file || item.image}
                target="_blank"
                rel="noreferrer"
              >
                Mở PDF <ExternalLink size={18} />
              </a>
            </div>
          ) : (
            <button
              className="image-zoom"
              onClick={() => setZoom(!zoom)}
              aria-label={zoom ? 'Thu nhỏ ảnh' : 'Phóng to ảnh'}
            >
              <img
                src={item.image}
                alt={
                  item.title +
                  (item.sample
                    ? ' — tài liệu mẫu, không phải bằng chứng gốc'
                    : '')
                }
              />
            </button>
          )}
        </div>
        <div className="viewer-bottom">
          <div className="viewer-controls">
            <button
              className="icon-button"
              aria-label="Tài liệu trước"
              onClick={() => move(-1)}
            >
              <ChevronLeft />
            </button>
            <span>
              {index + 1} / {evidence.length}
            </span>
            <button
              className="icon-button"
              aria-label="Tài liệu tiếp theo"
              onClick={() => move(1)}
            >
              <ChevronRight />
            </button>
            {item.type === 'image' && (
              <button
                className="icon-button"
                aria-label={zoom ? 'Thu nhỏ' : 'Phóng to'}
                onClick={() => setZoom(!zoom)}
              >
                {zoom ? <ZoomOut /> : <ZoomIn />}
              </button>
            )}
            <a
              className="button outline"
              href={item.file || item.image}
              download
            >
              <Download size={17} />
              {item.sample ? 'Tải bản mẫu' : 'Tải bản gốc'}
            </a>
          </div>
          <DialogDescription>{item.description}</DialogDescription>
          <p className="viewer-date">
            {item.date
              ? new Date(item.date).toLocaleDateString('vi-VN')
              : 'Chưa bổ sung ngày tài liệu'}{' '}
            {item.time} ·{' '}
            {item.sample
              ? 'Tài liệu mẫu — không phải bằng chứng thực tế'
              : 'Tài liệu do iMoca cung cấp'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
