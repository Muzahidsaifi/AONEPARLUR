import React from 'react';
import { History, Sparkles, UserCheck, BadgePercent, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  History: <History className="w-5 h-5 text-[#C5A059]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#C5A059]" />,
  UserCheck: <UserCheck className="w-5 h-5 text-[#C5A059]" />,
  BadgePercent: <BadgePercent className="w-5 h-5 text-[#C5A059]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#C5A059]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us-section" className="py-16 sm:py-24 bg-white border-y border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Our Experience & Commitment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Why Women Choose <span className="italic font-light text-[#C5A059]">A One Beauty</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            A combination of 10+ years of dedicated expertise, pristine hygiene, approachable pricing, and heartfelt care.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              id={`why-card-${index}`}
              className="bg-[#FDFBF7] p-7 rounded-3xl border border-[#E8E1D5] shadow-xs hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/40 flex items-center justify-center mb-5 bg-white">
                  {iconMap[item.iconName]}
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm text-[#555] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D5] flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#777]">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>Indirapuram Standards</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

