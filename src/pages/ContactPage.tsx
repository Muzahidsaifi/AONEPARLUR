import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FAQSection } from '../components/FAQSection';

interface ContactPageProps {
  onOpenCall?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenCall }) => {
  return (
    <div id="contact-page" className="w-full">
      <ContactSection onOpenCall={onOpenCall} />
      <FAQSection />
    </div>
  );
};
