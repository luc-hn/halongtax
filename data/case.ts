export const chapters = [
  { id: 'overview', number: '00', label: 'Tổng quan' },
  { id: 'beginning', number: '01', label: 'Bắt đầu hợp tác' },
  { id: 'fees', number: '02', label: 'Phí dịch vụ thay đổi' },
  { id: 'automation', number: '03', label: 'Tự động hóa hóa đơn' },
  { id: 'issues', number: '04', label: 'Chất lượng dịch vụ' },
  { id: 'handover', number: '05', label: 'Bàn giao dữ liệu' },
  { id: 'evidence', number: '06', label: 'Tài liệu & bằng chứng' },
  { id: 'lessons', number: '07', label: 'Bài học cho doanh nghiệp' },
];
export const site = {
  title: 'Kế toán Hạ Long (Hạ Long Tax): Trải nghiệm của iMoca',
  description:
    'iMoca chia sẻ trải nghiệm kế toán thuế Hạ Long Tax, làm việc với Phạm Quang Lương: thay đổi phí, chất lượng trao đổi và bàn giao dữ liệu, kèm ảnh đối chiếu.',
  name: 'iMoca — Hồ sơ trải nghiệm',
  origin: 'https://imoca-halongtax.hoanglucmc.chatgpt.site',
  halongLogo: '', // Chỉ điền đường dẫn logo chính thức được cung cấp.
};
export const serviceRating = {
  score: 1,
  total: 5,
  title: 'Đánh giá chất lượng dịch vụ của iMoca',
  description:
    'Theo trải nghiệm của iMoca, chất lượng dịch vụ chưa đáp ứng kỳ vọng về sự rõ ràng trong phạm vi công việc, chi phí, cách trao đổi và việc bàn giao dữ liệu.',
};
export const metrics = [
  { value: '2024', label: 'Bắt đầu hợp tác' },
  { value: '1 triệu', unit: '/ tháng', label: 'Mức phí ban đầu' },
  { value: '4,5 triệu', unit: '/ quý', label: 'Mức cao nhất ghi nhận' },
  { value: '05/2026', label: 'Tự động hóa xuất hóa đơn' },
];
export const fees = [
  { amount: '3.000.000đ', unit: '/ quý', label: 'Ban đầu', height: 66 },
  { amount: '3.240.000đ', unit: '', label: 'Yêu cầu chuyển khoản', height: 72 },
  {
    amount: '4.500.000đ',
    unit: '/ quý',
    label: 'Phí được yêu cầu',
    height: 100,
  },
];
export const issues = [
  {
    title: 'Phạm vi công việc',
    text: 'iMoca ghi nhận không có hợp đồng và phạm vi công việc rõ ràng.',
    evidence: 'agreement-01',
  },
  {
    title: 'Thay đổi chi phí',
    text: 'Theo trải nghiệm của iMoca, chi phí thay đổi nhưng thiếu giải thích rõ ràng.',
    evidence: 'payment-01',
  },
  {
    title: 'Trao đổi & xử lý',
    text: 'Một số cách trao đổi và xử lý công việc khiến iMoca đánh giá là thiếu chuyên nghiệp.',
    evidence: 'message-01',
  },
  {
    title: 'Đối chiếu tài liệu',
    text: 'Các nội dung cụ thể được dẫn tới tài liệu liên quan để người đọc tự đánh giá.',
    evidence: 'handover-01',
  },
];
export const lessons = [
  'Hợp đồng dịch vụ',
  'Phạm vi công việc',
  'Mức phí & điều chỉnh',
  'Quyền sở hữu dữ liệu',
  'Quy trình bàn giao',
];
