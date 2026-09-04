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
export const evidenceGroups: Record<string, string> = {
  'service-quality': 'Trao đổi & xử lý',
  'service-fees': 'Thỏa thuận & thay đổi phí',
  'data-handover': 'Bàn giao cho kế toán mới',
};
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
    title: '01 · Mức phí 3 triệu/quý và ảnh yêu cầu chuyển khoản',
    date: null,
    group: 'service-fees',
    category: 'messages',
    description:
      'Thuế Hạ Long nhắc mức “3tr/quý”, tương đương 1 triệu/tháng. Bên dưới là ảnh tạo yêu cầu chuyển khoản 3.240.000đ được gửi tại mốc 14/02/2026; ảnh này chưa xác nhận giao dịch đã hoàn tất. Ngày của tin nhắn báo phí không hiển thị.',
    image: '/evidence/service-fees-01.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'payment-01',
    title: '02 · Trao đổi và ảnh chuyển khoản 3 triệu đồng',
    date: '2025-11-03',
    group: 'service-fees',
    category: 'payment',
    description:
      'Trong hội thoại ngày 03/11/2025, iMoca hỏi dùng tài khoản công ty; Thuế Hạ Long trả lời chuyển từ tài khoản cá nhân. Ảnh đính kèm hiển thị chuyển thành công 3.000.000đ. Ảnh không nêu rõ kỳ dịch vụ.',
    image: '/evidence/service-fees-02.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'fees-03',
    title: '03 · Yêu cầu thanh toán phí quý 2: 4,5 triệu đồng',
    date: null,
    group: 'service-fees',
    category: 'messages',
    description:
      'Thuế Hạ Long yêu cầu phí quý 2 là 4,5 triệu đồng, tương đương 1,5 triệu/tháng. iMoca hỏi về mức phí khi đã tự xuất hóa đơn tháng 4–5–6. Ở mốc 11/08/2026, phía dịch vụ phản hồi công việc không chỉ có báo cáo quý. Ngày gửi yêu cầu thanh toán không hiển thị; đây chưa phải chứng từ đã thanh toán.',
    image: '/evidence/service-fees-03.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'fees-04',
    title: '04 · Phản hồi về phạm vi công việc và mức 1,5 triệu/tháng',
    date: null,
    time: '13:47 (giờ phản hồi hiển thị)',
    group: 'service-fees',
    category: 'messages',
    description:
      'Thuế Hạ Long gửi ảnh sổ sách và nêu thêm công việc báo cáo năm, giải trình thuế. iMoca phản hồi về việc tăng lên 1,5 triệu/tháng so với mức 1 triệu đã trao đổi trước đó. Một phần tin nhắn cuối ảnh bị che; giữ nguyên ảnh người dùng cung cấp.',
    image: '/evidence/service-fees-04.jpg',
    type: 'image',
    sample: false,
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
    title: '01 · Trao đổi về bàn giao cho kế toán mới',
    date: null,
    time: '14:47–14:50 (giờ hiển thị trong hội thoại)',
    group: 'data-handover',
    category: 'handover',
    description:
      'Thuế Hạ Long nói không có trách nhiệm bàn giao cho kế toán của iMoca, sau đó nêu có bàn giao sổ sách và cung cấp file mềm khi thuế kiểm tra. iMoca không đồng ý và yêu cầu bàn giao toàn bộ cho kế toán của mình. Ảnh đã có đánh dấu đỏ khi được cung cấp; ngày trao đổi không hiển thị.',
    image: '/evidence/data-handover-01.jpg',
    type: 'image',
    sample: false,
  },
  {
    id: 'handover-02',
    title: '02 · Phản hồi về yêu cầu bàn giao file mềm',
    date: null,
    time: '14:51–14:52 (giờ hiển thị trong hội thoại)',
    group: 'data-handover',
    category: 'handover',
    description:
      'iMoca yêu cầu trả lời rõ có bàn giao hay không. Thuế Hạ Long nói bàn giao sổ sách theo quy định và cho rằng không có quy định phải bàn giao file mềm. iMoca phản hồi rằng cách xử lý này gây khó khăn khi chuyển giao. Đây là quan điểm trong hội thoại, không phải kết luận pháp lý của website. Ảnh giữ nguyên đánh dấu đỏ do người cung cấp thực hiện.',
    image: '/evidence/data-handover-02.jpg',
    type: 'image',
    sample: false,
  },
];
