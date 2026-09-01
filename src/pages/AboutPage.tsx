import React from 'react';
import { Sparkles, Award, Heart, CheckCircle2, ShieldCheck, Users, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { PhoneIcon } from '../components/icons/PhoneIcon';

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
  onOpenCall?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate, onOpenCall }) => {
  return (
    <div id="about-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTABLISHED 2014 • INDIRAPURAM</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221F1F] tracking-tight mb-4 leading-tight">
            A Trusted Beauty Destination in Indirapuram
          </h1>
          <p className="text-base sm:text-lg text-[#6B655D] font-light leading-relaxed">
            Delivering personalized beauty care, bridal elegance, and approachable pricing for women and families across Ghaziabad for over 10 years.
          </p>
        </div>

        {/* Section 1: Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF7F2]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                alt="A One Beauty Parlour Experience in Indirapuram"
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E2CEB0] shadow-lg flex items-center gap-3 max-w-xs">
              <Award className="w-9 h-9 text-[#A88438] shrink-0" />
              <div>
                <span className="block font-serif font-bold text-sm text-[#221F1F]">Serving Since 2014</span>
                <span className="block text-xs text-[#78716C]">Indirapuram, Ghaziabad</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8A713C] uppercase tracking-wider">
              <span>OUR STORY</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F]">
              Serving Indirapuram Since 2014
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              A One Beauty Parlour was founded in 2014 with a clear vision: to provide local women with a hygienic, comfortable, and truly professional beauty space where treatments are performed with expertise and warmth.
            </p>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Over the last decade, we have been fortunate to serve generations of clients — from young girls getting their first haircuts and party makeovers to brides stepping into new chapters of their lives.
            </p>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              We take immense pride in our commitment to honest rates, sterilized hygiene protocols, and attentive listening.
            </p>
          </div>
        </div>

        {/* Section 2: Our Philosophy */}
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E8DFC8] mb-20 shadow-xs">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-[#EFE3D3] flex items-center justify-center mx-auto mb-4 text-[#7A5B1E]">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1F] mb-4">
              Our Beauty Philosophy
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] italic leading-relaxed mb-6 font-serif">
              "Beauty is personal. We believe every client deserves genuine attention, gentle care, and a look that feels naturally and confidently like them."
            </p>
            <p className="text-sm text-[#78716C] leading-relaxed">
              We do not believe in one-size-fits-all treatments. Whether it's selecting a customized facial pack for sensitive skin or crafting bridal makeup that highlights your smile, we take the time to understand you first.
            </p>
          </div>
        </div>

        {/* Section 3: What We Offer */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1F] mb-3">
              What We Offer
            </h2>
            <p className="text-sm sm:text-base text-[#6B655D]">
              Complete head-to-toe beauty, grooming, and makeup services under one roof:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'Makeup & Glam', desc: 'Party, HD & event makeup' },
              { title: 'Bridal & Pre-Bridal', desc: 'Wedding packages & draping' },
              { title: 'Haircuts & Styling', desc: 'Face-flattering modern cuts' },
              { title: 'Hair Spa & Scalp', desc: 'Deep hydration & treatments' },
              { title: 'Facials & Cleanup', desc: 'Glow, detan & herbal packs' },
              { title: 'Waxing & Grooming', desc: 'Honey, RICA & Full body' },
              { title: 'Nails & Pedicure', desc: 'Manicures & heel smoothing' },
              { title: 'Smoothening', desc: 'Chemical hair straightening' },
              { title: 'Hair Colour', desc: 'Global colours & root touchup' },
              { title: 'Occasion Hairstyling', desc: 'Braids, buns & soft curls' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-4.5 rounded-2xl border border-[#E8DFC8] text-center hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#EFE3D3] flex items-center justify-center mx-auto mb-2 text-[#7A5B1E] text-xs font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-serif font-bold text-sm text-[#221F1F] mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#78716C]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Our Promise */}
        <div className="bg-[#F6EFE7] rounded-3xl p-8 sm:p-12 border border-[#E8DFC8] mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#8A713C] uppercase tracking-wider">
              OUR STANDARDS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1F] mt-1">
              Our Core Promises to Every Client
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Personalized Service',
                desc: 'We never rush through consultations and tailor every step to your comfort.',
              },
              {
                title: 'Professional Approach',
                desc: 'Trained staff with deep experience in hair, skin, and makeup application.',
              },
              {
                title: 'Comfortable Experience',
                desc: 'A calm, welcoming, exclusively women-friendly salon ambience.',
              },
              {
                title: 'Reasonable Pricing',
                desc: 'Honest, accessible local pricing without hidden charges or pushy sales.',
              },
              {
                title: 'Attention to Detail',
                desc: 'Precise threading, neat draping, and hygienic equipment sterilization.',
              },
              {
                title: 'Community Trust',
                desc: '10+ years of serving families across Indirapuram, Vaishali & Vasundhara.',
              },
            ].map((promise, pIdx) => (
              <div
                key={pIdx}
                className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#EDE4D4] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#A88438] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#221F1F]">
                    {promise.title}
                  </h4>
                  <p className="text-xs text-[#6B655D] mt-1 leading-relaxed">
                    {promise.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* End CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221F1F] mb-3">
            Book Your Appointment Today
          </h3>
          <p className="text-sm text-[#6B655D] mb-6">
            Experience the care and craftsmanship that women in Indirapuram have trusted since 2014.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-sm transition-all"
            >
              Book Appointment
            </button>
            <button
              onClick={() => (onOpenCall ? onOpenCall() : window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self'))}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-white hover:bg-[#FAF7F2] border border-[#DDD4C5] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Us</span>
            </button>
            <a
              href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                'Hello A One Beauty Parlour, I would like to book a salon appointment in Indirapuram.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors flex items-center gap-2"
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
