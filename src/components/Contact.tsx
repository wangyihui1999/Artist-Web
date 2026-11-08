import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Check, Copy, Send, Sparkles, FileText } from 'lucide-react';
import { Language, dictionary } from '../data/translations';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    subject: 'casting',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = "wangyihui1999@hotmail.com";
  const phoneNumber = "+44 (0)7384 719186";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        org: '',
        subject: 'casting',
        message: ''
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#9B1B30]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
              {currentLang === 'zh' ? '艺术联络与邀约' : 'Inquiries & Representation'}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C192E]">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Dossier Downloads */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Cards */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#0C192E] pb-3 border-b border-slate-200/70">
                {currentLang === 'zh' ? '直接联系方式' : 'Direct Booking Contact'}
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#9B1B30] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      {t.contact.directEmail}
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="font-medium text-slate-800 hover:text-[#9B1B30] transition-colors text-sm break-all"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3 pt-3 border-t border-slate-200/60">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#9B1B30] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">
                      {t.contact.telephone}
                    </span>
                    <a
                      href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                      className="font-mono text-slate-800 hover:text-[#9B1B30] transition-colors text-sm"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
                  title="Copy telephone"
                  aria-label="Copy telephone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-200/60">
                <div className="w-9 h-9 rounded-lg bg-rose-50 text-[#9B1B30] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    {t.contact.location}
                  </span>
                  <p className="text-sm font-medium text-slate-800">
                    Wembley, London, HA9 0JF, United Kingdom
                  </p>
                </div>
              </div>
            </div>

            {/* Official PDF Downloads */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
              <h3 className="font-serif text-lg font-bold text-[#0C192E] mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#9B1B30]" />
                <span>{t.contact.materialsTitle}</span>
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {t.contact.materialsDesc}
              </p>

              <div className="space-y-2.5">
                <a
                  href="/assets/aistudio/Biography_Yihui_Wang_55dafb6d.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200/80 hover:border-[#9B1B30] text-xs font-semibold text-slate-800 hover:text-[#9B1B30] transition-colors shadow-2xs group"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-[#9B1B30]" />
                    <span>Official Biography (EN)</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">PDF</span>
                </a>

                <a
                  href="/assets/aistudio/Yihui_Wang_CV_2026_35c9acab.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200/80 hover:border-[#9B1B30] text-xs font-semibold text-slate-800 hover:text-[#9B1B30] transition-colors shadow-2xs group"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-[#9B1B30]" />
                    <span>Curriculum Vitae (2026 Season)</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">PDF</span>
                </a>

                <a
                  href="/assets/aistudio/Yihui_Wang_Repertoire_List_7eaaae7e.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200/80 hover:border-[#9B1B30] text-xs font-semibold text-slate-800 hover:text-[#9B1B30] transition-colors shadow-2xs group"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-[#9B1B30]" />
                    <span>Full Repertoire List (Tenor)</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Booking / Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-8 md:p-10 rounded-2xl border border-slate-200/90 shadow-sm">
            
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0C192E]">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {t.contact.successDesc}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 text-xs font-semibold text-[#0C192E] bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    {currentLang === 'zh' ? '发送另一条信息' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0C192E]">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    {t.contact.formSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.labelName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maestro Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-[#0C192E] focus:ring-1 focus:ring-[#0C192E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.labelEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@operahouse.org"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-[#0C192E] focus:ring-1 focus:ring-[#0C192E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.labelOrg}
                    </label>
                    <input
                      type="text"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="e.g. Royal Opera / Philharmonia"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-[#0C192E] focus:ring-1 focus:ring-[#0C192E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.labelSubject}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-[#0C192E] focus:ring-1 focus:ring-[#0C192E]"
                    >
                      <option value="casting">{t.contact.subjectOptions.casting}</option>
                      <option value="concert">{t.contact.subjectOptions.concert}</option>
                      <option value="recital">{t.contact.subjectOptions.recital}</option>
                      <option value="audition">{t.contact.subjectOptions.audition}</option>
                      <option value="other">{t.contact.subjectOptions.other}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.contact.labelMessage} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      currentLang === 'zh'
                        ? '请简述拟邀剧目、演出日期、乐团或试音安排...'
                        : 'Please provide production dates, repertoire, venue, or casting requirements...'
                    }
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:border-[#0C192E] focus:ring-1 focus:ring-[#0C192E]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0C192E] hover:bg-[#9B1B30] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.sending}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.submitButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
