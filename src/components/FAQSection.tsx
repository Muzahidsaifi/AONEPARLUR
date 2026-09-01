import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_CONFIG } from '../data/siteData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-white border-y border-[#E8E1D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Commonly Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Frequently Asked <span className="italic font-light text-[#C5A059]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            Everything you need to know about visiting A One Beauty Parlour in Indirapuram, Ghaziabad.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#FDFBF7] rounded-3xl border border-[#E8E1D5] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E8E1D5] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#C5A059] text-white border-[#C5A059]' : 'text-[#C5A059] bg-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#555] leading-relaxed border-t border-[#E8E1D5]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-[#FDFBF7] border border-[#E8E1D5]">
          <p className="font-serif font-bold text-xl text-[#1A1A1A] mb-1">
            Have a question not answered here?
          </p>
          <p className="text-xs sm:text-sm text-[#555] mb-5 font-light">
            Feel free to WhatsApp or call our Indirapuram parlour team directly.
          </p>
          <a
            href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
              'Hello A One Beauty Parlour, I have a quick question about your services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#128C7E] hover:bg-[#0E7569] transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (9717748949)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
