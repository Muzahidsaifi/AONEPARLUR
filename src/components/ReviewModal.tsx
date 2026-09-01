import React, { useState } from 'react';
import { X, Star, Heart, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/siteData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="review-modal-overlay"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="review-modal-dialog"
        className="relative w-full max-w-md bg-[#FDFBF7] rounded-3xl p-6 sm:p-9 border border-[#E8E1D5] shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#E8E1D5]/40 text-[#555] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#E8F8F0] border border-[#BDE8D0] flex items-center justify-center mx-auto mb-4 text-[#128C7E]">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">
              Thank You for Your Review!
            </h3>
            <p className="text-sm text-[#555] mb-6 font-light">
              We deeply appreciate your feedback and support for A One Beauty Parlour in Indirapuram.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all shadow-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-block px-3.5 py-1 bg-[#F8E8E8] text-[#D18B8B] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              Client Feedback
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-1">
              Share Your <span className="italic font-light text-[#C5A059]">Experience</span>
            </h3>
            <p className="text-xs text-[#777] mb-6 font-light">
              How was your recent salon experience at A One Beauty Parlour?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#555] mb-1.5">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? 'fill-[#C5A059] text-[#C5A059]'
                            : 'text-[#E8E1D5]'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#555] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meenakshi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white border border-[#E8E1D5] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#555] mb-1">
                  Service Taken
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hair Spa / Party Makeup / Facial"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white border border-[#E8E1D5] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#555] mb-1">
                  Your Review / Feedback *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about the hygiene, staff behavior, and results..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E8E1D5] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#C5A059] hover:bg-[#B38E45] transition-all shadow-xs"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
