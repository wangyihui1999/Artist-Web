import React from 'react';
import { Quote, ExternalLink } from 'lucide-react';
import { Language, dictionary, pressReviewsData } from '../data/translations';

interface PressProps {
  currentLang: Language;
}

export const Press: React.FC<PressProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];

  return (
    <section id="press" className="py-16 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-5 h-[2px] bg-[#9B1B30]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
              {currentLang === 'zh' ? '业界评价' : 'Press & Acclaim'}
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0C192E]">
            {t.press.sectionTitle}
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-2xl">
            {t.press.sectionSubtitle}
          </p>
        </div>

        {/* Compact Reviews Grid with internal scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pressReviewsData.map((review) => {
            const quote = currentLang === 'zh' 
              ? review.quoteZh 
              : currentLang === 'de' 
              ? review.quoteDe 
              : review.quoteEn;

            return (
              <div
                key={review.id}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between h-[230px]"
              >
                <div className="flex flex-col min-h-0 flex-1">
                  <div className="flex items-center justify-between mb-2 shrink-0">
                    <Quote className="w-5 h-5 text-[#9B1B30]/50" />
                    <span className="text-[11px] font-mono text-slate-400">
                      {review.date}
                    </span>
                  </div>

                  {/* Internal Scrollable Quote Container */}
                  <div className="overflow-y-auto pr-2 flex-1 scrollbar-thin">
                    <blockquote className="font-serif text-slate-800 text-xs md:text-sm leading-relaxed italic">
                      "{quote}"
                    </blockquote>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between shrink-0">
                  <div className="min-w-0 pr-2">
                    <h3 className="font-serif font-bold text-[#0C192E] text-sm truncate">
                      {review.publication}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium truncate">
                      {review.opera} · {review.role}
                    </p>
                  </div>

                  <a
                    href={review.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-slate-400 hover:text-[#9B1B30] hover:bg-slate-50 rounded-md transition-colors shrink-0"
                    title={t.press.readFullReview}
                    aria-label={`${t.press.readFullReview} - ${review.publication}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
