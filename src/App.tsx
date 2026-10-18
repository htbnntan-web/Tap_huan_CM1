/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Printer,
  BookOpen,
  Download,
  Check,
  X
} from 'lucide-react';
import { SLIDES_METADATA } from './data/slidesData';
import { exportPresentationToPptx } from './utils/exportPptx';
import {
  Slide01Cover,
  Slide02FiveStepProcess,
  Slide03TCMFramework,
  Slide04LessonPlanObjectives,
  Slide05ActivitiesAndSteps
} from './components/slides/SlidesPart1And2';
import {
  Slide06IntegratedEducation,
  Slide07DigitalCompetencyDomains,
  Slide08DigitalCompetencyMatrix
} from './components/slides/SlidesPart3';
import {
  Slide09LessonStudyReform,
  Slide10ObservationSheet,
  Slide11DigitalRecordsManagement,
  Slide12MasterChecklist
} from './components/slides/SlidesPart4And5';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slide' | 'handout'>('slide');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  const totalSlides = SLIDES_METADATA.length;
  const activeMeta = SLIDES_METADATA[currentSlide];

  const handleExportPptx = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportSuccess(false);
    try {
      await exportPresentationToPptx();
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3500);
    } finally {
      setIsExporting(false);
    }
  };

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const jumpToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowGrid(false);
    setViewMode('slide');
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      setIsFullscreen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'handout') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'g' || e.key === 'G') {
        setShowGrid((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowGrid(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, viewMode]);

  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <Slide01Cover onNavigate={jumpToSlide} />;
      case 1:
        return <Slide02FiveStepProcess />;
      case 2:
        return <Slide03TCMFramework />;
      case 3:
        return <Slide04LessonPlanObjectives />;
      case 4:
        return <Slide05ActivitiesAndSteps />;
      case 5:
        return <Slide06IntegratedEducation />;
      case 6:
        return <Slide07DigitalCompetencyDomains />;
      case 7:
        return <Slide08DigitalCompetencyMatrix />;
      case 8:
        return <Slide09LessonStudyReform />;
      case 9:
        return <Slide10ObservationSheet />;
      case 10:
        return <Slide11DigitalRecordsManagement />;
      case 11:
        return <Slide12MasterChecklist />;
      default:
        return <Slide01Cover onNavigate={jumpToSlide} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-200 text-[#0B132B]">
      {/* ====================================================================
          TOP NAVIGATION BAR (Strict 3-Zone Contract - High Contrast)
         ==================================================================== */}
      <header className="no-print flex items-center justify-between gap-8 px-6 py-3.5 bg-[#0B132B] text-white border-b-2 border-[#1E3A8A] sticky top-0 z-30 shadow-sm">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            jumpToSlide(0);
          }}
          className="text-base font-extrabold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          Tập Huấn Chuyên Môn GDPT
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-bold text-slate-200">
          <a
            href="#part-1"
            onClick={(e) => {
              e.preventDefault();
              jumpToSlide(1);
            }}
            className={`hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              activeMeta.partIndex === 1 ? 'text-amber-300 font-extrabold underline' : ''
            }`}
          >
            1. KH Tổ Chuyên Môn
          </a>
          <a
            href="#part-2"
            onClick={(e) => {
              e.preventDefault();
              jumpToSlide(3);
            }}
            className={`hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              activeMeta.partIndex === 2 ? 'text-amber-300 font-extrabold underline' : ''
            }`}
          >
            2. KH Bài Dạy
          </a>
          <a
            href="#part-3"
            onClick={(e) => {
              e.preventDefault();
              jumpToSlide(5);
            }}
            className={`hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              activeMeta.partIndex === 3 ? 'text-amber-300 font-extrabold underline' : ''
            }`}
          >
            3. Tích Hợp & Năng Lực Số
          </a>
          <a
            href="#part-4"
            onClick={(e) => {
              e.preventDefault();
              jumpToSlide(8);
            }}
            className={`hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              activeMeta.partIndex === 4 ? 'text-amber-300 font-extrabold underline' : ''
            }`}
          >
            4. Dự Giờ NCBH
          </a>
          <a
            href="#part-5"
            onClick={(e) => {
              e.preventDefault();
              jumpToSlide(10);
            }}
            className={`hover:text-amber-300 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              activeMeta.partIndex === 5 ? 'text-amber-300 font-extrabold underline' : ''
            }`}
          >
            5. Hồ Sơ Điện Tử
          </a>
        </nav>

        {/* Zone 3: 1 primary action (Export PPTX) */}
        <div className="flex items-center shrink-0">
          <button
            onClick={handleExportPptx}
            disabled={isExporting}
            className="px-4 py-2 text-xs sm:text-sm font-extrabold text-[#0B132B] bg-amber-400 rounded-lg hover:bg-amber-300 disabled:opacity-60 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-xs"
          >
            {exportSuccess ? (
              <>
                <Check className="w-4 h-4 text-[#0B132B]" />
                <span>Đã tải xuống file .pptx</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{isExporting ? 'Đang tạo file PPTX...' : 'Xuất file PowerPoint (.pptx)'}</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* ====================================================================
          MAIN PRESENTATION STAGE OR HANDOUT VIEW
         ==================================================================== */}
      {viewMode === 'slide' ? (
        <main className="flex-1 flex flex-col justify-between max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-4 gap-4">
          {/* Slide Canvas Container */}
          <div className="bg-white rounded-2xl border-2 border-slate-500 shadow-md p-6 lg:p-8 flex-1 flex flex-col justify-between gap-6 min-h-[630px]">
            {/* Slide Header Metadata & Title (Deep High-Contrast Banner) */}
            <div className="bg-[#0B132B] text-white rounded-xl p-4 sm:p-5 border-2 border-[#1E3A8A] flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular font-extrabold text-amber-300">
                  <span>{activeMeta.partLabel.toUpperCase()}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeMeta.legalDoc}</span>
                  <span aria-hidden="true">·</span>
                  <span>SLIDE {activeMeta.code} / 12</span>
                </div>
                <h2 className="text-xl lg:text-2xl font-extrabold text-white tracking-tight">
                  {activeMeta.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-sky-100 max-w-md md:text-right leading-relaxed">
                {activeMeta.subtitle}
              </p>
            </div>

            {/* Active Slide Interactive Body */}
            <div className="flex-1 flex flex-col justify-center">
              {renderSlideContent(currentSlide)}
            </div>

            {/* Slide Footer Bar */}
            <div className="pt-3 border-t-2 border-slate-300 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold text-[#0B132B]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-extrabold text-white bg-[#1E3A8A] px-2.5 py-0.5 rounded">
                  Điểm cốt lõi:
                </span>
                <span className="font-extrabold text-[#0B132B]">{activeMeta.keyTakeaways[0]}</span>
              </div>
              <div className="font-mono-tabular font-bold text-[#1E3A8A]">
                Phím tắt: ← / → chuyển slide · G mở danh mục · N thuyết minh
              </div>
            </div>
          </div>

          {/* Speaker Notes Collapsible Drawer */}
          {showNotes && (
            <div className="no-print bg-[#0B132B] text-white rounded-xl p-5 border-2 border-[#1E3A8A] space-y-2 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                <span className="text-xs sm:text-sm font-mono-tabular text-amber-300 font-extrabold">
                  GHI CHÚ BÁO CÁO VIÊN · SLIDE {activeMeta.code}/12
                </span>
                <button
                  onClick={() => setShowNotes(false)}
                  className="text-xs font-bold text-amber-300 hover:text-white transition-colors cursor-pointer"
                >
                  Đóng ghi chú
                </button>
              </div>
              <p className="text-sm font-semibold text-white leading-relaxed">
                {activeMeta.speakerNotes}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-sky-200 font-mono-tabular">
                {activeMeta.keyTakeaways.map((tk, i) => (
                  <span key={i}>• {tk}</span>
                ))}
              </div>
            </div>
          )}

          {/* Deck Workspace Controller Toolbar */}
          <div className="no-print bg-white rounded-xl border-2 border-slate-500 px-4 py-3 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            {/* Left: Slide Number Quick Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {SLIDES_METADATA.map((s, idx) => {
                const isCurrent = idx === currentSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => jumpToSlide(idx)}
                    title={s.title}
                    className={`px-2.5 py-1.5 rounded-md font-mono-tabular text-xs font-extrabold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#0B132B] text-amber-300 border-2 border-[#0B132B]'
                        : 'bg-slate-200 text-[#0B132B] hover:bg-slate-300 border border-slate-400'
                    }`}
                  >
                    {s.code}
                  </button>
                );
              })}
            </div>

            {/* Center/Right: Auxiliary Workspace Mode Toggles & Prev/Next */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleExportPptx}
                disabled={isExporting}
                className="px-3.5 py-2 rounded-lg text-xs font-extrabold bg-[#0F766E] text-white hover:bg-teal-900 disabled:opacity-60 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isExporting ? 'Đang xuất...' : 'Tải file .pptx'}</span>
              </button>

              <button
                onClick={() => setShowGrid((prev) => !prev)}
                className={`px-3.5 py-2 rounded-lg text-xs font-extrabold border-2 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  showGrid
                    ? 'bg-[#0B132B] text-white border-[#0B132B]'
                    : 'bg-white text-[#0B132B] border-slate-400 hover:bg-slate-100'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Danh mục 12 Slide</span>
              </button>

              <button
                onClick={() => setShowNotes((prev) => !prev)}
                className={`px-3.5 py-2 rounded-lg text-xs font-extrabold border-2 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  showNotes
                    ? 'bg-[#0B132B] text-white border-[#0B132B]'
                    : 'bg-white text-[#0B132B] border-slate-400 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Thuyết minh</span>
              </button>

              <button
                onClick={() => setViewMode('handout')}
                className="px-3.5 py-2 rounded-lg text-xs font-extrabold bg-white text-[#0B132B] border-2 border-slate-400 hover:bg-slate-100 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Xem toàn bộ / In PDF</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="px-3.5 py-2 rounded-lg text-xs font-extrabold bg-white text-[#0B132B] border-2 border-slate-400 hover:bg-slate-100 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Thu nhỏ</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Toàn màn hình</span>
                  </>
                )}
              </button>

              <div className="h-5 w-0.5 bg-slate-400 mx-1 hidden sm:block" />

              <button
                onClick={goPrev}
                disabled={currentSlide === 0}
                className="px-3.5 py-2 rounded-lg text-xs font-extrabold bg-slate-200 text-[#0B132B] border border-slate-400 hover:bg-slate-300 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Slide trước</span>
              </button>

              <button
                onClick={goNext}
                disabled={currentSlide === totalSlides - 1}
                className="px-3.5 py-2 rounded-lg text-xs font-extrabold bg-[#1E3A8A] text-white hover:bg-[#0B132B] disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Slide tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      ) : (
        /* ====================================================================
            HANDOUT / CONTINUOUS PRINT VIEW (ALL 12 SLIDES)
           ==================================================================== */
        <main className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 py-6 space-y-8">
          <div className="no-print bg-white p-5 rounded-xl border-2 border-slate-500 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div>
              <h2 className="text-base font-extrabold text-[#0B132B]">
                Chế độ Xem Toàn bộ 12 Slide & Xuất Tài liệu Tập huấn
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                Cuộn trang để xem liền mạch toàn bộ 12 slide, tải xuống file PowerPoint (.pptx) hoặc in PDF.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExportPptx}
                disabled={isExporting}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold bg-[#0F766E] text-white hover:bg-teal-900 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? 'Đang xuất...' : 'Xuất file PowerPoint (.pptx)'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold bg-[#1E3A8A] text-white hover:bg-[#0B132B] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>In / Lưu PDF</span>
              </button>
              <button
                onClick={() => setViewMode('slide')}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold bg-slate-200 text-[#0B132B] border border-slate-400 hover:bg-slate-300 transition-colors cursor-pointer"
              >
                Quay lại Trình chiếu từng Slide
              </button>
            </div>
          </div>

          {SLIDES_METADATA.map((meta, idx) => (
            <section
              key={meta.id}
              className="print-slide bg-white rounded-2xl border-2 border-slate-500 p-6 lg:p-8 space-y-6 shadow-xs"
            >
              <div className="bg-[#0B132B] text-white rounded-xl p-4 sm:p-5 border-2 border-[#1E3A8A] flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular font-extrabold text-amber-300">
                    <span>{meta.partLabel.toUpperCase()}</span>
                    <span>·</span>
                    <span>{meta.legalDoc}</span>
                    <span>·</span>
                    <span>SLIDE {meta.code} / 12</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">{meta.title}</h3>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-sky-100 max-w-md md:text-right">
                  {meta.subtitle}
                </p>
              </div>

              <div>{renderSlideContent(idx)}</div>
            </section>
          ))}
        </main>
      )}

      {/* ====================================================================
          SLIDE GRID OVERVIEW MODAL
         ==================================================================== */}
      {showGrid && (
        <div className="no-print fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-2xl border-2 border-slate-500 max-w-6xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="px-6 py-4 bg-[#0B132B] text-white border-b-2 border-[#1E3A8A] flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  Danh Mục Tổng Quan 12 Slide Tập Huấn Chuyên Môn
                </h3>
                <p className="text-xs font-semibold text-amber-300">
                  Chọn bất kỳ slide nào để chuyển trực tiếp đến nội dung trình chiếu
                </p>
              </div>
              <button
                onClick={() => setShowGrid(false)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Đóng danh mục"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-100">
              {SLIDES_METADATA.map((s, idx) => {
                const isCurrent = idx === currentSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => jumpToSlide(idx)}
                    className={`text-left p-4 rounded-xl border-2 transition-all flex flex-col justify-between gap-3 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                        : 'bg-white text-slate-950 border-slate-400 hover:border-[#1E3A8A] hover:bg-sky-50'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span
                          className={`px-2 py-0.5 rounded font-extrabold ${
                            isCurrent ? 'bg-amber-400 text-[#0B132B]' : 'bg-[#1E3A8A] text-white'
                          }`}
                        >
                          SLIDE {s.code}
                        </span>
                        <span className={`font-bold ${isCurrent ? 'text-amber-300' : 'text-[#0F766E]'}`}>
                          {s.legalDoc}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold leading-snug">{s.title}</h4>
                    </div>
                    <p className={`text-xs font-semibold line-clamp-2 ${isCurrent ? 'text-sky-100' : 'text-slate-900'}`}>
                      {s.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
