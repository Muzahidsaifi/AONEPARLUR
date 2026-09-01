import React from 'react';
import { MapPin, Clock, Star, ArrowRight, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  onOpenCall?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking, onOpenCall }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#141414] text-white border-t border-[#2A2A2A]">
      {/* Top Pre-Footer Banner CTA */}
      <div className="border-b border-[#222222] py-10 sm:py-14 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FDF2F2] text-[#C46B6B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Indirapuram, Ghaziabad • Since 2014</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Ready to Experience Your <span className="italic font-light text-[#C5A059]">Best Glow?</span>
            </h3>
            <p className="text-sm text-[#A0A0A0] mt-2 font-light">
              Visit our parlour or book your preferred slot in advance for bridal, makeup, skincare & hair spa.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              id="footer-top-book-btn"
              className="px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Appointment
            </button>

            {/* WhatsApp CTA with authentic SVG */}
            <a
              href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                'Hello A One Beauty Parlour, I would like to book a salon appointment in Indirapuram.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-xl flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-bold text-lg bg-[#222]">
                A1
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-white leading-tight">
                  A ONE <span className="text-[#C5A059]">BEAUTY</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-[#888]">Indirapuram • Since 2014</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B0B0B0] leading-relaxed font-light">
              Trusted women's beauty, hair, makeup, skincare, and bridal parlour in Indirapuram, Ghaziabad. Delivering quality care, hygiene, and personalized service for over a decade.
            </p>

            {/* Google Rating Badge */}
            <div className="p-3.5 rounded-2xl bg-[#1F1F1F] border border-[#2F2F2F] flex items-center gap-3">
              <div className="flex text-[#C5A059] text-sm">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">4.9 / 5.0 Rating</span>
                <span className="block text-[10px] text-[#888]">Loved by 1000+ local women</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 tracking-wider uppercase text-[12px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Explore Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A8A8A8]">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Parlour' },
                { id: 'services', label: 'All Salon Services' },
                { id: 'makeup', label: 'Bridal & Party Makeup' },
                { id: 'hair', label: 'Hair Care & Hair Spa' },
                { id: 'bridal', label: 'Bridal Packages' },
                { id: 'gallery', label: 'Transformations Gallery' },
                { id: 'testimonials', label: 'Customer Reviews' },
                { id: 'blog', label: 'Beauty Tips & Blog' },
                { id: 'contact', label: 'Contact & Location' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-2 group text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#C5A059] transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Salon Services */}
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-4 tracking-wider uppercase text-[12px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Popular Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A8A8A8]">
              {[
                'Gold & Herbal Facials',
                'Deep Face Cleanup & Detan',
                'Honey & RICA Waxing',
                'Party & Engagement Makeup',
                'HD Bridal Makeup Packages',
                'Haircut & Styling Blow Dry',
                'Deep Scalp Hair Spa',
                'Hair Smoothening / Keratin',
                'Manicure & Spa Pedicure',
                'Saree & Lehenga Draping',
              ].map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-2 text-left group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#555] group-hover:bg-[#C5A059] transition-colors" />
                    <span>{srv}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-white mb-4 tracking-wider uppercase text-[12px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Contact & Hours</span>
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#A8A8A8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-white/90">{BUSINESS_CONFIG.location.fullDisplay}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-[#C5A059] shrink-0" />
                <button
                  onClick={() => (onOpenCall ? onOpenCall() : window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self'))}
                  className="hover:text-[#C5A059] font-semibold text-white transition-colors cursor-pointer text-left"
                >
                  Click to Call / Helpline
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold text-white transition-colors"
                >
                  WhatsApp Booking
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{BUSINESS_CONFIG.openingHours.allDays}</p>
                  <p className="text-[11px] text-[#888]">Open 7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons in Footer */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => (onOpenCall ? onOpenCall() : window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self'))}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider text-center bg-[#252525] hover:bg-[#333] text-white transition-colors border border-[#3A3A3A] cursor-pointer"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call Us</span>
              </button>
              <a
                href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent('Hello A One Beauty Parlour')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider text-center bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Disclaimers */}
        <div className="mt-12 pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777]">
          <p>
            © 2014–{currentYear} <span className="text-[#C5A059] font-medium">A One Beauty Parlour</span>. All Rights Reserved. Serving Indirapuram, Ghaziabad.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

