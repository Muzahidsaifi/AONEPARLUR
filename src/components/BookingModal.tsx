import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG, ALL_SERVICES } from '../data/siteData';
import { AppointmentFormData } from '../types';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onOpenCall?: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  onOpenCall,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    mobileNumber: '',
    service: initialService || 'Party Makeup & Glam',
    preferredDate: '',
    preferredTime: '12:00 PM',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hello A One Beauty Parlour, I would like to book an appointment:
• Name: ${formData.fullName || 'Client'}
• Phone: ${formData.mobileNumber || 'Not provided'}
• Service: ${formData.service || 'Salon Service'}
• Date: ${formData.preferredDate || 'Flexible'}
• Time: ${formData.preferredTime || 'Flexible'}
• Note: ${formData.message || 'None'}`;

    return `https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '01:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        id="booking-modal-dialog"
        className="relative w-full max-w-lg bg-[#FDFBF7] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#E8E1D5] shadow-2xl my-auto text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="booking-modal-close-btn"
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#F4EFE6] hover:bg-[#E8E1D5] text-[#555] hover:text-[#1A1A1A] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-3">
            <div className="w-14 h-14 rounded-full bg-[#E8F8F0] border border-[#BDE8D0] flex items-center justify-center mx-auto mb-3 text-[#25D366]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-1">
              Appointment Request Sent!
            </h3>

            <p className="text-xs text-[#555] leading-relaxed mb-4 max-w-sm mx-auto font-light">
              Thank you, <span className="font-bold text-[#1A1A1A]">{formData.fullName}</span>. We have noted your request for <span className="font-bold text-[#C5A059]">{formData.service}</span>.
            </p>

            <div className="bg-white p-3.5 rounded-xl border border-[#E8E1D5] mb-4 text-left text-xs text-[#444] space-y-1">
              <p><strong className="text-[#1A1A1A]">Service:</strong> {formData.service}</p>
              {formData.preferredDate && <p><strong className="text-[#1A1A1A]">Date:</strong> {formData.preferredDate}</p>}
              {formData.preferredTime && <p><strong className="text-[#1A1A1A]">Time:</strong> {formData.preferredTime}</p>}
              <p><strong className="text-[#1A1A1A]">Parlour:</strong> Indirapuram, Ghaziabad</p>
            </div>

            <div className="space-y-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="booking-modal-wa-confirm-btn"
                className="w-full py-3 px-4 rounded-full text-[11px] font-black uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Instant WhatsApp Confirmation</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2 text-xs font-bold text-[#666] hover:text-[#1A1A1A]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-3 pr-8">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#FDF2F2] text-[#C46B6B] rounded-full text-[9px] font-bold uppercase tracking-widest mb-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                  <span>A One Beauty Parlour</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-tight">
                  Book Your <span className="italic font-light text-[#C5A059]">Appointment</span>
                </h3>
              </div>
            </div>

            {/* Zero-Scroll Compact Grid Form */}
            <form onSubmit={handleFormSubmit} className="space-y-2.5">
              {/* Row 1: Name & Phone in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-0.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD4C5] text-xs text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-0.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98XXXXXXXX"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD4C5] text-xs text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
              </div>

              {/* Row 2: Service Selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-0.5">
                  Select Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD4C5] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                >
                  <option value="General Consultation / Multiple Services">
                    General Consultation / Multiple Services
                  </option>
                  {ALL_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name} {srv.startingPrice ? `(${srv.startingPrice})` : ''}
                    </option>
                  ))}
                  <option value="Bridal Makeup & Pre-Bridal Consultation">
                    Bridal Makeup & Pre-Bridal Consultation
                  </option>
                </select>
              </div>

              {/* Row 3: Date & Time in 2 Columns */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-0.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD4C5] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-0.5">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD4C5] text-xs text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Special Notes (Compact) */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-0.5">
                  Occasion / Special Note (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wedding reception at 6 PM, party makeup..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DDD4C5] text-xs text-[#1A1A1A] placeholder-[#999] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                />
              </div>

              {/* Action Buttons: 2 Side-by-Side Clean Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="submit"
                  id="booking-form-submit-btn"
                  className="w-full py-3 rounded-full text-[11px] font-black uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-md transition-all active:scale-98 text-center"
                >
                  Confirm Booking
                </button>

                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="booking-form-wa-direct-btn"
                  className="w-full py-3 rounded-full font-black text-[11px] uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-1.5 shadow-md active:scale-98 text-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Book</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
