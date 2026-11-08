import React, { useState, useMemo } from 'react';
import { Search, Download, Music2, Sparkles, ChevronDown, ChevronUp, MapPin, User, Disc } from 'lucide-react';
import {
  Language,
  dictionary,
  majorEngagementsData,
  operaticAriasData,
  artSongsData,
  operaticDuetsData
} from '../data/translations';

interface RepertoireProps {
  currentLang: Language;
}

export const Repertoire: React.FC<RepertoireProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];
  const [activeCategory, setActiveCategory] = useState<'all' | 'roles' | 'arias' | 'songs'>('all');
  const [selectedTradition, setSelectedTradition] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Collapsible states: default collapsed
  const [isAriasExpanded, setIsAriasExpanded] = useState(false);
  const [isSongsExpanded, setIsSongsExpanded] = useState(false);

  // Filter major engagements
  const filteredEngagements = useMemo(() => {
    return majorEngagementsData.filter((item) => {
      const matchSearch =
        searchQuery === '' ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.opera.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.composer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.conductor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.orchestra.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.venue.toLowerCase().includes(searchQuery.toLowerCase());

      return matchSearch;
    });
  }, [searchQuery]);

  // Filter arias
  const filteredArias = useMemo(() => {
    return operaticAriasData.filter((item) => {
      const matchSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.operaOrWork.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.composer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.actOrCharacter && item.actOrCharacter.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchTradition =
        selectedTradition === 'all' || item.tradition === selectedTradition;

      return matchSearch && matchTradition;
    });
  }, [searchQuery, selectedTradition]);

  return (
    <section id="repertoire" className="py-20 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#9B1B30]" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
                {currentLang === 'zh' ? '歌剧与演出曲目' : 'Operatic & Concert Works'}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0C192E]">
              {t.repertoire.sectionTitle}
            </h2>
            <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-2xl">
              {t.repertoire.sectionSubtitle}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="/assets/aistudio/Yihui_Wang_Repertoire_List_7eaaae7e.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0C192E] hover:bg-[#9B1B30] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.repertoire.downloadRepertoirePdf}</span>
            </a>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none">
            {[
              { id: 'all', label: t.repertoire.filterAll },
              { id: 'roles', label: t.repertoire.filterRoles },
              { id: 'arias', label: t.repertoire.filterArias },
              { id: 'songs', label: t.repertoire.filterSongs },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  if (cat.id === 'arias') setIsAriasExpanded(true);
                  if (cat.id === 'songs') setIsSongsExpanded(true);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0C192E] text-white'
                    : 'text-slate-600 hover:text-[#0C192E] hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box & Tradition Dropdown */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.repertoire.searchPlaceholder}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0C192E] focus:bg-white transition-all"
              />
            </div>

            <select
              value={selectedTradition}
              onChange={(e) => setSelectedTradition(e.target.value)}
              className="py-1.5 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-hidden focus:border-[#0C192E] cursor-pointer"
            >
              <option value="all">{t.repertoire.traditionAll}</option>
              <option value="belcanto">{t.repertoire.traditionBelcanto}</option>
              <option value="german">{t.repertoire.traditionGerman}</option>
              <option value="french">{t.repertoire.traditionFrench}</option>
              <option value="contemporary">{t.repertoire.traditionContemporary}</option>
            </select>
          </div>
        </div>

        {/* Content Section 1: Major Stage & Recording Engagements (with Detailed Production Credits) */}
        {(activeCategory === 'all' || activeCategory === 'roles') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-xl font-bold text-[#0C192E] flex items-center gap-2">
                <Music2 className="w-5 h-5 text-[#9B1B30]" />
                <span>{t.repertoire.filterRoles}</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                {filteredEngagements.length} {currentLang === 'zh' ? '项演出与录音' : 'major productions'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredEngagements.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#9B1B30]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Role & Year Header */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#0C192E] leading-snug">
                          {currentLang === 'zh' && item.roleZh ? item.roleZh : item.role}
                        </h4>
                        <p className="text-xs font-semibold text-[#9B1B30] mt-0.5">
                          {item.opera} <span className="font-normal text-slate-500">· {item.composer}</span>
                        </p>
                      </div>

                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-sm shrink-0">
                        {item.year}
                      </span>
                    </div>

                    {/* Company / Production Banner */}
                    <p className="text-xs font-medium text-slate-700 mt-2">
                      {item.company}
                    </p>
                  </div>

                  {/* Production Credits in Tasteful Micro-Typography */}
                  <div className="pt-3 mt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600 font-mono">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#9B1B30] shrink-0" />
                      <span className="text-slate-400">{currentLang === 'zh' ? '指挥' : 'Conductor'}:</span>
                      <span className="font-semibold text-slate-800">{item.conductor}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Music2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-400">{currentLang === 'zh' ? '乐团' : 'Orchestra'}:</span>
                      <span className="text-slate-700">{item.orchestra}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-400">{currentLang === 'zh' ? '剧场' : 'Venue'}:</span>
                      <span className="text-slate-600 truncate">{item.venue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Section 2: Operatic Arias (Clean Collapsible Accordion, Default Collapsed) */}
        {(activeCategory === 'all' || activeCategory === 'arias') && (
          <div className="mb-10 bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
            <div
              onClick={() => setIsAriasExpanded(!isAriasExpanded)}
              className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-[#9B1B30]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0C192E] flex items-center gap-2">
                    <span>{t.repertoire.filterArias}</span>
                    <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {filteredArias.length} {currentLang === 'zh' ? '首曲目' : 'arias'}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {currentLang === 'zh'
                      ? '包含莫扎特、多尼采蒂、威尔第、普契尼、施特劳斯等经典美声与浪漫派唱段'
                      : 'Mozart, Donizetti, Verdi, Puccini, Massenet, Strauss, and Lehár'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/70 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>{isAriasExpanded ? t.repertoire.collapseArias : t.repertoire.expandArias}</span>
                {isAriasExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Collapsible Arias Table */}
            {isAriasExpanded && (
              <div className="border-t border-slate-100 animate-in fade-in duration-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-mono text-xs">
                        <th className="py-2.5 px-5 font-semibold">{t.repertoire.tableHeaderRole}</th>
                        <th className="py-2.5 px-5 font-semibold">{t.repertoire.tableHeaderOpera}</th>
                        <th className="py-2.5 px-5 font-semibold">{t.repertoire.tableHeaderComposer}</th>
                        <th className="py-2.5 px-5 font-semibold">Character</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredArias.map((aria, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-5 font-serif font-bold text-[#0C192E]">
                            "{aria.title}"
                          </td>
                          <td className="py-3 px-5 text-slate-700 italic">
                            {aria.operaOrWork}
                          </td>
                          <td className="py-3 px-5 text-slate-600">
                            {aria.composer}
                          </td>
                          <td className="py-3 px-5 text-slate-500 font-mono text-xs">
                            {aria.actOrCharacter || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content Section 3: Art Songs, Lieder & Duets (Collapsible, Default Collapsed) */}
        {(activeCategory === 'all' || activeCategory === 'songs') && (
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
            <div
              onClick={() => setIsSongsExpanded(!isSongsExpanded)}
              className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/70 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-[#0C192E]">
                  <Music2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0C192E] flex items-center gap-2">
                    <span>{t.repertoire.filterSongs}</span>
                    <span className="text-xs font-mono font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {artSongsData.length + operaticDuetsData.length} {currentLang === 'zh' ? '组套曲与重唱' : 'cycles & duets'}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {currentLang === 'zh' 
                      ? '意大利托斯蒂艺术歌曲、德奥艺术歌曲 (Lieder) 与经典歌剧二重唱'
                      : 'Italian Romanze (Tosti), German Lieder (Schubert, Schumann, Strauss), and Operatic Duets'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/70 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>{isSongsExpanded ? t.repertoire.collapseSongs : t.repertoire.expandSongs}</span>
                {isSongsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Collapsible Content */}
            {isSongsExpanded && (
              <div className="border-t border-slate-100 p-5 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-200">
                {/* Art Songs & Lieder */}
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0C192E] mb-3 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span>Art Songs & German Lieder</span>
                    <span className="text-[11px] font-mono text-slate-400">{artSongsData.length} Composers</span>
                  </h4>
                  <div className="space-y-3">
                    {artSongsData.map((song, i) => (
                      <div key={i} className="border-b border-slate-50 pb-2.5 last:border-0">
                        <span className="font-serif font-bold text-[#9B1B30] text-xs block mb-0.5">
                          {song.composer}
                        </span>
                        <p className="text-xs text-slate-600">
                          {song.titles.join(' · ')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operatic Duets */}
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#0C192E] mb-3 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                    <span>Selected Operatic Duets</span>
                    <span className="text-[11px] font-mono text-slate-400">{operaticDuetsData.length} Excerpts</span>
                  </h4>
                  <div className="space-y-2.5">
                    {operaticDuetsData.map((d, i) => (
                      <div key={i} className="text-xs flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-50 pb-1.5">
                        <span className="font-semibold text-slate-800">
                          {d.work}: <span className="font-normal italic text-slate-600">"{d.excerpt}"</span>
                        </span>
                        <span className="text-slate-400 font-mono text-[11px] shrink-0">{d.composer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
