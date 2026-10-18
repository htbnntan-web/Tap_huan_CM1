import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

/* ============================================================================
   SLIDE 09: ĐỔI MỚI SINH HOẠT CHUYÊN MÔN THEO NCBH & DỰ GIỜ (CÔNG VĂN 5555)
   (Bám sát trang 7 và trang 8 của PDF)
   ============================================================================ */
export const Slide09LessonStudyReform: React.FC = () => {
  const [selectedDisease, setSelectedDisease] = useState<number>(0);

  const diseases = [
    {
      id: 0,
      name: '1. Bệnh "Diễn dịch"',
      symptom: 'Cho học sinh luyện tập, tập dượt trước kịch bản câu hỏi và câu trả lời trước khi dự giờ.',
      solutionTitle: 'Giải pháp xử lý triệt để:',
      solution:
        'Cấm tuyệt đối dạy trước; xem sai sót, lúng túng thực tế của học sinh trong giờ học là chất liệu quý giá để giáo viên cùng phân tích và học hỏi.',
      impact: 'Giúp tiết dạy phản ánh trung thực quá trình nhận thức tự nhiên của học sinh.'
    },
    {
      id: 1,
      name: '2. Bệnh "Quan tòa"',
      symptom: 'Người dự giờ ngồi phán xét, bắt lỗi, nhận xét chủ quan và chấm điểm xếp loại giáo viên dạy.',
      solutionTitle: 'Giải pháp xử lý triệt để:',
      solution:
        'Bỏ chấm điểm giờ dạy; chuyển toàn bộ trọng tâm sang phân tích minh chứng biểu hiện học tập, thái độ và sản phẩm của học sinh.',
      impact: 'Giải phóng tâm lý áp lực cho giáo viên dạy minh họa, khuyến khích đổi mới sáng tạo.'
    },
    {
      id: 2,
      name: '3. Bệnh "Sân khấu 1 người"',
      symptom: 'Buổi thảo luận sau dự giờ chỉ có Tổ trưởng chuyên môn hoặc Ban Giám hiệu độc thoại, phát biểu.',
      solutionTitle: 'Giải pháp xử lý triệt để:',
      solution:
        'Áp dụng kỹ thuật vòng tròn, mời giáo viên trẻ phát biểu trước, thảo luận trực tiếp dựa trên minh chứng chụp ảnh, video hoặc ghi chép từ lớp học.',
      impact: 'Xây dựng văn hóa lắng nghe, bình đẳng và chia sẻ chuyên môn thực chất trong Tổ.'
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Part A: Chuyển đổi quan điểm kiểm tra, đánh giá */}
      <div className="bg-white rounded-xl border-2 border-slate-400 p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-300 pb-2.5">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#1E3A8A] uppercase tracking-wider">
            A. Chuyển đổi quan điểm Kiểm tra, Đánh giá (Công văn 5555/BGDĐT-GDTrH)
          </h3>
          <span className="text-xs sm:text-sm font-bold text-[#0B132B]">
            Mục đích cốt lõi: <strong className="text-[#9A3412] font-extrabold">Để cải thiện chất lượng học tập</strong>, không phải để định giá hay chấm điểm đơn thuần.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-xs font-mono-tabular font-extrabold text-[#9A3412]">TRỌNG TÂM CŨ (GIẢM DẦN)</div>
              <h4 className="text-base font-extrabold text-[#0B132B]">
                Đánh giá kết quả học tập
              </h4>
              <div className="text-xs font-mono-tabular font-bold text-slate-800">
                Assessment OF Learning
              </div>
            </div>
            <p className="text-xs font-semibold text-slate-900 mt-2 leading-relaxed">
              Chủ yếu diễn ra cuối kỳ nhằm mục đích xếp loại, phân hạng học sinh sau khi quá trình học đã kết thúc.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0B132B] text-white border-2 border-[#1E3A8A] flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-xs font-mono-tabular text-amber-300 font-extrabold">TRỌNG TÂM MỚI 01 · ƯU TIÊN</div>
              <h4 className="text-base font-extrabold text-white">
                Đánh giá vì học tập
              </h4>
              <div className="text-xs font-mono-tabular font-bold text-sky-200">
                Assessment FOR Learning
              </div>
            </div>
            <p className="text-xs font-semibold text-white mt-2 leading-relaxed">
              Giáo viên thu thập thông tin ngay trong quá trình dạy học để kịp thời điều chỉnh phương pháp dạy và hỗ trợ học sinh tiến bộ.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0B132B] text-white border-2 border-[#0F766E] flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-xs font-mono-tabular text-amber-300 font-extrabold">TRỌNG TÂM MỚI 02 · ƯU TIÊN</div>
              <h4 className="text-base font-extrabold text-white">
                Đánh giá là học tập
              </h4>
              <div className="text-xs font-mono-tabular font-bold text-teal-200">
                Assessment AS Learning
              </div>
            </div>
            <p className="text-xs font-semibold text-white mt-2 leading-relaxed">
              Học sinh tham gia tự đánh giá và đánh giá đồng đẳng, qua đó tự nhận thức điểm mạnh/yếu và tự điều chỉnh cách học.
            </p>
          </div>
        </div>
      </div>

      {/* Part B: Khắc phục 3 "bệnh" trong dự giờ và thảo luận chuyên môn */}
      <div className="bg-white rounded-xl border-2 border-slate-400 p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-300 pb-2.5">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#9A3412] uppercase tracking-wider">
            B. Khắc phục triệt để 3 "Căn bệnh" trong Dự giờ và Thảo luận Chuyên môn
          </h3>
          <span className="text-xs font-bold text-[#1E3A8A]">
            Nhấn vào từng mục để xem đối chiếu Biểu hiện & Giải pháp xử lý
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          {diseases.map((item, idx) => {
            const isSelected = selectedDisease === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedDisease(idx)}
                className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 border-[#1E3A8A] ring-2 ring-[#1E3A8A]'
                    : 'bg-white border-slate-400 hover:bg-slate-50'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-extrabold text-[#0B132B]">{item.name}</span>
                    <span className="text-xs font-mono-tabular text-white bg-[#9A3412] px-2 py-0.5 rounded font-extrabold">
                      Khắc phục
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-100 border-2 border-rose-300 text-xs font-semibold text-slate-950 leading-relaxed">
                    <strong className="text-[#9A3412] font-extrabold">Biểu hiện:</strong> {item.symptom}
                  </div>
                  <div className="p-3 rounded-lg bg-teal-100 border-2 border-teal-400 text-xs font-semibold text-slate-950 leading-relaxed">
                    <strong className="text-[#0F766E] font-extrabold">{item.solutionTitle}</strong> {item.solution}
                  </div>
                </div>

                <div className="text-xs font-bold text-[#0B132B] pt-2 border-t-2 border-slate-300">
                  <strong className="text-[#1E3A8A]">Ý nghĩa:</strong> {item.impact}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 10: MẪU SỔ GHI CHÉP DỰ GIỜ THEO NGHIÊN CỨU BÀI HỌC
   (Bám sát Mẫu phiếu trang 8 của PDF: Thông tin chung, Class Spatial Map & Phân tích vi mô)
   ============================================================================ */
export const Slide10ObservationSheet: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<number>(1);

  const studentGroups = [
    {
      id: 0,
      name: 'Nhóm 1 (Bàn đầu trái)',
      status: 'Hoạt động bình thường',
      behavior: '4/4 HS đọc tài liệu nhanh, trao đổi sôi nổi ngay khi GV giao nhiệm vụ.',
      cause: 'Nhiệm vụ vừa sức, các thành viên đã quen làm việc nhóm.',
      solution: 'Giao thêm câu hỏi mở rộng ở Bước 3 để thử thách tư duy sâu hơn.'
    },
    {
      id: 1,
      name: 'Nhóm 2 (Khoanh tròn quan sát vi mô)',
      status: 'Trọng tâm quan sát vi mô',
      behavior: 'Em Minh và em Lan lúng túng chưa vẽ được biểu đồ ở phút thứ 12; ánh mắt nhìn sang nhóm bên cạnh.',
      cause: 'Câu lệnh chuyển giao nhiệm vụ ở Bước 1 của GV chưa làm rõ đơn vị trục tung.',
      solution: 'GV cần chiếu mẫu quy ước đơn vị rõ ràng trên màn hình hoặc bổ sung gợi ý vào Phiếu học tập số 2.'
    },
    {
      id: 2,
      name: 'Nhóm 3 (Khoanh tròn quan sát vi mô)',
      status: 'Trọng tâm quan sát vi mô',
      behavior: '1 HS làm toàn bộ phiếu học tập, 3 HS còn lại ngồi nghe thụ động không ghi chép.',
      cause: 'Chưa phân công vai trò cá nhân trước khi thảo luận nhóm.',
      solution: 'Áp dụng kỹ thuật khăn trải bàn: yêu cầu mỗi HS viết ý kiến cá nhân vào góc phiếu trước khi tổng hợp.'
    },
    {
      id: 3,
      name: 'Nhóm 4 (Bàn cuối phải)',
      status: 'Hoạt động tốt',
      behavior: 'Hoàn thành sản phẩm đúng thời gian, đặt được câu hỏi phản biện sắc sảo cho Nhóm 1.',
      cause: 'Nhóm trưởng điều phối tốt và khai thác hiệu quả học liệu được cung cấp.',
      solution: 'Khích lệ cách đặt câu hỏi phản biện của nhóm để lan tỏa cho cả lớp.'
    }
  ];

  const activeGroup = studentGroups[selectedGroup];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-stretch">
      {/* Left 6 Columns: Authentic Replica of "MẪU SỔ GHI CHÉP DỰ GIỜ THEO NGHIÊN CỨU BÀI HỌC" (Page 8) */}
      <div className="lg:col-span-6 bg-white rounded-xl border-2 border-[#1E3A8A] p-5 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="text-center border-b-2 border-slate-300 pb-3 space-y-1">
            <h3 className="text-sm sm:text-base font-extrabold text-[#0B132B] uppercase tracking-wide">
              MẪU SỔ GHI CHÉP DỰ GIỜ THEO NGHIÊN CỨU BÀI HỌC
            </h3>
            <p className="text-xs italic text-[#9A3412] font-extrabold">
              (Lưu ý: Mẫu sổ này dùng để thu thập minh chứng phân tích việc học, tuyệt đối không dùng để chấm điểm, xếp loại giờ dạy)
            </p>
          </div>

          {/* I. THÔNG TIN CHUNG VÀ BỐI CẢNH */}
          <div className="space-y-1.5 text-xs">
            <div className="font-extrabold text-[#0B132B]">I. THÔNG TIN CHUNG VÀ BỐI CẢNH</div>
            <div className="p-3 rounded-lg bg-slate-100 border-2 border-slate-300 grid grid-cols-2 gap-y-1.5 gap-x-4 font-semibold text-slate-950">
              <div>• <strong className="text-[#1E3A8A]">Họ và tên người dạy:</strong> Nguyễn Văn A</div>
              <div>• <strong className="text-[#1E3A8A]">Môn học:</strong> Khoa học tự nhiên · <strong className="text-[#1E3A8A]">Lớp:</strong> 8A</div>
              <div className="col-span-2">• <strong className="text-[#1E3A8A]">Tên bài dạy/Chuyên đề:</strong> Chủ đề Năng lượng & Sự biến đổi</div>
              <div className="col-span-2">• <strong className="text-[#1E3A8A]">Ngày dự:</strong> 17/10/2026 · <strong className="text-[#1E3A8A]">Thời gian:</strong> Từ 08:00 đến 08:45</div>
              <div className="col-span-2">
                • <strong className="text-[#1E3A8A]">Mục tiêu trọng tâm của bài học:</strong> <span className="italic font-bold text-slate-800">(Giúp định hướng trọng tâm quan sát)</span>
              </div>
            </div>
          </div>

          {/* II. SƠ ĐỒ LỚP HỌC VÀ BẢN ĐỒ KHÔNG GIAN (Interactive Class Spatial Map) */}
          <div className="space-y-2 text-xs">
            <div className="font-extrabold text-[#0B132B]">
              II. SƠ ĐỒ LỚP HỌC VÀ BẢN ĐỒ KHÔNG GIAN (Class Spatial Map)
            </div>
            <p className="text-xs font-semibold text-slate-900 leading-relaxed">
              (Nhiệm vụ: Phác họa nhanh vị trí các nhóm học sinh. Đánh dấu (X) vị trí người dự giờ đứng/ngồi quan sát. Khoanh tròn các cá nhân/nhóm học sinh được chọn để quan sát vi mô xuyên suốt tiết học).
            </p>

            {/* Interactive Spatial Map Box */}
            <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tabular">
                <span className="px-2.5 py-1 rounded bg-white border-2 border-[#1E3A8A] font-extrabold text-[#0B132B]">
                  [X] Vị trí Người dự giờ (Quan sát mặt HS)
                </span>
                <span className="px-3 py-1 rounded bg-[#0B132B] text-white font-extrabold">
                  BẢNG LỚP / BỤC GIẢNG
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {studentGroups.map((grp, idx) => {
                  const isSelected = selectedGroup === idx;
                  const isCircled = idx === 1 || idx === 2;
                  return (
                    <button
                      key={grp.id}
                      onClick={() => setSelectedGroup(idx)}
                      className={`p-3 rounded-lg border-2 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                          : isCircled
                          ? 'bg-white border-dashed border-2 border-[#1E3A8A] text-slate-950'
                          : 'bg-white border-slate-400 text-slate-950 hover:bg-sky-50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span className="font-extrabold">{grp.name}</span>
                        {isCircled && (
                          <span
                            className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                              isSelected ? 'bg-amber-400 text-[#0B132B]' : 'bg-[#1E3A8A] text-white'
                            }`}
                          >
                            Khoanh tròn
                          </span>
                        )}
                      </div>
                      <div
                        className={`text-xs font-semibold mt-1 ${
                          isSelected ? 'text-sky-200' : 'text-[#1E3A8A]'
                        }`}
                      >
                        Nhấn để xem phân tích vi mô
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right 6 Columns: Micro-Observation Matrix (Hành vi -> Nguyên nhân -> Giải pháp) */}
      <div className="lg:col-span-6 bg-white rounded-xl border-2 border-slate-400 p-6 flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
            <div>
              <div className="text-xs font-mono-tabular text-[#1E3A8A] font-extrabold">
                III. MA TRẬN TIẾN TRÌNH HOẠT ĐỘNG HỌC & PHÂN TÍCH VI MÔ
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
                Hồ sơ Minh chứng Quan sát: {activeGroup.name}
              </h3>
            </div>
            <span className="text-xs font-mono-tabular text-white bg-[#0F766E] px-2.5 py-1 rounded font-extrabold">
              {activeGroup.status}
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-1">
              <div className="text-xs font-mono-tabular font-extrabold text-[#1E3A8A]">
                1. MINH CHỨNG HÀNH VI / BIỂU CẢM / THAO TÁC CỦA HỌC SINH
              </div>
              <p className="text-sm font-bold text-slate-950 leading-relaxed">
                {activeGroup.behavior}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-400 space-y-1">
              <div className="text-xs font-mono-tabular font-extrabold text-[#9A3412]">
                2. PHÂN TÍCH VI MÔ NGUYÊN NHÂN (VÌ SAO HỌC SINH GẶP KHÓ KHĂN / THÀNH CÔNG?)
              </div>
              <p className="text-sm font-bold text-slate-950 leading-relaxed">
                {activeGroup.cause}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 border-2 border-teal-400 space-y-1">
              <div className="text-xs font-mono-tabular font-extrabold text-[#0F766E]">
                3. ĐỀ XUẤT GIẢI PHÁP SƯ PHẠM CẢI TIẾN BÀI HỌC
              </div>
              <p className="text-sm font-bold text-slate-950 leading-relaxed">
                {activeGroup.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-lg bg-[#0B132B] text-white text-xs sm:text-sm font-bold flex items-center justify-between">
          <span>
            <strong className="text-amber-300">Nguyên tắc cốt lõi:</strong> Thảo luận dựa trên minh chứng thực tế từ việc học của học sinh.
          </span>
          <span className="font-mono-tabular text-sky-300 shrink-0 ml-2">CV 5555/BGDĐT</span>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 11: QUẢN LÝ HỒ SƠ CHUYÊN MÔN & CHUYỂN ĐỔI SỐ (THÔNG TƯ 15/2026/TT-BGDĐT)
   (Bám sát văn bản trang 8 và Infographic trang 9 của PDF)
   ============================================================================ */
export const Slide11DigitalRecordsManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'school' | 'teacher' | 'tcm' | 'digital'>('teacher');

  const school14Records = [
    '01. Kế hoạch giáo dục của nhà trường',
    '02. Sổ theo dõi phổ cập giáo dục',
    '03. Sổ nghị quyết của nhà trường & Hội đồng trường',
    '04. Sổ khen thưởng và kỷ luật học sinh',
    '05. Hồ sơ kiểm tra, đánh giá giáo viên & nhân viên',
    '06. Sổ đăng bộ học sinh',
    '07. Học bạ học sinh',
    '08. Sổ theo dõi và đánh giá học sinh (theo lớp)',
    '09. Hồ sơ xóa mù chữ / giáo dục hòa nhập',
    '10. Kế hoạch chiến lược phát triển nhà trường',
    '11. Hồ sơ quản lý cán bộ, giáo viên, nhân viên',
    '12. Hồ sơ quản lý tài chính, tài sản',
    '13. Hồ sơ quản lý thiết bị dạy học, thư viện',
    '14. Hồ sơ khác theo đặc thù (bán trú, khen thưởng...)'
  ];

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      {/* Top 4 Quadrant Cards matching Page 9 Infographic */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
        <button
          onClick={() => setActiveTab('school')}
          className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 cursor-pointer ${
            activeTab === 'school'
              ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
              : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
          }`}
        >
          <div className={`text-xs font-mono-tabular font-extrabold ${activeTab === 'school' ? 'text-amber-300' : 'text-[#1E3A8A]'}`}>
            1. ĐỐI VỚI NHÀ TRƯỜNG
          </div>
          <div className="text-base font-extrabold">14 Loại hồ sơ cấp trường</div>
          <p className={`text-xs font-semibold ${activeTab === 'school' ? 'text-white' : 'text-slate-900'}`}>
            Quản lý đồng bộ kế hoạch giáo dục, đăng bộ, học bạ, thiết bị và tài chính.
          </p>
        </button>

        <button
          onClick={() => setActiveTab('teacher')}
          className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 cursor-pointer ${
            activeTab === 'teacher'
              ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
              : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
          }`}
        >
          <div className={`text-xs font-mono-tabular font-extrabold ${activeTab === 'teacher' ? 'text-amber-300' : 'text-[#0F766E]'}`}>
            2. ĐỐI VỚI GIÁO VIÊN
          </div>
          <div className="text-base font-extrabold">03 Loại hồ sơ trọng tâm</div>
          <p className={`text-xs font-semibold ${activeTab === 'teacher' ? 'text-white' : 'text-slate-900'}`}>
            Kế hoạch bài dạy (Giáo án), Sổ chủ nhiệm và Sổ công tác Đội.
          </p>
        </button>

        <button
          onClick={() => setActiveTab('tcm')}
          className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 cursor-pointer ${
            activeTab === 'tcm'
              ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
              : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
          }`}
        >
          <div className={`text-xs font-mono-tabular font-extrabold ${activeTab === 'tcm' ? 'text-amber-300' : 'text-[#9A3412]'}`}>
            3. TỔ CHUYÊN MÔN & VĂN PHÒNG
          </div>
          <div className="text-base font-extrabold">Sổ ghi chép hoạt động</div>
          <p className={`text-xs font-semibold ${activeTab === 'tcm' ? 'text-white' : 'text-slate-900'}`}>
            Lưu biên bản họp, kế hoạch triển khai và chuyên đề chuyên môn.
          </p>
        </button>

        <button
          onClick={() => setActiveTab('digital')}
          className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-2 cursor-pointer ${
            activeTab === 'digital'
              ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
              : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
          }`}
        >
          <div className={`text-xs font-mono-tabular font-extrabold ${activeTab === 'digital' ? 'text-amber-300' : 'text-[#1E3A8A]'}`}>
            4. CHUYỂN ĐỔI SỐ
          </div>
          <div className="text-base font-extrabold">Ưu tiên Hồ sơ điện tử</div>
          <p className={`text-xs font-semibold ${activeTab === 'digital' ? 'text-white' : 'text-slate-900'}`}>
            Giá trị pháp lý tương đương bản giấy, kết nối và liên thông dữ liệu.
          </p>
        </button>
      </div>

      {/* Detailed View Panel based on selected tab */}
      <div className="bg-white rounded-xl border-2 border-slate-400 p-6 flex-1 flex flex-col justify-between">
        {activeTab === 'teacher' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
                2. Hồ sơ đối với Giáo viên: Tinh gọn còn 03 loại hồ sơ trọng tâm
              </h3>
              <span className="text-xs font-mono-tabular text-white bg-[#0F766E] px-3 py-1 rounded font-extrabold">
                Giảm tải tối đa thủ tục hành chính
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-2">
                <div className="text-xs font-mono-tabular font-extrabold text-[#1E3A8A]">HỒ SƠ 01 · BẮT BUỘC</div>
                <h4 className="text-base font-extrabold text-[#0B132B]">Kế hoạch bài dạy (Giáo án)</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Tài liệu bắt buộc đối với mọi giáo viên đứng lớp, được chuẩn bị trước khi lên lớp theo cấu trúc Phụ lục IV (CV 5512).
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-2">
                <div className="text-xs font-mono-tabular font-extrabold text-[#0F766E]">HỒ SƠ 02 · GIÁO VIÊN CHỦ NHIỆM</div>
                <h4 className="text-base font-extrabold text-[#0B132B]">Sổ chủ nhiệm</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Dành riêng cho giáo viên làm công tác chủ nhiệm để quản lý, theo dõi toàn diện sự phát triển của học sinh trong lớp.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-2">
                <div className="text-xs font-mono-tabular font-extrabold text-[#9A3412]">HỒ SƠ 03 · TỔNG PHỤ TRÁCH</div>
                <h4 className="text-base font-extrabold text-[#0B132B]">Sổ công tác Đội</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Dành cho giáo viên làm Tổng phụ trách Đội để theo dõi hoạt động phong trào và rèn luyện của thiếu niên, nhi đồng.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'school' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
                1. Hồ sơ đối với Nhà trường: Danh mục 14 loại hồ sơ quản lý cấp trường
              </h3>
              <span className="text-xs font-mono-tabular font-extrabold text-[#1E3A8A]">Quản lý đồng bộ trên hệ thống số</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {school14Records.map((rec) => (
                <div
                  key={rec}
                  className="p-2.5 rounded-lg bg-slate-100 border-2 border-slate-300 text-xs font-bold text-slate-950"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tcm' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
                3. Hồ sơ Tổ chuyên môn & Văn phòng: Sổ ghi chép nội dung các hoạt động
              </h3>
              <span className="text-xs font-mono-tabular text-[#9A3412] font-extrabold">
                Theo lộ trình chuyển đổi số
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-1.5">
                <div className="text-sm font-extrabold text-[#0B132B]">Nội dung lưu trữ cốt lõi</div>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Lưu lại các biên bản họp, kế hoạch triển khai và chuyên đề chuyên môn (áp dụng cho Tổ chuyên môn, Tổ văn phòng và Tổ giáo dục đặc thù).
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-1.5">
                <div className="text-sm font-extrabold text-[#0B132B]">Lộ trình duy trì & chuyển đổi</div>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Duy trì sổ ghi chép nội dung dưới dạng bản giấy theo lộ trình chuyển đổi; từng bước số hóa hoàn toàn khi đủ điều kiện hạ tầng.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-1.5">
                <div className="text-sm font-extrabold text-[#0B132B]">Quyền chủ động của Nhà trường</div>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Nhà trường chủ động quản lý và sử dụng hồ sơ dưới dạng điện tử thay thế cho bản giấy theo lộ trình phù hợp thực tiễn.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'digital' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3">
              <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
                4. Chuyển đổi số: Ưu tiên duy trì và sử dụng Hồ sơ điện tử
              </h3>
              <span className="text-xs font-mono-tabular text-[#1E3A8A] font-extrabold">
                Thông tư 15/2026/TT-BGDĐT
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-2">
                <div className="text-xs font-mono-tabular font-extrabold text-[#1E3A8A]">TRỤ CỘT 01</div>
                <h4 className="text-base font-extrabold text-[#0B132B]">Ưu tiên sử dụng Hồ sơ điện tử</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Thay thế bản giấy theo lộ trình đối với biên bản họp, kế hoạch triển khai, giáo án và hồ sơ theo dõi đánh giá học sinh.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-2">
                <div className="text-xs font-mono-tabular font-extrabold text-[#0F766E]">TRỤ CỘT 02</div>
                <h4 className="text-base font-extrabold text-[#0B132B]">Giá trị pháp lý tương đương bản giấy</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Hồ sơ điện tử có đầy đủ giá trị pháp lý nếu đáp ứng các tiêu chuẩn về hạ tầng công nghệ, chữ ký số, an toàn bảo mật và kết nối dữ liệu.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border-2 border-slate-400 space-y-2">
                <div className="text-xs font-mono-tabular font-extrabold text-[#9A3412]">TRỤ CỘT 03</div>
                <h4 className="text-base font-extrabold text-[#0B132B]">Kết nối và liên thông dữ liệu</h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                  Sử dụng phần mềm quản lý chung giúp đồng bộ dữ liệu một lần, giảm thiểu sai sót, tiết kiệm thời gian báo cáo và giảm tải hành chính cho giáo viên.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-3 border-t-2 border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#0B132B]">
          <span>
            Nhấn vào 4 thẻ phía trên để chuyển đổi giữa Hồ sơ Nhà trường (14), Giáo viên (03), Tổ CM và Hồ sơ Điện tử.
          </span>
          <span className="font-mono-tabular text-[#1E3A8A]">Hệ thống Hồ sơ Quản lý Hoạt động Giáo dục</span>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   SLIDE 12: TỔNG KẾT TẬP HUẤN & BẢNG KIỂM TRIỂN KHAI ĐỒNG BỘ TẠI CƠ SỞ GIÁO DỤC
   ============================================================================ */
export const Slide12MasterChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    c1: true,
    c2: true,
    c3: true,
    c4: true,
    c5: true
  });

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const actionMatrix = [
    {
      id: 'c1',
      doc: 'Công văn 5512/BGDĐT-GDTrH',
      focus: 'Kế hoạch dạy học của Tổ chuyên môn',
      action: 'Thực hiện đúng Quy trình 5 bước; hoàn thiện Khung kế hoạch (I. Đặc điểm tình hình, II. PPCT - Chuyên đề - KTĐG định kỳ, III. Nội dung khác).'
    },
    {
      id: 'c2',
      doc: 'Phụ lục IV · CV 5512',
      focus: 'Đổi mới Kế hoạch bài dạy (Giáo án)',
      action: 'Xác định rõ Mục tiêu (Kiến thức, Năng lực - làm được gì, Phẩm chất); tổ chức chuỗi 4 hoạt động học tập qua 4 bước thực hiện.'
    },
    {
      id: 'c3',
      doc: 'Công văn 5208/BGDĐT-GDPT',
      focus: 'Tích hợp giáo dục năm học 2026–2027',
      action: 'Lồng ghép Pháp luật, Di sản - Môi trường, Kỹ năng sống, STEM/STEAM qua 4 cấp độ (Nội môn → Đa môn → Liên môn → Xuyên môn).'
    },
    {
      id: 'c4',
      doc: 'Thông tư 02/2025/TT-BGDĐT',
      focus: 'Triển khai Khung năng lực số (NLS)',
      action: 'Phát triển 6 miền (24 năng lực thành phần) từ Bậc 1 đến Bậc 5 theo khối lớp; Tin học giữ vai trò chủ đạo, các môn khác tạo môi trường vận dụng.'
    },
    {
      id: 'c5',
      doc: 'CV 5555 & TT 15/2026',
      focus: 'SHCM Nghiên cứu bài học & Hồ sơ điện tử',
      action: 'Đánh giá vì/là học tập; trị 3 "bệnh" dự giờ bằng Sơ đồ lớp & Phân tích vi mô; vận hành Hồ sơ điện tử liên thông giảm tải cho giáo viên.'
    }
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      <div className="bg-white rounded-xl border-2 border-slate-400 p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-300 pb-3">
          <div>
            <div className="text-xs font-mono-tabular text-[#1E3A8A] font-extrabold">
              BẢNG ĐỐI CHIẾU TỔNG HỢP 5 TRỤ CỘT TẬP HUẤN CHUYÊN MÔN
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B132B]">
              Danh Mục Kiểm Tra (Checklist) Triển Khai Đồng Bộ Năm Học 2026–2027
            </h3>
          </div>
          <div className="text-xs font-mono-tabular bg-[#0B132B] text-amber-300 px-3.5 py-2 rounded-lg font-extrabold">
            Đã rà soát: {completedCount}/05 trụ cột
          </div>
        </div>

        <div className="space-y-2.5">
          {actionMatrix.map((row, idx) => {
            const isChecked = !!checkedItems[row.id];
            return (
              <div
                key={row.id}
                onClick={() => toggleItem(row.id)}
                className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all flex items-start justify-between gap-4 ${
                  isChecked
                    ? 'bg-slate-100 border-[#1E3A8A]'
                    : 'bg-white border-slate-400 hover:bg-sky-50'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    aria-label={`Đánh dấu ${row.focus}`}
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border-2 transition-colors shrink-0 ${
                      isChecked
                        ? 'bg-[#1E3A8A] border-[#1E3A8A] text-white'
                        : 'bg-white border-slate-400 text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-mono-tabular font-extrabold text-[#1E3A8A]">
                        0{idx + 1}. {row.doc}
                      </span>
                      <span className="text-slate-600 font-bold">·</span>
                      <span className="font-extrabold text-[#0B132B]">{row.focus}</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-950 leading-relaxed">
                      {row.action}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono-tabular text-white bg-[#0F766E] px-2.5 py-1 rounded font-extrabold shrink-0">
                  {isChecked ? 'Sẵn sàng' : 'Chưa chọn'}
                </span>
              </div>
            );
          })}
        </div>

        <div className="pt-3 border-t-2 border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold text-[#0B132B]">
          <span>
            Tài liệu tập huấn chuyên môn chuẩn hóa phục vụ sinh hoạt Tổ chuyên môn và giáo viên toàn trường.
          </span>
          <span className="font-mono-tabular text-[#1E3A8A]">
            Bộ Giáo dục và Đào tạo · Chương trình GDPT 2018
          </span>
        </div>
      </div>
    </div>
  );
};
