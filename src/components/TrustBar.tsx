import React from 'react';
import { Award, Sparkles, HeartHandshake, MapPin } from 'lucide-react';
import { TRUST_BAR_ITEMS } from '../data/siteData';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-5 h-5 text-[#C5A059]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#C5A059]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#C5A059]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#C5A059]" />,
};

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar" className="bg-white border-y border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_BAR_ITEMS.map((item, index) => (
            <div
              key={index}
              id={`trust-item-${index}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8E1D5] hover:border-[#C5A059]/60 transition-all group"
            >
              <div className="w-12 h-12 rounded-full border border-[#C5A059]/40 flex items-center justify-center shrink-0 group-hover:bg-[#C5A059]/10 transition-colors">
                {iconMap[item.iconName]}
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight">
                  {item.title}
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#777] mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

