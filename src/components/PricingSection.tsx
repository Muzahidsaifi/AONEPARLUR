import React, { useState } from 'react';
import { Sparkles, Calendar, Tag, Info } from 'lucide-react';
import { POPULAR_PRICING, BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface PricingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="popular-pricing-section" className="py-16 sm:py-24 bg-[#FDFBF7] border-t border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Transparent & Honest
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Popular Services <span className="italic font-light text-[#C5A059]">Pricing Guide</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            Quality beauty treatments at comfortable rates tailored for the Indirapuram community.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {POPULAR_PRICING.map((group, idx) => (
            <button
              key={idx}
              id={`pricing-tab-${idx}`}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-[#C5A059] text-white shadow-md'
                  : 'bg-white text-[#555] hover:bg-[#E8E1D5]/40 border border-[#E8E1D5]'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Tab Pricing List Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E1D5] shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E8E1D5] pb-4 mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              {POPULAR_PRICING[activeTab].category} Rates
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] bg-[#FDFBF7] border border-[#E8E1D5] px-3 py-1 rounded-full">
              Indirapuram Salon
            </span>
          </div>

          <div className="divide-y divide-[#E8E1D5]">
            {POPULAR_PRICING[activeTab].items.map((item, index) => (
              <div
                key={index}
                id={`price-item-${activeTab}-${index}`}
                className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-lg font-bold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#777] mt-0.5">{item.note}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <span className="font-serif font-bold text-lg text-[#C5A059]">
                    {item.price}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(item.name)}
                      className="px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all shadow-xs"
                    >
                      Book
                    </button>
                    <a
                      href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                        `Hello A One Beauty Parlour, what is the exact price for ${item.name}?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#E8F8F0] text-[#25D366] hover:bg-[#D5F2E3] border border-[#E8E1D5] transition-colors flex items-center justify-center"
                      title="Enquire on WhatsApp"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Disclaimer Note */}
          <div className="mt-8 pt-4 border-t border-[#E8E1D5] flex items-start gap-2.5 text-xs text-[#777] bg-[#FDFBF7] p-4 rounded-2xl border border-[#E8E1D5]">
            <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <p>
              Prices may vary depending on hair length, service requirements, product brand selection, and package combinations. Please contact us on WhatsApp or during parlour consultation for the latest customized pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
