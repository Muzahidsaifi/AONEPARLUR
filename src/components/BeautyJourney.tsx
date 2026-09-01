import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BEAUTY_JOURNEY_STEPS } from '../data/siteData';

interface BeautyJourneyProps {
  onOpenBooking: () => void;
}

export const BeautyJourney: React.FC<BeautyJourneyProps> = ({ onOpenBooking }) => {
  return (
    <section id="beauty-journey-section" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            How It Works
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Your 4-Step <span className="italic font-light text-[#C5A059]">Beauty Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            From the moment you walk through our doors in Indirapuram, we ensure a seamless and pampering journey.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {BEAUTY_JOURNEY_STEPS.map((step, index) => (
            <div
              key={index}
              id={`journey-step-${index}`}
              className="relative bg-white p-7 sm:p-8 rounded-3xl border border-[#E8E1D5] shadow-xs hover:border-[#C5A059] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-bold text-[#C5A059]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#C5A059]/40 bg-[#FDFBF7] flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E1D5] text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            id="journey-book-now-btn"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-sm transition-all"
          >
            <span>Start Your Beauty Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
