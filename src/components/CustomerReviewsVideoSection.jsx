import React, { useState } from 'react';
import { MessageSquare, Sparkles, Play, X, ShieldCheck } from 'lucide-react';

export default function CustomerReviewsVideoSection() {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Static connection for owner customer review videos (Requirement #8, #9)
  const reviewVideos = [
    {
      id: "r1",
      title: "Customer Video Testimonial 1",
      desc: "Authentic video feedback recorded by customer family upon package fulfillment.",
      videoPath: "/videos/reviews/review-1.mp4",
      poster: "/images/cards/card_pkg_d1.jpg"
    }
  ];

  return (
    <section id="customer-reviews" className="py-20 bg-white border-b border-brand-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Real Family Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Customer Reviews
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Watch authentic video reviews recorded by families who used Bidai for their wedding and household preparation.
          </p>
        </div>

        {/* Customer Video Cards Container */}
        <div className="max-w-4xl mx-auto">
          {reviewVideos.map((item) => (
            <div
              key={item.id}
              className="bg-brand-ivory/60 rounded-3xl border-2 border-brand-gold/40 overflow-hidden shadow-card p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 mb-8"
            >
              {/* Video Thumbnail Box */}
              <div className="relative w-full md:w-80 h-52 bg-brand-dark rounded-2xl overflow-hidden shrink-0 group border border-brand-gold/50 shadow-md">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <button
                  onClick={() => setActiveVideoModal(item)}
                  aria-label={`Play ${item.title}`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-maroon/90 text-brand-gold border-2 border-brand-gold flex items-center justify-center shadow-xl group-hover/play:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-brand-gold ml-1 text-brand-gold" />
                  </div>
                </button>

                <div className="absolute bottom-3 left-3 text-white text-[10px] font-mono bg-black/60 px-2.5 py-0.5 rounded border border-white/20">
                  Video Testimonial
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Customer Experience</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">
                  Customer Video Reviews
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  We believe in 100% transparency. Watch genuine video feedback directly recorded by customer families after package delivery and setup completion.
                </p>

                <button
                  onClick={() => setActiveVideoModal(item)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-brand-maroon text-white hover:bg-brand-maroon-dark font-bold text-xs rounded-xl border border-brand-gold shadow-sm transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  <span>Play Customer Video Review</span>
                </button>
              </div>
            </div>
          ))}

          {/* Customer Video Reviews Coming Soon Notice (Requirement #8) */}
          
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-brand-dark border-2 border-brand-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-brand-maroon text-white border-b border-brand-gold">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-gold" />
                <h3 className="font-serif text-sm sm:text-base font-bold text-brand-gold">
                  Customer Video Review
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Element with Fallback */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
              <video
                src={activeVideoModal.videoPath}
                poster={activeVideoModal.poster}
                controls
                autoPlay
                preload="metadata"
                className="max-w-full max-h-[75vh] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />

              <div className="hidden flex-col items-center justify-center p-8 text-center text-white space-y-3">
                <MessageSquare className="w-12 h-12 text-brand-gold" />
                <h4 className="font-serif text-xl font-bold text-brand-gold">
                  Customer Video Reviews Coming Soon
                </h4>
                <p className="text-xs text-white/80 max-w-md leading-relaxed">
                  Real video feedback files uploaded to <code className="text-brand-gold bg-black/50 px-2 py-0.5 rounded font-mono text-[11px]">{activeVideoModal.videoPath}</code> will play automatically here!
                </p>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-4 py-2 bg-brand-gold text-brand-dark font-bold text-xs rounded-xl hover:bg-white transition-colors cursor-pointer"
                >
                  Close Player
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
