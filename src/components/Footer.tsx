import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { Language, dictionary } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = dictionary[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C192E] text-white py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight block">
              {currentLang === 'zh' ? '王益辉 · 抒情男高音' : 'Yihui Wang · Lyric Tenor'}
            </span>
            <p className="text-xs text-slate-400 mt-1">
              {t.footer.disclaimer}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#schedule" className="hover:text-white transition-colors">
              {t.nav.schedule}
            </a>
            <a href="#biography" className="hover:text-white transition-colors">
              {t.nav.biography}
            </a>
            <a href="#repertoire" className="hover:text-white transition-colors">
              {t.nav.repertoire}
            </a>
            <a href="#audio" className="hover:text-white transition-colors">
              {t.nav.audio}
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <button
                onClick={() => onLanguageChange('en')}
                className={`hover:text-white transition-colors ${currentLang === 'en' ? 'text-white font-bold' : ''}`}
              >
                English
              </button>
              <span>·</span>
              <button
                onClick={() => onLanguageChange('de')}
                className={`hover:text-white transition-colors ${currentLang === 'de' ? 'text-white font-bold' : ''}`}
              >
                Deutsch
              </button>
              <span>·</span>
              <button
                onClick={() => onLanguageChange('zh')}
                className={`hover:text-white transition-colors ${currentLang === 'zh' ? 'text-white font-bold' : ''}`}
              >
                中文
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#9B1B30] text-white transition-colors"
              aria-label="Scroll to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Yihui Wang. {t.footer.copyright}</p>
          <p className="font-mono text-[11px]">Royal Academy of Music · London, UK</p>
        </div>
      </div>
    </footer>
  );
};
