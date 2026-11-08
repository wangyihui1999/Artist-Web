import React, { useState } from 'react';
import { Download, GraduationCap, Users, BookOpen } from 'lucide-react';
import { Language, dictionary } from '../data/translations';

interface BiographyProps {
  currentLang: Language;
}

export const Biography: React.FC<BiographyProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];
  const [activeTab, setActiveTab] = useState<'narrative' | 'education' | 'mentors'>('narrative');

  const educationList = [
    {
      institution: "Royal Academy of Music",
      institutionZh: "英国皇家音乐学院 (伦敦)",
      location: "London, UK",
      degree: "Advanced Opera Diploma",
      degreeZh: "高级歌剧研修文凭 (Advanced Opera Diploma)",
      period: "2025 – Present",
      note: "Supported by The Robert W Hendra Award (Full RAM Opera Scholarship)"
    },
    {
      institution: "Royal Northern College of Music",
      institutionZh: "英国皇家北方音乐学院 (曼彻斯特)",
      location: "Manchester, UK",
      degree: "Postgraduate Diploma Advanced Studies in Musical Performance",
      degreeZh: "音乐表演高级研修研究生文凭 (PGDip)",
      period: "2024 – 2025",
      note: "Advanced vocal training & operatic masterclasses"
    },
    {
      institution: "Royal Northern College of Music",
      institutionZh: "英国皇家北方音乐学院 (曼彻斯特)",
      location: "Manchester, UK",
      degree: "Master of Music in Performance",
      degreeZh: "音乐表演硕士学位 (MMus)",
      period: "2022 – 2024",
      note: "ABRSM Scholarship recipient"
    },
    {
      institution: "Royal Northern College of Music",
      institutionZh: "英国皇家北方音乐学院 (曼彻斯特)",
      location: "Manchester, UK",
      degree: "Bachelor of Music in Performance (First Class Honours)",
      degreeZh: "音乐表演学士学位 (BMus 一等荣誉)",
      period: "2019 – 2022",
      note: "Conservatory operatic & chamber vocal studies"
    },
    {
      institution: "University of Sheffield",
      institutionZh: "英国谢菲尔德大学",
      location: "Sheffield, UK",
      degree: "Bachelor of Music",
      degreeZh: "音乐学士学位 (BMus)",
      period: "2018 – 2019",
      note: "Classical vocal fundamentals & academic musicology"
    }
  ];

  const tutorsList = [
    {
      name: "David Parry",
      role: currentLang === 'zh' ? '艺术导师 (Mentor)' : 'Artistic Mentor',
      period: "2023 – Present",
      desc: currentLang === 'zh' 
        ? "享誉世界的歌剧指挥家。执棒《蝙蝠》首演后持续悉心指导王益辉，陪伴其艺术成长与声乐曲目拓宽。"
        : "Internationally renowned opera conductor. Mentoring Wang following his 2022 operatic debut in Die Fledermaus."
    },
    {
      name: "Catherine Wyn-Rogers",
      role: currentLang === 'zh' ? '声乐专业导师 (Principal Tutor)' : 'Principal Vocal Tutor',
      period: "2025 – Present",
      desc: currentLang === 'zh'
        ? "英国享誉世界的大师级女中音歌唱家，英国皇家音乐学院教授。指导王益辉的高级歌剧文凭深造。"
        : "Celebrated British mezzo-soprano and professor at the Royal Academy of Music, supervising Wang's Advanced Opera Diploma."
    },
    {
      name: "Linda Richardson",
      role: currentLang === 'zh' ? '声乐导师' : 'Vocal Tutor',
      period: "2024 – 2025",
      desc: currentLang === 'zh'
        ? "英国皇家北方音乐学院资深声乐导师，著名女高音。"
        : "Senior vocal tutor at RNCM, distinguished British soprano."
    },
    {
      name: "Thomas Schulze",
      role: currentLang === 'zh' ? '声乐导师' : 'Vocal Tutor',
      period: "2021 – 2025",
      desc: currentLang === 'zh'
        ? "德奥艺术歌曲与歌剧名师，为德奥声乐语感与发声技巧打下深厚基石。"
        : "German vocal tutor focusing on German Lieder tradition, text articulation, and vocal foundation."
    },
    {
      name: "Peter Wilson",
      role: currentLang === 'zh' ? '声乐导师' : 'Vocal Tutor',
      period: "2019 – 2021",
      desc: currentLang === 'zh'
        ? "早期英伦声乐基础构建。"
        : "RNCM vocal faculty member during early conservatory studies."
    },
    {
      name: currentLang === 'zh' ? "方露娜教授 (Prof. Lu'Na Fang)" : "Prof. Lu'Na Fang",
      role: currentLang === 'zh' ? '启蒙恩师' : 'Formative Vocal Teacher',
      period: "2011 – 2020",
      desc: currentLang === 'zh'
        ? "方露娜教授，女高音歌唱家，江苏第二师范学院（原江苏教育学院）音乐学院教授。悉心启蒙培育，奠定坚实美声基本功。"
        : "Prof. Lu'Na Fang, soprano and professor at the School of Music, Jiangsu Second Normal University. Formative vocal foundation."
    }
  ];

  const masterclasses = [
    { master: "Sir John Tomlinson", institution: "RNCM, 2024", note: "Operatic characterization & vocal depth" },
    { master: "Amanda Roocroft", institution: "RNCM, 2022", note: "Bel Canto legato & lyric projection" },
    { master: "Lynne Dawson", institution: "Univ. of Sheffield, 2019", note: "Baroque and classical vocal style" },
    { master: "Performance Studies Network", institution: "Univ. of Surrey, 2022", note: "6th International Conference performer" }
  ];

  return (
    <section id="biography" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#9B1B30]" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
                {currentLang === 'zh' ? '生平与艺术履历' : 'Curriculum & Background'}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0C192E]">
              {t.biography.sectionTitle}
            </h2>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-slate-100 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('narrative')}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'narrative'
                  ? 'bg-white text-[#0C192E] shadow-xs'
                  : 'text-slate-600 hover:text-[#0C192E]'
              }`}
            >
              {currentLang === 'zh' ? '艺术生平' : currentLang === 'de' ? 'Künstlerbiografie' : 'Narrative Bio'}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-white text-[#0C192E] shadow-xs'
                  : 'text-slate-600 hover:text-[#0C192E]'
              }`}
            >
              {currentLang === 'zh' ? '教育背景' : currentLang === 'de' ? 'Ausbildung' : 'Education'}
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === 'mentors'
                  ? 'bg-white text-[#0C192E] shadow-xs'
                  : 'text-slate-600 hover:text-[#0C192E]'
              }`}
            >
              {currentLang === 'zh' ? '恩师与导师' : currentLang === 'de' ? 'Mentoren' : 'Mentors & Tutors'}
            </button>
          </div>
        </div>

        {/* Tab 1: Narrative Bio */}
        {activeTab === 'narrative' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Narrative Prose */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base md:text-lg font-normal">
              <p className="font-serif text-xl md:text-2xl text-[#0C192E] font-medium leading-snug">
                {t.biography.leadParagraph}
              </p>

              <p>
                {t.biography.secondParagraph}
              </p>

              <p>
                {t.biography.debutHighlight}
              </p>

              <p>
                {t.biography.concertParagraph}
              </p>

              <p className="italic text-slate-800 font-serif pt-4 border-t border-slate-100">
                "{t.biography.artisticCreed}"
              </p>

              {/* Download Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="/assets/aistudio/Biography_Yihui_Wang_55dafb6d.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#0C192E] hover:bg-[#9B1B30] text-white text-xs md:text-sm font-semibold rounded-lg transition-colors shadow-2xs"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.biography.downloadBioPdf}</span>
                </a>

                <a
                  href="/assets/aistudio/Yihui_Wang_CV_2026_35c9acab.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 text-xs md:text-sm font-semibold rounded-lg border border-slate-300 transition-colors shadow-2xs"
                >
                  <Download className="w-4 h-4" />
                  <span>{t.biography.downloadCvPdf}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Narrative Bio Attached Portrait (IMG_0095) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0C192E]">
                  <img
                    src="/assets/aistudio/IMG_0095_cd4421db.JPG"
                    alt="Yihui Wang, Studio Portrait"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-lg font-bold">
                      {currentLang === 'zh' ? '王益辉 · 抒情男高音' : 'Yihui Wang, Lyric Tenor'}
                    </p>
                    <p className="text-xs text-slate-300">Royal Academy of Music, London</p>
                  </div>
                </div>

                <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Photo: Max Han</span>
                  <span className="text-[#9B1B30] font-semibold">London</span>
                </div>
              </div>

              {/* Masterclasses snippet */}
              <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-slate-200/90">
                <h3 className="font-serif text-base font-bold text-[#0C192E] mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#9B1B30]" />
                  <span>{t.biography.masterclassesTitle}</span>
                </h3>
                <div className="space-y-2.5">
                  {masterclasses.map((m, i) => (
                    <div key={i} className="flex items-start justify-between gap-3 text-xs border-b border-slate-200/60 pb-2 last:border-0 last:pb-0">
                      <div>
                        <span className="font-semibold text-slate-900 block">{m.master}</span>
                        <span className="text-slate-500 text-[11px]">{m.note}</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[11px] shrink-0">{m.institution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-[#9B1B30]" />
              <h3 className="font-serif text-2xl font-bold text-[#0C192E]">
                {t.biography.educationTitle}
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-200 pl-6 space-y-8 ml-3">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline point */}
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#9B1B30] group-hover:scale-125 transition-transform" />
                  
                  <div className="bg-[#FAF9F6] p-6 rounded-xl border border-slate-200/80 shadow-2xs hover:border-[#9B1B30]/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-serif text-xl font-bold text-[#0C192E]">
                        {currentLang === 'zh' ? edu.institutionZh : edu.institution}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-[#9B1B30] bg-rose-50 px-2 py-0.5 rounded-sm">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-slate-800">
                      {currentLang === 'zh' ? edu.degreeZh : edu.degree}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {edu.location} · {edu.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Mentors & Tutors */}
        {activeTab === 'mentors' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-[#9B1B30]" />
              <h3 className="font-serif text-2xl font-bold text-[#0C192E]">
                {t.biography.tutorsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorsList.map((tutor, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] p-6 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-serif text-xl font-bold text-[#0C192E]">
                      {tutor.name}
                    </h4>
                    <span className="text-xs font-mono text-slate-500">{tutor.period}</span>
                  </div>
                  <span className="inline-block text-xs font-semibold text-[#9B1B30] mb-3">
                    {tutor.role}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {tutor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
