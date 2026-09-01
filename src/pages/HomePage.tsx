import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { TrustBar } from '../components/TrustBar';
import { AboutSection } from '../components/AboutSection';
import { FeaturedServices } from '../components/FeaturedServices';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BeautyJourney } from '../components/BeautyJourney';
import { BridalSpotlight } from '../components/BridalSpotlight';
import { TransformationGallery } from '../components/TransformationGallery';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GoogleReviewCTA } from '../components/GoogleReviewCTA';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenReviewModal: () => void;
  onOpenCall?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenReviewModal,
  onOpenCall,
}) => {
  return (
    <div id="home-page" className="w-full">
      {/* 1. Hero Carousel */}
      <HeroSlider onOpenBooking={onOpenBooking} onNavigate={onNavigate} onOpenCall={onOpenCall} />

      {/* 2. Quick Trust Bar */}
      <TrustBar />

      {/* 3. About Preview */}
      <AboutSection onNavigate={onNavigate} onOpenBooking={() => onOpenBooking()} />

      {/* 4. Featured 6 Services */}
      <FeaturedServices onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

      {/* 5. Complete Services Filterable Catalog */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. 4-Step Beauty Journey */}
      <BeautyJourney onOpenBooking={() => onOpenBooking()} />

      {/* 8. Bridal Spotlight (Luxurious Dark Aesthetic) */}
      <BridalSpotlight onOpenBooking={onOpenBooking} onNavigate={onNavigate} />

      {/* 9. Beauty Transformations Gallery */}
      <TransformationGallery />

      {/* 10. Popular Services Pricing */}
      <PricingSection onOpenBooking={onOpenBooking} />

      {/* 11. Testimonials */}
      <TestimonialsSection onOpenReviewModal={onOpenReviewModal} />

      {/* 12. Google Review Trust Banner */}
      <GoogleReviewCTA onOpenReviewModal={onOpenReviewModal} />

      {/* 13. FAQ Section */}
      <FAQSection />

      {/* 14. Contact Section */}
      <ContactSection onOpenCall={onOpenCall} />
    </div>
  );
};
