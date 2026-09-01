import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { PricingSection } from '../components/PricingSection';

interface ServicesPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <div id="services-page" className="w-full">
      <ServicesSection onOpenBooking={onOpenBooking} />
      <PricingSection onOpenBooking={onOpenBooking} />
    </div>
  );
};
