import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, Check, ChevronRight } from 'lucide-react';
import { ALL_SERVICES, BUSINESS_CONFIG } from '../data/siteData';
import { ServiceCategory } from '../types';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
  initialCategory?: ServiceCategory;
}

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'facial-skin', label: 'Facial & Skin' },
  { id: 'waxing', label: 'Waxing' },
  { id: 'makeup', label: 'Makeup & Glam' },
  { id: 'hair', label: 'Hair Cuts & Wash' },
  { id: 'hair-spa', label: 'Hair Spa & Scalp' },
  { id: 'hair-styling', label: 'Hair Styling' },
  { id: 'nails', label: 'Nails & Pedicure' },
  { id: 'chemical', label: 'Smoothening & Colour' },
  { id: 'bridal', label: 'Bridal Packages' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBooking,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCat =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="services-full-catalog" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPLETE SALON MENU</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#221F1F] tracking-tight mb-4">
            Everything You Need to Look & Feel Your Best
          </h2>
          <p className="text-base sm:text-lg text-[#6B655D] font-light">
            From everyday grooming to complete bridal transformations, discover our complete range of beauty, hair, makeup and grooming services in Indirapuram.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`service-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#A88438] to-[#B8860B] text-white shadow-sm font-semibold'
                  : 'bg-[#F2EAE0] text-[#57534E] hover:bg-[#EAE0D3] hover:text-[#221F1F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${index}`}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-[#EFE3D3]">
                  <img
                    src={service.image}
                    alt={`${service.name} Indirapuram Ghaziabad`}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {service.startingPrice && (
                    <div className="absolute top-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#7A5B1E] border border-[#E2CEB0] shadow-2xs">
                      {service.startingPrice}
                    </div>
                  )}

                  {service.duration && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-md text-[11px] font-medium text-white/90">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-xl font-bold text-[#221F1F] mb-2 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-[#EDE4D4]">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-[#57534E]">
                          <Check className="w-3.5 h-3.5 text-[#A88438] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#EFE8DA] flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(service.name)}
                  id={`srv-book-btn-${service.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#A88438] to-[#B8860B] hover:brightness-105 transition-all shadow-xs"
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
                  className="p-2.5 rounded-xl text-[#25D366] bg-[#E8F8F0] hover:bg-[#D5F2E3] transition-colors flex items-center justify-center"
                  title={`Enquire about ${service.name} on WhatsApp`}
                  id={`srv-wa-btn-${service.id}`}
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#FAF1E6] border border-[#E8DFC8] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#78716C] leading-relaxed">
            * Prices may vary slightly based on individual hair length, density, skin requirement and custom package selections. Please contact us on WhatsApp or during consultation for exact quotes.
          </p>
        </div>
      </div>
    </section>
  );
};
