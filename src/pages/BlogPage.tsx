import React from 'react';
import { Sparkles, Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/siteData';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  return (
    <div id="blog-page" className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#7A5B1E] text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>BEAUTY TIPS & ADVICE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221F1F] tracking-tight mb-4">
            Beauty & Bridal Journal
          </h1>
          <p className="text-base sm:text-lg text-[#6B655D] font-light">
            Expert beauty care tips, pre-bridal advice, and skincare guides from the team at A One Beauty Parlour, Indirapuram.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-[#EAE0D3]">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#78716C] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#221F1F] leading-snug mb-2 hover:text-[#A88438] transition-colors cursor-pointer"
                    onClick={() => onSelectPost(post.slug)}
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#EDE4D4]">
                <button
                  onClick={() => onSelectPost(post.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A88438] hover:text-[#8E6C24] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
