import React from 'react';
import { Sparkles, Calendar, Heart, Check, Clock, ShieldCheck } from 'lucide-react';
import { BRIDAL_CARDS, BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface BridalPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({ onOpenBooking }) => {
  return (
    <div id="bridal-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-[#A88438]" />
            <span>BRIDAL SANCTUARY • INDIRAPURAM</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221F1F] tracking-tight mb-4">
            Complete Bridal & Wedding Beauty Care
          </h1>
          <p className="text-base sm:text-lg text-[#6B655D] font-light">
            Customized bridal transformations, pre-wedding skin preparation, and occasion styling to make every wedding ritual memorable.
          </p>
        </div>

        {/* Bridal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BRIDAL_CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-[#EAE0D3]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#7A5B1E] border border-[#E2CEB0]">
                    Bridal Suite
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#221F1F] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#57534E] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#EFE8DA] flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(card.title)}
                  className="flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#A88438] to-[#B8860B] hover:brightness-105 transition-all shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Date</span>
                </button>
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hello A One Beauty Parlour, I am inquiring about ${card.title} for an upcoming wedding.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-[#25D366] bg-[#E8F8F0] hover:bg-[#D5F2E3] transition-colors flex items-center justify-center"
                  title="WhatsApp Bridal Planner"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Bridal Timeline Guide */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8DFC8] mb-16 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1F] mb-2">
              Recommended Pre-Bridal Beauty Timeline
            </h2>
            <p className="text-sm text-[#6B655D]">
              Carefully scheduled steps to ensure flawless radiant skin on your wedding day:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                time: '4–6 Weeks Before',
                title: 'Consultation & First Facial',
                desc: 'Skin analysis, detan therapy, and hair spa conditioning.',
              },
              {
                time: '2–3 Weeks Before',
                title: 'Skin Brightening & Trial',
                desc: 'Second deep glow facial, haircut reshaping, and makeup tone test.',
              },
              {
                time: '3–4 Days Before',
                title: 'Full Body Grooming',
                desc: 'Full body waxing, luxury manicure & pedicure, and eyebrow shaping.',
              },
              {
                time: 'Wedding Day',
                title: 'Bridal Makeover',
                desc: 'HD Makeup, bridal hairstyle with fresh floral setting, lehenga draping.',
              },
            ].map((step, sIdx) => (
              <div key={sIdx} className="bg-white p-5 rounded-2xl border border-[#EDE4D4] shadow-2xs">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-[11px] font-bold mb-3">
                  {step.time}
                </span>
                <h4 className="font-serif font-bold text-base text-[#221F1F] mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#221F1F] mb-2">
            Speak Directly with our Bridal Specialist
          </h3>
          <p className="text-sm text-[#6B655D] mb-6">
            We welcome brides and family members to visit our parlour in Indirapuram for personalized consultations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenBooking('Bridal Consultation')}
              className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#A88438] to-[#B8860B] hover:brightness-105 shadow-sm"
            >
              Book Bridal Consultation
            </button>
            <a
              href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                'Hello A One Beauty Parlour, I want to book a bridal consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
