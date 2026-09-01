import React from 'react';
import { Sparkles, Calendar, Heart, Check, Star } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface MakeupPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const MakeupPage: React.FC<MakeupPageProps> = ({ onOpenBooking }) => {
  const makeupServices = [
    {
      title: 'Party & Sangeet Makeup',
      price: 'Starting from ₹1,499',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
      features: ['Long-lasting camera finish', 'Smokey or shimmer eyes', 'Hairstyling assistance', 'Comfortable skin-like feel'],
      desc: 'Elegant, flattering event looks crafted for family weddings, receptions, and festival parties.',
    },
    {
      title: 'High-Definition (HD) Bridal Makeup',
      price: 'Starting from ₹5,999',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      features: ['Sweat & tear-proof formula', 'Dupatta draping & jewelry setting', 'Luxury eyelash application', 'Bespoke contour & base match'],
      desc: 'Our signature bridal transformation tailored to your lehenga color, wedding lighting, and timeless style.',
    },
    {
      title: 'Engagement & Sagan Makeup',
      price: 'Starting from ₹2,999',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
      features: ['Soft-glam illuminated base', 'Saree / gown drape assistance', 'Romantic eye makeup', 'Long wear hold'],
      desc: 'Luminous, romantic look designed specifically for ring ceremonies and engagement celebrations.',
    },
    {
      title: 'Reception & Cocktail Glam',
      price: 'Starting from ₹3,499',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      features: ['Sculpted contouring', 'Dramatic or winged eye glam', 'Modern open hair / wave styling'],
      desc: 'Contemporary evening looks that photograph beautifully under night banquet lighting.',
    },
    {
      title: 'Light / Day Occasion Makeup',
      price: 'Starting from ₹999',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
      features: ['Subtle, no-makeup glow', 'Lightweight base', 'Tinted lip & cheek color'],
      desc: 'Breathable and refreshing makeup for daytime pujas, kitty parties, and intimate family get-togethers.',
    },
    {
      title: 'Pre-Bridal Grooming Suite',
      price: 'Starting from ₹3,499',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
      features: ['Full body waxing & detan', 'Bridal radiance facial', 'Manicure & Pedicure', 'Hair spa & polish'],
      desc: 'Holistic multi-session care so your skin and hair are deeply nourished before the big day.',
    },
  ];

  return (
    <div id="makeup-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MAKEUP ARTISTRY IN INDIRAPURAM</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221F1F] tracking-tight mb-4">
            Bridal & Party Makeup Services
          </h1>
          <p className="text-base sm:text-lg text-[#6B655D] font-light">
            Designed to bring out your best features with skin-like texture, photogenic coverage, and personalized elegance.
          </p>
        </div>

        {/* Makeup Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {makeupServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-[#EAE0D3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#7A5B1E] border border-[#E2CEB0]">
                    {service.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#221F1F] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#EDE4D4]">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#44403C]">
                        <Check className="w-3.5 h-3.5 text-[#A88438] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#EFE8DA] flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#A88438] to-[#B8860B] hover:brightness-105 transition-all shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Slot</span>
                </button>
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hello A One Beauty Parlour, I am interested in booking ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-[#25D366] bg-[#E8F8F0] hover:bg-[#D5F2E3] transition-colors flex items-center justify-center"
                  title="Enquire on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Banner */}
        <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#E8DFC8] text-center max-w-3xl mx-auto shadow-xs">
          <h3 className="font-serif text-2xl font-bold text-[#221F1F] mb-2">
            Have a Specific Look in Mind?
          </h3>
          <p className="text-sm text-[#6B655D] mb-6">
            Bring your outfit photos or Pinterest inspiration during consultation. We customize eye tones, lip shades, and hair accessories to match your style.
          </p>
          <a
            href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
              'Hello A One Beauty Parlour, I want to discuss a makeup look for an upcoming occasion.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Chat with Makeup Expert</span>
          </a>
        </div>
      </div>
    </div>
  );
};
