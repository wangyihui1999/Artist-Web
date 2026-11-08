import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, dictionary, galleryPhotosData } from '../data/translations';

interface GalleryProps {
  currentLang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ currentLang }) => {
  const t = dictionary[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'stage' | 'rehearsal' | 'portrait'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = galleryPhotosData.filter((photo) => {
    if (selectedCategory === 'all') return true;
    return photo.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F6] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#9B1B30]" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#9B1B30]">
                {currentLang === 'zh' ? '舞台与排练' : 'Visual Gallery'}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0C192E]">
              {t.gallery.sectionTitle}
            </h2>
            <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-2xl">
              {t.gallery.sectionSubtitle}
            </p>
          </div>

          {/* Simple Clean Tabs */}
          <div className="mt-4 md:mt-0 flex items-center p-1 bg-white rounded-lg border border-slate-200/80 self-start md:self-auto shadow-2xs">
            {[
              { id: 'all', label: t.gallery.filterAll },
              { id: 'stage', label: t.gallery.filterStage },
              { id: 'rehearsal', label: t.gallery.filterRehearsal },
              { id: 'portrait', label: t.gallery.filterPortrait },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0C192E] text-white'
                    : 'text-slate-600 hover:text-[#0C192E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Understated Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={photo.src}
                  alt={photo.title[currentLang]}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C192E]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[11px] text-white font-medium line-clamp-1">
                    {photo.title[currentLang]}
                  </span>
                </div>
              </div>

              <div className="p-3">
                <div className="flex items-start justify-between gap-1">
                  <h4 className="font-serif text-xs md:text-sm font-bold text-[#0C192E] truncate">
                    {photo.title[currentLang]}
                  </h4>
                  {photo.credit && (
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">
                      {photo.credit}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {photo.location} · {photo.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-[#0C192E]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-150"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 md:top-2 md:-right-10 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label={t.gallery.lightboxClose}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={showPrev}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20 cursor-pointer"
                aria-label={t.gallery.prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-20 cursor-pointer"
                aria-label={t.gallery.nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-black max-h-[72vh] flex items-center justify-center shadow-2xl">
                <img
                  src={filteredPhotos[lightboxIndex].src}
                  alt={filteredPhotos[lightboxIndex].title[currentLang]}
                  className="max-h-[72vh] max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metadata Caption Bar */}
              <div className="w-full mt-3 p-3 bg-white/10 backdrop-blur-md rounded-xl text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <h4 className="font-serif text-sm font-bold">
                    {filteredPhotos[lightboxIndex].title[currentLang]}
                  </h4>
                  <p className="text-slate-300 text-[11px] mt-0.5">
                    {filteredPhotos[lightboxIndex].caption[currentLang]}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-rose-200 shrink-0">
                  {filteredPhotos[lightboxIndex].credit && (
                    <>
                      <span>Photo: {filteredPhotos[lightboxIndex].credit}</span>
                      <span className="text-white/40">·</span>
                    </>
                  )}
                  <span>{filteredPhotos[lightboxIndex].location} ({filteredPhotos[lightboxIndex].year})</span>
                  <span className="text-white/40">·</span>
                  <span>{lightboxIndex + 1} / {filteredPhotos.length}</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
