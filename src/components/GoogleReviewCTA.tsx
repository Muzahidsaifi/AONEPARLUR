import React from 'react';
import { Star, Heart } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface GoogleReviewCTAProps {
  onOpenReviewModal: () => void;
}

export const GoogleReviewCTA: React.FC<GoogleReviewCTAProps> = ({ onOpenReviewModal }) => {
  return (
    <section id="google-review-trust-strip" className="py-12 bg-[#FDFBF7] border-y border-[#E8E1D5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E1D5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full border border-[#C5A059]/40 bg-[#FDFBF7] flex items-center justify-center shrink-0 mx-auto md:mx-0 text-[#C5A059]">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                Had a Great Experience with Us?
              </h3>
              <p className="text-xs sm:text-sm text-[#555] mt-1 font-light">
                Your kind words help other women across Indirapuram discover A One Beauty Parlour.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenReviewModal}
              id="btn-write-review"
              className="px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Heart className="w-4 h-4" />
              <span>Share Review</span>
            </button>

            <a
              href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                'Hello A One Beauty Parlour, I loved my recent salon service! Here is my feedback: '
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-wa-review"
              className="px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors flex items-center gap-2 shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


