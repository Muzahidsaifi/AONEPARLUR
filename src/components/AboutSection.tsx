import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Heart } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section id="about-preview-section" className="py-16 sm:py-24 bg-white border-y border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with Luxury Decorative accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg border border-[#E8E1D5]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                alt="A One Beauty Parlour Team & Salon Environment in Indirapuram"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:right-6 z-20 bg-[#FDFBF7] p-5 rounded-3xl border border-[#E8E1D5] shadow-xl flex items-center gap-4 max-w-[260px]">
              <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-bold text-xl shrink-0 bg-white">
                10+
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A] leading-snug">
                  Years of Continuous Service
                </p>
                <p className="text-[10px] uppercase tracking-wider text-[#777] mt-0.5">In Indirapuram, Ghaziabad</p>
              </div>
            </div>

            {/* Secondary Accent image preview */}
            <div className="hidden sm:block absolute -top-4 -left-4 z-0 w-44 h-44 rounded-3xl bg-[#FDFBF7] border border-[#E8E1D5] -rotate-3" />
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6">
            <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              About A One Beauty Parlour
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15] mb-4">
              A Trusted Beauty Destination in <span className="italic font-light text-[#C5A059]">Indirapuram</span> Since 2014
            </h2>

            <p className="text-base sm:text-lg text-[#555] leading-relaxed mb-4 font-light">
              A One Beauty Parlour has been serving clients in Indirapuram, Ghaziabad since 2014. We offer complete beauty, hair, makeup, skin, and grooming services under one roof.
            </p>

            <p className="text-sm sm:text-base text-[#777] leading-relaxed mb-8 font-light">
              Our focus is simple — quality service, personalized attention, professional results, and prices that remain comfortable for the local community.
            </p>

            {/* Statistics strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-5 border-y border-[#E8E1D5] mb-8">
              <div className="text-left">
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#C5A059]">
                  2014
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#777] mt-1">
                  Established
                </span>
              </div>
              <div className="text-left border-l border-[#E8E1D5] pl-3 sm:pl-4">
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#C5A059]">
                  10+ Yrs
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#777] mt-1">
                  Experience
                </span>
              </div>
              <div className="text-left border-l border-[#E8E1D5] pl-3 sm:pl-4">
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#C5A059]">
                  A–Z
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#777] mt-1">
                  Services
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                id="about-know-more-btn"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-sm transition-all"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                id="about-book-btn"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-[#C5A059] bg-white border border-[#E8E1D5] hover:border-[#C5A059] transition-all"
              >
                <Heart className="w-4 h-4 text-[#C5A059]" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
