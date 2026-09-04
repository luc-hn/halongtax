# iMoca — Hồ sơ trải nghiệm

Website mobile-first bằng React, TypeScript, Tailwind CSS, chạy trên Vinext (API tương thích Next.js), xuất HTML tĩnh để triển khai trên Sites. Không có backend.

## Chạy dự án

Yêu cầu Node.js >=22.13.0. Trên Windows ARM64, dùng Node x64 để tương thích các công cụ Cloudflare đi kèm scaffold.

```sh
npm install
npm run dev
npm run build
```

## Wireframe

Header iMoca + chia sẻ → Tổng quan, số liệu → 01 Hợp tác → 02 Phí → 03 Automation → 04 Chất lượng → 05 Bàn giao → 06 Kho bằng chứng → 07 Bài học → Disclaimer.

Mobile 375–430px: một cột, thanh số chương dưới màn hình, tiến trình đọc trên cùng. Desktop: cùng nội dung với mục lục cố định bên trái. Màu xanh, nền trắng, typography sans-serif; phần bàn giao đặt trong nền xanh nhạt.

## Thay nội dung

- `data/case.ts`: tiêu đề, nguồn URL chính thức, số liệu, mức phí, chương, vấn đề, bài học. Thêm đường dẫn logo chính thức vào `site.halongLogo` khi được cung cấp.
- `data/evidence.ts`: danh sách ảnh/PDF. Đặt tài liệu vào `public/evidence/`, dùng đường dẫn `/evidence/ten-file.png`.
- `date`: ngày thực tế ở dạng `YYYY-MM-DD`; `time` tùy chọn. Không rõ ngày thì giữ `null`.
- `image`: ảnh hoặc thumbnail. `file`: đường dẫn tài liệu gốc. `type`: `image` hoặc `pdf`. PDF mở ở tab riêng, ảnh có zoom, vuốt, nút trước/sau và phím mũi tên.
- `sample: false` chỉ khi đã thay tài liệu mẫu bằng tài liệu thật. Thay thông báo bản mẫu trong header/footer/kho tài liệu khi hồ sơ đã hoàn tất.
- `public/og.png`: ảnh chia sẻ 1200×630. Cập nhật `site.origin` khi đổi tên miền.
- `app/layout.tsx`: metadata với `index:true, follow:true`. Google vẫn chưa thể đọc nội dung nếu quyền truy cập Sites còn riêng tư. `public/robots.txt` và `public/sitemap.xml` dùng cùng tên miền với `site.origin`; cập nhật cả ba khi chuyển tên miền.
- `components/StructuredData.tsx`: WebSite, WebPage, Article, đơn vị được đề cập và người làm việc trực tiếp. Thông tin Phạm Quang Lương do iMoca cung cấp, được ghi rõ trong nội dung trang. Không khai báo điểm đánh giá tổng hợp hay số lượng người đánh giá.

## Đưa nội dung lên Google

Sau khi chủ sở hữu quyết định mở website công khai, thêm URL-prefix property trong Google Search Console cho `https://imoca-halongtax.hoanglucmc.chatgpt.site/`. Dùng mã xác minh do Google cấp (không tạo mã giả); có thể thêm qua metadata `verification.google` trong layout rồi build lại. Gửi `/sitemap.xml` và dùng URL Inspection cho trang chủ. Các chương `#fees`, `#handover` là phần của cùng một trang, không phải các trang độc lập trong sitemap. Không cam kết thứ hạng hoặc thời gian được lập chỉ mục.

Ví dụ một tài liệu thật (chỉ dùng ngày và nội dung đã được xác nhận):

```ts
{
 id: 'handover-01',
 title: 'Yêu cầu bàn giao dữ liệu kế toán',
 date: null,
 category: 'handover',
 description: 'Chú thích trung lập mô tả nội dung trao đổi.',
 image: '/evidence/ban-giao.png',
 type: 'image',
 sample: false,
}
```

Các ngày giao dịch, ảnh tin nhắn và logo không được tự dựng. Số liệu và diễn biến theo brief của iMoca, chưa được xác minh độc lập bằng chứng từ trong bản mẫu.

## Chuyển CMS sau này

Kiểu `Evidence` là hợp đồng dữ liệu giữa nguồn nội dung và UI. Thay nguồn xuất `evidence` bằng bộ nạp dữ liệu CMS trong quá trình build, giữ nguyên kiểu để tái sử dụng các component. Bản đầu không cần khóa API, cơ sở dữ liệu hay đăng nhập.

## Triển khai

`npm run build` tạo bản tĩnh. Cấu hình `.openai/hosting.json` khai báo thư mục public. Có thể dùng dịch vụ phục vụ HTML tĩnh khác, cập nhật tên miền trong metadata rồi build lại. Cấu hình Sites không chứa bí mật.
