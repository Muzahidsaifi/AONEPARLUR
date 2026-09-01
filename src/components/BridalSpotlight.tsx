import React from 'react';
import { Sparkles, Calendar, MessageSquare, Heart } from 'lucide-react';
import { BRIDAL_CARDS, BUSINESS_CONFIG } from '../data/siteData';

interface BridalSpotlightProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const BridalSpotlight: React.FC<BridalSpotlightProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <section
      id="bridal-spotlight-section"
      className="py-16 sm:py-24 bg-[#1A1A1A] text-white relative overflow-hidden"
    >
      {/* Background Decorative Radial Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-xs">
            Bridal & Special Occasion Suite
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Your Big Day Deserves <br className="hidden sm:inline" />
            <span className="italic font-light text-[#C5A059]">Your Best Look</span>
          </h2>

          <p className="text-base sm:text-lg text-[#CCC] font-light leading-relaxed max-w-2xl mx-auto">
            From pre-bridal preparation to wedding-day makeup and hairstyling, A One Beauty Parlour helps you feel confident and radiant for every unforgettable moment.
          </p>
        </div>

        {/* 6 Bridal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {BRIDAL_CARDS.map((card, index) => (
            <div
              key={index}
              id={`bridal-card-${index}`}
              className="group bg-[#242424] rounded-3xl overflow-hidden border border-[#E8E1D5]/20 shadow-xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={card.image}
                    alt={`${card.title} by A One Beauty Parlour`}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-[#242424]/40 to-transparent" />
                  
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#C5A059] border border-white/10">
                    Bridal Suite
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#AAA] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/10">
                <button
                  onClick={() => onOpenBooking(card.title)}
                  className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Slot</span>
                </button>
                <span className="text-[10px] uppercase tracking-wider text-[#777]">Consultation Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Dual CTAs */}
        <div className="bg-[#222] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 text-center max-w-3xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Planning Your Wedding or Family Function?
          </h3>
          <p className="text-sm sm:text-base text-[#CCC] mb-8 max-w-xl mx-auto font-light">
            Book a complimentary bridal look consultation with our makeup specialists at Indirapuram.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking('Bridal Makeup Consultation')}
              id="bridal-plan-cta-btn"
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Plan My Bridal Look
            </button>

            <a
              href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                'Hello A One Beauty Parlour, I want to discuss bridal makeup packages and date availability.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="bridal-whatsapp-cta-btn"
              className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#128C7E] hover:bg-[#0E7569] transition-colors shadow-lg"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
