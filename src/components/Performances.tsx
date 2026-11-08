import React, { useState, useMemo } from 'react';
import {
  Calendar,
  MapPin,
  User,
  Music2,
  Sparkles,
  ArrowUpRight,
  Headphones,
  Search,
  Disc,
  Clock,
  Building2,
  ChevronRight
} from 'lucide-react';
import {
  Language,
  dictionary,
  upcomingPerformancesData,
  majorEngagementsData,
  UpcomingPerformance,
  MajorEngagement
} from '../data/translations';

interface PerformancesProps {
  currentLang: Language;
}

export const Performances: React.FC<PerformancesProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];
  const p = t.performances;

  const [activeCategory, setActiveCategory] = useState<'all' | 'opera' | 'recording' | 'festival'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter past consolidated engagements
  const filteredEngagements = useMemo(() => {
    return majorEngagementsData.filter((item) => {
      const matchCategory =
        activeCategory === 'all' || item.category === activeCategory;

      const q = searchQuery.toLowerCase();
      const matchSearch =
        searchQuery === '' ||
        item.opera.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        (item.roleZh && item.roleZh.toLowerCase().includes(q)) ||
        item.composer.toLowerCase().includes(q) ||
        item.conductor.toLowerCase().includes(q) ||
        item.orchestra.toLowerCase().includes(q) ||
        item.venue.toLowerCase().includes(q) ||
        item.company.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleListenAria = (trackId?: string) => {
    const audioSection = document.getElementById('audio');
    if (audioSection) {
      audioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="schedule" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div id="performances" className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#9B1B30]" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
                {currentLang === 'zh' ? '近期演出与演出履历' : currentLang === 'de' ? 'Spielplan & Aufführungen' : 'Calendar & Engagements'}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0C192E]">
              {p.sectionTitle}
            </h2>
            <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-2xl">
              {p.sectionSubtitle}
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-[#9B1B30] border border-rose-200/60 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{p.upcomingBadge}</span>
            </span>
          </div>
        </div>

        {/* 1. UPCOMING PERFORMANCES SPOTLIGHT CARDS */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0C192E] text-white flex items-center justify-center">
                <Calendar className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0C192E]">
                {p.upcomingTitle}
              </h3>
            </div>
            <span className="text-xs font-mono font-medium text-slate-500">
              {upcomingPerformancesData.length} {currentLang === 'zh' ? '项即将上演制作' : 'upcoming productions'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingPerformancesData.map((item) => {
              const isCapriccio = item.id === 'capriccio-2026';
              return (
                <div
                  key={item.id}
                  className="relative bg-gradient-to-br from-[#0C192E] via-[#102442] to-[#0A1526] text-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-700/60 flex flex-col justify-between overflow-hidden group hover:border-[#9B1B30]/60 transition-all duration-300"
                >
                  {/* Subtle decorative background watermarks */}
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[#9B1B30]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#9B1B30]/20 transition-all" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />

                  <div>
                    {/* Header: Date Badge & Status */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#9B1B30] text-white rounded-lg text-xs font-bold tracking-wide shadow-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          {currentLang === 'zh' ? item.datesZh : currentLang === 'de' ? item.datesDe : item.dates}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                        {currentLang === 'zh' ? '即将上演' : currentLang === 'de' ? 'Bevorstehend' : 'Upcoming'}
                      </span>
                    </div>

                    {/* Opera & Composer */}
                    <div className="mb-4">
                      <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                        {item.composer}
                      </p>
                      <h4 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mt-1 group-hover:text-amber-200 transition-colors">
                        {item.opera}
                      </h4>
                      {currentLang === 'zh' && item.operaZh && (
                        <p className="text-xs text-slate-300 font-sans mt-0.5">
                          {item.operaZh}
                        </p>
                      )}
                    </div>

                    {/* Role Highlight */}
                    <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/10 mb-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wider text-slate-300 font-mono">
                          {p.roleLabel}
                        </span>
                        <span className="text-xs font-bold text-amber-300">
                          Tenor Lead
                        </span>
                      </div>
                      <p className="font-serif text-lg font-bold text-white mt-1">
                        {currentLang === 'zh' && item.roleZh
                          ? item.roleZh
                          : currentLang === 'de' && item.roleDe
                          ? item.roleDe
                          : item.role}
                      </p>
                    </div>

                    {/* Key Production Details */}
                    <div className="space-y-2 text-xs text-slate-300 font-mono">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#9B1B30] shrink-0" />
                        <span className="text-slate-400">{p.conductorLabel}:</span>
                        <span className="text-white font-semibold">{item.conductor}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Music2 className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-slate-400">{p.orchestraLabel}:</span>
                        <span className="text-slate-200">{item.orchestra}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="text-slate-400">Company:</span>
                        <span className="text-slate-200">
                          {currentLang === 'zh' && item.companyZh ? item.companyZh : item.company}
                        </span>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-slate-400">{p.venueLabel}:</span>
                        <span className="text-slate-200">
                          {currentLang === 'zh' && item.venueZh ? item.venueZh : item.venue}
                        </span>
                      </div>
                    </div>

                    {/* Explanatory Note */}
                    {item.notes && (
                      <p className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300 leading-relaxed font-sans">
                        {item.notes[currentLang]}
                      </p>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                    {isCapriccio && (
                      <button
                        type="button"
                        onClick={() => handleListenAria(item.audioTrackId)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        <Headphones className="w-3.5 h-3.5 text-amber-300" />
                        <span>{p.listenAriaButton}</span>
                      </button>
                    )}

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#9B1B30] hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors ml-auto shadow-xs"
                    >
                      <span>{p.inquireTickets}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. CONSOLIDATED HISTORICAL PERFORMANCE ARCHIVE */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0C192E] flex items-center justify-center">
                <Disc className="w-4 h-4 text-[#9B1B30]" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0C192E]">
                  {p.pastTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentLang === 'zh'
                    ? '汇集王益辉于英国皇家音乐学院 (RAM)、北方皇家音乐学院 (RNCM)、卑尔根爱乐及哈雷乐团的重大歌剧与交响录音履历'
                    : 'Comprehensive documentation of RAM, RNCM, Bergen Philharmonic, and Hallé productions and recordings.'}
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-md self-start sm:self-auto">
              {filteredEngagements.length} {p.totalEngagements}
            </span>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-[#FAF9F6] p-3.5 rounded-xl border border-slate-200/80 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {[
                { id: 'all', label: p.allFilter },
                { id: 'opera', label: p.operaFilter },
                { id: 'recording', label: p.recordingsFilter },
                { id: 'festival', label: p.festivalsFilter },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#0C192E] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-[#0C192E] hover:bg-slate-200/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={p.searchPlaceholder}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0C192E] transition-all"
              />
            </div>
          </div>

          {/* Consolidated Productions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredEngagements.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF9F6] p-5 rounded-xl border border-slate-200 hover:border-[#9B1B30]/40 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-base md:text-lg font-bold text-[#0C192E]">
                          {currentLang === 'zh' && item.roleZh ? item.roleZh : item.role}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#9B1B30] mt-0.5">
                        {item.opera} <span className="font-normal text-slate-500">· {item.composer}</span>
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-slate-200/70 text-slate-800 rounded-sm">
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-slate-700 mt-1">
                    {item.company}
                  </p>
                </div>

                {/* Structured Production Credits */}
                <div className="pt-3 mt-3 border-t border-slate-200/60 space-y-1.5 text-[11px] text-slate-600 font-mono">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#9B1B30] shrink-0" />
                    <span className="text-slate-400">{p.conductorLabel}:</span>
                    <span className="font-semibold text-slate-800">{item.conductor}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Music2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-slate-400">{p.orchestraLabel}:</span>
                    <span className="text-slate-700">{item.orchestra}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-slate-400">{p.venueLabel}:</span>
                    <span className="text-slate-600 truncate">{item.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
