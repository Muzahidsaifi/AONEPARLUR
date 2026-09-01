import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, MapPin, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="call-modal-overlay"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        id="call-modal-dialog"
        className="relative w-full max-w-md bg-[#FDFBF7] rounded-3xl p-6 sm:p-7 border border-[#E8E1D5] shadow-2xl text-[#1A1A1A] my-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="call-modal-close-btn"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F4EFE6] hover:bg-[#E8E1D5] text-[#555] hover:text-[#1A1A1A] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF2F2] text-[#C46B6B] rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Official Parlour Contact</span>
          </div>

          <div className="w-16 h-16 rounded-full bg-[#F5ECE0] border-2 border-[#C5A059] flex items-center justify-center mx-auto mb-3 text-[#C5A059] shadow-md">
            <PhoneIcon className="w-8 h-8 text-[#C5A059]" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
            A One <span className="italic font-light text-[#C5A059]">Beauty Parlour</span>
          </h3>
          <p className="text-xs text-[#666] mt-1 flex items-center justify-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            Indirapuram, Ghaziabad
          </p>
        </div>

        {/* Revealed Number Display Box */}
        <div className="bg-white rounded-2xl p-5 border-2 border-[#C5A059]/40 shadow-xs mb-5 text-center">
          <span className="block text-[11px] font-bold text-[#888] uppercase tracking-widest mb-1">
            Direct Helpline & Booking
          </span>
          <div className="font-serif text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-wider my-1 select-all">
            +91 {BUSINESS_CONFIG.phone}
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#555] mt-2">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Open 7 Days: 10:30 AM – 8:30 PM</span>
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="space-y-2.5">
          {/* Direct Call Button */}
          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            id="call-modal-dial-btn"
            className="w-full py-3.5 px-4 rounded-full text-xs font-black uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Direct Call (+91 {BUSINESS_CONFIG.phone})</span>
          </a>

          {/* Copy Number Button */}
          <button
            onClick={handleCopy}
            id="call-modal-copy-btn"
            className="w-full py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#F4EFE6] hover:bg-[#EAE2D5] border border-[#DDD4C5] transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#25D366] font-extrabold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#555]" />
                <span>Copy Phone Number</span>
              </>
            )}
          </button>

          {/* WhatsApp Action */}
          <a
            href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
              'Hello A One Beauty Parlour, I am contacting you for salon enquiry & booking in Indirapuram.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            id="call-modal-whatsapp-btn"
            className="w-full py-3 px-4 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
