import React from 'react';
import { FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';

interface TermsPageProps {
  onBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  return (
    <div id="terms-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="text-xs font-bold text-[#8A713C] hover:underline mb-6"
        >
          ← Back to Home
        </button>

        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#E8DFC8] shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-[#A88438]" />
            <h1 className="font-serif text-3xl font-bold text-[#221F1F]">
              Terms of Service
            </h1>
          </div>

          <p className="text-xs text-[#78716C] mb-8">
            Last Updated: {new Date().getFullYear()} • {BUSINESS_CONFIG.name}
          </p>

          <div className="space-y-6 text-sm text-[#57534E] leading-relaxed">
            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                1. Appointments & Walk-ins
              </h2>
              <p>
                Appointments booked online or via WhatsApp are subject to confirmation by our parlour team. While we welcome walk-ins, pre-booking is advised for bridal makeup and extensive chemical/hair treatments.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                2. Pricing & Payments
              </h2>
              <p>
                Service rates displayed on this website represent standard starting estimates. Final charges may vary based on customized requirements, hair length, and selected products. We accept Cash, UPI, and Digital Payments.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                3. Health & Skin Sensitivities
              </h2>
              <p>
                Please inform our beauticians before treatment if you have active allergies, highly sensitive skin, or specific medical conditions so we can recommend suitable products (such as RICA waxing or sensitive skin facials).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
