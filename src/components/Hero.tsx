import React from 'react';
import { Play, FileText, ChevronRight, Award } from 'lucide-react';
import { Language, dictionary } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  onQuickPlay: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onQuickPlay }) => {
  const t = dictionary[currentLang];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#FAF9F6] to-[#F4F3EF] border-b border-slate-200/60">
      {/* Subtle classical architectural ornament */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#9B1B30]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#0C192E]/5 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Kicker with red hairline accent */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#9B1B30]" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#9B1B30]">
                {t.hero.roleBadge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0C192E] mb-4 text-balance leading-[1.08]">
              {currentLang === 'zh' ? '王益辉' : 'Yihui Wang'}
              {currentLang === 'zh' && (
                <span className="block text-2xl md:text-3xl font-sans font-normal text-slate-500 mt-2">
                  Yihui Wang · Tenor
                </span>
              )}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-6 max-w-2xl">
              {t.hero.tagline}
            </p>

            {/* Quiet Unboxed Metadata (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs md:text-sm text-slate-500 font-medium mb-8 pb-6 border-b border-slate-200">
              <span className="text-[#0C192E] font-semibold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#9B1B30]" />
                {t.hero.scholarship}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{t.hero.institution}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{t.hero.mentor}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{t.hero.tutor}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onQuickPlay}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#9B1B30] hover:bg-[#7C1324] text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>{t.hero.ctaListen}</span>
              </button>

              <a
                href="#repertoire"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-[#0C192E] text-sm font-semibold rounded-lg border border-slate-300 transition-colors shadow-2xs"
              >
                <span>{t.hero.ctaRepertoire}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="/assets/aistudio/Yihui_Wang_CV_2026_35c9acab.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs text-slate-600 hover:text-[#9B1B30] transition-colors font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-[#9B1B30]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.biography.downloadCvPdf}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Studio Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full group">
              {/* Decorative backplate border */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-b from-[#9B1B30]/20 via-[#0C192E]/10 to-transparent blur-sm -z-10 group-hover:blur-md transition-all duration-300" />
              
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-[#0C192E]">
                  <img
                    src="/assets/aistudio/new_headshot_62d7c1d8.JPG"
                    alt="Yihui Wang, Lyric Tenor"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C192E]/70 via-transparent to-transparent opacity-85" />
                  
                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs tracking-wider uppercase font-semibold text-rose-200">
                      {currentLang === 'zh' ? '英国皇家音乐学院' : 'Royal Academy of Music'}
                    </p>
                    <p className="font-serif text-lg font-bold">
                      {currentLang === 'zh' ? '王益辉 · 抒情男高音' : 'Yihui Wang, Tenor'}
                    </p>
                    <p className="text-xs text-slate-200">London, United Kingdom</p>
                  </div>
                </div>

                <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Photo: Max Han</span>
                  <span className="text-[#9B1B30] font-semibold">London</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Highlights Strip below hero split */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold text-[#0C192E]">8+</span>
            <span className="text-xs md:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stats.productions}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold text-[#9B1B30]">Lyric</span>
            <span className="text-xs md:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stats.roles}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold text-[#0C192E]">RAM</span>
            <span className="text-xs md:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stats.pedigree}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold text-[#0C192E]">Bergen</span>
            <span className="text-xs md:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stats.recordings}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
