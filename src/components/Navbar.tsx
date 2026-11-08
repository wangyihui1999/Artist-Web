import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language, dictionary } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = dictionary[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#schedule", label: t.nav.schedule },
    { href: "#biography", label: t.nav.biography },
    { href: "#repertoire", label: t.nav.repertoire },
    { href: "#audio", label: t.nav.audio },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'zh', label: '中文' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-2xl md:text-2xl font-bold tracking-tight text-[#0C192E] hover:text-[#9B1B30] transition-colors whitespace-nowrap shrink-0"
        >
          {currentLang === 'zh' ? '王益辉 Yihui Wang' : 'Yihui Wang'}
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#9B1B30] transition-colors whitespace-nowrap shrink-0 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9B1B30] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Language switcher & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-100/90 rounded-full p-1 border border-slate-200/70 text-xs font-medium">
            <Globe className="w-3.5 h-3.5 ml-1.5 mr-1 text-slate-400 shrink-0" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLanguageChange(l.code)}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 whitespace-nowrap ${
                  currentLang === l.code
                    ? 'bg-[#0C192E] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-[#0C192E]'
                }`}
                aria-label={`Switch to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0C192E] hover:bg-[#9B1B30] rounded-lg transition-colors duration-200 whitespace-nowrap shadow-xs"
          >
            <span>{currentLang === 'zh' ? '演出联络' : currentLang === 'de' ? 'Kontakt' : 'Booking'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0C192E] rounded-lg focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#9B1B30] py-1 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="/assets/aistudio/Yihui_Wang_CV_2026_35c9acab.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 px-4 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                {t.biography.downloadCvPdf}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#0C192E] text-white hover:bg-[#9B1B30]"
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
