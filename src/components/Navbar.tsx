import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar, ChevronRight, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenCall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenBooking,
  onOpenCall,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'hair', label: 'Hair' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCallClick = () => {
    if (onOpenCall) {
      onOpenCall();
    } else {
      window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self');
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D5]'
            : 'bg-[#FDFBF7] border-b border-[#E8E1D5]'
        }`}
      >
        {/* Top Info Notification Bar - Automatically hides when scrolling */}
        <div
          className={`hidden lg:block transition-all duration-300 overflow-hidden ${
            isScrolled
              ? 'max-h-0 opacity-0 py-0 border-none pointer-events-none'
              : 'max-h-12 opacity-100 py-1.5 border-b border-[#E8E1D5]/70 bg-[#FAF7F2]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-[#555]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-[#C5A059] bg-[#FDF2F2] px-2.5 py-0.5 rounded-full border border-[#E8E1D5]">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                Luxury Beauty & Bridal Studio • Est. 2014
              </span>
              <span className="text-[#DDD4C5]">•</span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-[#555]">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                10:30 AM – 8:30 PM (Open 7 Days)
              </span>
            </div>

            {/* Direct Contact Actions in Topbar */}
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-1.5 text-[#1A1A1A] hover:text-[#C5A059] transition-colors group cursor-pointer"
                id="topbar-call"
              >
                <div className="w-5 h-5 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                  <PhoneIcon className="w-3 h-3 text-[#C5A059] group-hover:text-white" />
                </div>
                <span>Call Us</span>
              </button>

              <a
                href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                  'Hello A One Beauty Parlour, I would like to enquire about your salon services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:text-[#1EBE5D] transition-colors group"
                id="topbar-whatsapp"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Compact Navbar Bar (Sleek Height) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between">
          {/* Clean Logo without Indirapuram clutter */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0 cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-black text-sm sm:text-base bg-white shadow-xs group-hover:bg-[#C5A059] group-hover:text-white transition-all transform group-hover:scale-105">
              A1
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg lg:text-xl font-serif font-black tracking-tight text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors leading-tight">
                A ONE <span className="text-[#C5A059] group-hover:text-[#1A1A1A] transition-colors">BEAUTY</span>
              </span>
              <span className="text-[9px] sm:text-[9.5px] tracking-[0.2em] uppercase text-[#777] font-bold group-hover:text-[#1A1A1A] transition-colors">
                PARLOUR & SALON
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - Compact, elegant spacing */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[11px] xl:text-[12px] font-bold uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-2 py-1 rounded-md transition-all duration-200 cursor-pointer group ${
                    isActive
                      ? 'text-[#C5A059] font-black'
                      : 'text-[#2C2C2C] hover:text-[#C5A059] hover:bg-[#F6EFE6]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Active & Hover Underline Accent */}
                  <span
                    className={`absolute bottom-0 left-1.5 right-1.5 h-[2px] rounded-full bg-[#C5A059] transition-all duration-200 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Action: Clean Proportional Book Appointment CTA Button */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              id="nav-book-appointment-btn"
              className="bg-[#C5A059] text-white px-4 sm:px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs hover:bg-[#B38E45] hover:shadow-md transition-all flex items-center gap-1.5 border border-white/20 active:scale-98 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Controls - Compact & Non-overlapping */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
              id="mobile-nav-book-btn"
            >
              Book Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#1A1A1A] bg-white border border-[#E8E1D5] hover:bg-[#F4ECE1] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-hamburger-btn"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            id="mobile-nav-drawer"
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FDFBF7] shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto border-l border-[#E8E1D5]"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E1D5]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif font-black text-sm bg-white">
                    A1
                  </div>
                  <div>
                    <span className="block font-serif font-bold text-sm sm:text-base text-[#1A1A1A]">
                      A ONE <span className="text-[#C5A059]">BEAUTY</span>
                    </span>
                    <span className="block text-[9px] uppercase tracking-wider text-[#777]">PARLOUR & SALON</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#E8E1D5] text-[#555] cursor-pointer"
                  id="mobile-drawer-close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Bold Styling */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  return (
                    <button
                      key={link.id}
                      id={`mobile-nav-link-${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#C5A059] text-white shadow-xs'
                          : 'text-[#1A1A1A] hover:bg-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#999]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions in Drawer */}
            <div className="pt-4 border-t border-[#E8E1D5] space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-drawer-book-btn"
                className="w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#B38E45] shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wider">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenCall) onOpenCall();
                    else window.open(`tel:${BUSINESS_CONFIG.phone}`, '_self');
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white border border-[#E8E1D5] text-[#1A1A1A] hover:border-[#C5A059] active:scale-98 cursor-pointer"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Us</span>
                </button>
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                    'Hello A One Beauty Parlour, I would like to ask about your salon services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-xs active:scale-98"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
