import React, { useState } from 'react';
import {
  BookOpen,
  ClipboardList,
  RefreshCw,
  Search,
  Target,
  HeartHandshake,
  Play,
  ArrowRight,
  Microscope
} from 'lucide-react';

interface SlideProps {
  onNavigate?: (slideIndex: number) => void;
}

/* ============================================================================
   SLIDE 01: COVER SLIDE — TẬP HUẤN CHUYÊN MÔN VỀ ĐỔI MỚI DẠY HỌC, NĂNG LỰC SỐ & QUẢN LÝ HỒ SƠ CHUYÊN MÔN
   ============================================================================ */
export const Slide01Cover: React.FC<SlideProps> = ({ onNavigate }) => {
  const pillars = [
    {
      index: '01',
      code: 'CV 5512/BGDĐT-GDTrH',
      title: 'Kế hoạch Dạy học của Tổ Chuyên môn',
      desc: 'Quy trình 5 bước xây dựng kế hoạch & Cấu trúc khung Kế hoạch dạy học môn học (Đặc điểm tình hình, PPCT, Chuyên đề, Kiểm tra định kỳ).',
      targetSlide: 1
    },
    {
      index: '02',
      code: 'Phụ lục IV · CV 5512',
      title: 'Đổi mới Kế hoạch Bài dạy (Giáo án)',
      desc: 'Mục tiêu 3 thành phần (Kiến thức, Năng lực, Phẩm chất), chuỗi 4 hoạt động học tập bắt buộc & 4 bước tổ chức thực hiện.',
      targetSlide: 3
    },
    {
      index: '03',
      code: 'CV 5208 & TT 02/2025',
      title: 'Tích hợp Giáo dục & Khung Năng lực số',
      desc: 'Tích hợp chủ đề năm học 2026–2027 (4 cấp độ) & Khung năng lực số 6 miền, 24 năng lực thành phần, 4 mức độ (8 bậc).',
      targetSlide: 5
    },
    {
      index: '04',
      code: 'CV 5555/BGDĐT-GDTrH',
      title: 'Sinh hoạt Chuyên môn theo NCBH & Dự giờ',
      desc: 'Chuyển đổi sang Đánh giá vì học tập & là học tập; khắc phục 3 "bệnh" dự giờ; Mẫu sổ ghi chép sơ đồ lớp và phân tích vi mô.',
      targetSlide: 8
    },
    {
      index: '05',
      code: 'TT 15/2026/TT-BGDĐT',
      title: 'Quản lý Hồ sơ & Chuyển đổi số Giáo dục',
      desc: 'Hệ thống 14 hồ sơ cấp trường, 03 hồ sơ giáo viên, sổ ghi chép Tổ chuyên môn & lộ trình Hồ sơ điện tử liên thông dữ liệu.',
      targetSlide: 10
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full gap-6">
      {/* Hero Banner Zone - Deep High-Contrast Projector Navy */}
      <div className="bg-[#0B132B] text-white rounded-xl p-8 lg:p-10 border-2 border-[#1E3A8A] shadow-md relative overflow-hidden">
        <div className="relative z-10 max-w-5xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-amber-300 font-mono-tabular font-bold tracking-wide">
            <span>BỘ GIÁO DỤC VÀ ĐÀO TẠO</span>
            <span aria-hidden="true">·</span>
            <span>CHƯƠNG TRÌNH GDPT 2018</span>
            <span aria-hidden="true">·</span>
            <span>TÀI LIỆU TẬP HUẤN CHUYÊN MÔN 2026–2027</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Tập Huấn Chuyên Môn Về Đổi Mới Dạy Học, Năng Lực Số & Quản Lý Hồ Sơ Chuyên Môn
          </h1>
          <p className="text-white font-medium text-base lg:text-lg max-w-4xl leading-relaxed">
            Tổng hợp toàn diện quy trình nghiệp vụ dành cho Cán bộ quản lý, Tổ trưởng chuyên môn và Giáo viên phổ thông: từ thiết kế Kế hoạch dạy học, đổi mới Giáo án, lồng ghép Khung năng lực số đến Dự giờ nghiên cứu bài học và Hồ sơ điện tử.
          </p>
        </div>
      </div>

      {/* 5 Core Pillars Interactive Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b-2 border-slate-400 pb-2">
          <span className="text-xs sm:text-sm font-extrabold text-[#0B132B] uppercase tracking-wider">
            Cấu trúc 5 chuyên đề tập huấn trọng tâm (Nhấn vào từng mục để chuyển nhanh đến slide chi tiết)
          </span>
          <span className="text-xs sm:text-sm font-bold text-[#1E3A8A] font-mono-tabular">
            05 Trụ cột · 12 Slide chuyên sâu
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pillars.map((item) => (
            <button
              key={item.index}
              onClick={() => onNavigate && onNavigate(item.targetSlide)}
              className="group text-left bg-white hover:bg-sky-50 p-5 rounded-xl border-2 border-slate-400 hover:border-[#1E3A8A] transition-all flex flex-col justify-between gap-4 shadow-xs cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono-tabular">
                  <span className="font-extrabold text-white bg-[#1E3A8A] px-2.5 py-1 rounded">
                    CHUYÊN ĐỀ {item.index}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0B132B] group-hover:text-[#1E3A8A] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-xs font-bold text-[#0F766E] font-mono-tabular pt-1">
                  {item.code}
                </div>
                <h3 className="text-base font-extrabold text-[#0B132B] group-hover:text-[#1E3A8A] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-relaxed">
                {item.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 02: QUY TRÌNH 5 BƯỚC XÂY DỰNG KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN
   ============================================================================ */
export const Slide02FiveStepProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      name: 'Phân tích điều kiện',
      summary: 'Đánh giá đặc điểm học sinh, đội ngũ giáo viên, thiết bị dạy học, cơ sở vật chất và phòng học bộ môn.',
      icon: Search,
      details: [
        'Khảo sát quy mô lớp học, số lượng học sinh và nhu cầu học tập chuyên đề lựa chọn.',
        'Rà soát cơ cấu đội ngũ giáo viên: số lượng, trình độ đào tạo và mức đạt chuẩn nghề nghiệp.',
        'Kiểm kê danh mục thiết bị dạy học hiện có, các bài thí nghiệm/thực hành có thể sử dụng.',
        'Đánh giá điều kiện phòng học bộ môn, sân bãi và không gian tổ chức hoạt động giáo dục.'
      ],
      output: 'Báo cáo số liệu mục I (Đặc điểm tình hình) sát thực tế nhà trường.'
    },
    {
      step: '02',
      name: 'Xây dựng kế hoạch',
      summary: 'Xây dựng phân phối chương trình, mục tiêu môn học, các bài học/chủ đề và hoạt động giáo dục.',
      icon: ClipboardList,
      details: [
        'Xác định rõ tên bài học/chủ đề phù hợp với chương trình môn học và sách giáo khoa.',
        'Phân bổ thời lượng (số tiết) khoa học cho từng bài học, chuyên đề lựa chọn (cấp THPT).',
        'Xác định cụ thể Yêu cầu cần đạt (YCCĐ) theo chương trình cho từng bài học/chủ đề.',
        'Thiết kế kế hoạch kiểm tra, đánh giá định kỳ (thời gian, thời điểm, hình thức) và các nội dung tích hợp.'
      ],
      output: 'Bản dự thảo Khung Kế hoạch dạy học môn học của Tổ chuyên môn.'
    },
    {
      step: '03',
      name: 'Triển khai dạy học',
      summary: 'Tổ chức thực hiện theo đúng kế hoạch đã phê duyệt.',
      icon: Play,
      details: [
        'Trình Hiệu trưởng phê duyệt Kế hoạch dạy học của Tổ chuyên môn trước khi thực hiện.',
        'Giáo viên căn cứ kế hoạch Tổ để xây dựng Kế hoạch giáo dục cá nhân và Kế hoạch bài dạy (Giáo án).',
        'Tổ chức dạy học các bài học, chuyên đề, hoạt động trải nghiệm và giáo dục địa phương đúng tiến độ.',
        'Khai thác tối đa thiết bị dạy học và phòng học bộ môn đã đăng ký trong kế hoạch.'
      ],
      output: 'Hoạt động dạy học đồng bộ trên lớp và các sản phẩm học tập của học sinh.'
    },
    {
      step: '04',
      name: 'Theo dõi thực hiện',
      summary: 'Thu thập thông tin, đánh giá kết quả học tập của học sinh.',
      icon: Microscope,
      details: [
        'Theo dõi tiến độ thực hiện phân phối chương trình và việc sử dụng thiết bị dạy học của giáo viên.',
        'Thu thập minh chứng quá trình học tập của học sinh thông qua dự giờ nghiên cứu bài học.',
        'Tổ chức kiểm tra, đánh giá thường xuyên và định kỳ (Giữa kỳ I, Cuối kỳ I, Giữa kỳ II, Cuối kỳ II).',
        'Phân tích kết quả học tập và mức độ đáp ứng yêu cầu cần đạt của học sinh từng khối lớp.'
      ],
      output: 'Dữ liệu đánh giá thường xuyên, định kỳ và biên bản sinh hoạt chuyên môn.'
    },
    {
      step: '05',
      name: 'Điều chỉnh kế hoạch',
      summary: 'Rà soát, điều chỉnh linh hoạt, phù hợp với thực tiễn.',
      icon: RefreshCw,
      details: [
        'Tổ chuyên môn thảo luận, rà soát những vướng mắc phát sinh trong quá trình dạy học thực tế.',
        'Điều chỉnh thời lượng, trình tự hoặc hình thức tổ chức các chủ đề để phù hợp năng lực học sinh.',
        'Cập nhật bổ sung học liệu số, thiết bị dạy học mới hoặc phương án dạy học tích hợp.',
        'Đảm bảo nguyên tắc cốt lõi: Kế hoạch luôn linh hoạt, khả thi và nâng cao chất lượng dạy học.'
      ],
      output: 'Kế hoạch dạy học được cập nhật tối ưu cho giai đoạn/học kỳ tiếp theo.'
    }
  ];

  const current = steps[activeStep];
  const IconComponent = current.icon;

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Top 5-Step Interactive Flow Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B132B]">
          <span>QUY TRÌNH 5 BƯỚC KHÉP KÍN (CÔNG VĂN 5512/BGDĐT-GDTrH)</span>
          <span className="text-[#1E3A8A]">Nguyên tắc: Khoa học · Khả thi · Hiệu quả</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {steps.map((item, idx) => {
            const StepIcon = item.icon;
            const isSelected = idx === activeStep;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                    : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono-tabular text-xs font-extrabold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-amber-400 text-[#0B132B]' : 'bg-[#1E3A8A] text-white'
                    }`}
                  >
                    BƯỚC {item.step}
                  </span>
                  <StepIcon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-amber-300' : 'text-[#1E3A8A]'
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">{item.name}</h3>
                  <p
                    className={`text-xs font-semibold mt-1.5 leading-relaxed ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Breakdown of Active Step */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1">
        <div className="lg:col-span-8 bg-white rounded-xl border-2 border-slate-400 p-6 flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-white">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#1E3A8A] font-mono-tabular">
                    CHI TIẾT NGHIỆP VỤ · BƯỚC {current.step}/05
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B132B]">
                    {current.step}. {current.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3.5 py-2 text-xs font-bold text-[#0B132B] bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors cursor-pointer"
                >
                  Bước trước
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-3.5 py-2 text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#0B132B] rounded-lg transition-colors cursor-pointer"
                >
                  Bước tiếp theo
                </button>
              </div>
            </div>

            <p className="text-sm font-bold text-white bg-[#1E3A8A] p-3.5 rounded-lg">
              Trọng tâm: {current.summary}
            </p>

            <div className="space-y-2.5">
              <div className="text-xs font-extrabold text-[#0B132B] uppercase tracking-wider">
                Nội dung thực hiện cụ thể tại Tổ chuyên môn:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {current.details.map((detail, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg border-2 border-slate-300 bg-slate-50 flex items-start gap-2.5"
                  >
                    <span className="font-mono-tabular text-xs font-extrabold text-white bg-[#0B132B] px-2 py-0.5 rounded mt-0.5">
                      {current.step}.{i + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t-2 border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold text-[#0B132B]">
            <span>
              <strong className="text-[#1E3A8A]">Sản phẩm đầu ra:</strong> {current.output}
            </span>
            <span className="font-mono-tabular text-[#0F766E]">
              Theo Phụ lục I · CV 5512/BGDĐT-GDTrH
            </span>
          </div>
        </div>

        {/* Right Side: 3 Guiding Notes from Page 2 Infographic */}
        <div className="lg:col-span-4 bg-slate-100 rounded-xl border-2 border-slate-400 p-5 flex flex-col justify-between gap-4">
          <div className="space-y-3">
            <div className="text-xs sm:text-sm font-extrabold text-[#0B132B] uppercase tracking-wider border-b-2 border-slate-400 pb-2">
              3 Lưu ý thực hiện cốt lõi (CV 5512)
            </div>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-2 border-slate-300 space-y-1">
                <div className="text-xs font-mono-tabular font-extrabold text-[#1E3A8A]">
                  NGUYÊN TẮC 01 · THỰC TIỄN
                </div>
                <h4 className="text-sm font-extrabold text-[#0B132B]">
                  Xây dựng từ thực tế nhà trường
                </h4>
                <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                  Số liệu, nội dung trong kế hoạch được xây dựng trực tiếp từ điều kiện học sinh, đội ngũ và cơ sở vật chất thực tế của từng nhà trường.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-slate-300 space-y-1">
                <div className="text-xs font-mono-tabular font-extrabold text-[#0F766E]">
                  NGUYÊN TẮC 02 · KHẢ THI & LINH HOẠT
                </div>
                <h4 className="text-sm font-extrabold text-[#0B132B]">
                  Linh hoạt và có thể điều chỉnh
                </h4>
                <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                  Kế hoạch không cứng nhắc mà cần đảm bảo tính khả thi, linh hoạt và có thể rà soát, điều chỉnh phù hợp với thực tiễn triển khai.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-slate-300 space-y-1">
                <div className="text-xs font-mono-tabular font-extrabold text-[#9A3412]">
                  NGUYÊN TẮC 03 · CHẤT LƯỢNG
                </div>
                <h4 className="text-sm font-extrabold text-[#0B132B]">
                  Đánh giá thường xuyên vì sự tiến bộ
                </h4>
                <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                  Kết hợp chặt chẽ đánh giá thường xuyên và định kỳ trong suốt quá trình thực hiện để nâng cao chất lượng dạy học môn học.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs font-extrabold text-[#0B132B] pt-2 border-t-2 border-slate-300">
            Mục tiêu: Kế hoạch dạy học Khoa học – Khả thi – Hiệu quả.
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 03: CẤU TRÚC KHUNG KẾ HOẠCH DẠY HỌC MÔN HỌC CỦA TỔ CHUYÊN MÔN
   (Bám sát Infographic trang 2 & nội dung trang 1)
   ============================================================================ */
export const Slide03TCMFramework: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'I' | 'II' | 'III'>('II');

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Section Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3.5 rounded-xl border-2 border-slate-400">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedSection('I')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap cursor-pointer ${
              selectedSection === 'I'
                ? 'bg-[#0B132B] text-white'
                : 'bg-slate-200 text-[#0B132B] hover:bg-slate-300'
            }`}
          >
            I. Đặc điểm tình hình (4 mục)
          </button>
          <button
            onClick={() => setSelectedSection('II')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap cursor-pointer ${
              selectedSection === 'II'
                ? 'bg-[#0B132B] text-white'
                : 'bg-slate-200 text-[#0B132B] hover:bg-slate-300'
            }`}
          >
            II. Kế hoạch dạy học (3 bảng cốt lõi)
          </button>
          <button
            onClick={() => setSelectedSection('III')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap cursor-pointer ${
              selectedSection === 'III'
                ? 'bg-[#0B132B] text-white'
                : 'bg-slate-200 text-[#0B132B] hover:bg-slate-300'
            }`}
          >
            III. Các nội dung khác (nếu có)
          </button>
        </div>

        <div className="text-xs sm:text-sm font-bold text-[#1E3A8A] font-mono-tabular">
          Khung Kế hoạch dạy học môn học · Kèm theo CV 5512/BGDĐT-GDTrH
        </div>
      </div>

      {/* Main Blueprint Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left Column: I. Đặc điểm tình hình & III. Các nội dung khác */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div
            onClick={() => setSelectedSection('I')}
            className={`cursor-pointer rounded-xl border-2 p-5 transition-all flex-1 flex flex-col justify-between ${
              selectedSection === 'I'
                ? 'bg-white border-[#1E3A8A] ring-2 ring-[#1E3A8A]'
                : 'bg-white border-slate-400 hover:border-[#1E3A8A]'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#1E3A8A] text-white px-3.5 py-2 rounded-lg">
                <h3 className="text-sm font-extrabold">
                  I. ĐẶC ĐIỂM TÌNH HÌNH
                </h3>
                <span className="text-xs font-mono-tabular font-bold text-amber-300">04 Nội dung</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-1">
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B132B]">1. Quy mô lớp học</div>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    Số lớp · Số học sinh · Số học sinh học chuyên đề lựa chọn (nếu có).
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-1">
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B132B]">2. Đội ngũ giáo viên</div>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    Số GV · Trình độ (CĐ / ĐH / Trên ĐH) · Chuẩn nghề nghiệp (Tốt, Khá, Đạt, Chưa đạt).
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-1">
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B132B]">3. Thiết bị dạy học</div>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    Thiết bị hiện có · Số lượng · Bài thí nghiệm/thực hành có thể sử dụng.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-1">
                  <div className="text-xs sm:text-sm font-extrabold text-[#0B132B]">4. Cơ sở vật chất</div>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                    Phòng học bộ môn · Hoạt động trải nghiệm, hướng nghiệp, GD địa phương, đặc thù.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setSelectedSection('III')}
            className={`cursor-pointer rounded-xl border-2 p-5 transition-all ${
              selectedSection === 'III'
                ? 'bg-white border-[#1E3A8A] ring-2 ring-[#1E3A8A]'
                : 'bg-white border-slate-400 hover:border-[#1E3A8A]'
            }`}
          >
            <div className="flex items-center justify-between bg-[#9A3412] text-white px-3.5 py-2 rounded-lg mb-3">
              <h3 className="text-sm font-extrabold">
                III. CÁC NỘI DUNG KHÁC (NẾU CÓ)
              </h3>
              <span className="text-xs font-mono-tabular font-bold text-amber-200">Tích hợp & Đặc thù</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-950">
              <li className="p-2.5 rounded bg-slate-100 border-2 border-slate-300">
                • Kế hoạch riêng của tổ/chuyên môn
              </li>
              <li className="p-2.5 rounded bg-slate-100 border-2 border-slate-300">
                • Hoạt động trải nghiệm, hướng nghiệp
              </li>
              <li className="p-2.5 rounded bg-slate-100 border-2 border-slate-300">
                • Giáo dục địa phương, nội dung tích hợp
              </li>
              <li className="p-2.5 rounded bg-slate-100 border-2 border-slate-300">
                • Nội dung giáo dục đặc thù của nhà trường
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: II. Kế hoạch dạy học (3 Structured Tables from Page 2 Infographic) */}
        <div
          onClick={() => setSelectedSection('II')}
          className={`lg:col-span-7 cursor-pointer rounded-xl border-2 p-5 transition-all flex flex-col justify-between gap-4 ${
            selectedSection === 'II'
              ? 'bg-white border-[#1E3A8A] ring-2 ring-[#1E3A8A]'
              : 'bg-white border-slate-400 hover:border-[#1E3A8A]'
          }`}
        >
          <div className="flex items-center justify-between bg-[#0B132B] text-white px-4 py-2.5 rounded-lg">
            <h3 className="text-sm font-extrabold">
              II. KẾ HOẠCH DẠY HỌC (TRỌNG TÂM CHUYÊN MÔN)
            </h3>
            <span className="text-xs font-mono-tabular text-amber-300 font-extrabold">
              03 Cấu phần Bảng biểu chuẩn
            </span>
          </div>

          {/* 1. Phân phối chương trình */}
          <div className="p-3.5 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
                1. Phân phối chương trình (PPCT)
              </span>
              <span className="text-xs font-bold text-[#1E3A8A]">
                Tên bài phù hợp CT & SGK · Xác định rõ số tiết · Xác định YCCĐ cụ thể
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs bg-white rounded border-2 border-slate-400">
                <thead>
                  <tr className="bg-[#1E3A8A] text-white border-b-2 border-slate-400">
                    <th className="py-2 px-2.5 font-mono-tabular font-bold w-12">STT</th>
                    <th className="py-2 px-2.5 font-bold">Bài học (Chủ đề)</th>
                    <th className="py-2 px-2.5 font-mono-tabular font-bold w-20">Số tiết</th>
                    <th className="py-2 px-2.5 font-bold">Yêu cầu cần đạt (Theo chương trình)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 text-slate-950 font-semibold">
                  <tr>
                    <td className="py-2 px-2.5 font-mono-tabular font-bold">1</td>
                    <td className="py-2 px-2.5">Chủ đề / Bài học 1...</td>
                    <td className="py-2 px-2.5 font-mono-tabular font-bold text-[#1E3A8A]">03 tiết</td>
                    <td className="py-2 px-2.5">Nêu rõ năng lực, kiến thức HS cần đạt...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Chuyên đề lựa chọn (Đối với cấp THPT) */}
          <div className="p-3.5 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
                2. Chuyên đề lựa chọn (Đối với cấp THPT)
              </span>
              <span className="text-xs font-bold text-[#0F766E]">
                Chọn chuyên đề phù hợp · Xác định số tiết và yêu cầu cần đạt
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs bg-white rounded border-2 border-slate-400">
                <thead>
                  <tr className="bg-[#0F766E] text-white border-b-2 border-slate-400">
                    <th className="py-2 px-2.5 font-mono-tabular font-bold w-12">STT</th>
                    <th className="py-2 px-2.5 font-bold">Chuyên đề</th>
                    <th className="py-2 px-2.5 font-mono-tabular font-bold w-20">Số tiết</th>
                    <th className="py-2 px-2.5 font-bold">Yêu cầu cần đạt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 text-slate-950 font-semibold">
                  <tr>
                    <td className="py-2 px-2.5 font-mono-tabular font-bold">1</td>
                    <td className="py-2 px-2.5">Chuyên đề học tập lựa chọn 1...</td>
                    <td className="py-2 px-2.5 font-mono-tabular font-bold text-[#0F766E]">10 tiết</td>
                    <td className="py-2 px-2.5">Yêu cầu cần đạt chuyên sâu của chuyên đề...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Kiểm tra, đánh giá định kỳ */}
          <div className="p-3.5 rounded-lg bg-slate-100 border-2 border-slate-300 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-[#0B132B]">
                3. Kiểm tra, đánh giá định kỳ (Giữa HK I · Cuối HK I · Giữa HK II · Cuối HK II)
              </span>
              <span className="text-xs font-bold text-[#9A3412]">
                Thời gian làm bài · Thời điểm (Tuần, tháng) · YCCĐ · Hình thức
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="bg-white p-2.5 rounded border-2 border-slate-400 text-center">
                <div className="text-xs font-extrabold text-[#0B132B]">Viết (trên giấy)</div>
                <div className="text-[11px] font-bold text-[#1E3A8A]">Tự luận / Trắc nghiệm</div>
              </div>
              <div className="bg-white p-2.5 rounded border-2 border-slate-400 text-center">
                <div className="text-xs font-extrabold text-[#0B132B]">Viết (trên máy tính)</div>
                <div className="text-[11px] font-bold text-[#1E3A8A]">Khảo thí trực tuyến</div>
              </div>
              <div className="bg-white p-2.5 rounded border-2 border-slate-400 text-center">
                <div className="text-xs font-extrabold text-[#0B132B]">Thực hành</div>
                <div className="text-[11px] font-bold text-[#0F766E]">Thí nghiệm / Thao tác</div>
              </div>
              <div className="bg-white p-2.5 rounded border-2 border-slate-400 text-center">
                <div className="text-xs font-extrabold text-[#0B132B]">Dự án học tập</div>
                <div className="text-[11px] font-bold text-[#9A3412]">Sản phẩm nhóm / Cá nhân</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 04: ĐỔI MỚI KẾ HOẠCH BÀI DẠY (KHBD / GIÁO ÁN) - MỤC TIÊU & HỌC LIỆU
   (Bám sát trang 2 và Phụ lục IV trang 4)
   ============================================================================ */
export const Slide04LessonPlanObjectives: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(1);

  const pillars = [
    {
      id: 0,
      num: '1. Kiến thức',
      icon: BookOpen,
      shortDesc: 'Xác định kiến thức cốt lõi học sinh cần biết và hiểu.',
      officialRule:
        'Nêu cụ thể yêu cầu cần đạt về kiến thức học sinh cần học trong bài để thực hiện được yêu cầu cần đạt của nội dung/chủ đề tương ứng trong chương trình môn học/hoạt động giáo dục.',
      example:
        'Ví dụ: Trình bày được khái niệm, nguyên lý vận hành và mối liên hệ giữa các đại lượng trong chủ đề bài học theo đúng chuẩn chương trình GDPT 2018.'
    },
    {
      id: 1,
      num: '2. Năng lực',
      icon: Target,
      shortDesc: 'Nêu rõ học sinh LÀM ĐƯỢC GÌ (năng lực chung và năng lực đặc thù bộ môn) thông qua vận dụng kiến thức.',
      officialRule:
        'Nêu cụ thể yêu cầu học sinh làm được gì (biểu hiện cụ thể của năng lực chung và năng lực đặc thù môn học cần phát triển) trong hoạt động học để chiếm lĩnh và vận dụng kiến thức theo yêu cầu cần đạt của chương trình môn học/hoạt động giáo dục.',
      example:
        'Ví dụ: Năng lực tự chủ & tự học, giao tiếp & hợp tác; Năng lực đặc thù: Thiết kế được phương án thí nghiệm, phân tích số liệu và giải quyết tình huống thực tiễn.'
    },
    {
      id: 2,
      num: '3. Phẩm chất',
      icon: HeartHandshake,
      shortDesc: 'Các biểu hiện cụ thể về thái độ, hành vi (yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm) gắn liền với nội dung bài học.',
      officialRule:
        'Nêu cụ thể yêu cầu về hành vi, thái độ (biểu hiện cụ thể của phẩm chất cần phát triển gắn với nội dung bài dạy) của học sinh trong quá trình thực hiện các nhiệm vụ học tập và vận dụng kiến thức vào cuộc sống.',
      example:
        'Ví dụ: Trung thực trong ghi chép và báo cáo số liệu thực hành; Trách nhiệm khi hoàn thành nhiệm vụ nhóm đúng hạn và bảo quản thiết bị phòng bộ môn.'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch">
      {/* Left 7 Columns: 3 Objectives Pillars + Equipment Rule */}
      <div className="lg:col-span-7 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="text-xs sm:text-sm font-extrabold text-[#0B132B] uppercase tracking-wider">
            I. Yêu cầu về Mục tiêu bài học (3 thành phần bắt buộc)
          </div>

          <div className="grid grid-cols-1 gap-3">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedPillar === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedPillar(idx)}
                  className={`text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                      : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                        isSelected ? 'bg-amber-400 text-[#0B132B]' : 'bg-[#1E3A8A] text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-extrabold">{item.num}</h3>
                        <span
                          className={`text-xs font-mono-tabular font-bold ${
                            isSelected ? 'text-amber-300' : 'text-[#1E3A8A]'
                          }`}
                        >
                          · Phụ lục IV (CV 5512)
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-bold leading-relaxed ${
                          isSelected ? 'text-white' : 'text-slate-950'
                        }`}
                      >
                        {item.shortDesc}
                      </p>
                      <p
                        className={`text-xs font-semibold leading-relaxed pt-1.5 border-t ${
                          isSelected
                            ? 'text-sky-200 border-slate-700'
                            : 'text-slate-800 border-slate-300'
                        }`}
                      >
                        {item.officialRule}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* II. Thiết bị dạy học và học liệu */}
        <div className="bg-slate-100 rounded-xl border-2 border-slate-400 p-4 space-y-1.5">
          <div className="flex items-center justify-between">
            <h4 className="text-xs sm:text-sm font-extrabold text-[#1E3A8A] uppercase tracking-wider">
              II. Thiết bị dạy học và học liệu (Nguyên tắc tương ứng mục tiêu)
            </h4>
            <span className="text-xs font-mono-tabular font-bold text-[#0B132B]">Mục II · Phụ lục IV</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
            Nêu cụ thể các thiết bị dạy học và học liệu được sử dụng trong bài dạy để tổ chức cho học sinh hoạt động nhằm đạt được mục tiêu, yêu cầu của bài dạy (<strong className="text-[#9A3412] font-extrabold">muốn hình thành phẩm chất, năng lực nào thì hoạt động học phải tương ứng và phù hợp với mục tiêu đó</strong>).
          </p>
        </div>
      </div>

      {/* Right 5 Columns: Authentic Visual Representation of Phụ lục IV Document (Page 4) */}
      <div className="lg:col-span-5 bg-white rounded-xl border-2 border-[#1E3A8A] p-6 flex flex-col justify-between font-editorial shadow-sm">
        <div className="space-y-4">
          <div className="flex items-start justify-between border-b-2 border-slate-300 pb-3 font-sans">
            <div className="text-xs font-bold text-slate-900 leading-tight">
              <div>Trường: ...........................</div>
              <div>Tổ: ...................................</div>
            </div>
            <div className="text-right text-[11px] font-bold text-[#1E3A8A] font-mono-tabular leading-tight">
              <div>Ký bởi: Bộ Giáo dục và Đào tạo</div>
              <div>Ngày ký: 18-12-2020</div>
            </div>
          </div>

          <div className="text-center space-y-1">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#1E3A8A] font-sans">
              Phụ lục IV
            </div>
            <h3 className="text-lg font-extrabold text-[#0B132B] uppercase font-sans">
              KHUNG KẾ HOẠCH BÀI DẠY
            </h3>
            <p className="text-xs font-bold italic text-slate-800">
              (Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)
            </p>
          </div>

          <div className="text-center space-y-1 py-2.5 bg-slate-100 rounded-lg border-2 border-slate-300 font-sans text-xs">
            <div className="font-extrabold text-[#0B132B]">TÊN BÀI DẠY: ...........................................</div>
            <div className="font-bold text-slate-900">Môn học/Hoạt động giáo dục: ..........; Lớp: .........</div>
            <div className="font-bold text-slate-900">Thời gian thực hiện: (số tiết)</div>
          </div>

          <div className="space-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-950 leading-relaxed font-sans">
            <div className="font-extrabold text-[#0B132B]">I. Mục tiêu</div>
            <p>
              <strong className="text-[#1E3A8A]">1. Kiến thức:</strong> Nêu cụ thể yêu cầu cần đạt về kiến thức học sinh cần học trong bài để thực hiện được yêu cầu cần đạt của nội dung/chủ đề tương ứng.
            </p>
            <p>
              <strong className="text-[#1E3A8A]">2. Năng lực:</strong> Nêu cụ thể yêu cầu học sinh <span className="underline font-extrabold text-[#9A3412]">làm được gì</span> trong hoạt động học để <span className="underline font-extrabold text-[#9A3412]">chiếm lĩnh</span> và <span className="underline font-extrabold text-[#9A3412]">vận dụng</span> kiến thức.
            </p>
            <p>
              <strong className="text-[#1E3A8A]">3. Phẩm chất:</strong> Nêu cụ thể yêu cầu về hành vi, thái độ của học sinh gắn với nội dung bài dạy và vận dụng vào cuộc sống.
            </p>
            <div className="font-extrabold text-[#0B132B] pt-1">II. Thiết bị dạy học và học liệu</div>
            <div className="font-extrabold text-[#0B132B]">III. Tiến trình dạy học (4 Hoạt động học)</div>
          </div>
        </div>

        <div className="pt-3 border-t-2 border-slate-300 font-sans text-xs font-semibold text-slate-950">
          <strong className="text-[#1E3A8A] font-extrabold">Minh họa áp dụng ({pillars[selectedPillar].num}):</strong>{' '}
          {pillars[selectedPillar].example}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 05: CHUỖI 4 HOẠT ĐỘNG HỌC TẬP & 4 BƯỚC TỔ CHỨC THỰC HIỆN (CV 5512)
   (Bám sát trang 2 và trang 3 của PDF)
   ============================================================================ */
export const Slide05ActivitiesAndSteps: React.FC = () => {
  const [activeActivity, setActiveActivity] = useState<number>(0);

  const activities = [
    {
      num: 'Hoạt động 1',
      title: 'Mở đầu (Xác định vấn đề)',
      purpose: 'Xác định vấn đề / nhiệm vụ học tập, kích hoạt kiến thức nền.',
      product: 'Câu hỏi/vấn đề cần giải quyết hoặc kết quả thực hiện nhiệm vụ khởi động của HS.',
      stepApplication: [
        'GV nêu tình huống thực tiễn/câu hỏi mở kích thích tò mò, giao nhiệm vụ cá nhân/cặp đôi.',
        'HS huy động kiến thức nền đã có, thử giải quyết vấn đề và phát hiện khoảng trống kiến thức.',
        'Một số HS nêu dự đoán/ý kiến ban đầu; các HS khác bổ sung hoặc đặt câu hỏi.',
        'GV nhận xét, dẫn dắt vào bài học mới và xác lập rõ nhiệm vụ học tập chính của tiết học.'
      ]
    },
    {
      num: 'Hoạt động 2',
      title: 'Hình thành kiến thức mới',
      purpose: 'Tìm hiểu, khám phá, giải quyết vấn đề để chiếm lĩnh kiến thức mới.',
      product: 'Kiến thức mới, khái niệm, định lý, quy tắc được HS tự khám phá và ghi nhận.',
      stepApplication: [
        'GV giao phiếu học tập, học liệu, thiết bị thí nghiệm và tiêu chí đánh giá sản phẩm rõ ràng.',
        'HS đọc tài liệu, làm thí nghiệm, thảo luận nhóm để khám phá kiến thức; GV quan sát, hỗ trợ.',
        'Đại diện nhóm trình bày kết quả khám phá; các nhóm khác phản biện, đặt câu hỏi làm rõ.',
        'GV tổng hợp, chuẩn hóa kiến thức cốt lõi cần ghi nhớ và đánh giá sản phẩm học tập của nhóm.'
      ]
    },
    {
      num: 'Hoạt động 3',
      title: 'Luyện tập',
      purpose: 'Củng cố kiến thức, rèn luyện kỹ năng qua bài tập/tình huống.',
      product: 'Lời giải bài tập, sơ đồ tư duy hệ thống hóa hoặc kết quả thực hành kỹ năng.',
      stepApplication: [
        'GV giao hệ thống bài tập/tình huống phân hóa nhằm củng cố kiến thức vừa học.',
        'HS độc lập giải quyết bài tập hoặc trao đổi nhóm đôi; GV phát hiện lỗi sai phổ biến để hỗ trợ.',
        'HS lên bảng/trình chiếu lời giải, giải thích cách làm và nhận xét chéo bài làm của bạn.',
        'GV chốt phương pháp giải, lưu ý các sai lầm thường gặp và đánh giá mức độ nắm vững kỹ năng.'
      ]
    },
    {
      num: 'Hoạt động 4',
      title: 'Vận dụng',
      purpose: 'Vận dụng kiến thức, kỹ năng vào thực tiễn hoặc hoàn cảnh mới.',
      product: 'Sản phẩm sáng tạo, dự án nhỏ hoặc phương án giải quyết vấn đề thực tiễn cuộc sống.',
      stepApplication: [
        'GV giao nhiệm vụ gắn với thực tiễn đời sống, gia đình, địa phương (có thể thực hiện ngoài giờ học).',
        'HS tìm tòi, thu thập thông tin, thiết kế sản phẩm hoặc đề xuất giải pháp thực tế.',
        'HS chia sẻ sản phẩm/báo cáo dự án trước lớp hoặc trên không gian học tập số.',
        'GV nhận định giá trị thực tiễn của sản phẩm, khích lệ sự sáng tạo và định hướng mở rộng.'
      ]
    }
  ];

  const fourSteps = [
    {
      code: 'Bước 1',
      name: 'Chuyển giao nhiệm vụ',
      roleGV: 'Giáo viên giao nhiệm vụ rõ ràng (đọc, nghe, nhìn, làm), thiết bị/học liệu đi kèm và đích đến.',
      roleHS: 'Tiếp nhận nhiệm vụ, nắm rõ yêu cầu sản phẩm và cách thức thực hiện.'
    },
    {
      code: 'Bước 2',
      name: 'Thực hiện nhiệm vụ',
      roleGV: 'Giáo viên theo dõi, quan sát, phát hiện khó khăn và hỗ trợ kịp thời cho học sinh.',
      roleHS: 'Học sinh tự làm cá nhân hoặc thảo luận nhóm để hoàn thành sản phẩm học tập.'
    },
    {
      code: 'Bước 3',
      name: 'Báo cáo, thảo luận',
      roleGV: 'Giáo viên chọn nhóm/cá nhân báo cáo, điều hành thảo luận.',
      roleHS: 'Học sinh trình bày kết quả, phản biện, đặt câu hỏi và thảo luận sôi nổi.'
    },
    {
      code: 'Bước 4',
      name: 'Kết luận, nhận định',
      roleGV: 'Giáo viên tổng hợp, chốt kiến thức/kỹ năng và đánh giá sản phẩm học tập.',
      roleHS: 'Ghi nhận kiến thức chuẩn và tự điều chỉnh hoàn thiện sản phẩm.'
    }
  ];

  const currentAct = activities[activeActivity];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Top: Chuỗi 4 hoạt động học tập bắt buộc */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-[#0B132B]">
          <span className="uppercase tracking-wider">
            A. Chuỗi 4 hoạt động học tập bắt buộc trong KHBD (Nhấn chọn từng hoạt động để xem cách triển khai 4 bước)
          </span>
          <span className="font-mono-tabular text-[#1E3A8A]">Tiến trình sư phạm 4 giai đoạn</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {activities.map((act, idx) => {
            const isSelected = activeActivity === idx;
            return (
              <button
                key={act.num}
                onClick={() => setActiveActivity(idx)}
                className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                    : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-tabular">
                  <span
                    className={`px-2 py-0.5 rounded font-extrabold ${
                      isSelected ? 'bg-amber-400 text-[#0B132B]' : 'bg-[#1E3A8A] text-white'
                    }`}
                  >
                    {act.num.toUpperCase()}
                  </span>
                  <span className="font-bold">0{idx + 1}/04</span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold leading-snug">{act.title}</h3>
                <p className={`text-xs font-semibold leading-relaxed ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {act.purpose}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom: 4 bước tổ chức thực hiện cho mỗi hoạt động học */}
      <div className="bg-white rounded-xl border-2 border-slate-400 p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-300 pb-3">
          <div>
            <div className="text-xs font-extrabold text-[#1E3A8A] uppercase tracking-wider">
              B. 4 Bước tổ chức thực hiện cho mỗi hoạt động học
            </div>
            <h4 className="text-base font-extrabold text-[#0B132B] mt-0.5">
              Áp dụng vào {currentAct.num}: {currentAct.title}
            </h4>
          </div>
          <div className="text-xs sm:text-sm font-bold text-white bg-[#0F766E] px-3.5 py-2 rounded-lg">
            <strong>Sản phẩm cần đạt:</strong> {currentAct.product}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 flex-1">
          {fourSteps.map((step, i) => (
            <div
              key={step.code}
              className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 flex flex-col justify-between gap-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tabular font-extrabold text-white bg-[#1E3A8A] px-2.5 py-0.5 rounded">
                    {step.code.toUpperCase()}
                  </span>
                  <span className="text-[11px] font-mono-tabular font-bold text-[#0B132B]">
                    CV 5512
                  </span>
                </div>
                <h5 className="text-sm sm:text-base font-extrabold text-[#0B132B]">{step.name}</h5>
                <p className="text-xs font-semibold text-slate-950 leading-relaxed">
                  {step.roleGV}
                </p>
              </div>

              <div className="pt-2.5 border-t-2 border-slate-300 space-y-1">
                <div className="text-xs font-extrabold text-[#0F766E]">
                  Vận dụng tại {currentAct.num}:
                </div>
                <p className="text-xs font-semibold text-slate-900 leading-relaxed">
                  {currentAct.stepApplication[i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
