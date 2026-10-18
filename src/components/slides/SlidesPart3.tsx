import React, { useState } from 'react';
import {
  Cpu,
  Database,
  Lock,
  MessageSquare,
  Puzzle,
  Scale,
  ShieldCheck,
  Sparkles,
  Trees
} from 'lucide-react';

/* ============================================================================
   SLIDE 06: HƯỚNG DẪN TÍCH HỢP NỘI DUNG GIÁO DỤC NĂM HỌC 2026–2027 (CV 5208)
   (Bám sát trang 4 và Infographic trang 5 của PDF)
   ============================================================================ */
export const Slide06IntegratedEducation: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(2);

  const coreThemes = [
    {
      code: 'CHỦ ĐỀ 01',
      title: 'Giá trị Xã hội và Pháp luật',
      icon: Scale,
      desc: 'Lồng ghép giáo dục quyền con người, phòng chống tham nhũng, chủ quyền biên giới và biển đảo.'
    },
    {
      code: 'CHỦ ĐỀ 02',
      title: 'Di sản, Văn hóa và Môi trường',
      icon: Trees,
      desc: 'Chú trọng bảo tồn văn hóa dân tộc, giáo dục di sản và ứng phó với biến đổi khí hậu.'
    },
    {
      code: 'CHỦ ĐỀ 03',
      title: 'Kỹ năng Sống và An toàn',
      icon: ShieldCheck,
      desc: 'Tích hợp an toàn giao thông, phòng chống đuối nước và các nội dung kỹ năng sống thiết yếu.'
    }
  ];

  const supplementaryDomains = [
    {
      name: 'STEM / STEAM',
      detail: 'Khoa học, tư duy thiết kế và giải quyết vấn đề thực tiễn.'
    },
    {
      name: 'Năng lực số',
      detail: 'Sử dụng AI an toàn, khai thác học liệu số và mạng xã hội.'
    },
    {
      name: 'Thể chất & Nghệ thuật',
      detail: 'Chăm sóc sức khỏe tâm lý, phòng chống tai nạn thương tích.'
    }
  ];

  const integrationLevels = [
    {
      level: 'Cấp độ 1',
      name: 'Tích hợp nội môn',
      desc: 'Lồng ghép các nội dung, mạch kiến thức và kỹ năng ngay trong phạm vi một môn học duy nhất.'
    },
    {
      level: 'Cấp độ 2',
      name: 'Tích hợp đa môn',
      desc: 'Một chủ đề chung được tiếp cận dưới góc nhìn của nhiều môn học khác nhau nhưng từng môn vẫn dạy độc lập.'
    },
    {
      level: 'Cấp độ 3',
      name: 'Tích hợp liên môn',
      desc: 'Xây dựng chủ đề/bài học huy động kiến thức, kỹ năng của hai hay nhiều môn học để cùng giải quyết một vấn đề.'
    },
    {
      level: 'Cấp độ 4',
      name: 'Tích hợp xuyên môn',
      desc: 'Phát triển kỹ năng sống, năng lực số và giải quyết vấn đề thực tiễn xuyên suốt qua mọi hoạt động trong và ngoài lớp.'
    }
  ];

  const orientations = [
    {
      title: '1. Xây dựng kế hoạch thực tiễn',
      desc: 'Lựa chọn nội dung tích hợp phù hợp với đội ngũ, cơ sở vật chất và điều kiện địa phương.'
    },
    {
      title: '2. Đảm bảo tính khoa học, vừa sức',
      desc: 'Hoạt động tích hợp phải có mục tiêu rõ ràng, không gây áp lực hay phát sinh chi phí.'
    },
    {
      title: '3. Tăng cường trải nghiệm thực tế',
      desc: 'Ưu tiên các mô hình giáo dục gắn với đổi mới sáng tạo và hướng nghiệp sớm.'
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Top Row: Core Themes & Supplementary Domains */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* 3 Core Themes */}
        <div className="lg:col-span-7 bg-white rounded-xl border-2 border-slate-400 p-5 space-y-3">
          <div className="flex items-center justify-between bg-[#1E3A8A] text-white px-4 py-2 rounded-lg">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              Các Chủ đề Tích hợp Trọng tâm (Theo Công văn 5208/BGDĐT-GDPT)
            </h3>
            <span className="text-xs font-mono-tabular font-bold text-amber-300">Năm học 2026–2027</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {coreThemes.map((theme) => {
              const Icon = theme.icon;
              return (
                <div
                  key={theme.code}
                  className="p-3.5 rounded-lg bg-slate-100 border-2 border-slate-300 flex flex-col justify-between gap-2"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono-tabular text-[#1E3A8A] font-extrabold">
                      <span>{theme.code}</span>
                      <Icon className="w-4 h-4 text-[#0B132B]" />
                    </div>
                    <h4 className="text-sm font-extrabold text-[#0B132B] leading-snug">
                      {theme.title}
                    </h4>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Supplementary Domains */}
        <div className="lg:col-span-5 bg-white rounded-xl border-2 border-slate-400 p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between bg-[#0F766E] text-white px-4 py-2 rounded-lg">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              Lĩnh vực Tích hợp Bổ trợ
            </h3>
            <span className="text-xs font-mono-tabular font-bold text-amber-200">03 Lĩnh vực</span>
          </div>

          <div className="space-y-2.5">
            {supplementaryDomains.map((dom, idx) => (
              <div
                key={dom.name}
                className="p-3 rounded-lg bg-slate-100 border-2 border-slate-300 flex items-start gap-3"
              >
                <span className="font-mono-tabular text-xs font-extrabold text-white bg-[#0F766E] px-2 py-0.5 rounded mt-0.5">
                  0{idx + 1}
                </span>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B132B]">{dom.name}</div>
                  <div className="text-xs font-semibold text-slate-900 mt-0.5">{dom.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Row: 4 Levels of Integrated Teaching */}
      <div className="bg-white rounded-xl border-2 border-slate-400 p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-300 pb-2">
          <span className="text-xs sm:text-sm font-extrabold text-[#0B132B] uppercase tracking-wider">
            4 Cấp độ dạy học tích hợp (Tiến trình: Nội môn → Đa môn → Liên môn → Xuyên môn)
          </span>
          <span className="text-xs font-bold text-[#1E3A8A]">
            Nhấn vào từng cấp độ để đối chiếu phạm vi tích hợp
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {integrationLevels.map((lvl, idx) => {
            const isSelected = selectedLevel === idx;
            return (
              <button
                key={lvl.level}
                onClick={() => setSelectedLevel(idx)}
                className={`text-left p-3.5 rounded-lg border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                    : 'bg-slate-100 text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-tabular mb-1.5">
                  <span
                    className={`px-2 py-0.5 rounded font-extrabold ${
                      isSelected ? 'bg-amber-400 text-[#0B132B]' : 'bg-[#1E3A8A] text-white'
                    }`}
                  >
                    {lvl.level.toUpperCase()}
                  </span>
                  <span className="font-bold">0{idx + 1}/04</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold">{lvl.name}</div>
                <p className={`text-xs font-semibold mt-1 leading-relaxed ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {lvl.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Row: 3 Implementation Orientations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {orientations.map((ori) => (
          <div
            key={ori.title}
            className="bg-slate-100 rounded-xl border-2 border-slate-400 p-4 space-y-1"
          >
            <div className="text-xs sm:text-sm font-extrabold text-[#1E3A8A]">{ori.title}</div>
            <p className="text-xs font-semibold text-slate-950 leading-relaxed">{ori.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 07: KHUNG NĂNG LỰC SỐ CHO NGƯỜI HỌC (THÔNG TƯ 02/2025/TT-BGDĐT)
   (Bám sát trang 5, Infographic trang 6 và văn bản trang 7)
   ============================================================================ */
export const Slide07DigitalCompetencyDomains: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number>(0);

  const domains = [
    {
      roman: 'I',
      name: 'Sáng tạo nội dung số',
      count: '03 năng lực thành phần',
      icon: Sparkles,
      details: 'Phát triển, chỉnh sửa, tích hợp nội dung số; tôn trọng bản quyền, giấy phép sở hữu trí tuệ và lập trình/tư duy thuật toán.'
    },
    {
      roman: 'II',
      name: 'Giao tiếp và Hợp tác trong môi trường số',
      count: '06 năng lực thành phần',
      icon: MessageSquare,
      details: 'Tương tác, chia sẻ dữ liệu qua công nghệ số; thực hành trách nhiệm công dân số; hợp tác nhóm trực tuyến; chuẩn mực ứng xử (Netiquette) và quản lý danh tính số.'
    },
    {
      roman: 'III',
      name: 'Khai thác dữ liệu và thông tin',
      count: '04 năng lực thành phần',
      icon: Database,
      details: 'Duyệt, tìm kiếm, lọc dữ liệu và thông tin số; đánh giá độ tin cậy của nguồn tin; lưu trữ, quản lý và tổ chức dữ liệu khoa học.'
    },
    {
      roman: 'IV',
      name: 'Ứng dụng Trí tuệ nhân tạo (AI)',
      count: '03 năng lực thành phần',
      icon: Cpu,
      details: 'Hiểu biết cơ bản về cách thức hoạt động của AI; sử dụng công cụ AI có đạo đức, trách nhiệm và an toàn phục vụ học tập, nghiên cứu.'
    },
    {
      roman: 'V',
      name: 'Giải quyết vấn đề',
      count: '04 năng lực thành phần',
      icon: Puzzle,
      details: 'Xác định nhu cầu và giải pháp công nghệ; xử lý sự cố kỹ thuật; ứng dụng sáng tạo công nghệ số và tự đánh giá khoảng trống năng lực số cá nhân.'
    },
    {
      roman: 'VI',
      name: 'An toàn',
      count: '04 năng lực thành phần',
      icon: Lock,
      details: 'Bảo vệ thiết bị, bảo mật dữ liệu cá nhân và quyền riêng tư; bảo vệ sức khỏe thể chất, tinh thần trên không gian mạng và bảo vệ môi trường.'
    }
  ];

  const currentDomain = domains[selectedDomain];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch">
      {/* Left 7 Columns: 6 Domains Interactive Explorer */}
      <div className="lg:col-span-7 bg-white rounded-xl border-2 border-slate-400 p-6 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
            <div>
              <div className="text-xs font-mono-tabular text-[#1E3A8A] font-extrabold">
                THÔNG TƯ 02/2025/TT-BGDĐT (NGÀY 24/01/2025)
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
                1. Cấu trúc Khung Năng lực số cho Người học (6 Miền · 24 Năng lực)
              </h3>
            </div>
            <span className="text-xs font-mono-tabular font-bold text-[#0F766E]">
              Tổng: 24 năng lực thành phần
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {domains.map((dom, idx) => {
              const isSelected = selectedDomain === idx;
              return (
                <button
                  key={dom.roman}
                  onClick={() => setSelectedDomain(idx)}
                  className={`text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                      : 'bg-slate-100 text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg font-mono-tabular text-xs font-extrabold flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 text-[#0B132B]'
                        : 'bg-[#1E3A8A] text-white'
                    }`}
                  >
                    {dom.roman}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs sm:text-sm font-extrabold leading-snug">{dom.name}</div>
                    <div
                      className={`text-xs font-mono-tabular font-bold ${
                        isSelected ? 'text-amber-300' : 'text-[#1E3A8A]'
                      }`}
                    >
                      {dom.count}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Domain Detail Box */}
        <div className="p-4 rounded-xl bg-[#1E3A8A] text-white space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-extrabold text-amber-300">
              Miền {currentDomain.roman}: {currentDomain.name} ({currentDomain.count})
            </span>
            <span className="font-mono-tabular font-bold text-sky-200">Chi tiết miền năng lực</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
            {currentDomain.details}
          </p>
        </div>

        {/* Structure Summary Metrics */}
        <div className="grid grid-cols-3 gap-3 pt-2 border-t-2 border-slate-300 text-center">
          <div className="p-2.5 rounded-lg bg-slate-100 border-2 border-slate-400">
            <div className="text-lg font-extrabold font-mono-tabular text-[#0B132B]">06 Miền</div>
            <div className="text-xs font-bold text-slate-900">Năng lực cốt lõi (I – VI)</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-100 border-2 border-slate-400">
            <div className="text-lg font-extrabold font-mono-tabular text-[#1E3A8A]">24 Thành phần</div>
            <div className="text-xs font-bold text-slate-900">Năng lực cụ thể (3+6+4+3+4+4)</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-100 border-2 border-slate-400">
            <div className="text-lg font-extrabold font-mono-tabular text-[#0F766E]">04 Mức · 08 Bậc</div>
            <div className="text-xs font-bold text-slate-900">Cơ bản, Trung cấp, Nâng cao, Chuyên sâu</div>
          </div>
        </div>
      </div>

      {/* Right 5 Columns: Purpose & 3 Implementation Requirements (Page 7 PDF) */}
      <div className="lg:col-span-5 bg-white rounded-xl border-2 border-slate-400 p-6 flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <div className="border-b-2 border-slate-300 pb-3">
            <div className="text-xs font-mono-tabular text-[#0F766E] font-extrabold">
              MỤC ĐÍCH & YÊU CẦU TRIỂN KHAI (TRANG 5 & 7)
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
              2. Nguyên tắc Triển khai Khung Năng lực số tại Phổ thông
            </h3>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-1">
            <div className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
              1. Mục đích cốt lõi:
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
              Giúp học sinh áp dụng NLS trong học tập và cuộc sống, hình thành và phát triển những năng lực thiết yếu của <strong className="text-[#1E3A8A] font-extrabold">công dân số</strong>, sẵn sàng tham gia vào môi trường số trong thời đại Cách mạng công nghiệp 4.0.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs sm:text-sm font-extrabold text-[#0B132B] uppercase tracking-wider">
              2. Ba Yêu cầu / Nguyên tắc triển khai bắt buộc:
            </div>

            <div className="p-3.5 rounded-lg border-2 border-slate-400 bg-white space-y-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#9A3412]">
                • Không gây quá tải:
              </div>
              <p className="text-xs font-semibold text-slate-950 leading-relaxed">
                Việc triển khai không làm thay đổi hoặc gây quá tải cho Chương trình Giáo dục phổ thông (GDPT) 2018 và Chương trình GDTX.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border-2 border-slate-400 bg-white space-y-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#1E3A8A]">
                • Lồng ghép phù hợp:
              </div>
              <p className="text-xs font-semibold text-slate-950 leading-relaxed">
                Cần đối chiếu yêu cầu cần đạt của từng môn học và hoạt động giáo dục để lồng ghép các nội dung nâng cao NLS một cách phù hợp.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border-2 border-slate-400 bg-white space-y-1">
              <div className="text-xs sm:text-sm font-extrabold text-[#0F766E]">
                • Phân định rõ vai trò các môn học:
              </div>
              <p className="text-xs font-semibold text-slate-950 leading-relaxed">
                <strong className="text-[#0B132B] font-extrabold">Môn Tin học giữ vai trò chủ đạo</strong>, cung cấp kiến thức nền tảng và hệ thống các kỹ năng số cốt lõi. <strong className="text-[#0B132B] font-extrabold">Các môn học và hoạt động giáo dục khác tạo môi trường</strong> để học sinh vận dụng kỹ năng số vào thực tiễn, củng cố và phát triển năng lực một cách toàn diện.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 08: BẢNG MÔ TẢ CÁC MỨC ĐỘ THÀNH THẠO NĂNG LỰC SỐ CHO HỌC SINH PHỔ THÔNG
   (Bám sát hoàn toàn Bảng 2 trong Infographic trang 6 của PDF)
   ============================================================================ */
export const Slide08DigitalCompetencyMatrix: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<number>(2);

  const levelsTable = [
    {
      grade: 'Lớp 1, 2, 3',
      stage: 'Tiểu học (Đầu cấp)',
      level: 'Bậc 1 – Cơ bản 1',
      task: 'Nhiệm vụ đơn giản',
      autonomy: 'Với sự hướng dẫn',
      practicalGuide:
        'Học sinh làm quen với thiết bị số, nhận biết biểu tượng, thực hiện thao tác cơ bản dưới sự chỉ dẫn trực tiếp từng bước của giáo viên.'
    },
    {
      grade: 'Lớp 4, 5',
      stage: 'Tiểu học (Cuối cấp)',
      level: 'Bậc 2 – Cơ bản 2',
      task: 'Nhiệm vụ quen thuộc',
      autonomy: 'Tự chủ một phần và có hướng dẫn khi cần thiết',
      practicalGuide:
        'Học sinh tự thực hiện các thao tác tìm kiếm thông tin, tạo sản phẩm số đơn giản theo mẫu quen thuộc và chỉ hỏi giáo viên khi gặp tình huống phát sinh.'
    },
    {
      grade: 'Lớp 6, 7',
      stage: 'THCS (Giai đoạn 1)',
      level: 'Bậc 3 – Trung cấp 1',
      task: 'Nhiệm vụ được xác định rõ ràng và quen thuộc và các vấn đề đơn giản',
      autonomy: 'Tự chủ',
      practicalGuide:
        'Học sinh tự lực hoàn thành nhiệm vụ học tập số được giao rõ ràng, biết tự xử lý các vấn đề kỹ thuật và thông tin đơn giản trong học tập bộ môn.'
    },
    {
      grade: 'Lớp 8, 9',
      stage: 'THCS (Giai đoạn 2)',
      level: 'Bậc 4 – Trung cấp 2',
      task: 'Nhiệm vụ được xác định rõ ràng và không quen thuộc',
      autonomy: 'Độc lập và theo nhu cầu cá nhân',
      practicalGuide:
        'Học sinh chủ động lựa chọn công cụ số phù hợp với nhu cầu cá nhân để giải quyết các bài toán/dự án học tập mới được xác định rõ mục tiêu.'
    },
    {
      grade: 'Lớp 10, 11, 12',
      stage: 'Trung học phổ thông',
      level: 'Bậc 5 – Nâng cao 1',
      task: 'Các nhiệm vụ phức tạp, vấn đề mới',
      autonomy: 'Tự chủ hoàn toàn, hướng dẫn người khác',
      practicalGuide:
        'Học sinh làm chủ hoàn toàn công nghệ số, AI và dữ liệu để giải quyết các dự án liên môn phức tạp, đồng thời có khả năng hỗ trợ, hướng dẫn bạn học khác.'
    }
  ];

  const activeData = levelsTable[selectedRow];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Official Table from Page 6 Infographic */}
      <div className="bg-white rounded-xl border-2 border-slate-400 overflow-hidden shadow-xs">
        <div className="px-6 py-4 bg-[#0B132B] text-white flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-xs font-mono-tabular font-extrabold text-amber-300">
              BẢNG 2 · THÔNG TƯ 02/2025/TT-BGDĐT NGÀY 24/01/2025
            </div>
            <h3 className="text-base sm:text-lg font-extrabold">
              Bảng Mô Tả Các Mức Độ Thành Thạo Năng Lực Số Cho Học Sinh Phổ Thông
            </h3>
          </div>
          <span className="text-xs font-bold text-sky-200">
            Nhấn vào từng dòng khối lớp để xem hướng dẫn vận dụng
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1E3A8A] text-white border-b-2 border-slate-400 text-xs sm:text-sm uppercase font-extrabold">
                <th className="py-3.5 px-5 w-40">Khối lớp</th>
                <th className="py-3.5 px-5 w-52">Mức độ thành thạo</th>
                <th className="py-3.5 px-5">Tình huống / Nhiệm vụ dạy học</th>
                <th className="py-3.5 px-5 w-64">Mức độ tự chủ</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-300 text-sm">
              {levelsTable.map((row, idx) => {
                const isSelected = selectedRow === idx;
                return (
                  <tr
                    key={row.grade}
                    onClick={() => setSelectedRow(idx)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-amber-100 text-[#0B132B] font-extrabold'
                        : 'bg-white text-slate-950 font-semibold hover:bg-sky-50'
                    }`}
                  >
                    <td className="py-3.5 px-5 font-mono-tabular font-extrabold text-[#0B132B]">
                      {row.grade}
                    </td>
                    <td className="py-3.5 px-5 font-mono-tabular font-extrabold text-[#1E3A8A]">
                      {row.level}
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-950">{row.task}</td>
                    <td className="py-3.5 px-5 font-extrabold text-[#0F766E]">
                      {row.autonomy}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Pedagogical Application Card for Selected Grade Group */}
      <div className="bg-[#0B132B] text-white rounded-xl border-2 border-[#1E3A8A] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-amber-300 font-extrabold">
            <span>GỢI Ý THIẾT KẾ NHIỆM VỤ HỌC TẬP SỐ</span>
            <span>·</span>
            <span>{activeData.grade.toUpperCase()} ({activeData.stage})</span>
            <span>·</span>
            <span>{activeData.level.toUpperCase()}</span>
          </div>
          <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
            {activeData.practicalGuide}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-4 bg-white text-[#0B132B] px-4 py-3 rounded-lg border-2 border-amber-400 text-xs">
          <div>
            <div className="font-bold text-slate-700">Yêu cầu nhiệm vụ:</div>
            <div className="font-extrabold text-[#0B132B]">{activeData.task}</div>
          </div>
          <div className="h-8 w-0.5 bg-slate-300" />
          <div>
            <div className="font-bold text-slate-700">Mức độ tự chủ:</div>
            <div className="font-extrabold text-[#0F766E]">{activeData.autonomy}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
