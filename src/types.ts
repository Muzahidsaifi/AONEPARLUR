export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  startingPrice?: string;
  duration?: string;
  benefits?: string[];
  image: string;
  featured?: boolean;
}

export type ServiceCategory =
  | 'all'
  | 'facial-skin'
  | 'waxing'
  | 'makeup'
  | 'hair'
  | 'hair-spa'
  | 'hair-styling'
  | 'nails'
  | 'bridal'
  | 'chemical';

export interface Testimonial {
  id: string;
  clientName: string;
  location?: string;
  rating: number;
  service: string;
  date?: string;
  review: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'makeup' | 'bridal' | 'hair' | 'nails' | 'skin' | 'parlour';
  image: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  publishedDate: string;
  readingTime: string;
  author: string;
  tableOfContents?: { title: string; anchor: string }[];
  tags: string[];
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  establishedYear: number;
  phone: string;
  whatsapp: string;
  email?: string;
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    fullDisplay: string;
    googleMapsEmbed: string;
    googleMapsUrl: string;
  };
  openingHours: {
    weekdays: string;
    weekends: string;
    allDays: string;
    timing: string;
  };
  serviceAreas: string[];
}

export interface AppointmentFormData {
  fullName: string;
  mobileNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
