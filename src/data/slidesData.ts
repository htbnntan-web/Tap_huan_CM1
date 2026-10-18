export interface SlideMetadata {
  id: number;
  code: string;
  partIndex: number;
  partLabel: string;
  legalDoc: string;
  title: string;
  subtitle: string;
  speakerNotes: string;
  keyTakeaways: string[];
}

export const SLIDES_METADATA: SlideMetadata[] = [
  {
    id: 1,
    code: '01',
    partIndex: 0,
    partLabel: 'Tổng quan chuyên đề',
    legalDoc: 'Văn bản BGDĐT (2020–2026)',
    title: 'Tập Huấn Chuyên Môn Về Đổi Mới Dạy Học, Năng Lực Số & Quản Lý Hồ Sơ Chuyên Môn',
    subtitle: 'Cẩm nang toàn diện triển khai chương trình GDPT theo Công văn 5512, 5208, 5555 và Thông tư 02/2025, 15/2026 của Bộ Giáo dục và Đào tạo',
    speakerNotes: 'Chào mừng quý thầy cô đến với buổi tập huấn chuyên môn về Đổi mới dạy học, Năng lực số và Quản lý hồ sơ chuyên môn. Bài trình chiếu hôm nay hệ thống hóa 5 trụ cột nghiệp vụ cốt lõi từ xây dựng kế hoạch dạy học của Tổ chuyên môn, đổi mới Kế hoạch bài dạy (Giáo án), lồng ghép giáo dục tích hợp và Khung năng lực số, cho đến đổi mới dự giờ theo nghiên cứu bài học và chuyển đổi số hồ sơ giáo dục.',
    keyTakeaways: [
      'Đồng bộ từ Kế hoạch Tổ chuyên môn đến Kế hoạch bài dạy (CV 5512)',
      'Triển khai Khung năng lực số 6 miền, 24 năng lực thành phần (TT 02/2025)',
      'Chuyển đổi số toàn diện hồ sơ quản lý giáo dục (TT 15/2026)'
    ]
  },
  {
    id: 2,
    code: '02',
    partIndex: 1,
    partLabel: 'Phần 1 · Kế hoạch Tổ chuyên môn',
    legalDoc: 'Công văn 5512/BGDĐT-GDTrH (18/12/2020)',
    title: 'Quy Trình 5 Bước Xây Dựng Kế Hoạch Dạy Học Của Tổ Chuyên Môn',
    subtitle: 'Đảm bảo nguyên tắc Khoa học – Khả thi – Hiệu quả, bám sát thực tiễn đội ngũ, thiết bị và đặc điểm học sinh nhà trường',
    speakerNotes: 'Quy trình 5 bước theo Công văn 5512 không phải là thủ tục hành chính một chiều mà là một chu trình khép kín liên tục: Bắt đầu từ phân tích thực trạng điều kiện thực tế của nhà trường, thiết kế phân phối chương trình, tổ chức dạy học, thu thập minh chứng theo dõi và cuối cùng là rà soát điều chỉnh linh hoạt.',
    keyTakeaways: [
      'Bước 1 & 2: Khảo sát thực trạng trước khi phân bổ thời lượng và yêu cầu cần đạt',
      'Bước 3 & 4: Triển khai đồng bộ kèm thu thập thông tin kết quả học tập của học sinh',
      'Bước 5: Kế hoạch có tính mở, cho phép điều chỉnh linh hoạt sát thực tiễn'
    ]
  },
  {
    id: 3,
    code: '03',
    partIndex: 1,
    partLabel: 'Phần 1 · Kế hoạch Tổ chuyên môn',
    legalDoc: 'Phụ lục I & III · Công văn 5512/BGDĐT-GDTrH',
    title: 'Cấu Trúc Khung Kế Hoạch Dạy Học Môn Học Của Tổ Chuyên Môn',
    subtitle: 'Mô hình hóa 3 cấu phần cốt lõi: Đặc điểm tình hình, Kế hoạch dạy học (PPCT, Chuyên đề, Kiểm tra định kỳ) và Các nội dung khác',
    speakerNotes: 'Khung kế hoạch dạy học môn học của Tổ chuyên môn gồm 3 phần lớn. Lưu ý ở phần II (Kế hoạch dạy học), Tổ chuyên môn phải làm rõ 3 bảng: Phân phối chương trình chi tiết (tên bài, số tiết, yêu cầu cần đạt), Chuyên đề lựa chọn đối với cấp THPT, và Ma trận kế hoạch kiểm tra đánh giá định kỳ với 4 hình thức đánh giá linh hoạt.',
    keyTakeaways: [
      'I. Đặc điểm tình hình: Làm rõ 4 yếu tố (Quy mô lớp, Đội ngũ GV, Thiết bị, Cơ sở vật chất)',
      'II. Kế hoạch dạy học: Gồm Phân phối chương trình, Chuyên đề THPT và Kiểm tra định kỳ',
      'III. Nội dung khác: Hoạt động trải nghiệm, hướng nghiệp, giáo dục địa phương và đặc thù'
    ]
  },
  {
    id: 4,
    code: '04',
    partIndex: 2,
    partLabel: 'Phần 2 · Kế hoạch Bài dạy (KHBD)',
    legalDoc: 'Phụ lục IV · Công văn 5512/BGDĐT-GDTrH',
    title: 'Đổi Mới Kế Hoạch Bài Dạy: Yêu Cầu Mục Tiêu & Thiết Bị Học Liệu',
    subtitle: 'Chuẩn hóa cấu trúc Giáo án theo định hướng phát triển phẩm chất và năng lực học sinh',
    speakerNotes: 'Trong Phụ lục IV của Công văn 5512, mục tiêu bài học tuyệt đối không viết chung chung mà phải tách bạch 3 thành phần: Kiến thức cốt lõi, Năng lực (nêu rõ học sinh làm được gì qua vận dụng kiến thức) và Phẩm chất (hành vi, thái độ cụ thể). Đặc biệt, muốn hình thành phẩm chất, năng lực nào thì thiết bị dạy học, học liệu và hoạt động học phải tương ứng với mục tiêu đó.',
    keyTakeaways: [
      'Kiến thức: Xác định kiến thức cốt lõi học sinh cần biết và hiểu theo chương trình',
      'Năng lực: Nêu rõ học sinh LÀM ĐƯỢC GÌ để chiếm lĩnh và vận dụng kiến thức',
      'Phẩm chất: Biểu hiện cụ thể về hành vi, thái độ trong quá trình thực hiện nhiệm vụ'
    ]
  },
  {
    id: 5,
    code: '05',
    partIndex: 2,
    partLabel: 'Phần 2 · Kế hoạch Bài dạy (KHBD)',
    legalDoc: 'Phụ lục IV · Công văn 5512/BGDĐT-GDTrH',
    title: 'Chuỗi 4 Hoạt Động Học Tập & 4 Bước Tổ Chức Thực Hiện',
    subtitle: 'Cấu trúc sư phạm bắt buộc trong mỗi Kế hoạch bài dạy và quy trình vận hành từng hoạt động trên lớp',
    speakerNotes: 'Mỗi bài dạy bắt buộc thiết kế theo chuỗi 4 hoạt động học tập: Mở đầu, Hình thành kiến thức, Luyện tập và Vận dụng. Trong từng hoạt động học đó, giáo viên tổ chức thực hiện trọn vẹn qua 4 bước: Chuyển giao nhiệm vụ -> Thực hiện nhiệm vụ -> Báo cáo, thảo luận -> Kết luận, nhận định.',
    keyTakeaways: [
      'Chuỗi 4 hoạt động: Mở đầu -> Hình thành kiến thức -> Luyện tập -> Vận dụng',
      '4 bước mỗi hoạt động: Chuyển giao -> Thực hiện -> Báo cáo thảo luận -> Kết luận nhận định',
      'Rõ vai trò: Giáo viên giao việc, quan sát, chốt kiến thức; Học sinh tự làm, thảo luận, phản biện'
    ]
  },
  {
    id: 6,
    code: '06',
    partIndex: 3,
    partLabel: 'Phần 3 · Tích hợp & Năng lực số',
    legalDoc: 'Công văn 5208/BGDĐT-GDPT · Năm học 2026–2027',
    title: 'Hướng Dẫn Tích Hợp Nội Dung Giáo Dục Năm Học 2026–2027',
    subtitle: 'Lồng ghép các giá trị xã hội, di sản văn hóa, kỹ năng sống, STEM/STEAM và 4 cấp độ dạy học tích hợp',
    speakerNotes: 'Theo Công văn 5208/BGDĐT-GDPT, việc tích hợp nội dung giáo dục là yêu cầu cốt lõi để phát triển toàn diện năng lực học sinh. Có 4 cấp độ dạy học tích hợp từ thấp đến cao: Nội môn -> Đa môn -> Liên môn -> Xuyên môn. Khi tổ chức cần đảm bảo tính khoa học, vừa sức, không gây áp lực hay phát sinh chi phí.',
    keyTakeaways: [
      '3 nhóm chủ đề chính: Giá trị xã hội & Pháp luật; Di sản, Văn hóa & Môi trường; Kỹ năng sống & An toàn',
      '3 lĩnh vực bổ trợ: STEM/STEAM, Năng lực số (AI an toàn), Thể chất & Nghệ thuật',
      '4 cấp độ tích hợp: Nội môn -> Đa môn -> Liên môn -> Xuyên môn'
    ]
  },
  {
    id: 7,
    code: '07',
    partIndex: 3,
    partLabel: 'Phần 3 · Tích hợp & Năng lực số',
    legalDoc: 'Thông tư 02/2025/TT-BGDĐT (24/01/2025)',
    title: 'Triển Khai Khung Năng Lực Số Cho Người Học',
    subtitle: 'Cấu trúc 6 miền năng lực, 24 năng lực thành phần, 4 mức độ thành thạo (8 bậc) và nguyên tắc triển khai',
    speakerNotes: 'Thông tư 02/2025/TT-BGDĐT ban hành Khung năng lực số cho người học gồm 6 miền năng lực với 24 năng lực thành phần, chia làm 4 mức độ (Cơ bản, Trung cấp, Nâng cao, Chuyên sâu) tương ứng 8 bậc. Nguyên tắc bất di bất dịch là không gây quá tải chương trình; môn Tin học giữ vai trò chủ đạo cung cấp kiến thức nền tảng, còn các môn học khác tạo môi trường vận dụng.',
    keyTakeaways: [
      '6 miền năng lực (I đến VI) với tổng cộng 24 năng lực thành phần cốt lõi',
      'Môn Tin học giữ vai trò chủ đạo; các môn học khác tạo môi trường vận dụng thực tiễn',
      'Không làm thay đổi hoặc gây quá tải cho Chương trình GDPT 2018 và GDTX'
    ]
  },
  {
    id: 8,
    code: '08',
    partIndex: 3,
    partLabel: 'Phần 3 · Tích hợp & Năng lực số',
    legalDoc: 'Thông tư 02/2025/TT-BGDĐT (24/01/2025)',
    title: 'Bảng Mô Tả Các Mức Độ Thành Thạo Năng Lực Số Phổ Thông',
    subtitle: 'Lộ trình phát triển từ Bậc 1 (Cơ bản 1) đến Bậc 5 (Nâng cao 1) phân bổ theo từng khối lớp từ Tiểu học đến THPT',
    speakerNotes: 'Bảng mô tả mức độ thành thạo cho học sinh phổ thông quy định rõ từ Lớp 1 đến Lớp 12 tương ứng từ Bậc 1 đến Bậc 5. Sự tiến triển thể hiện ở hai trục: Độ phức tạp của tình huống/nhiệm vụ dạy học (từ đơn giản -> quen thuộc -> không quen thuộc -> phức tạp, vấn đề mới) và Mức độ tự chủ của học sinh (từ có hướng dẫn -> tự chủ hoàn toàn và hướng dẫn người khác).',
    keyTakeaways: [
      'Tiểu học: Lớp 1-3 (Bậc 1 - Cơ bản 1, có hướng dẫn); Lớp 4-5 (Bậc 2 - Cơ bản 2, tự chủ một phần)',
      'THCS: Lớp 6-7 (Bậc 3 - Trung cấp 1, tự chủ); Lớp 8-9 (Bậc 4 - Trung cấp 2, độc lập theo nhu cầu)',
      'THPT: Lớp 10-12 (Bậc 5 - Nâng cao 1, giải quyết nhiệm vụ phức tạp, tự chủ hoàn toàn & hướng dẫn người khác)'
    ]
  },
  {
    id: 9,
    code: '09',
    partIndex: 4,
    partLabel: 'Phần 4 · Sinh hoạt chuyên môn NCBH',
    legalDoc: 'Công văn 5555/BGDĐT-GDTrH',
    title: 'Đổi Mới Sinh Hoạt Chuyên Môn Theo Nghiên Cứu Bài Học & Dự Giờ',
    subtitle: 'Chuyển đổi quan điểm kiểm tra đánh giá và giải pháp khắc phục triệt để 3 "căn bệnh" trong dự giờ',
    speakerNotes: 'Theo Công văn 5555, trọng tâm đánh giá chuyển từ Assessment OF learning (đánh giá kết quả để xếp loại) sang Assessment FOR learning (vì học tập) và Assessment AS learning (là học tập). Trong dự giờ NCBH, cần kiên quyết loại bỏ 3 căn bệnh: Bệnh Diễn dịch (dạy trước), Bệnh Quan tòa (phán xét, chấm điểm GV) và Bệnh Sân khấu 1 người (chỉ BGH/Tổ trưởng nói).',
    keyTakeaways: [
      'Đánh giá vì học tập (For learning) & Đánh giá là học tập (As learning) để cải thiện chất lượng',
      'Xử lý Bệnh "Diễn dịch": Cấm tuyệt đối dạy trước; xem sai sót của HS là chất liệu quý',
      'Xử lý Bệnh "Quan tòa" & "Sân khấu 1 người": Bỏ chấm điểm GV; áp dụng kỹ thuật vòng tròn'
    ]
  },
  {
    id: 10,
    code: '10',
    partIndex: 4,
    partLabel: 'Phần 4 · Sinh hoạt chuyên môn NCBH',
    legalDoc: 'Công văn 5555/BGDĐT-GDTrH',
    title: 'Mẫu Sổ Ghi Chép Dự Giờ Theo Nghiên Cứu Bài Học',
    subtitle: 'Công cụ thu thập minh chứng phân tích việc học của học sinh, sơ đồ không gian lớp học và phân tích vi mô',
    speakerNotes: 'Mẫu phiếu ghi chép dự giờ theo Nghiên cứu bài học tuyệt đối không dùng để chấm điểm hay xếp loại giờ dạy của giáo viên. Người dự giờ đứng ở vị trí quan sát thấy rõ nét mặt, thao tác của học sinh, vẽ Sơ đồ lớp học (Class Spatial Map), khoanh tròn nhóm học sinh quan sát vi mô và ghi chép chuỗi hành vi, biểu cảm, nguyên nhân và giải pháp.',
    keyTakeaways: [
      'Tuyệt đối không dùng phiếu dự giờ NCBH để chấm điểm, xếp loại giờ dạy giáo viên',
      'Thiết lập Sơ đồ lớp học (Class Spatial Map) và khoanh tròn cá nhân/nhóm HS quan sát vi mô',
      'Ghi chép ma trận tiến trình: Minh chứng hành vi/biểu cảm/thao tác HS -> Phân tích nguyên nhân -> Đề xuất giải pháp'
    ]
  },
  {
    id: 11,
    code: '11',
    partIndex: 5,
    partLabel: 'Phần 5 · Hồ sơ & Chuyển đổi số',
    legalDoc: 'Thông tư 15/2026/TT-BGDĐT (Hệ thống Hồ sơ GD)',
    title: 'Quản Lý Hồ Sơ Chuyên Môn & Chuyển Đổi Số Hồ Sơ Điện Tử',
    subtitle: 'Chuẩn hóa danh mục hồ sơ cấp trường, giáo viên, tổ chuyên môn và lộ trình liên thông dữ liệu số giảm tải hành chính',
    speakerNotes: 'Hệ thống hồ sơ quản lý hoạt động giáo dục phân định rõ 4 trụ cột: 14 loại hồ sơ cấp trường; 03 loại hồ sơ trọng tâm của giáo viên (Kế hoạch bài dạy, Sổ chủ nhiệm, Sổ công tác Đội); Sổ ghi chép nội dung hoạt động của Tổ chuyên môn & Văn phòng; và Chuyển đổi số sang Hồ sơ điện tử có giá trị pháp lý tương đương bản giấy, kết nối liên thông dữ liệu.',
    keyTakeaways: [
      'Nhà trường quản lý 14 loại hồ sơ; Giáo viên chỉ tập trung 03 loại hồ sơ trọng tâm',
      'Tổ chuyên môn & Văn phòng: Sổ ghi chép nội dung các hoạt động (biên bản, kế hoạch, chuyên đề)',
      'Chuyển đổi số: Hồ sơ điện tử có giá trị pháp lý tương đương bản giấy, kết nối liên thông giảm tải'
    ]
  },
  {
    id: 12,
    code: '12',
    partIndex: 5,
    partLabel: 'Tổng kết & Hành động',
    legalDoc: 'Khung Thực Thi Đồng Bộ (CV 5512 · 5208 · 5555 · TT 02 · TT 15)',
    title: 'Tổng Kết Tập Huấn & Lộ Trình Triển Khai Đồng Bộ Tại Cơ Sở Giáo Dục',
    subtitle: 'Ma trận trách nhiệm thực thi giữa Ban Giám hiệu, Tổ Chuyên môn và Giáo viên bộ môn trong năm học mới',
    speakerNotes: 'Slide cuối cùng tổng hợp toàn bộ 5 chuyên đề tập huấn thành bảng kiểm (Checklist) hành động cụ thể cho từng cấp: Ban giám hiệu, Tổ trưởng chuyên môn và Giáo viên. Quý thầy cô có thể tương tác đánh dấu tiến độ triển khai ngay trên bảng kiểm hoặc xuất bản in/PowerPoint toàn bộ bộ slide để làm tài liệu sinh hoạt chuyên môn.',
    keyTakeaways: [
      'Hoàn thiện Kế hoạch dạy học TCM & KHBD theo đúng cấu trúc Công văn 5512',
      'Tích hợp giáo dục (CV 5208) và Khung năng lực số (TT 02/2025) không gây quá tải',
      'Đổi mới thực chất SHCM theo NCBH (CV 5555) và vận hành Hồ sơ điện tử (TT 15/2026)'
    ]
  }
];
