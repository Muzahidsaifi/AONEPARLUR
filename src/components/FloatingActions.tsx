import React from 'react';
import { Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface FloatingActionsProps {
  onOpenBooking: () => void;
  onOpenCall?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenBooking,
  onOpenCall,
}) => {
  const handleCallClick = () => {
    if (onOpenCall) {
      onOpenCall();
    } else {
      window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self');
    }
  };

  return (
    <>
      {/* Desktop & Tablet Floating Action Buttons */}
      {/* Left Floating WhatsApp Button with Authentic Icon */}
      <div className="fixed left-6 bottom-8 z-40 hidden sm:block">
        <a
          href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
            'Hello A One Beauty Parlour, I would like to ask about your salon services and book an appointment.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border border-white/20"
          aria-label="Chat on WhatsApp with A One Beauty Parlour"
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
          <span className="font-bold text-[11px] uppercase tracking-widest">WhatsApp Us</span>
        </a>
      </div>

      {/* Right Floating Call Button - reveals number on click */}
      <div className="fixed right-6 bottom-8 z-40 hidden sm:block">
        <button
          onClick={handleCallClick}
          id="floating-call-btn"
          className="group flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#B38E45] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border border-white/20 cursor-pointer"
          aria-label="Call A One Beauty Parlour"
        >
          <PhoneIcon className="w-5 h-5 text-white shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-[11px] uppercase tracking-widest">Call Us</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div
        id="mobile-bottom-action-bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E8E1D5] px-3 py-2 sm:hidden shadow-2xl flex items-center justify-between gap-2"
      >
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
            'Hello A One Beauty Parlour, I would like to enquire and book an appointment in Indirapuram.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-[10px] uppercase tracking-wider active:bg-[#1EBE5D] shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button - opens call modal */}
        <button
          onClick={handleCallClick}
          id="mobile-bar-call"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white text-[#1A1A1A] font-bold text-[10px] uppercase tracking-wider active:bg-[#EAE2D5] border border-[#E8E1D5] shadow-xs"
        >
          <PhoneIcon className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Call Us</span>
        </button>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBooking}
          id="mobile-bar-book"
          className="flex-1.2 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#C5A059] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm active:scale-98"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
