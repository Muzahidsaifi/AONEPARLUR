import React, { useState } from 'react';
import { MapPin, Clock, Send, CheckCircle2, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface ContactSectionProps {
  onOpenCall?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCall }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCallClick = () => {
    if (onOpenCall) {
      onOpenCall();
    } else {
      window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self');
    }
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FDF2F2] text-[#C46B6B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Find Us in Indirapuram</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Visit A One <span className="italic font-light text-[#C5A059]">Beauty Parlour</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555] font-light max-w-2xl mx-auto">
            Conveniently accessible for clients across Indirapuram, Vaishali, Vasundhara, and surrounding Ghaziabad areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left 5 Cols: Contact Information Card */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-[#E8E1D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-bold text-lg bg-[#FDFBF7]">
                  A1
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    {BUSINESS_CONFIG.name}
                  </h3>
                  <p className="text-xs text-[#777] uppercase tracking-wider font-semibold">
                    Indirapuram, Ghaziabad
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#C5A059]/40 bg-[#FDFBF7] flex items-center justify-center shrink-0 text-[#C5A059]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                      Our Location
                    </span>
                    <p className="text-sm font-bold text-[#1A1A1A] mt-0.5">
                      {BUSINESS_CONFIG.location.fullDisplay}
                    </p>
                    <p className="text-xs text-[#777] mt-0.5 font-light">
                      Serving all blocks of Indirapuram & nearby areas
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#C5A059]/40 bg-[#FDFBF7] flex items-center justify-center shrink-0 text-[#C5A059]">
                    <PhoneIcon className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                      Direct Helpline
                    </span>
                    <button
                      onClick={handleCallClick}
                      className="text-base font-serif font-bold text-[#1A1A1A] hover:text-[#C5A059] transition-colors cursor-pointer text-left block"
                    >
                      Click to Call Parlour
                    </button>
                    <p className="text-xs text-[#777] mt-0.5 font-light">Instant assistance & directions</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#25D366]/40 bg-[#E8F8F0] flex items-center justify-center shrink-0 text-[#25D366]">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#25D366] uppercase tracking-widest">
                      WhatsApp Support
                    </span>
                    <a
                      href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                        'Hello A One Beauty Parlour, I want to enquire about your services.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-serif font-bold text-[#1A1A1A] hover:text-[#25D366] transition-colors block"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="text-xs text-[#777] mt-0.5 font-light">Instant booking & price enquiry</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full border border-[#C5A059]/40 bg-[#FDFBF7] flex items-center justify-center shrink-0 text-[#C5A059]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                      Opening Hours
                    </span>
                    <p className="text-sm font-bold text-[#1A1A1A] mt-0.5">
                      {BUSINESS_CONFIG.openingHours.allDays}
                    </p>
                    <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                      Open 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="mt-8 pt-6 border-t border-[#E8E1D5] grid grid-cols-2 gap-3">
              <button
                onClick={handleCallClick}
                id="contact-box-call-btn"
                className="py-3.5 px-4 rounded-full text-center text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-98"
              >
                <PhoneIcon className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </button>
              <a
                href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                  'Hello A One Beauty Parlour, I would like to visit your parlour in Indirapuram.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-box-wa-btn"
                className="py-3.5 px-4 rounded-full text-center text-[11px] font-bold uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-xs flex items-center justify-center gap-1.5 transition-all active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right 7 Cols: Quick Message Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Enquiry Form */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8E1D5] shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">
                Send a <span className="italic font-light text-[#C5A059]">Direct Message</span>
              </h3>
              <p className="text-xs text-[#666] mb-6 font-light">
                Have a special request or bridal requirement? Drop us a quick note and our team will get back promptly.
              </p>

              {isSubmitted ? (
                <div className="py-8 text-center bg-[#FDFBF7] rounded-2xl border border-[#E8E1D5]">
                  <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-3" />
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#666] mt-2 max-w-sm mx-auto font-light">
                    Thank you, {formData.name}. We will contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="mt-4 text-xs font-bold text-[#C5A059] uppercase tracking-wider hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#444] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Roy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#DDD4C5] text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#444] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#DDD4C5] text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#444] mb-1">
                      Your Message / Enquiry
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what service you're interested in (e.g., bridal makeup, hair keratin, hydra facial)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#DDD4C5] text-sm text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Mock / Directions Box */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E1D5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FDFBF7] border border-[#E8E1D5] flex items-center justify-center text-[#C5A059] shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1A1A1A]">
                    Locate Us in Indirapuram
                  </h4>
                  <p className="text-xs text-[#666] font-light">
                    Near Shipra Mall / Kala Patthar road landmark
                  </p>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  'A One Beauty Parlour Indirapuram Ghaziabad'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-[#1A1A1A] bg-[#F4ECE1] hover:bg-[#EAE0D0] border border-[#DDD4C5] transition-colors text-center shrink-0"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
