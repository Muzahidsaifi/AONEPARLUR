import React from 'react';
import { Sparkles, Calendar, Check, Scissors, Waves } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface HairPageProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const HairPage: React.FC<HairPageProps> = ({ onOpenBooking }) => {
  const hairServices = [
    {
      title: 'Precision Haircuts & Styling',
      price: 'Starting from ₹249',
      desc: 'Layered cut, feather cut, step cut, classic bob, straight cut, and customized face-framing styles with blow dry.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
      features: ['Personalized face shape consultation', 'Split ends removal', 'Styling blow-dry included'],
    },
    {
      title: 'Intensive Nourishing Hair Spa',
      price: 'Starting from ₹699',
      desc: 'Deep restorative hair mask, warm steam therapy, relaxing scalp acupressure massage, and smoothing serum polish.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
      features: ['Controls frizz and dry texture', 'Strengthens fragile roots', 'Relieves mental stress and tension'],
    },
    {
      title: 'Hair Smoothening / Straightening',
      price: 'Price on Consultation',
      desc: 'Permanent and semi-permanent smoothing solutions that transform unruly curls into sleek, silky, manageable hair.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
      features: ['Long lasting sleek finish', 'Eliminates morning styling hassle', 'Tailored to hair density and length'],
    },
    {
      title: 'Hair Colour, Global & Highlights',
      price: 'Starting from ₹499',
      desc: 'Root touch-up, 100% grey coverage, global fashion shades, balayage streaks, and caramel/chocolate highlights.',
      image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
      features: ['Rich multi-dimensional luster', 'Ammonia-free gentle formulations', 'Post-colour protective wash'],
    },
    {
      title: 'Occasion Hairstyling & Curls',
      price: 'Starting from ₹399',
      desc: 'Beach waves, retro curls, messy buns, waterfall braids, and ethnic party hairstyles tailored to your outfit.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
      features: ['Long-lasting hold throughout event', 'Heat protectant application', 'Supports floral accessories'],
    },
    {
      title: 'Scalp Detox & Anti-Dandruff Spa',
      price: 'Starting from ₹899',
      desc: 'Targeted scalp exfoliation and soothing botanical serum therapy to clear flaking and soothe irritation.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
      features: ['Purifies scalp build-up', 'Reduces hair fall due to breakage', 'Cooling, refreshing sensation'],
    },
  ];

  return (
    <div id="hair-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Scissors className="w-3.5 h-3.5" />
            <span>HAIR CARE & STYLING • INDIRAPURAM</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221F1F] tracking-tight mb-4">
            Professional Hair Services
          </h1>
          <p className="text-base sm:text-lg text-[#6B655D] font-light">
            Revive your hair's natural bounce, shine, and health with expert cuts, deeply relaxing hair spas, and occasion styling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hairServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-[#EAE0D3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#7A5B1E] border border-[#E2CEB0]">
                    {service.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#221F1F] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#EDE4D4]">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#44403C]">
                        <Check className="w-3.5 h-3.5 text-[#A88438] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#EFE8DA] flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#A88438] to-[#B8860B] hover:brightness-105 transition-all shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Slot</span>
                </button>
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Hello A One Beauty Parlour, I am inquiring about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-[#25D366] bg-[#E8F8F0] hover:bg-[#D5F2E3] transition-colors flex items-center justify-center"
                  title="Enquire on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
