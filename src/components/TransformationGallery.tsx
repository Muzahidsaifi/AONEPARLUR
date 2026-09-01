import React, { useState } from 'react';
import { Sparkles, X, Eye, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/siteData';

export const TransformationGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'bridal', label: 'Bridal Looks' },
    { id: 'makeup', label: 'Party Makeup' },
    { id: 'hair', label: 'Hairstyling' },
    { id: 'skin', label: 'Facial Glow' },
    { id: 'nails', label: 'Nail Work' },
    { id: 'parlour', label: 'Parlour Ambience' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
      );
    }
  };

  return (
    <section id="transformations-gallery-section" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Visual Portfolio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Beauty Transformations <span className="italic font-light text-[#C5A059]">& Artistry</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            Explore our curated work across bridal makeovers, party glam, modern hair designs, and soothing skincare.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              id={`gallery-filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#C5A059] text-white shadow-md'
                  : 'bg-white text-[#555] hover:bg-[#E8E1D5]/50 border border-[#E8E1D5]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-[#E8E1D5] border border-[#E8E1D5] shadow-xs hover:shadow-xl transition-all cursor-pointer aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 self-end">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold leading-snug">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-xs text-white/80 line-clamp-2 mt-1 font-light">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#777]">
          <Info className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Click any image to view in full detail.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-lg sm:text-xl font-bold">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              {filteredItems[activeLightboxIndex].description && (
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-md">
                  {filteredItems[activeLightboxIndex].description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
