import React from 'react';
import { ArrowLeft, Calendar, Clock, Sparkles, MessageSquare, Calendar as CalendarIcon } from 'lucide-react';
import { BLOG_POSTS, BUSINESS_CONFIG } from '../data/siteData';

interface BlogPostPageProps {
  slug: string;
  onBack: () => void;
  onOpenBooking: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onBack, onOpenBooking }) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div id="blog-post-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8A713C] hover:text-[#221F1F] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{post.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221F1F] tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-[#78716C]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#A88438]" />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#A88438]" />
              {post.readingTime}
            </span>
            <span>•</span>
            <span className="text-[#A88438] font-medium">A One Beauty Parlour Team</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-md mb-10 border border-[#E8DFC8]">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-[320px] sm:h-[420px] object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E8DFC8] mb-12 shadow-2xs">
          <div
            className="prose prose-stone max-w-none text-[#44403C] leading-relaxed text-sm sm:text-base space-y-4"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n\n/g, '<br/><br/>')
                .replace(/### (.*?)\n/g, '<h3 class="font-serif font-bold text-xl text-[#221F1F] mt-6 mb-2">$1</h3>')
                .replace(/## (.*?)\n/g, '<h2 class="font-serif font-bold text-2xl text-[#221F1F] mt-8 mb-3">$1</h2>'),
            }}
          />
        </div>

        {/* Author / Parlour Banner */}
        <div className="bg-[#F6EFE7] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif font-bold text-lg text-[#221F1F]">
              Have questions about your skin or upcoming look?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B655D] mt-1">
              Visit our team at A One Beauty Parlour in Indirapuram for personalized consultations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#A88438] to-[#B8860B] hover:brightness-105 shadow-2xs flex items-center gap-1.5"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`https://wa.me/91${BUSINESS_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-white bg-[#128C7E] hover:bg-[#0E7569] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
