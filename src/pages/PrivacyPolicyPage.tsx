import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
  return (
    <div id="privacy-policy-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="text-xs font-bold text-[#8A713C] hover:underline mb-6"
        >
          ← Back to Home
        </button>

        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#E8DFC8] shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-[#A88438]" />
            <h1 className="font-serif text-3xl font-bold text-[#221F1F]">
              Privacy Policy
            </h1>
          </div>

          <p className="text-xs text-[#78716C] mb-8">
            Last Updated: {new Date().getFullYear()} • {BUSINESS_CONFIG.name}, Indirapuram, Ghaziabad
          </p>

          <div className="space-y-6 text-sm text-[#57534E] leading-relaxed">
            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                1. Information We Collect
              </h2>
              <p>
                When you schedule an appointment or submit an enquiry through {BUSINESS_CONFIG.name}’s website or WhatsApp, we collect basic contact details such as your name, phone number, and service requirements.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                2. How We Use Your Information
              </h2>
              <p>
                Your information is strictly used to confirm your salon booking, send appointment reminders, answer service queries, and provide customer support. We do not sell or rent your contact information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                3. WhatsApp & Phone Communications
              </h2>
              <p>
                By initiating a chat with our business phone ({BUSINESS_CONFIG.phone}) or submitting an appointment form, you consent to receive direct communications regarding your beauty service requests.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-bold text-lg text-[#221F1F] mb-2">
                4. Contact Us
              </h2>
              <p>
                For privacy inquiries or to update your booking details, please contact us at {BUSINESS_CONFIG.phone} or visit our parlour in Indirapuram, Ghaziabad.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
