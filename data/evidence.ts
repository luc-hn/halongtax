export const categories = {
  all: 'Tất cả',
  messages: 'Tin nhắn',
  payment: 'Thanh toán',
  invoice: 'Hóa đơn',
  handover: 'Bàn giao dữ liệu',
  automation: 'Automation',
  other: 'Khác',
};
export type Category = Exclude<keyof typeof categories, 'all'>;
export type Evidence = {
  id: string;
  title: string;
  date: string | null;
  time?: string;
  group?: string;
  category: Category;
  description: string;
  image: string;
  file?: string;
  type: 'image' | 'pdf';
  sample: boolean;
};
export const evidence: Evidence[] = [
  {
    id: 'agreement-01',
    title: 'Trao đổi về mức phí ban đầu',
    date: null,
    category: 'messages',
    description:
      'Vị trí bổ sung trao đổi về mức phí và phạm vi dịch vụ khi bắt đầu hợp tác.',
    image: '/evidence/sample.svg',
    type: 'image',
    sample: true,
  },
  {
    id: 'payment-01',
    title: 'Các khoản phí dịch vụ ghi nhận',
    date: null,
    category: 'payment',
    description:
      'Vị trí bổ sung ảnh chuyển khoản và đối chiếu các mức phí theo quý.',
    image: '/evidence/sample.svg',
    type: 'image',
    sample: true,
  },
  {
    id: 'invoice-01',
    title: 'Hóa đơn dịch vụ kế toán',
    date: null,
    category: 'invoice',
    description: 'Vị trí bổ sung hóa đơn gốc, số tiền và kỳ dịch vụ tương ứng.',
    image: '/evidence/sample.svg',
    type: 'image',
    sample: true,
  },
  {
    id: 'automation-01',
    title: 'Hệ thống tự động xuất hóa đơn',
    date: null,
    category: 'automation',
    description: 'Vị trí bổ sung ảnh hệ thống iMoca vận hành từ tháng 05/2026.',
    image: '/evidence/sample.svg',
    type: 'image',
    sample: true,
  },
  {
    id: 'message-01',
    title: '01 · Trao đổi lại về phương án bổ sung ngành nghề',
    date: null,
    time: '21:21–21:27 (giờ hiển thị trong hội thoại)',
    group: 'service-quality',
    category: 'messages',
    description:
      'iMoca nhắc lại phương án bổ sung ngành nghề và phản hồi “Cũng đc” trong trao đổi trước đó. Phía Thuế Hạ Long gửi ảnh thông tin trạng thái hộ kinh doanh.',
    image: '/evidence/service-quality-01.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'message-02',
    title: '02 · Phản hồi về việc cập nhật thông tin',
    date: null,
    time: '21:28–21:30 (giờ hiển thị trong hội thoại)',
    group: 'service-quality',
    category: 'messages',
    description:
      'iMoca hỏi vì sao không được thông báo lại về phương án xử lý. Phía Thuế Hạ Long hỏi việc theo dõi tin tức và đề cập các thay đổi quy định. Đây là nội dung trao đổi của hai bên, chưa phải xác minh các quy định được nhắc đến.',
    image: '/evidence/service-quality-02.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'message-03',
    title: '03 · Yêu cầu xác nhận rõ khả năng xử lý',
    date: null,
    time: '21:30–21:31 (giờ hiển thị trong hội thoại)',
    group: 'service-quality',
    category: 'messages',
    description:
      'iMoca đề nghị thông báo rõ có thể xử lý hay không và phản ánh việc theo dõi nội dung đã trao đổi. Phía Thuế Hạ Long trả lời rằng tình hình thay đổi so với một tháng trước.',
    image: '/evidence/service-quality-03.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'message-04',
    title: '04 · Trao đổi về hỗ trợ hồ sơ và ký nộp',
    date: null,
    time: '21:33–21:34 (giờ hiển thị trong hội thoại)',
    group: 'service-quality',
    category: 'messages',
    description:
      'iMoca đề nghị chốt hướng xử lý. Phía Thuế Hạ Long nói chỉ hỗ trợ mẫu hồ sơ và có tin nhắn “còn ký nộp thì e có thể nhờ ai nhái chữ ký”. iMoca cung cấp ảnh này làm cơ sở cho đánh giá về cách tư vấn; trang không đưa ra kết luận pháp lý.',
    image: '/evidence/service-quality-04.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'handover-01',
    title: 'Yêu cầu bàn giao dữ liệu kế toán',
    date: null,
    category: 'handover',
    description:
      'Vị trí bổ sung trao đổi gốc về yêu cầu bàn giao file dữ liệu mềm.',
    image: '/evidence/sample.svg',
    type: 'image',
    sample: true,
  },
];
