import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { ReviewModal } from './components/ReviewModal';
import { CallModal } from './components/CallModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { MakeupPage } from './pages/MakeupPage';
import { HairPage } from './pages/HairPage';
import { BridalPage } from './pages/BridalPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const [isCallOpen, setIsCallOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Handle navigation
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedBlogSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName || '');
    setIsBookingOpen(true);
  };

  const handleSelectBlog = (slug: string) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render current page view
  const renderContent = () => {
    if (currentPage === 'blog-post' && selectedBlogSlug) {
      return (
        <BlogPostPage
          slug={selectedBlogSlug}
          onBack={() => handleNavigate('blog')}
          onOpenBooking={() => handleOpenBooking()}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenCall={() => setIsCallOpen(true)}
            onOpenReviewModal={() => setIsReviewOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenCall={() => setIsCallOpen(true)}
          />
        );
      case 'services':
        return <ServicesPage onOpenBooking={handleOpenBooking} />;
      case 'makeup':
        return <MakeupPage onOpenBooking={handleOpenBooking} />;
      case 'hair':
        return <HairPage onOpenBooking={handleOpenBooking} />;
      case 'bridal':
        return <BridalPage onOpenBooking={handleOpenBooking} />;
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return <TestimonialsPage onOpenReviewModal={() => setIsReviewOpen(true)} />;
      case 'blog':
        return <BlogPage onSelectPost={handleSelectBlog} />;
      case 'contact':
        return <ContactPage onOpenCall={() => setIsCallOpen(true)} />;
      case 'privacy':
        return <PrivacyPolicyPage onBack={() => handleNavigate('home')} />;
      case 'terms':
        return <TermsPage onBack={() => handleNavigate('home')} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenCall={() => setIsCallOpen(true)}
            onOpenReviewModal={() => setIsReviewOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#221F1F] font-sans selection:bg-[#EFE3D3] selection:text-[#7A5B1E]">
      {/* Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCall={() => setIsCallOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full pb-16 sm:pb-0">{renderContent()}</main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCall={() => setIsCallOpen(true)}
      />

      {/* Floating Call, WhatsApp & Mobile Bottom Conversion Bar */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
        onOpenCall={() => setIsCallOpen(true)}
      />

      {/* Booking Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={preselectedService}
        onOpenCall={() => setIsCallOpen(true)}
      />

      {/* Direct Call Reveal Modal */}
      <CallModal
        isOpen={isCallOpen}
        onClose={() => setIsCallOpen(false)}
      />

      {/* Client Feedback / Review Modal */}
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />
    </div>
  );
}

export default App;
