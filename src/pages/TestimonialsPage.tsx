import React from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GoogleReviewCTA } from '../components/GoogleReviewCTA';

interface TestimonialsPageProps {
  onOpenReviewModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenReviewModal }) => {
  return (
    <div id="testimonials-page" className="w-full">
      <TestimonialsSection onOpenReviewModal={onOpenReviewModal} />
      <GoogleReviewCTA onOpenReviewModal={onOpenReviewModal} />
    </div>
  );
};
