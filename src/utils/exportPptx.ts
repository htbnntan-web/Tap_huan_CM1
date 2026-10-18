import PptxGenJS from 'pptxgenjs';
import { SLIDES_METADATA } from '../data/slidesData';

const COLORS = {
  NAVY: '0B132B',
  LAPIS: '1E3A8A',
  TEAL: '0F766E',
  AMBER: '9A3412',
  GOLD: 'FBBF24',
  ROSE: '9F1239',
  BG_CANVAS: 'E2E8F0',
  BG_CARD: 'FFFFFF',
  BG_MUTED: 'F1F5F9',
  BORDER: '64748B',
  TEXT_DARK: '0B132B',
  TEXT_BODY: '0F172A',
  WHITE: 'FFFFFF'
};

function addSlideChrome(
  pptx: PptxGenJS,
  slide: PptxGenJS.Slide,
  metaIndex: number
) {
  const meta = SLIDES_METADATA[metaIndex];
  slide.background = { color: COLORS.BG_CANVAS };

  // Add speaker notes
  slide.addNotes(
    `${meta.title}\n\nThuyết minh: ${meta.speakerNotes}\n\nĐiểm cốt lõi:\n- ${meta.keyTakeaways.join('\n- ')}`
  );

  // Header Banner Bar (Deep Navy for maximum projector contrast)
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.4,
    y: 0.28,
    w: 12.53,
    h: 1.08,
    fill: { color: COLORS.NAVY },
    line: { color: COLORS.LAPIS, width: 1.5 }
  });

  // Top Metadata line
  slide.addText(
    `${meta.partLabel.toUpperCase()}   ·   ${meta.legalDoc.toUpperCase()}   ·   SLIDE ${meta.code} / 12`,
    {
      x: 0.6,
      y: 0.36,
      w: 12.1,
      h: 0.26,
      fontSize: 10,
      bold: true,
      color: COLORS.GOLD,
      fontFace: 'Arial'
    }
  );

  // Main Slide Title
  slide.addText(meta.title, {
    x: 0.6,
    y: 0.64,
    w: 12.1,
    h: 0.62,
    fontSize: 17.5,
    bold: true,
    color: COLORS.WHITE,
    fontFace: 'Arial'
  });

  // Footer Bar
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.4,
    y: 6.85,
    w: 12.53,
    h: 0.4,
    fill: { color: COLORS.NAVY }
  });

  slide.addText(`Trọng tâm: ${meta.keyTakeaways[0]}`, {
    x: 0.6,
    y: 6.9,
    w: 9.5,
    h: 0.3,
    fontSize: 10,
    bold: true,
    color: COLORS.WHITE,
    fontFace: 'Arial'
  });

  slide.addText(`BGDĐT · GDPT 2018  |  Trang ${meta.code}/12`, {
    x: 10.2,
    y: 6.9,
    w: 2.55,
    h: 0.3,
    fontSize: 10,
    bold: true,
    align: 'right',
    color: COLORS.GOLD,
    fontFace: 'Arial'
  });
}

export async function exportPresentationToPptx(): Promise<void> {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5 inches
  pptx.author = 'Bộ Giáo dục và Đào tạo - Tài liệu Tập huấn Chuyên môn';
  pptx.company = 'Cơ sở Giáo dục Phổ thông';
  pptx.subject = 'Tập huấn chuyên môn về Đổi mới Dạy học, Năng lực số & Quản lý Hồ sơ Chuyên môn';
  pptx.title = 'Tap-Huan-Chuyen-Mon-Doi-Moi-Day-Hoc-Nang-Luc-So-Ho-So';

  /* ==========================================================================
     SLIDE 01: TRANG BÌA (COVER SLIDE)
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    slide.background = { color: COLORS.BG_CANVAS };
    slide.addNotes(SLIDES_METADATA[0].speakerNotes);

    // Hero Navy Box
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 0.35,
      w: 12.53,
      h: 3.15,
      fill: { color: COLORS.NAVY },
      line: { color: COLORS.LAPIS, width: 2 }
    });

    slide.addText(
      'BỘ GIÁO DỤC VÀ ĐÀO TẠO  ·  CHƯƠNG TRÌNH GDPT 2018  ·  TÀI LIỆU TẬP HUẤN CHUYÊN MÔN 2026–2027',
      {
        x: 0.75,
        y: 0.58,
        w: 11.8,
        h: 0.3,
        fontSize: 10.5,
        bold: true,
        color: COLORS.GOLD,
        fontFace: 'Arial'
      }
    );

    slide.addText(
      'Tập Huấn Chuyên Môn Về Đổi Mới Dạy Học, Năng Lực Số & Quản Lý Hồ Sơ Chuyên Môn',
      {
        x: 0.75,
        y: 0.98,
        w: 11.8,
        h: 1.2,
        fontSize: 25,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      }
    );

    slide.addText(
      'Cẩm nang toàn diện triển khai chương trình GDPT theo Công văn 5512, 5208, 5555 và Thông tư 02/2025, 15/2026: Từ xây dựng Kế hoạch dạy học, đổi mới Giáo án, tích hợp Khung năng lực số đến Dự giờ nghiên cứu bài học và Hồ sơ điện tử.',
      {
        x: 0.75,
        y: 2.28,
        w: 11.8,
        h: 0.9,
        fontSize: 12.5,
        bold: true,
        color: 'E0F2FE',
        fontFace: 'Arial'
      }
    );

    // 5 Pillar Cards
    const pillars = [
      {
        num: 'CHUYÊN ĐỀ 01',
        doc: 'CV 5512/BGDĐT-GDTrH',
        title: 'Kế hoạch Dạy học của Tổ Chuyên môn',
        desc: 'Quy trình 5 bước xây dựng kế hoạch & Cấu trúc khung Kế hoạch dạy học môn học (Đặc điểm tình hình, PPCT, Chuyên đề, Kiểm tra định kỳ).'
      },
      {
        num: 'CHUYÊN ĐỀ 02',
        doc: 'Phụ lục IV · CV 5512',
        title: 'Đổi mới Kế hoạch Bài dạy (Giáo án)',
        desc: 'Mục tiêu 3 thành phần (Kiến thức, Năng lực, Phẩm chất), chuỗi 4 hoạt động học tập bắt buộc & 4 bước tổ chức thực hiện.'
      },
      {
        num: 'CHUYÊN ĐỀ 03',
        doc: 'CV 5208 & TT 02/2025',
        title: 'Tích hợp Giáo dục & Khung Năng lực số',
        desc: 'Tích hợp chủ đề năm học 2026–2027 (4 cấp độ) & Khung năng lực số 6 miền, 24 năng lực thành phần, 4 mức độ (8 bậc).'
      },
      {
        num: 'CHUYÊN ĐỀ 04',
        doc: 'CV 5555/BGDĐT-GDTrH',
        title: 'SHCM theo NCBH & Đổi mới Dự giờ',
        desc: 'Chuyển sang Đánh giá vì/là học tập; khắc phục 3 "bệnh" dự giờ; Mẫu sổ ghi chép sơ đồ lớp và phân tích vi mô.'
      },
      {
        num: 'CHUYÊN ĐỀ 05',
        doc: 'TT 15/2026/TT-BGDĐT',
        title: 'Quản lý Hồ sơ & Chuyển đổi số',
        desc: 'Hệ thống 14 hồ sơ cấp trường, 03 hồ sơ giáo viên, sổ ghi chép Tổ chuyên môn & lộ trình Hồ sơ điện tử liên thông.'
      }
    ];

    pillars.forEach((p, idx) => {
      const cardX = 0.4 + idx * 2.53;
      slide.addShape(pptx.ShapeType.rect, {
        x: cardX,
        y: 3.7,
        w: 2.4,
        h: 3.45,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: cardX,
        y: 3.7,
        w: 2.4,
        h: 0.4,
        fill: { color: COLORS.LAPIS }
      });

      slide.addText(p.num, {
        x: cardX + 0.12,
        y: 3.75,
        w: 2.15,
        h: 0.3,
        fontSize: 10,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      });

      slide.addText(p.doc, {
        x: cardX + 0.15,
        y: 4.18,
        w: 2.1,
        h: 0.25,
        fontSize: 9.5,
        bold: true,
        color: COLORS.TEAL,
        fontFace: 'Arial'
      });

      slide.addText(p.title, {
        x: cardX + 0.15,
        y: 4.46,
        w: 2.1,
        h: 0.65,
        fontSize: 12,
        bold: true,
        color: COLORS.NAVY,
        fontFace: 'Arial'
      });

      slide.addText(p.desc, {
        x: cardX + 0.15,
        y: 5.15,
        w: 2.1,
        h: 1.85,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 02: QUY TRÌNH 5 BƯỚC XÂY DỰNG KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 1);

    const steps = [
      {
        code: 'BƯỚC 01',
        name: 'Phân tích điều kiện',
        summary: 'Đánh giá đặc điểm học sinh, đội ngũ giáo viên, thiết bị dạy học, cơ sở vật chất và phòng học bộ môn.',
        detail: '• Quy mô lớp/học sinh\n• Trình độ & chuẩn GV\n• Thiết bị thí nghiệm hiện có\n• Phòng học bộ môn'
      },
      {
        code: 'BƯỚC 02',
        name: 'Xây dựng kế hoạch',
        summary: 'Xây dựng phân phối chương trình, mục tiêu môn học, các bài học/chủ đề và hoạt động giáo dục.',
        detail: '• Tên bài/chủ đề sát SGK\n• Phân bổ rõ số tiết\n• Xác định YCCĐ cụ thể\n• Kế hoạch KTĐG định kỳ'
      },
      {
        code: 'BƯỚC 03',
        name: 'Triển khai dạy học',
        summary: 'Tổ chức thực hiện theo đúng kế hoạch đã phê duyệt.',
        detail: '• Hiệu trưởng phê duyệt\n• GV xây dựng KHBD\n• Dạy học đúng tiến độ\n• Khai thác thiết bị dạy học'
      },
      {
        code: 'BƯỚC 04',
        name: 'Theo dõi thực hiện',
        summary: 'Thu thập thông tin, đánh giá kết quả học tập của học sinh.',
        detail: '• Theo dõi tiến độ PPCT\n• Dự giờ NCBH thu minh chứng\n• Đánh giá thường xuyên & định kỳ'
      },
      {
        code: 'BƯỚC 05',
        name: 'Điều chỉnh kế hoạch',
        summary: 'Rà soát, điều chỉnh linh hoạt, phù hợp với thực tiễn.',
        detail: '• Rà soát vướng mắc thực tế\n• Điều chỉnh thời lượng/chủ đề\n• Cập nhật học liệu số mới'
      }
    ];

    steps.forEach((st, idx) => {
      const xPos = 0.4 + idx * 2.53;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 1.5,
        w: 2.4,
        h: 3.7,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 1.5,
        w: 2.4,
        h: 0.42,
        fill: { color: idx % 2 === 0 ? COLORS.NAVY : COLORS.LAPIS }
      });

      slide.addText(st.code, {
        x: xPos + 0.12,
        y: 1.56,
        w: 2.15,
        h: 0.3,
        fontSize: 10.5,
        bold: true,
        color: COLORS.GOLD,
        fontFace: 'Arial'
      });

      slide.addText(st.name, {
        x: xPos + 0.15,
        y: 2.02,
        w: 2.1,
        h: 0.4,
        fontSize: 13,
        bold: true,
        color: COLORS.NAVY,
        fontFace: 'Arial'
      });

      slide.addText(st.summary, {
        x: xPos + 0.15,
        y: 2.45,
        w: 2.1,
        h: 1.15,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });

      slide.addText(st.detail, {
        x: xPos + 0.15,
        y: 3.7,
        w: 2.1,
        h: 1.35,
        fontSize: 9.8,
        bold: true,
        color: COLORS.LAPIS,
        valign: 'top',
        fontFace: 'Arial'
      });
    });

    // Bottom 3 Guiding Notes (From Page 2 Infographic)
    const notes = [
      '1. Thực tiễn: Số liệu, nội dung trong kế hoạch được xây dựng từ thực tế nhà trường.',
      '2. Khả thi & Linh hoạt: Kế hoạch cần linh hoạt, khả thi và có thể điều chỉnh phù hợp thực tiễn.',
      '3. Chất lượng: Đánh giá thường xuyên và định kỳ để nâng cao chất lượng dạy học.'
    ];

    notes.forEach((n, i) => {
      const xPos = 0.4 + i * 4.22;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 5.4,
        w: 4.08,
        h: 1.25,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.TEAL, width: 1.5 }
      });
      slide.addText('LƯU Ý THỰC HIỆN CỐT LÕI (CV 5512)', {
        x: xPos + 0.18,
        y: 5.5,
        w: 3.7,
        h: 0.25,
        fontSize: 9.5,
        bold: true,
        color: COLORS.TEAL,
        fontFace: 'Arial'
      });
      slide.addText(n, {
        x: xPos + 0.18,
        y: 5.8,
        w: 3.7,
        h: 0.75,
        fontSize: 10.5,
        bold: true,
        color: COLORS.NAVY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 03: CẤU TRÚC KHUNG KẾ HOẠCH DẠY HỌC MÔN HỌC CỦA TỔ CHUYÊN MÔN
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 2);

    // Left Column: I. Đặc điểm tình hình & III. Các nội dung khác
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 1.5,
      w: 5.0,
      h: 3.45,
      fill: { color: COLORS.WHITE },
      line: { color: COLORS.LAPIS, width: 1.5 }
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 1.5,
      w: 5.0,
      h: 0.4,
      fill: { color: COLORS.LAPIS }
    });

    slide.addText('I. ĐẶC ĐIỂM TÌNH HÌNH (04 MỤC)', {
      x: 0.6,
      y: 1.55,
      w: 4.6,
      h: 0.3,
      fontSize: 11.5,
      bold: true,
      color: COLORS.WHITE,
      fontFace: 'Arial'
    });

    const secI = [
      '1. Quy mô lớp học: Số lớp, số học sinh, số học sinh học chuyên đề lựa chọn (nếu có).',
      '2. Đội ngũ giáo viên: Số giáo viên; Trình độ đào tạo (CĐ/ĐH/Trên ĐH); Mức đạt chuẩn nghề nghiệp (Tốt, Khá, Đạt, Chưa đạt).',
      '3. Thiết bị dạy học: Thiết bị dạy học hiện có, số lượng, bài thí nghiệm/thực hành có thể sử dụng.',
      '4. Cơ sở vật chất: Phòng học bộ môn; hoạt động trải nghiệm, hướng nghiệp, giáo dục địa phương, nội dung tích hợp/đặc thù.'
    ];

    slide.addText(secI.join('\n\n'), {
      x: 0.6,
      y: 2.0,
      w: 4.6,
      h: 2.8,
      fontSize: 10,
      bold: true,
      color: COLORS.TEXT_BODY,
      valign: 'top',
      fontFace: 'Arial'
    });

    // III. Các nội dung khác
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 5.1,
      w: 5.0,
      h: 1.55,
      fill: { color: COLORS.WHITE },
      line: { color: COLORS.AMBER, width: 1.5 }
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 5.1,
      w: 5.0,
      h: 0.38,
      fill: { color: COLORS.AMBER }
    });

    slide.addText('III. CÁC NỘI DUNG KHÁC (NẾU CÓ)', {
      x: 0.6,
      y: 5.15,
      w: 4.6,
      h: 0.28,
      fontSize: 11,
      bold: true,
      color: COLORS.WHITE,
      fontFace: 'Arial'
    });

    slide.addText(
      '• Kế hoạch riêng của tổ/chuyên môn\n• Hoạt động trải nghiệm, hướng nghiệp\n• Giáo dục địa phương, nội dung tích hợp & giáo dục đặc thù nhà trường',
      {
        x: 0.6,
        y: 5.55,
        w: 4.6,
        h: 1.0,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      }
    );

    // Right Column: II. Kế hoạch dạy học (3 Bảng biểu)
    slide.addShape(pptx.ShapeType.rect, {
      x: 5.6,
      y: 1.5,
      w: 7.33,
      h: 5.15,
      fill: { color: COLORS.WHITE },
      line: { color: COLORS.NAVY, width: 1.5 }
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 5.6,
      y: 1.5,
      w: 7.33,
      h: 0.4,
      fill: { color: COLORS.NAVY }
    });

    slide.addText('II. KẾ HOẠCH DẠY HỌC (03 CẤU PHẦN BẢNG BIỂU CHUẨN)', {
      x: 5.8,
      y: 1.55,
      w: 6.9,
      h: 0.3,
      fontSize: 11.5,
      bold: true,
      color: COLORS.GOLD,
      fontFace: 'Arial'
    });

    const tableRows: PptxGenJS.TableRow[] = [
      [
        { text: 'Cấu phần', options: { bold: true, fill: { color: COLORS.LAPIS }, color: COLORS.WHITE, fontSize: 10.5 } },
        { text: 'Cấu trúc cột bảng biểu chuẩn', options: { bold: true, fill: { color: COLORS.LAPIS }, color: COLORS.WHITE, fontSize: 10.5 } },
        { text: 'Yêu cầu trọng tâm (CV 5512)', options: { bold: true, fill: { color: COLORS.LAPIS }, color: COLORS.WHITE, fontSize: 10.5 } }
      ],
      [
        { text: '1. Phân phối chương trình', options: { bold: true, fontSize: 10, color: COLORS.NAVY } },
        { text: 'STT | Bài học (Chủ đề) | Số tiết | Yêu cầu cần đạt', options: { bold: true, fontSize: 9.8, color: COLORS.TEXT_BODY } },
        { text: 'Tên bài phù hợp CT & SGK; Xác định rõ số tiết và YCCĐ cụ thể.', options: { bold: true, fontSize: 9.8, color: COLORS.TEXT_BODY } }
      ],
      [
        { text: '2. Chuyên đề lựa chọn (THPT)', options: { bold: true, fontSize: 10, color: COLORS.NAVY } },
        { text: 'STT | Chuyên đề | Số tiết | Yêu cầu cần đạt', options: { bold: true, fontSize: 9.8, color: COLORS.TEXT_BODY } },
        { text: 'Chọn chuyên đề phù hợp đối với cấp THPT; Xác định rõ số tiết & YCCĐ.', options: { bold: true, fontSize: 9.8, color: COLORS.TEXT_BODY } }
      ],
      [
        { text: '3. Kiểm tra, đánh giá định kỳ', options: { bold: true, fontSize: 10, color: COLORS.NAVY } },
        { text: 'Bài KTĐG (Giữa/Cuối HK I, II) | Thời gian | Thời điểm | YCCĐ | Hình thức', options: { bold: true, fontSize: 9.8, color: COLORS.TEXT_BODY } },
        { text: '4 hình thức: Viết trên giấy, Viết trên máy tính, Thực hành, Dự án học tập.', options: { bold: true, fontSize: 9.8, color: COLORS.TEXT_BODY } }
      ]
    ];

    slide.addTable(tableRows, {
      x: 5.8,
      y: 2.05,
      w: 6.93,
      colW: [1.8, 2.43, 2.7],
      border: { type: 'solid', color: COLORS.BORDER, pt: 1.5 },
      fill: { color: COLORS.WHITE },
      fontFace: 'Arial',
      valign: 'middle'
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 5.8,
      y: 5.25,
      w: 6.93,
      h: 1.15,
      fill: { color: COLORS.NAVY }
    });

    slide.addText(
      '4 HÌNH THỨC KIỂM TRA, ĐÁNH GIÁ ĐỊNH KỲ TRONG KẾ HOẠCH TỔ CHUYÊN MÔN:\n1. Viết (trên giấy)   ·   2. Viết (trên máy tính)   ·   3. Thực hành   ·   4. Dự án học tập',
      {
        x: 6.0,
        y: 5.38,
        w: 6.5,
        h: 0.85,
        fontSize: 10.5,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      }
    );
  }

  /* ==========================================================================
     SLIDE 04: ĐỔI MỚI KẾ HOẠCH BÀI DẠY (GIÁO ÁN) - MỤC TIÊU & HỌC LIỆU
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 3);

    const objectives = [
      {
        title: '1. Kiến thức',
        short: 'Xác định kiến thức cốt lõi học sinh cần biết và hiểu.',
        rule: 'Nêu cụ thể yêu cầu cần đạt về kiến thức học sinh cần học trong bài để thực hiện được yêu cầu cần đạt của nội dung/chủ đề tương ứng trong chương trình môn học/hoạt động giáo dục.'
      },
      {
        title: '2. Năng lực (Trọng tâm: Học sinh LÀM ĐƯỢC GÌ)',
        short: 'Nêu rõ học sinh làm được gì (năng lực chung và năng lực đặc thù bộ môn) thông qua vận dụng kiến thức.',
        rule: 'Nêu cụ thể yêu cầu học sinh LÀM ĐƯỢC GÌ (biểu hiện cụ thể của năng lực chung và năng lực đặc thù môn học) trong hoạt động học để CHIẾM LĨNH và VẬN DỤNG kiến thức.'
      },
      {
        title: '3. Phẩm chất',
        short: 'Các biểu hiện cụ thể về thái độ, hành vi (yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm) gắn liền với bài học.',
        rule: 'Nêu cụ thể yêu cầu về hành vi, thái độ của học sinh trong quá trình thực hiện các nhiệm vụ học tập và vận dụng kiến thức vào cuộc sống.'
      }
    ];

    objectives.forEach((obj, idx) => {
      const yPos = 1.5 + idx * 1.3;
      slide.addShape(pptx.ShapeType.rect, {
        x: 0.4,
        y: yPos,
        w: 7.5,
        h: 1.18,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addText(obj.title, {
        x: 0.6,
        y: yPos + 0.08,
        w: 7.1,
        h: 0.28,
        fontSize: 12,
        bold: true,
        color: COLORS.LAPIS,
        fontFace: 'Arial'
      });

      slide.addText(`${obj.short}\n→ Quy định Phụ lục IV: ${obj.rule}`, {
        x: 0.6,
        y: yPos + 0.36,
        w: 7.1,
        h: 0.74,
        fontSize: 9.8,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });

    // Equipment Box
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 5.4,
      w: 7.5,
      h: 1.25,
      fill: { color: COLORS.NAVY }
    });

    slide.addText('II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU (NGUYÊN TẮC TƯƠNG ỨNG MỤC TIÊU)', {
      x: 0.6,
      y: 5.48,
      w: 7.1,
      h: 0.28,
      fontSize: 11,
      bold: true,
      color: COLORS.GOLD,
      fontFace: 'Arial'
    });

    slide.addText(
      'Nêu cụ thể các thiết bị dạy học và học liệu được sử dụng trong bài dạy để tổ chức cho học sinh hoạt động nhằm đạt được mục tiêu, yêu cầu của bài dạy (muốn hình thành phẩm chất, năng lực nào thì hoạt động học phải tương ứng và phù hợp).',
      {
        x: 0.6,
        y: 5.78,
        w: 7.1,
        h: 0.78,
        fontSize: 10,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      }
    );

    // Right Column: Phụ lục IV Template Box
    slide.addShape(pptx.ShapeType.rect, {
      x: 8.1,
      y: 1.5,
      w: 4.83,
      h: 5.15,
      fill: { color: COLORS.WHITE },
      line: { color: COLORS.NAVY, width: 2 }
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 8.1,
      y: 1.5,
      w: 4.83,
      h: 0.65,
      fill: { color: COLORS.LAPIS }
    });

    slide.addText('PHỤ LỤC IV · KHUNG KẾ HOẠCH BÀI DẠY\n(Kèm theo Công văn số 5512/BGDĐT-GDTrH)', {
      x: 8.25,
      y: 1.55,
      w: 4.53,
      h: 0.55,
      fontSize: 10.5,
      bold: true,
      align: 'center',
      color: COLORS.WHITE,
      fontFace: 'Arial'
    });

    slide.addText(
      'Trường: ..........................   Tổ: ..........................\nHọ và tên giáo viên: .........................................\n\nTÊN BÀI DẠY: ....................................................\nMôn học/HĐGD: .........................; Lớp: ............\nThời gian thực hiện: (số tiết)\n\nI. Mục tiêu:\n  1. Về kiến thức\n  2. Về năng lực (Nêu rõ HS làm được gì)\n  3. Về phẩm chất\nII. Thiết bị dạy học và học liệu\nIII. Tiến trình dạy học:\n  1. Hoạt động 1: Mở đầu (Xác định vấn đề)\n  2. Hoạt động 2: Hình thành kiến thức mới\n  3. Hoạt động 3: Luyện tập\n  4. Hoạt động 4: Vận dụng',
      {
        x: 8.35,
        y: 2.3,
        w: 4.33,
        h: 4.15,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      }
    );
  }

  /* ==========================================================================
     SLIDE 05: CHUỖI 4 HOẠT ĐỘNG HỌC TẬP & 4 BƯỚC TỔ CHỨC THỰC HIỆN
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 4);

    slide.addText('A. CHUỖI 4 HOẠT ĐỘNG HỌC TẬP BẮT BUỘC TRONG KẾ HOẠCH BÀI DẠY (KHBD)', {
      x: 0.4,
      y: 1.45,
      w: 12.5,
      h: 0.28,
      fontSize: 11.5,
      bold: true,
      color: COLORS.NAVY,
      fontFace: 'Arial'
    });

    const acts = [
      {
        code: 'HOẠT ĐỘNG 1 · MỞ ĐẦU',
        desc: 'Xác định vấn đề / nhiệm vụ học tập, kích hoạt kiến thức nền của học sinh.'
      },
      {
        code: 'HOẠT ĐỘNG 2 · HÌNH THÀNH KIẾN THỨC',
        desc: 'Tìm hiểu, khám phá, giải quyết vấn đề để chiếm lĩnh kiến thức mới.'
      },
      {
        code: 'HOẠT ĐỘNG 3 · LUYỆN TẬP',
        desc: 'Củng cố kiến thức, rèn luyện kỹ năng qua hệ thống bài tập/tình huống.'
      },
      {
        code: 'HOẠT ĐỘNG 4 · VẬN DỤNG',
        desc: 'Vận dụng kiến thức, kỹ năng vào thực tiễn cuộc sống hoặc hoàn cảnh mới.'
      }
    ];

    acts.forEach((a, idx) => {
      const xPos = 0.4 + idx * 3.18;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 1.8,
        w: 3.0,
        h: 1.5,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 1.8,
        w: 3.0,
        h: 0.38,
        fill: { color: COLORS.LAPIS }
      });

      slide.addText(a.code, {
        x: xPos + 0.12,
        y: 1.84,
        w: 2.75,
        h: 0.3,
        fontSize: 9.5,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      });

      slide.addText(a.desc, {
        x: xPos + 0.15,
        y: 2.28,
        w: 2.7,
        h: 0.9,
        fontSize: 10.2,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });

    slide.addText('B. 4 BƯỚC TỔ CHỨC THỰC HIỆN CHO MỖI HOẠT ĐỘNG HỌC', {
      x: 0.4,
      y: 3.45,
      w: 12.5,
      h: 0.28,
      fontSize: 11.5,
      bold: true,
      color: COLORS.TEAL,
      fontFace: 'Arial'
    });

    const steps4 = [
      {
        code: 'BƯỚC 1: CHUYỂN GIAO NHIỆM VỤ',
        role: 'Giáo viên giao nhiệm vụ rõ ràng (đọc, nghe, nhìn, làm), thiết bị/học liệu đi kèm và đích đến cần đạt.'
      },
      {
        code: 'BƯỚC 2: THỰC HIỆN NHIỆM VỤ',
        role: 'Học sinh tự làm cá nhân hoặc thảo luận nhóm; Giáo viên theo dõi, phát hiện khó khăn và hỗ trợ kịp thời.'
      },
      {
        code: 'BƯỚC 3: BÁO CÁO, THẢO LUẬN',
        role: 'Giáo viên chọn nhóm/cá nhân báo cáo; Học sinh trình bày kết quả, phản biện và thảo luận.'
      },
      {
        code: 'BƯỚC 4: KẾT LUẬN, NHẬN ĐỊNH',
        role: 'Giáo viên tổng hợp, chốt kiến thức/kỹ năng cốt lõi và đánh giá sản phẩm học tập của học sinh.'
      }
    ];

    steps4.forEach((s, idx) => {
      const xPos = 0.4 + idx * 3.18;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 3.8,
        w: 3.0,
        h: 2.8,
        fill: { color: COLORS.NAVY },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addText(s.code, {
        x: xPos + 0.18,
        y: 3.98,
        w: 2.65,
        h: 0.5,
        fontSize: 11,
        bold: true,
        color: COLORS.GOLD,
        fontFace: 'Arial'
      });

      slide.addText(s.role, {
        x: xPos + 0.18,
        y: 4.58,
        w: 2.65,
        h: 1.85,
        fontSize: 10.8,
        bold: true,
        color: COLORS.WHITE,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 06: HƯỚNG DẪN TÍCH HỢP NỘI DUNG GIÁO DỤC NĂM HỌC 2026–2027 (CV 5208)
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 5);

    const themes = [
      {
        title: '1. Giá trị Xã hội & Pháp luật',
        desc: 'Lồng ghép giáo dục quyền con người, phòng chống tham nhũng, chủ quyền biên giới và biển đảo.'
      },
      {
        title: '2. Di sản, Văn hóa & Môi trường',
        desc: 'Chú trọng bảo tồn văn hóa dân tộc, giáo dục di sản và ứng phó với biến đổi khí hậu.'
      },
      {
        title: '3. Kỹ năng Sống & An toàn',
        desc: 'Tích hợp an toàn giao thông, phòng chống đuối nước và các nội dung kỹ năng sống thiết yếu.'
      },
      {
        title: '4. Lĩnh vực Tích hợp Bổ trợ',
        desc: '• STEM/STEAM: Tư duy thiết kế, giải quyết vấn đề\n• Năng lực số: Sử dụng AI an toàn, học liệu số\n• Thể chất & Nghệ thuật: Sức khỏe tâm lý'
      }
    ];

    themes.forEach((t, idx) => {
      const xPos = 0.4 + idx * 3.18;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 1.5,
        w: 3.0,
        h: 2.1,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 1.5,
        w: 3.0,
        h: 0.38,
        fill: { color: idx === 3 ? COLORS.TEAL : COLORS.LAPIS }
      });

      slide.addText(t.title, {
        x: xPos + 0.12,
        y: 1.54,
        w: 2.75,
        h: 0.3,
        fontSize: 10.5,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      });

      slide.addText(t.desc, {
        x: xPos + 0.15,
        y: 1.98,
        w: 2.7,
        h: 1.5,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });

    // Middle Banner: 4 Cấp độ dạy học tích hợp
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 3.8,
      w: 12.53,
      h: 1.2,
      fill: { color: COLORS.NAVY }
    });

    slide.addText('4 CẤP ĐỘ DẠY HỌC TÍCH HỢP (TIẾN TRÌNH TỪ THẤP ĐẾN CAO):', {
      x: 0.6,
      y: 3.92,
      w: 12.1,
      h: 0.28,
      fontSize: 10.5,
      bold: true,
      color: COLORS.GOLD,
      fontFace: 'Arial'
    });

    slide.addText(
      '01. Tích hợp nội môn    →    02. Tích hợp đa môn    →    03. Tích hợp liên môn    →    04. Tích hợp xuyên môn',
      {
        x: 0.6,
        y: 4.3,
        w: 12.1,
        h: 0.5,
        fontSize: 15,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      }
    );

    // Bottom 3 Orientations
    const orientations = [
      'Định hướng 1 - Xây dựng kế hoạch thực tiễn: Lựa chọn nội dung tích hợp phù hợp với đội ngũ, cơ sở vật chất và địa phương.',
      'Định hướng 2 - Đảm bảo tính khoa học, vừa sức: Hoạt động tích hợp phải có mục tiêu rõ ràng, không gây áp lực hay phát sinh chi phí.',
      'Định hướng 3 - Tăng cường trải nghiệm thực tế: Ưu tiên các mô hình giáo dục gắn với đổi mới sáng tạo và hướng nghiệp sớm.'
    ];

    orientations.forEach((o, idx) => {
      const xPos = 0.4 + idx * 4.22;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 5.2,
        w: 4.08,
        h: 1.45,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });
      slide.addText(o, {
        x: xPos + 0.18,
        y: 5.32,
        w: 3.72,
        h: 1.2,
        fontSize: 10.2,
        bold: true,
        color: COLORS.NAVY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 07: KHUNG NĂNG LỰC SỐ CHO NGƯỜI HỌC (THÔNG TƯ 02/2025/TT-BGDĐT)
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 6);

    // Left 6 Domains Grid
    const domains = [
      { code: 'Miền I (03 NL)', name: 'Sáng tạo nội dung số', desc: 'Phát triển, chỉnh sửa nội dung số; bản quyền & lập trình.' },
      { code: 'Miền II (06 NL)', name: 'Giao tiếp & Hợp tác số', desc: 'Tương tác, chia sẻ, trách nhiệm công dân số & Netiquette.' },
      { code: 'Miền III (04 NL)', name: 'Khai thác dữ liệu & thông tin', desc: 'Tìm kiếm, lọc, đánh giá độ tin cậy và quản lý dữ liệu.' },
      { code: 'Miền IV (03 NL)', name: 'Ứng dụng Trí tuệ nhân tạo (AI)', desc: 'Hiểu biết và sử dụng công cụ AI an toàn, có đạo đức.' },
      { code: 'Miền V (04 NL)', name: 'Giải quyết vấn đề', desc: 'Xử lý sự cố kỹ thuật, ứng dụng sáng tạo công nghệ số.' },
      { code: 'Miền VI (04 NL)', name: 'An toàn', desc: 'Bảo vệ thiết bị, dữ liệu cá nhân, sức khỏe tâm lý & môi trường.' }
    ];

    domains.forEach((d, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const xPos = 0.4 + col * 3.75;
      const yPos = 1.5 + row * 1.72;

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: yPos,
        w: 3.6,
        h: 1.55,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: yPos,
        w: 3.6,
        h: 0.38,
        fill: { color: COLORS.LAPIS }
      });

      slide.addText(`${d.code} · ${d.name}`, {
        x: xPos + 0.12,
        y: yPos + 0.04,
        w: 3.35,
        h: 0.3,
        fontSize: 10,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      });

      slide.addText(d.desc, {
        x: xPos + 0.15,
        y: yPos + 0.48,
        w: 3.3,
        h: 0.95,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });

    // Right Column: Cấu trúc & Nguyên tắc triển khai
    slide.addShape(pptx.ShapeType.rect, {
      x: 7.95,
      y: 1.5,
      w: 4.98,
      h: 5.0,
      fill: { color: COLORS.NAVY }
    });

    slide.addText('CẤU TRÚC & NGUYÊN TẮC TRIỂN KHAI\n(THÔNG TƯ 02/2025/TT-BGDĐT)', {
      x: 8.2,
      y: 1.68,
      w: 4.5,
      h: 0.6,
      fontSize: 12,
      bold: true,
      color: COLORS.GOLD,
      fontFace: 'Arial'
    });

    slide.addText(
      '• Cấu trúc Khung NLS:\n  Gồm 06 miền năng lực với 24 năng lực thành phần; chia thành 04 mức độ thành thạo (Cơ bản, Trung cấp, Nâng cao, Chuyên sâu) với 08 bậc (từ bậc 1 đến bậc 8).\n\n• Nguyên tắc 1 - Không gây quá tải:\n  Không làm thay đổi hoặc gây quá tải cho Chương trình GDPT 2018 và Chương trình GDTX.\n\n• Nguyên tắc 2 - Lồng ghép phù hợp:\n  Đối chiếu yêu cầu cần đạt của từng môn học và HĐGD để lồng ghép nội dung nâng cao NLS.\n\n• Nguyên tắc 3 - Vai trò các môn học:\n  Môn Tin học giữ vai trò chủ đạo (cung cấp kiến thức nền tảng & kỹ năng cốt lõi); các môn học khác tạo môi trường vận dụng vào thực tiễn.',
      {
        x: 8.2,
        y: 2.38,
        w: 4.5,
        h: 3.9,
        fontSize: 10.2,
        bold: true,
        color: COLORS.WHITE,
        valign: 'top',
        fontFace: 'Arial'
      }
    );
  }

  /* ==========================================================================
     SLIDE 08: BẢNG MÔ TẢ CÁC MỨC ĐỘ THÀNH THẠO NĂNG LỰC SỐ PHỔ THÔNG
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 7);

    const rows: PptxGenJS.TableRow[] = [
      [
        { text: 'KHỐI LỚP', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 11 } },
        { text: 'MỨC ĐỘ THÀNH THẠO', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 11 } },
        { text: 'TÌNH HUỐNG / NHIỆM VỤ DẠY HỌC', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 11 } },
        { text: 'MỨC ĐỘ TỰ CHỦ', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 11 } }
      ],
      [
        { text: 'Lớp 1, 2, 3', options: { bold: true, fontSize: 11, color: COLORS.NAVY } },
        { text: 'Bậc 1 – Cơ bản 1', options: { bold: true, fontSize: 11, color: COLORS.LAPIS } },
        { text: 'Nhiệm vụ đơn giản', options: { bold: true, fontSize: 10.8, color: COLORS.TEXT_BODY } },
        { text: 'Với sự hướng dẫn', options: { bold: true, fontSize: 10.8, color: COLORS.TEAL } }
      ],
      [
        { text: 'Lớp 4, 5', options: { bold: true, fontSize: 11, color: COLORS.NAVY } },
        { text: 'Bậc 2 – Cơ bản 2', options: { bold: true, fontSize: 11, color: COLORS.LAPIS } },
        { text: 'Nhiệm vụ quen thuộc', options: { bold: true, fontSize: 10.8, color: COLORS.TEXT_BODY } },
        { text: 'Tự chủ một phần và có hướng dẫn khi cần thiết', options: { bold: true, fontSize: 10.8, color: COLORS.TEAL } }
      ],
      [
        { text: 'Lớp 6, 7', options: { bold: true, fontSize: 11, color: COLORS.NAVY } },
        { text: 'Bậc 3 – Trung cấp 1', options: { bold: true, fontSize: 11, color: COLORS.LAPIS } },
        { text: 'Nhiệm vụ được xác định rõ ràng và quen thuộc và các vấn đề đơn giản', options: { bold: true, fontSize: 10.8, color: COLORS.TEXT_BODY } },
        { text: 'Tự chủ', options: { bold: true, fontSize: 10.8, color: COLORS.TEAL } }
      ],
      [
        { text: 'Lớp 8, 9', options: { bold: true, fontSize: 11, color: COLORS.NAVY } },
        { text: 'Bậc 4 – Trung cấp 2', options: { bold: true, fontSize: 11, color: COLORS.LAPIS } },
        { text: 'Nhiệm vụ được xác định rõ ràng và không quen thuộc', options: { bold: true, fontSize: 10.8, color: COLORS.TEXT_BODY } },
        { text: 'Độc lập và theo nhu cầu cá nhân', options: { bold: true, fontSize: 10.8, color: COLORS.TEAL } }
      ],
      [
        { text: 'Lớp 10, 11, 12', options: { bold: true, fontSize: 11, color: COLORS.NAVY } },
        { text: 'Bậc 5 – Nâng cao 1', options: { bold: true, fontSize: 11, color: COLORS.LAPIS } },
        { text: 'Các nhiệm vụ phức tạp, vấn đề mới', options: { bold: true, fontSize: 10.8, color: COLORS.TEXT_BODY } },
        { text: 'Tự chủ hoàn toàn, hướng dẫn người khác', options: { bold: true, fontSize: 10.8, color: COLORS.TEAL } }
      ]
    ];

    slide.addTable(rows, {
      x: 0.4,
      y: 1.6,
      w: 12.53,
      rowH: [0.6, 0.8, 0.8, 0.85, 0.85, 0.85],
      colW: [2.1, 2.5, 4.73, 3.2],
      border: { type: 'solid', color: COLORS.NAVY, pt: 1.5 },
      fill: { color: COLORS.WHITE },
      fontFace: 'Arial',
      valign: 'middle'
    });
  }

  /* ==========================================================================
     SLIDE 09: ĐỔI MỚI SHCM THEO NGHIÊN CỨU BÀI HỌC & DỰ GIỜ (CV 5555)
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 8);

    // Top Box: Chuyển đổi quan điểm đánh giá
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 1.5,
      w: 12.53,
      h: 1.65,
      fill: { color: COLORS.NAVY }
    });

    slide.addText('A. CHUYỂN ĐỔI QUAN ĐIỂM KIỂM TRA, ĐÁNH GIÁ (CÔNG VĂN 5555/BGDĐT-GDTrH)', {
      x: 0.65,
      y: 1.6,
      w: 12.0,
      h: 0.3,
      fontSize: 11.5,
      bold: true,
      color: COLORS.GOLD,
      fontFace: 'Arial'
    });

    slide.addText(
      '• Chuyển trọng tâm từ Đánh giá kết quả học tập (Assessment of learning - để xếp loại) sang Đánh giá vì học tập (Assessment for learning) và Đánh giá là học tập (Assessment as learning - giúp học sinh tự nhận thức, điều chỉnh).\n• Mục đích cốt lõi của đánh giá là ĐỂ CẢI THIỆN CHẤT LƯỢNG HỌC TẬP, không phải để định giá hay chấm điểm đơn thuần.',
      {
        x: 0.65,
        y: 1.96,
        w: 12.0,
        h: 1.0,
        fontSize: 11,
        bold: true,
        color: COLORS.WHITE,
        valign: 'top',
        fontFace: 'Arial'
      }
    );

    // Bottom 3 Cards: Khắc phục 3 bệnh trong dự giờ
    const diseases = [
      {
        title: '1. Khắc phục Bệnh "Diễn dịch"',
        symptom: 'Biểu hiện: Cho học sinh luyện tập, dạy trước kịch bản trước khi dự giờ.',
        fix: 'Xử lý: Cấm tuyệt đối dạy trước; xem sai sót, lúng túng thực tế của học sinh là chất liệu quý giá để giáo viên cùng phân tích và học hỏi.'
      },
      {
        title: '2. Khắc phục Bệnh "Quan tòa"',
        symptom: 'Biểu hiện: Nhận xét phán xét chủ quan, bắt lỗi và chấm điểm xếp loại giáo viên.',
        fix: 'Xử lý: Bỏ chấm điểm giờ dạy; tập trung phân tích minh chứng biểu hiện học tập, thái độ và sản phẩm của học sinh.'
      },
      {
        title: '3. Khắc phục Bệnh "Sân khấu 1 người"',
        symptom: 'Biểu hiện: Chỉ có Tổ trưởng chuyên môn hoặc Ban Giám hiệu phát biểu, kết luận.',
        fix: 'Xử lý: Áp dụng kỹ thuật vòng tròn, mời giáo viên trẻ phát biểu trước, thảo luận trực tiếp trên minh chứng chụp ảnh/ghi chép từ lớp học.'
      }
    ];

    diseases.forEach((d, idx) => {
      const xPos = 0.4 + idx * 4.22;
      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 3.35,
        w: 4.08,
        h: 3.3,
        fill: { color: COLORS.WHITE },
        line: { color: COLORS.NAVY, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: 3.35,
        w: 4.08,
        h: 0.42,
        fill: { color: COLORS.AMBER }
      });

      slide.addText(d.title, {
        x: xPos + 0.15,
        y: 3.4,
        w: 3.78,
        h: 0.32,
        fontSize: 11.5,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      });

      slide.addText(d.symptom, {
        x: xPos + 0.2,
        y: 3.88,
        w: 3.68,
        h: 0.85,
        fontSize: 10.2,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos + 0.2,
        y: 4.82,
        w: 3.68,
        h: 1.65,
        fill: { color: COLORS.NAVY }
      });

      slide.addText(d.fix, {
        x: xPos + 0.3,
        y: 4.92,
        w: 3.48,
        h: 1.45,
        fontSize: 10.2,
        bold: true,
        color: COLORS.WHITE,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 10: MẪU SỔ GHI CHÉP DỰ GIỜ THEO NGHIÊN CỨU BÀI HỌC
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 9);

    // Left Box: Cấu trúc Mẫu sổ ghi chép dự giờ (Page 8)
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 1.5,
      w: 6.1,
      h: 5.15,
      fill: { color: COLORS.WHITE },
      line: { color: COLORS.NAVY, width: 2 }
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.4,
      y: 1.5,
      w: 6.1,
      h: 0.65,
      fill: { color: COLORS.LAPIS }
    });

    slide.addText(
      'MẪU SỔ GHI CHÉP DỰ GIỜ THEO NGHIÊN CỨU BÀI HỌC\n(Lưu ý: Tuyệt đối không dùng để chấm điểm, xếp loại giờ dạy)',
      {
        x: 0.55,
        y: 1.55,
        w: 5.8,
        h: 0.55,
        fontSize: 10.5,
        bold: true,
        align: 'center',
        color: COLORS.WHITE,
        fontFace: 'Arial'
      }
    );

    slide.addText(
      'I. THÔNG TIN CHUNG VÀ BỐI CẢNH:\n• Họ và tên người dạy: ...........................................................\n• Môn học: ........................................... Lớp: .........................\n• Tên bài dạy/Chuyên đề: .....................................................\n• Ngày dự: ...../...../202... Thời gian: Từ ............. đến .............\n• Mục tiêu trọng tâm của bài học: (Định hướng quan sát)\n\nII. SƠ ĐỒ LỚP HỌC VÀ BẢN ĐỒ KHÔNG GIAN (Class Spatial Map):\n• Phác họa nhanh vị trí các nhóm học sinh.\n• Đánh dấu (X) vị trí người dự giờ đứng/ngồi quan sát.\n• Khoanh tròn các cá nhân/nhóm học sinh được chọn để quan sát vi mô xuyên suốt tiết học.',
      {
        x: 0.6,
        y: 2.3,
        w: 5.7,
        h: 4.1,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      }
    );

    // Right Box: Ma trận tiến trình hoạt động học & Phân tích vi mô
    slide.addShape(pptx.ShapeType.rect, {
      x: 6.7,
      y: 1.5,
      w: 6.23,
      h: 5.15,
      fill: { color: COLORS.WHITE },
      line: { color: COLORS.NAVY, width: 1.5 }
    });

    slide.addText('III. MA TRẬN PHÂN TÍCH VI MÔ VIỆC HỌC CỦA HỌC SINH', {
      x: 6.9,
      y: 1.65,
      w: 5.8,
      h: 0.35,
      fontSize: 12,
      bold: true,
      color: COLORS.LAPIS,
      fontFace: 'Arial'
    });

    const stepsMatrix = [
      {
        title: '1. Ghi chép Minh chứng Hành vi / Biểu cảm / Thao tác HS',
        desc: 'Quan sát trực tiếp nét mặt, ánh mắt, thao tác làm thí nghiệm, sản phẩm nháp và lời trao đổi của học sinh trong từng hoạt động học.'
      },
      {
        title: '2. Phân tích Vi mô Nguyên nhân',
        desc: 'Lý giải vì sao học sinh tích cực hoặc vì sao học sinh gặp lúng túng (do câu lệnh giao việc ở Bước 1, do học liệu hay do thiếu kiến thức nền).'
      },
      {
        title: '3. Đề xuất Giải pháp Sư phạm Cải tiến',
        desc: 'Đề xuất điều chỉnh cụ thể cách chuyển giao nhiệm vụ, thiết kế lại phiếu học tập hoặc cách hỗ trợ để mọi học sinh đều học được.'
      }
    ];

    stepsMatrix.forEach((m, idx) => {
      const yPos = 2.15 + idx * 1.42;
      slide.addShape(pptx.ShapeType.rect, {
        x: 6.9,
        y: yPos,
        w: 5.83,
        h: 1.28,
        fill: { color: COLORS.BG_MUTED },
        line: { color: COLORS.LAPIS, width: 1.5 }
      });

      slide.addText(m.title, {
        x: 7.1,
        y: yPos + 0.1,
        w: 5.4,
        h: 0.3,
        fontSize: 11,
        bold: true,
        color: COLORS.NAVY,
        fontFace: 'Arial'
      });

      slide.addText(m.desc, {
        x: 7.1,
        y: yPos + 0.42,
        w: 5.4,
        h: 0.75,
        fontSize: 10,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 11: QUẢN LÝ HỒ SƠ CHUYÊN MÔN & CHUYỂN ĐỔI SỐ (TT 15/2026)
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 10);

    const quadrants = [
      {
        title: '1. HỒ SƠ ĐỐI VỚI NHÀ TRƯỜNG (14 LOẠI HỒ SƠ)',
        color: COLORS.LAPIS,
        body: '• Kế hoạch giáo dục, Kế hoạch chiến lược, Sổ nghị quyết\n• Sổ đăng bộ, Học bạ HS, Sổ theo dõi & đánh giá HS\n• Sổ phổ cập, xóa mù chữ, khen thưởng & kỷ luật\n• Quản lý cán bộ, tài chính, thiết bị dạy học & hồ sơ đặc thù.'
      },
      {
        title: '2. HỒ SƠ ĐỐI VỚI GIÁO VIÊN (03 LOẠI TRỌNG TÂM)',
        color: COLORS.TEAL,
        body: '1. Kế hoạch bài dạy (Giáo án): Tài liệu bắt buộc, chuẩn bị trước.\n2. Sổ chủ nhiệm: Dành cho giáo viên làm công tác chủ nhiệm lớp.\n3. Sổ công tác Đội: Dành cho GV làm Tổng phụ trách Đội theo dõi hoạt động phong trào & rèn luyện.'
      },
      {
        title: '3. HỒ SƠ TỔ CHUYÊN MÔN & VĂN PHÒNG',
        color: COLORS.AMBER,
        body: '• Sổ ghi chép nội dung các hoạt động: Lưu biên bản họp, kế hoạch triển khai và chuyên đề chuyên môn.\n• Duy trì bản giấy theo lộ trình chuyển đổi; Nhà trường chủ động sử dụng hồ sơ điện tử thay thế bản giấy theo lộ trình.'
      },
      {
        title: '4. CHUYỂN ĐỔI SỐ: HỒ SƠ ĐIỆN TỬ LIÊN THÔNG',
        color: COLORS.NAVY,
        body: '• Ưu tiên sử dụng Hồ sơ điện tử thay thế bản giấy.\n• Giá trị pháp lý tương đương bản giấy khi đáp ứng chuẩn hạ tầng, bảo mật và kết nối dữ liệu.\n• Kết nối liên thông dữ liệu giúp giảm thiểu sai sót và giảm tải thủ tục hành chính cho giáo viên.'
      }
    ];

    quadrants.forEach((q, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const xPos = 0.4 + col * 6.36;
      const yPos = 1.5 + row * 2.62;

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: yPos,
        w: 6.17,
        h: 2.45,
        fill: { color: COLORS.WHITE },
        line: { color: q.color, width: 1.5 }
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: xPos,
        y: yPos,
        w: 6.17,
        h: 0.42,
        fill: { color: q.color }
      });

      slide.addText(q.title, {
        x: xPos + 0.18,
        y: yPos + 0.06,
        w: 5.8,
        h: 0.3,
        fontSize: 10.5,
        bold: true,
        color: COLORS.WHITE,
        fontFace: 'Arial'
      });

      slide.addText(q.body, {
        x: xPos + 0.2,
        y: yPos + 0.52,
        w: 5.75,
        h: 1.8,
        fontSize: 10.2,
        bold: true,
        color: COLORS.TEXT_BODY,
        valign: 'top',
        fontFace: 'Arial'
      });
    });
  }

  /* ==========================================================================
     SLIDE 12: TỔNG KẾT TẬP HUẤN & LỘ TRÌNH TRIỂN KHAI ĐỒNG BỘ TẠI NHÀ TRƯỜNG
     ========================================================================== */
  {
    const slide = pptx.addSlide();
    addSlideChrome(pptx, slide, 11);

    const summaryRows: PptxGenJS.TableRow[] = [
      [
        { text: 'TT', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 10.5 } },
        { text: 'VĂN BẢN PHÁP QUY', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 10.5 } },
        { text: 'TRỌNG TÂM TẬP HUẤN', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 10.5 } },
        { text: 'NHIỆM VỤ THỰC THI ĐỒNG BỘ TẠI NHÀ TRƯỜNG', options: { bold: true, fill: { color: COLORS.NAVY }, color: COLORS.GOLD, fontSize: 10.5 } }
      ],
      [
        { text: '01', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'CV 5512/BGDĐT-GDTrH', options: { bold: true, fontSize: 10.5, color: COLORS.LAPIS } },
        { text: 'Kế hoạch dạy học của Tổ chuyên môn', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'Thực hiện Quy trình 5 bước; hoàn thiện Khung kế hoạch (I. Đặc điểm tình hình, II. PPCT - Chuyên đề - KTĐG định kỳ, III. Nội dung khác).', options: { bold: true, fontSize: 10, color: COLORS.TEXT_BODY } }
      ],
      [
        { text: '02', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'Phụ lục IV · CV 5512', options: { bold: true, fontSize: 10.5, color: COLORS.LAPIS } },
        { text: 'Đổi mới Kế hoạch bài dạy (Giáo án)', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'Thiết kế Mục tiêu 3 thành phần (Kiến thức, Năng lực - làm được gì, Phẩm chất); tổ chức 4 hoạt động học tập qua 4 bước.', options: { bold: true, fontSize: 10, color: COLORS.TEXT_BODY } }
      ],
      [
        { text: '03', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'CV 5208/BGDĐT-GDPT', options: { bold: true, fontSize: 10.5, color: COLORS.LAPIS } },
        { text: 'Tích hợp giáo dục năm học 2026–2027', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'Lồng ghép Pháp luật, Di sản - Môi trường, Kỹ năng sống, STEM/STEAM qua 4 cấp độ (Nội môn → Đa môn → Liên môn → Xuyên môn).', options: { bold: true, fontSize: 10, color: COLORS.TEXT_BODY } }
      ],
      [
        { text: '04', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'TT 02/2025/TT-BGDĐT', options: { bold: true, fontSize: 10.5, color: COLORS.LAPIS } },
        { text: 'Triển khai Khung năng lực số (NLS)', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'Phát triển 6 miền (24 năng lực thành phần) từ Bậc 1 đến Bậc 5; môn Tin học chủ đạo, các môn học khác tạo môi trường vận dụng.', options: { bold: true, fontSize: 10, color: COLORS.TEXT_BODY } }
      ],
      [
        { text: '05', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'CV 5555 & TT 15/2026', options: { bold: true, fontSize: 10.5, color: COLORS.LAPIS } },
        { text: 'SHCM Nghiên cứu bài học & Hồ sơ số', options: { bold: true, fontSize: 10.5, color: COLORS.NAVY } },
        { text: 'Đánh giá vì/là học tập; khắc phục 3 "bệnh" dự giờ bằng Sơ đồ lớp & Phân tích vi mô; triển khai Hồ sơ điện tử liên thông dữ liệu.', options: { bold: true, fontSize: 10, color: COLORS.TEXT_BODY } }
      ]
    ];

    slide.addTable(summaryRows, {
      x: 0.4,
      y: 1.6,
      w: 12.53,
      rowH: [0.55, 0.85, 0.85, 0.85, 0.85, 0.85],
      colW: [0.65, 2.35, 2.8, 6.73],
      border: { type: 'solid', color: COLORS.NAVY, pt: 1.5 },
      fill: { color: COLORS.WHITE },
      fontFace: 'Arial',
      valign: 'middle'
    });
  }

  await pptx.writeFile({
    fileName: 'Tap-Huan-Chuyen-Mon-Doi-Moi-Day-Hoc-Nang-Luc-So-Ho-So.pptx'
  });
}
