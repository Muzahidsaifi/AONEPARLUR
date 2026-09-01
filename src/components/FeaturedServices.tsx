import React from 'react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { FEATURED_SERVICES, BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FeaturedServicesProps {
  onOpenBooking: (serviceName?: string) => void;
  onNavigate: (page: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <section id="featured-services-section" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Curated Salon Services
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Signature Beauty <span className="italic font-light text-[#C5A059]">& Treatments</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            Loved by women across Indirapuram for personalized attention, immaculate hygiene, and radiant results.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`featured-card-${index}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E1D5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-60 overflow-hidden bg-[#E8E1D5]">
                <img
                  src={service.image}
                  alt={`${service.name} at A One Beauty Parlour Indirapuram`}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Starting Price Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#C5A059] border border-[#E8E1D5] shadow-sm">
                  {service.startingPrice}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-sm text-[#555] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Actions */}
                <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenBooking(service.name)}
                    id={`feat-book-${index}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>

                  <a
                    href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                      `Hello A One Beauty Parlour, I am interested in ${service.name}. Please share details and availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full text-[#25D366] bg-[#E8F8F0] hover:bg-[#D5F2E3] border border-[#E8E1D5] transition-colors flex items-center justify-center"
                    title={`Inquire about ${service.name} on WhatsApp`}
                    id={`feat-wa-${index}`}
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Bottom Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('services')}
            id="featured-view-all-services-btn"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#1A1A1A] hover:bg-black transition-all shadow-lg"
          >
            <span>Explore All 25+ Salon Services</span>
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>
      </div>
    </section>
  );
};
