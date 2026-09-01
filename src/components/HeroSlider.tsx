import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, BUSINESS_CONFIG } from '../data/siteData';
import { PhoneIcon } from './icons/PhoneIcon';

interface HeroSliderProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
  onOpenCall?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenBooking, onNavigate, onOpenCall }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const handleAction = (actionType: string) => {
    if (actionType === 'book') {
      onOpenBooking();
    } else if (actionType === 'makeup') {
      onNavigate('makeup');
    } else if (actionType === 'services') {
      onNavigate('services');
    } else if (actionType === 'call') {
      if (onOpenCall) {
        onOpenCall();
      } else {
        window.location.href = `tel:${BUSINESS_CONFIG.phone}`;
      }
    }
  };

  return (
    <div
      id="hero-carousel-section"
      className="relative w-full h-[540px] sm:h-[600px] lg:h-[650px] bg-[#1A1817] text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            id={`hero-slide-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with optimized gradient scrim */}
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* High-contrast Bold Typography dark scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/40" />

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 max-w-2xl">
                  {/* Eyebrow badge matching Design Theme */}
                  <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 shadow-xs">
                    Established 2014 • {slide.eyebrow}
                  </div>

                  {/* Main Heading (H1 for SEO) with Bold Typography Display & Italic Gold Accent */}
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white leading-[0.95] mb-4 sm:mb-6">
                    {slide.heading.includes('Parlour') ? (
                      <>
                        Your Beauty, <br />
                        <span className="italic font-light text-[#C5A059]">Our Passion.</span>
                      </>
                    ) : slide.heading.includes('Bridal') ? (
                      <>
                        Timeless Bridal <br />
                        <span className="italic font-light text-[#C5A059]">Elegance & Grace.</span>
                      </>
                    ) : (
                      <>
                        Skin & Hair <br />
                        <span className="italic font-light text-[#C5A059]">Expert Care.</span>
                      </>
                    )}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl text-[#E5DCD3] leading-relaxed mb-8 max-w-xl font-light">
                    {slide.subheading}
                  </p>

                  {/* CTA Buttons in Bold Typography Pill format */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleAction(slide.primaryButton.action)}
                      id={`hero-cta-primary-${index}`}
                      className="bg-[#C5A059] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-xl hover:bg-[#B38E45] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {slide.primaryButton.text}
                    </button>

                    <button
                      onClick={() => handleAction(slide.secondaryButton.action)}
                      id={`hero-cta-secondary-${index}`}
                      className="bg-[#1A1A1A]/80 backdrop-blur-md text-white border border-[#E8E1D5]/30 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2"
                    >
                      <span>{slide.secondaryButton.text}</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                    </button>
                  </div>

                  {/* Category highlights bar */}
                  <div className="mt-8 sm:mt-10 flex flex-wrap gap-6 sm:gap-8 opacity-60 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                    <span>Makeup</span>
                    <span>•</span>
                    <span>Hair Spa</span>
                    <span>•</span>
                    <span>Skincare</span>
                    <span>•</span>
                    <span>Bridal Suite</span>
                  </div>
                </div>

                {/* Right Decorative Floating Card & Badge for large screens */}
                <div className="hidden lg:flex lg:col-span-4 justify-end relative">
                  <div className="relative">
                    {/* Rotating 10+ Years Exp Badge */}
                    <div className="absolute -top-6 -right-4 h-16 w-16 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-bold text-[10px] tracking-tighter uppercase leading-none text-center shadow-2xl transform rotate-12 z-30 border-2 border-white">
                      10+ Years<br />Exp
                    </div>

                    {/* Floating Review Card */}
                    <div className="bg-white p-6 rounded-2xl shadow-2xl z-20 border border-[#E8E1D5] text-[#1A1A1A] max-w-xs">
                      <div className="flex gap-1 text-[#C5A059] mb-2 text-base">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#777] mb-1.5">
                        Trusted by local women
                      </p>
                      <p className="font-serif italic text-lg leading-snug text-[#1A1A1A]">
                        “Simply the best bridal & salon experience in Indirapuram.”
                      </p>
                      <div className="mt-3 pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#1A1A1A]">Pooja M.</span>
                        <span className="text-[#C5A059] font-medium">Ahinsa Khand 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
        <button
          onClick={prevSlide}
          className="p-1 text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Previous Slide"
          id="hero-prev-btn"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentSlide ? 'w-6 bg-[#D4AF37]' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              id={`hero-dot-${idx}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1 text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Next Slide"
          id="hero-next-btn"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1 text-white/60 hover:text-white transition-colors ml-1"
          aria-label={isPaused ? 'Play slide rotation' : 'Pause slide rotation'}
          id="hero-pause-toggle"
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Quick Mobile Action Ribbon Below Main Viewport for fast conversions */}
      <div className="sm:hidden absolute top-3 right-3 z-30">
        <button
          onClick={() => (onOpenCall ? onOpenCall() : window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self'))}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-xs font-bold uppercase tracking-wider text-white shadow-lg cursor-pointer"
        >
          <PhoneIcon className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Us</span>
        </button>
      </div>
    </div>
  );
};
