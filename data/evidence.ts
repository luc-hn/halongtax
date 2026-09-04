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
    title: 'Trao đổi trong quá trình làm việc',
    date: null,
    category: 'messages',
    description:
      'Vị trí bổ sung nội dung trao đổi đầy đủ để người đọc đối chiếu.',
    image: '/evidence/sample.svg',
    type: 'image',
    sample: true,
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
