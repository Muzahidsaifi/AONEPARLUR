import React from 'react';
import { Star, MessageSquare, Heart, Quote, PlusCircle } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_CONFIG } from '../data/siteData';

interface TestimonialsSectionProps {
  onOpenReviewModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenReviewModal,
}) => {
  return (
    <section id="testimonials-section" className="py-16 sm:py-24 bg-white border-y border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Client Real Reviews
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Loved By Our <span className="italic font-light text-[#C5A059]">Valued Clients</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            Real feedback and love from women across Indirapuram and Ghaziabad who count on us for their beauty and bridal celebrations.
          </p>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${index}`}
              className="bg-[#FDFBF7] p-7 sm:p-9 rounded-3xl border border-[#E8E1D5] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                      />
                    ))}
                  </div>

                  <Quote className="w-6 h-6 text-[#C5A059]/40" />
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#1A1A1A] leading-relaxed mb-6">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E1D5] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-[#1A1A1A] text-base">
                    {testimonial.clientName}
                  </h4>
                  {testimonial.location && (
                    <p className="text-xs text-[#777]">{testimonial.location}</p>
                  )}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white border border-[#E8E1D5] text-[#C5A059]">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenReviewModal}
            id="share-experience-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-lg transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Share Your Experience</span>
          </button>
        </div>
      </div>
    </section>
  );
};
