import { BusinessConfig, ServiceItem, Testimonial, GalleryItem, FAQItem, BlogPost } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'A One Beauty Parlour',
  tagline: 'Your Beauty, Our Passion • Premium Women’s Beauty & Salon Services',
  establishedYear: 2014,
  phone: '9717748949',
  whatsapp: '9717748949',
  email: 'info@aonebeautyparlour.com',
  location: {
    area: 'Indirapuram',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    country: 'India',
    fullDisplay: 'Indirapuram, Ghaziabad, Uttar Pradesh, India',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.772596847253!2d77.3614!3d28.6415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf00798e4dc0f%3A0x6b6f7924ef130f40!2sIndirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    googleMapsUrl: 'https://maps.google.com/?q=Indirapuram,+Ghaziabad,+Uttar+Pradesh',
  },
  openingHours: {
    weekdays: '10:30 AM - 8:30 PM',
    weekends: '10:00 AM - 9:00 PM',
    allDays: 'Monday to Sunday: 10:30 AM - 8:30 PM',
    timing: 'Open 7 Days a Week (10:30 AM – 8:30 PM)',
  },
  serviceAreas: [
    'Indirapuram (All Blocks: Ahinsa Khand, Nyay Khand, Niti Khand, Vaibhav Khand, Shakti Khand)',
    'Vaishali',
    'Vasundhara',
    'Kaushambi',
    'Noida Sector 62 / 63',
    'Crossing Republik & Nearby Ghaziabad',
  ],
};

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    eyebrow: 'BEAUTY • CONFIDENCE • ELEGANCE',
    heading: 'Your Beauty, Our Passion',
    subheading:
      'Premium beauty, makeup, hair and bridal services in Indirapuram, Ghaziabad — delivered with care, experience and elegance since 2014.',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop',
    primaryButton: { text: 'Book Appointment', action: 'book' },
    secondaryButton: { text: 'Explore Services', action: 'services' },
  },
  {
    id: 'slide-2',
    eyebrow: 'BRIDAL & PARTY MAKEUP',
    heading: 'Look Beautiful. Feel Unforgettable.',
    subheading:
      'From bridal makeup to party-ready glam, our beauty experts create looks designed especially for you.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1920&auto=format&fit=crop',
    primaryButton: { text: 'Book Your Makeup', action: 'makeup' },
    secondaryButton: { text: 'View Services', action: 'services' },
  },
  {
    id: 'slide-3',
    eyebrow: 'HAIR • SKIN • BEAUTY',
    heading: 'Complete Beauty Care Under One Roof',
    subheading:
      'Facials, waxing, haircuts, hair spa, hairstyling, nail work, makeup and more — all in one trusted beauty destination.',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop',
    primaryButton: { text: 'Explore All Services', action: 'services' },
    secondaryButton: { text: 'Call Now', action: 'call' },
  },
];

export const TRUST_BAR_ITEMS = [
  {
    title: 'Since 2014',
    subtitle: '10+ Years of Experience',
    iconName: 'Award',
  },
  {
    title: 'Complete Beauty Care',
    subtitle: 'Beauty • Hair • Makeup',
    iconName: 'Sparkles',
  },
  {
    title: 'Personalized Service',
    subtitle: 'Looks Made For You',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Indirapuram',
    subtitle: 'Trusted Local Destination',
    iconName: 'MapPin',
  },
];

export const FEATURED_SERVICES = [
  {
    id: 'feat-1',
    name: 'Facials',
    description: 'Refresh, cleanse and brighten your skin with customized deep hydration and glow care.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    category: 'facial-skin',
    startingPrice: '₹499',
  },
  {
    id: 'feat-2',
    name: 'Waxing',
    description: 'Smooth, hygienic and gentle waxing services including Honey, RICA and Roll-on options.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
    category: 'waxing',
    startingPrice: '₹199',
  },
  {
    id: 'feat-3',
    name: 'Hair Spa',
    description: 'Relax, nourish and revive dull or frizzy hair with deep conditioning and gentle scalp massage.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    category: 'hair-spa',
    startingPrice: '₹699',
  },
  {
    id: 'feat-4',
    name: 'Party Makeup',
    description: 'Elegant, photogenic looks for family functions, festivals, cocktail nights and special occasions.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    category: 'makeup',
    startingPrice: '₹1,499',
  },
  {
    id: 'feat-5',
    name: 'Bridal Makeup',
    description: 'Bespoke bridal transformations tailored around your bridal attire, skin tone and timeless style.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    category: 'bridal',
    startingPrice: '₹5,999',
  },
  {
    id: 'feat-6',
    name: 'Hair Styling',
    description: 'Modern blow-dry, curling, messy buns, traditional braiding and event-ready hair arrangements.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    category: 'hair-styling',
    startingPrice: '₹399',
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  // Facial & Skin Care
  {
    id: 'srv-clean-up',
    name: 'Face Cleanup',
    category: 'facial-skin',
    description: 'Deep pore cleansing, gentle exfoliation, blackhead removal, and balancing pack for instant clarity.',
    startingPrice: '₹399',
    duration: '30-40 mins',
    benefits: ['Clears clogged pores', 'Removes dead skin cells', 'Hydrates tired skin'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-basic-facial',
    name: 'Basic Herbal / Fruit Facial',
    category: 'facial-skin',
    description: 'Soothing organic nourishment tailored to restore everyday skin softness, glow, and relaxation.',
    startingPrice: '₹599',
    duration: '45-50 mins',
    benefits: ['Even skin tone', 'Gentle natural hydration', 'Stress relief facial massage'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-glow-facial',
    name: 'Instant Glow / Gold Facial',
    category: 'facial-skin',
    description: 'High-radiance facial with specialized serums, revitalizing massage, and luminous peel-off pack.',
    startingPrice: '₹999',
    duration: '60 mins',
    benefits: ['Luminous instant radiance', 'Firms and rejuvenates skin', 'Ideal for parties and events'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'srv-bridal-facial',
    name: 'Bridal Radiance Deluxe Facial',
    category: 'facial-skin',
    description: 'Multi-step intensive skin brightening treatment formulated for brides-to-be for an immaculate wedding glow.',
    startingPrice: '₹1,799',
    duration: '75 mins',
    benefits: ['Deep nourishment & brightening', 'Diminishes dark spots', 'Smooth canvas for bridal makeup'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-detan',
    name: 'Detan Therapy (Face & Neck / Body)',
    category: 'facial-skin',
    description: 'Targeted tan removal with gentle fruit acids and soothing aloe to reverse sun exposure and pigmentation.',
    startingPrice: '₹349',
    duration: '30 mins',
    benefits: ['Reverses sun damage', 'Brightens dull patches', 'Non-irritating formulation'],
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-bleach',
    name: 'Face Bleach (Oxy / Gold / Herbal)',
    category: 'facial-skin',
    description: 'Safe facial hair lightening and instant skin brightening with pre-bleach protective care.',
    startingPrice: '₹249',
    duration: '25 mins',
    benefits: ['Camouflages facial hair', 'Evens out complexion', 'Skin-safe application'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
  },

  // Waxing
  {
    id: 'srv-full-arms-wax',
    name: 'Full Arms Waxing (Honey / RICA)',
    category: 'waxing',
    description: 'Silky smooth arms hair removal with skin-soothing post-wax lotion.',
    startingPrice: '₹199',
    duration: '20 mins',
    benefits: ['Long lasting smoothness', 'Removes fine and coarse hair', 'Minimal discomfort'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-half-arms-wax',
    name: 'Half Arms Waxing',
    category: 'waxing',
    description: 'Quick and clean forearm hair removal using hygienic waxing strips.',
    startingPrice: '₹129',
    duration: '15 mins',
    benefits: ['Quick everyday grooming', 'Soft skin feel'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-full-legs-wax',
    name: 'Full Legs Waxing (Honey / RICA / Roll-on)',
    category: 'waxing',
    description: 'Complete leg hair removal ensuring silky smooth, ingrown-free skin.',
    startingPrice: '₹349',
    duration: '30 mins',
    benefits: ['Deep hair removal from root', 'Exfoliates dead skin layer', 'Silky touch'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-half-legs-wax',
    name: 'Half Legs Waxing',
    category: 'waxing',
    description: 'Lower leg hair removal for quick maintenance and dress readiness.',
    startingPrice: '₹199',
    duration: '20 mins',
    benefits: ['Fast, comfortable service', 'Smooth calves and knees'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-underarms-wax',
    name: 'Underarms Waxing',
    category: 'waxing',
    description: 'Hygienic and swift underarms waxing with soothing post-treatment care.',
    startingPrice: '₹79',
    duration: '10 mins',
    benefits: ['Clean and odor-free', 'Reduces coarse regrowth'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-full-body-wax',
    name: 'Full Body Waxing Package',
    category: 'waxing',
    description: 'Complete head-to-toe hair removal package including arms, legs, underarms, and back/stomach.',
    startingPrice: '₹1,299',
    duration: '75-90 mins',
    benefits: ['Total smoothness', 'Ideal for weddings, festivals & vacations', 'Cost-effective bundle'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-face-wax',
    name: 'Face Waxing & Upper Lips',
    category: 'waxing',
    description: 'Gentle peel-off wax for upper lip, chin, sideburns, and full facial contouring.',
    startingPrice: '₹99',
    duration: '15 mins',
    benefits: ['Removes peach fuzz', 'Enhances smooth foundation application'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },

  // Makeup
  {
    id: 'srv-party-makeup',
    name: 'Party Makeup & Glam',
    category: 'makeup',
    description: 'Sophisticated event makeup highlighting your best features with elegant eye makeup and flawless blending.',
    startingPrice: '₹1,499',
    duration: '60 mins',
    benefits: ['Long-lasting camera finish', 'Custom eye look & lip pairing', 'Includes basic hairstyling assistance'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'srv-bridal-makeup',
    name: 'Complete Bridal Makeup',
    category: 'makeup',
    description: 'High-definition luxury bridal makeover tailored to your lehenga, jewelry, and individual aesthetic.',
    startingPrice: '₹5,999',
    duration: '120 mins',
    benefits: ['Sweat-proof, tears-proof longevity', 'Dupatta draping & jewelry setting included', 'Flawless HD radiant base'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'srv-engagement-makeup',
    name: 'Engagement & Sagan Makeup',
    category: 'makeup',
    description: 'Soft-glam or dramatic look tailored for engagement and ring ceremonies.',
    startingPrice: '₹2,999',
    duration: '75 mins',
    benefits: ['Subtle glow with highlighted cheekbones', 'Drape styling & hair curls included', 'Photogenic finish'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-reception-makeup',
    name: 'Reception / Cocktail Makeup',
    category: 'makeup',
    description: 'Modern, glamorous evening look designed for receptions and cocktail evenings.',
    startingPrice: '₹3,499',
    duration: '80 mins',
    benefits: ['Smokey eyes / bold lip accents', 'High shimmer & contour finish'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-light-makeup',
    name: 'Light / Subtle Day Makeup',
    category: 'makeup',
    description: 'Minimal, natural makeup for daytime pujas, kitty parties, college events or family gatherings.',
    startingPrice: '₹999',
    duration: '45 mins',
    benefits: ['No-makeup makeup look', 'Breathable feel', 'Natural blush and lip tint'],
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-hd-makeup',
    name: 'HD / Premium Event Makeup',
    category: 'makeup',
    description: 'High-definition coverage with luxury pigments that look flawless both in-person and on camera.',
    startingPrice: '₹2,499',
    duration: '75 mins',
    benefits: ['Zero flashback on flash photography', 'Velvety finish', 'Eyelash application included'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
  },

  // Hair
  {
    id: 'srv-haircut',
    name: 'Haircut & Blow Dry',
    category: 'hair',
    description: 'Layer cut, feather cut, step cut, bob, straight cut or customized hair shaping suited to your face structure.',
    startingPrice: '₹249',
    duration: '30-45 mins',
    benefits: ['Shapes and frames face', 'Removes split ends', 'Includes styling blow dry'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-hair-wash',
    name: 'Hair Wash & Conditioning',
    category: 'hair',
    description: 'Clarifying shampoo wash, deep conditioning rinse, and smooth blast dry.',
    startingPrice: '₹149',
    duration: '20 mins',
    benefits: ['Refreshes scalp', 'Removes product buildup', 'Soft and bouncy hair'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-hair-spa',
    name: 'Intensive Nourishing Hair Spa',
    category: 'hair-spa',
    description: 'Deep hair mask infusion, steam therapy, revitalizing scalp massage, and serum polish.',
    startingPrice: '₹699',
    duration: '50-60 mins',
    benefits: ['Tames frizz and dryness', 'Strengthens hair roots', 'Relieves tension and stress'],
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'srv-hair-treatment',
    name: 'Anti-Dandruff / Hair Fall Spa Therapy',
    category: 'hair-spa',
    description: 'Specialized scalp therapy formulated to soothe irritation, clear flaking, and fortify fragile roots.',
    startingPrice: '₹899',
    duration: '60 mins',
    benefits: ['Purifies scalp microbiome', 'Reduces hair breakage', 'Cooling scalp sensation'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-hair-styling',
    name: 'Occasion Hairstyling & Curls',
    category: 'hair-styling',
    description: 'Soft curls, beach waves, straight press, messy buns, waterfall braids or retro styles for your events.',
    startingPrice: '₹399',
    duration: '35-50 mins',
    benefits: ['Holds shape throughout the event', 'Heat protectant applied', 'Complements ethnic & western wear'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-bridal-hairstyling',
    name: 'Bridal Hairstyling with Accessories',
    category: 'hair-styling',
    description: 'Intricate bridal bun, floral styling, mathapatti/maang tikka setting, and veil pin-up.',
    startingPrice: '₹1,199',
    duration: '60 mins',
    benefits: ['Secure pin-up guaranteed for whole night', 'Accommodates fresh flowers or artificial jewelry'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },

  // Nails
  {
    id: 'srv-manicure',
    name: 'Luxury Relaxing Manicure',
    category: 'nails',
    description: 'Nail shaping, cuticle trimming, exfoliating hand scrub, softening mask, and glossy polish.',
    startingPrice: '₹349',
    duration: '40 mins',
    benefits: ['Softens dry cuticles', 'Cleans hand pigmentation', 'Neat and polished fingernails'],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-pedicure',
    name: 'Pampering Spa Pedicure',
    category: 'nails',
    description: 'Warm foot soak, heel dead-skin buffing, aromatic scrub, relaxing massage, and toenail finishing.',
    startingPrice: '₹449',
    duration: '45 mins',
    benefits: ['Smooths cracked heels', 'Relieves leg fatigue', 'Leaves feet baby soft'],
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-nail-art',
    name: 'Nail Shaping & Nail Art Work',
    category: 'nails',
    description: 'Express nail shaping with creative glitter accents, French tips, or event-themed nail art.',
    startingPrice: '₹199',
    duration: '25 mins',
    benefits: ['Trendy artistic touch', 'Chic aesthetics for parties and weddings'],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
  },

  // Chemical / Hair Services
  {
    id: 'srv-hair-smoothening',
    name: 'Hair Smoothening / Straightening',
    category: 'chemical',
    description: 'Permanent or semi-permanent smoothening treatment for manageable, sleek, glossy and frizz-free hair.',
    startingPrice: 'Price on Consultation',
    duration: '150-240 mins',
    benefits: ['Transforms unmanageable curls into sleek hair', 'Long-lasting results', 'Saves daily styling time'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-hair-colour',
    name: 'Hair Colour, Highlights & Touchup',
    category: 'chemical',
    description: 'Root touch-up, global ammonia-free hair color, balayage streaks or chocolate/caramel highlights.',
    startingPrice: '₹499 (Root Touchup)',
    duration: '60-120 mins',
    benefits: ['100% grey coverage', 'Rich vibrant luster', 'Professional color formulation'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  },

  // Bridal Packages
  {
    id: 'srv-pre-bridal',
    name: 'Complete Pre-Bridal Care Package',
    category: 'bridal',
    description: 'Full body waxing, bridal detan, luxury gold facial, manicure, pedicure, hair spa, and threading/bleach.',
    startingPrice: '₹3,499',
    duration: '2-3 Sessions',
    benefits: ['Head-to-toe pre-wedding preparation', 'Tailored over multiple days', 'Glowing skin and silky hair'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'srv-wedding-combo',
    name: 'Bridal Transformation All-in-One Package',
    category: 'bridal',
    description: 'Pre-bridal grooming + Main Day Bridal HD Makeup + Bridal Hairstyling + Saree/Lehenga Draping.',
    startingPrice: 'Price on Consultation',
    duration: 'Multi-Day Package',
    benefits: ['Comprehensive complete bridal suite', 'Zero stress for the bride', 'Dedicated parlour support'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    title: 'Since 2014',
    subtitle: '10+ Years in Indirapuram',
    description: 'Serving hundreds of local families with dedicated, trustworthy beauty care for over a decade.',
    iconName: 'History',
  },
  {
    id: 'why-2',
    title: 'Complete Beauty Care',
    subtitle: 'All Services Under One Roof',
    description: 'Hair, skin, makeup, waxing, nail work, bridal and grooming — all conveniently in one trusted destination.',
    iconName: 'Sparkles',
  },
  {
    id: 'why-3',
    title: 'Personalized Attention',
    subtitle: 'Tailored To Your Preferences',
    description: 'Every client is unique. We listen closely to your skin type, style preferences and occasion requirements.',
    iconName: 'UserCheck',
  },
  {
    id: 'why-4',
    title: 'Reasonable Pricing',
    subtitle: 'Approachable Local Rates',
    description: 'High-end salon quality at honest, comfortable prices tailored for the Indirapuram community.',
    iconName: 'BadgePercent',
  },
  {
    id: 'why-5',
    title: 'Special Occasion Expertise',
    subtitle: 'Bridal & Party Masters',
    description: 'Gorgeous makeup, elegant draping and stunning hairstyles for parties, engagements and weddings.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'why-6',
    title: 'Client-Focused Service',
    subtitle: 'Hygiene, Care & Comfort',
    description: 'Immaculate cleanliness, sterilized tools, gentle techniques and a warm, relaxing atmosphere.',
    iconName: 'ShieldCheck',
  },
];

export const BEAUTY_JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your requirements, skin/hair profile, and preferred look or occasion aesthetic.',
  },
  {
    number: '02',
    title: 'Personalised Recommendation',
    description: 'We suggest the right beauty, hair, or makeup service to give you the most flattering result.',
  },
  {
    number: '03',
    title: 'Professional Service',
    description: 'Our experienced parlour team performs the selected service with utmost care, hygiene, and finesse.',
  },
  {
    number: '04',
    title: 'Beautiful You',
    description: 'Leave feeling confident, refreshed, and completely ready to shine for your special day or everyday life.',
  },
];

export const BRIDAL_CARDS = [
  {
    title: 'Bridal Makeup',
    description: 'Exquisite, long-wearing HD makeover curated to match your lehenga and jewelry.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Pre-Bridal Packages',
    description: 'Full body waxing, detan, bridal glow facials, pedicure and hair spa treatments.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Bridal Hairstyle',
    description: 'Traditional and contemporary bridal buns with fresh flowers and accessory styling.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Engagement Makeup',
    description: 'Soft glam, radiant glow and flattering eye looks tailored for ring ceremonies.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Reception Look',
    description: 'Modern cocktail chic or royal evening glam with statement eyes and contouring.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Wedding Grooming',
    description: 'Complete family grooming and bridesmaid makeup packages under one roof.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Radiant Bridal Makeup Look',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional bridal makeup with intricate jewelry and dupatta setting.',
  },
  {
    id: 'gal-2',
    title: 'Party Makeup & Soft Curls',
    category: 'makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    description: 'Glamorous evening makeup with soft defined eyes and glossy lips.',
  },
  {
    id: 'gal-3',
    title: 'Bridal Floral Hairstyle',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    description: 'Intricate braided bridal bun styled with baby’s breath and fresh roses.',
  },
  {
    id: 'gal-4',
    title: 'Glow Facial & Skin Therapy',
    category: 'skin',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    description: 'Post-facial radiant clarity and refreshed skin texture.',
  },
  {
    id: 'gal-5',
    title: 'Elegant Nail Art & Manicure',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    description: 'Subtle blush pink gel polish with delicate gold foil accents.',
  },
  {
    id: 'gal-6',
    title: 'Warm Parlour Ambience',
    category: 'parlour',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    description: 'Clean, hygienic, comfortable treatment stations at Indirapuram.',
  },
  {
    id: 'gal-7',
    title: 'Engagement Ring Ceremony Makeover',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    description: 'Luminous engagement look paired with pastel gown styling.',
  },
  {
    id: 'gal-8',
    title: 'Nourishing Hair Spa Ritual',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1512290900672-1f41b2c45167?q=80&w=800&auto=format&fit=crop',
    description: 'Deep scalp massage and steam infusion for frizz control.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Pooja S.',
    location: 'Indirapuram (Nyay Khand)',
    rating: 5,
    service: 'Bridal Makeup & Pre-Bridal Package',
    review:
      'A One Beauty Parlour did my wedding makeup and pre-bridal services. The makeup was so natural yet royal, and it stayed fresh throughout the entire ceremony. Very patient and humble staff!',
  },
  {
    id: 'test-2',
    clientName: 'Ritu M.',
    location: 'Indirapuram (Ahinsa Khand)',
    rating: 5,
    service: 'Hair Spa & Glow Facial',
    review:
      'I have been visiting A One Beauty Parlour since 2018 for my monthly facials and hair spa. They always take their time, maintain great hygiene, and their prices are very reasonable compared to overpriced salons.',
  },
  {
    id: 'test-3',
    clientName: 'Neha G.',
    location: 'Vasundhara',
    rating: 5,
    service: 'Party Makeup & Hair Styling',
    review:
      'Booked party makeup for my sister’s engagement. The makeup was flawless, and the hairstyling received so many compliments from everyone in our family. Highly recommended for special occasions!',
  },
  {
    id: 'test-4',
    clientName: 'Sunita K.',
    location: 'Indirapuram (Niti Khand)',
    rating: 5,
    service: 'Full Body Waxing & Cleanup',
    review:
      'Very clean and gentle service. Waxing is always painless and quick. The team is very courteous and polite. It has become my go-to parlour in Indirapuram.',
  },
];

export const POPULAR_PRICING = [
  {
    category: 'Facial & Skin',
    items: [
      { name: 'Face Cleanup', price: 'Starting from ₹399', note: 'Includes steaming & blackhead removal' },
      { name: 'Fruit / Herbal Facial', price: 'Starting from ₹599', note: 'Natural organic glow therapy' },
      { name: 'Gold / Instant Glow Facial', price: 'Starting from ₹999', note: 'High radiance for parties' },
      { name: 'Bridal Deluxe Facial', price: 'Starting from ₹1,799', note: 'Deep skin brightening' },
      { name: 'Detan Pack (Face & Neck)', price: 'Starting from ₹349', note: 'Effective sun tan removal' },
    ],
  },
  {
    category: 'Waxing & Grooming',
    items: [
      { name: 'Full Arms Waxing', price: 'Starting from ₹199', note: 'Honey or RICA options' },
      { name: 'Full Legs Waxing', price: 'Starting from ₹349', note: 'Smooth long-lasting finish' },
      { name: 'Underarms Waxing', price: 'Starting from ₹79', note: 'Quick and hygienic' },
      { name: 'Full Body Waxing Package', price: 'Starting from ₹1,299', note: 'Complete head-to-toe bundle' },
      { name: 'Eyebrow Threading & Upper Lip', price: 'Ask for Price', note: 'Gentle precise shaping' },
    ],
  },
  {
    category: 'Hair Care & Styling',
    items: [
      { name: 'Hair Cut & Styling Blow Dry', price: 'Starting from ₹249', note: 'Layer, feather or bob' },
      { name: 'Nourishing Hair Spa', price: 'Starting from ₹699', note: 'Includes steam & massage' },
      { name: 'Hair Smoothening / Straightening', price: 'Price on Consultation', note: 'Depends on hair length & volume' },
      { name: 'Hair Colour & Root Touch-up', price: 'Starting from ₹499', note: 'Ammonia-free quality colours' },
      { name: 'Occasion Hairstyling / Curls', price: 'Starting from ₹399', note: 'Event-ready braids or curls' },
    ],
  },
  {
    category: 'Makeup & Bridal',
    items: [
      { name: 'Party Makeup & Light Hairstyling', price: 'Starting from ₹1,499', note: 'Event and evening glam' },
      { name: 'Engagement / Sagan Makeup', price: 'Starting from ₹2,999', note: 'Soft glam + jewelry draping' },
      { name: 'Complete HD Bridal Makeup', price: 'Starting from ₹5,999', note: 'Main wedding day makeover' },
      { name: 'Pre-Bridal Full Package', price: 'Starting from ₹3,499', note: 'Multi-session head-to-toe care' },
      { name: 'Saree / Lehenga Draping', price: 'Starting from ₹299', note: 'Neat pin-up and pleating' },
    ],
  },
  {
    category: 'Nails & Pedicure',
    items: [
      { name: 'Classic Manicure', price: 'Starting from ₹349', note: 'Cuticle care & relaxing scrub' },
      { name: 'Spa Pedicure', price: 'Starting from ₹449', note: 'Heel dead-skin buffing & massage' },
      { name: 'Nail Shaping & Art', price: 'Starting from ₹199', note: 'Trendy polish & French tips' },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is A One Beauty Parlour located?',
    answer:
      'A One Beauty Parlour is located in Indirapuram, Ghaziabad, Uttar Pradesh. We are easily accessible from all blocks of Indirapuram (Ahinsa Khand, Nyay Khand, Niti Khand, Vaibhav Khand, Shakti Khand) as well as nearby areas like Vaishali, Vasundhara, and Noida Sector 62.',
  },
  {
    id: 'faq-2',
    question: 'What beauty services do you offer?',
    answer:
      'We offer complete women’s salon and beauty services including facials, cleanup, detan, face bleach, waxing (Honey & RICA), party makeup, bridal makeup, engagement makeup, haircuts, hair spa, hairstyling, hair smoothening/colouring, manicures, pedicures, and customized bridal packages.',
  },
  {
    id: 'faq-3',
    question: 'Do you provide bridal makeup?',
    answer:
      'Yes! We provide comprehensive bridal makeup services including HD bridal makeup, lehenga/saree draping, jewelry setting, and bridal hairstyling. We focus on enhancing your natural beauty while creating a long-lasting, photogenic bridal look.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide pre-bridal services?',
    answer:
      'Yes, we offer customized pre-bridal packages spread over 1 to 3 sessions. These include full body waxing, detan, specialized brightening facials, body polishing, manicures, pedicures, and intensive hair spa treatments.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer party makeup?',
    answer:
      'Yes, our party makeup services are ideal for weddings, sangeet, cocktail parties, family gatherings, and festivals. We customize each look based on your outfit and time of the event.',
  },
  {
    id: 'faq-6',
    question: 'Do you provide hair spa services?',
    answer:
      'Yes, we offer deep-conditioning hair spa therapies for dry, damaged, or chemically treated hair, as well as specialized anti-dandruff and root-strengthening scalp treatments.',
  },
  {
    id: 'faq-7',
    question: 'Do you provide waxing services?',
    answer:
      'Yes, we provide full arms, half arms, full legs, underarms, face, and complete body waxing. We use hygienic methods and gentle waxes (Honey, RICA, and Roll-on) to ensure comfort and smooth results.',
  },
  {
    id: 'faq-8',
    question: 'Do you provide nail services?',
    answer:
      'Yes, we offer manicure, pedicure, nail shaping, basic nail work, and custom nail polish finishes for everyday maintenance and special occasions.',
  },
  {
    id: 'faq-9',
    question: 'How can I book an appointment?',
    answer:
      'You can easily book an appointment by filling out the online booking form on this website, calling us directly at 9717748949, or sending us a message on WhatsApp at 9717748949.',
  },
  {
    id: 'faq-10',
    question: 'Can I contact the parlour on WhatsApp?',
    answer:
      'Yes! You can WhatsApp us anytime at 9717748949 to ask about service details, check current pricing, ask about bridal packages, or confirm slot availability.',
  },
  {
    id: 'faq-11',
    question: 'Do I need an appointment before visiting?',
    answer:
      'While walk-ins are welcome for everyday quick services, we strongly recommend booking an advance appointment for bridal makeup, hair chemical treatments, party makeup, and extensive packages to ensure minimal waiting time.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'best-facial-treatments-for-glowing-skin-in-indirapuram',
    title: 'Best Facial Treatments for Glowing Skin in Indirapuram',
    metaDescription:
      'Discover top facial treatments in Indirapuram, Ghaziabad to restore natural glow, reverse pollution damage, and prepare skin for events.',
    excerpt:
      'Living in NCR means your skin faces sun, dust, and daily pollution. Here is our guide to the most effective facials to restore radiant, supple skin.',
    publishedDate: 'August 2026',
    readingTime: '4 min read',
    category: 'Skin Care',
    author: 'A One Beauty Team',
    featuredImage:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    tags: ['Facial in Indirapuram', 'Skin Care Ghaziabad', 'Glow Facial', 'Cleanup Tips'],
    content: `
Living in urban hubs like Indirapuram and Ghaziabad exposes our skin to dust, humidity, and intense sun exposure. Over time, pores get clogged and the skin loses its natural vitality.

### 1. Monthly Deep Cleansing & Cleanup
For everyday maintenance, a professional face cleanup removes accumulated grime, blackheads, and dead skin cells without over-stripping moisture.

### 2. Fruit & Herbal Facials for Sensitive Skin
If your skin is prone to redness or sensitivity, herbal and fruit-infused facials provide gentle nourishment and anti-inflammatory hydration.

### 3. Gold & Radiance Facials Before Events
Attending a wedding or festival? High-radiance facials help boost microcirculation, leaving your complexion visibly brighter and camera-ready.

### 4. Post-Facial Care Tips
- Avoid harsh sun exposure for 24 hours.
- Drink plenty of water to keep skin hydrated.
- Avoid applying heavy makeup immediately after treatment.

*Have questions about which facial fits your skin type? Contact A One Beauty Parlour on WhatsApp (9717748949).*
    `,
  },
  {
    id: 'blog-2',
    slug: 'bridal-makeup-preparation-what-to-do-before-your-wedding',
    title: 'Bridal Makeup Preparation: What to Do Before Your Wedding',
    metaDescription:
      'Essential pre-wedding bridal beauty checklist for brides in Indirapuram & Ghaziabad. Tips on skincare, makeup trials, and hair preparation.',
    excerpt:
      'From starting your skincare routine months ahead to finalizing your wedding day lehenga draping, here is the ultimate bridal preparation checklist.',
    publishedDate: 'August 2026',
    readingTime: '5 min read',
    category: 'Bridal Beauty',
    author: 'A One Beauty Team',
    featuredImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    tags: ['Bridal Makeup Indirapuram', 'Pre Bridal Services', 'Wedding Makeup Ghaziabad'],
    content: `
Your wedding day is one of the most memorable milestones in life. Flawless bridal makeup relies just as much on pre-wedding skin preparation as it does on artistry.

### 1. Start Pre-Bridal Skincare 4–6 Weeks Ahead
Do not leave facials for the day before your wedding. Schedule gentle detan and hydrating sessions 3 to 4 weeks prior so your skin has time to breathe and rejuvenate.

### 2. Match Makeup with Outfit & Lighting
Whether you choose a classic red lehenga, a pastel pink silhouette, or an ivory saree, discuss your color palette with your makeup artist in advance.

### 3. Hair Prep & Conditioning
Book a nourishing hair spa session 4–5 days prior to soften your locks, ensuring your bridal bun or open curls stay glossy and frizz-free all night.

### 4. Wedding Day Essentials
- Stay well-hydrated throughout the day.
- Wear a button-up or zip shirt during makeup application to prevent smudging when changing into your lehenga.

*Plan your customized bridal package with A One Beauty Parlour in Indirapuram. Call/WhatsApp 9717748949.*
    `,
  },
  {
    id: 'blog-3',
    slug: 'hair-spa-benefits-is-it-right-for-your-hair',
    title: 'Hair Spa Benefits: Is It Right for Your Hair?',
    metaDescription:
      'Learn how professional hair spa therapies help reduce frizz, control dandruff, and restore softness in Indirapuram, Ghaziabad.',
    excerpt:
      'Wondering if a hair spa is worth it? Explore the benefits of deep conditioning, steam infusion, and relaxing scalp massages for stressed hair.',
    publishedDate: 'August 2026',
    readingTime: '3 min read',
    category: 'Hair Care',
    author: 'A One Beauty Team',
    featuredImage:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop',
    tags: ['Hair Spa Indirapuram', 'Hair Care Ghaziabad', 'Frizz Control'],
    content: `
Between heat styling, hard water, and pollution, our hair often becomes dry, brittle, and unmanageable.

### Key Benefits of a Hair Spa:
- **Deep Moisture Lock:** Restores lost lipids and oils in dry strands.
- **Scalp Stimulation:** The massage stimulates blood circulation to the hair follicles.
- **Stress Relief:** The gentle head massage and steam release mental fatigue.

Recommended frequency: Once every 3 to 4 weeks for optimal shine and softness.
    `,
  },
  {
    id: 'blog-4',
    slug: 'party-makeup-tips-for-weddings-and-functions',
    title: 'Party Makeup Tips for Weddings and Functions',
    metaDescription:
      'Pro tips for long-lasting, photogenic party makeup in humid and warm weather in Indirapuram & Ghaziabad.',
    excerpt:
      'Going to a family sangeet or evening reception? Discover how to keep your makeup fresh and crease-free for hours.',
    publishedDate: 'August 2026',
    readingTime: '4 min read',
    category: 'Makeup Tips',
    author: 'A One Beauty Team',
    featuredImage:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Party Makeup Indirapuram', 'Glam Makeup', 'Salon Ghaziabad'],
    content: `
Special events call for special elegance. A balanced party makeup look highlights either dramatic eyes or a bold lip, paired with a glowing, skin-like base.

### 1. Prep with Primer
A good base primer smooths skin texture and holds makeup through hours of dancing and photography.

### 2. Choose the Right Foundation Tone
Always test shades in natural light. We customize undertones so your makeup looks completely seamless with your neck and collarbone.

### 3. Setting for Longevity
Setting spray locks everything in place without feeling cakey or dry.
    `,
  },
];
