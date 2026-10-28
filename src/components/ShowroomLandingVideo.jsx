import React, { useState } from 'react';
import { Play, Film, Sparkles, X, ShieldCheck } from 'lucide-react';

export default function ShowroomLandingVideo() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Connection path for owner video file (Requirement #9)
  const videoPath = "/videos/showroom/showroom-1.mp4";
  const posterPath = "/images/cards/card_pkg_a.jpg";

  return (
    <section id="showroom-work" className="py-16 bg-white border-y border-brand-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Real Showroom Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-3">
            See Our Showroom & Our Work
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Take an authentic visual tour of Bidai's physical showroom in Karachi, inspecting master bedroom sets, home appliances, dinnerware and rukhsati essentials.
          </p>
        </div>

        {/* Video Showcase Container (Requirement #10) */}
        <div className="max-w-4xl mx-auto bg-brand-dark rounded-3xl border-2 border-brand-gold/60 overflow-hidden shadow-wedding relative group">
          
          {/* Main Video Preview Area */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            
            {/* Background Muted Video / Poster Image */}
            <img
              src={posterPath}
              alt="Bidai Showroom Tour Preview"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Play Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play Showroom Tour Video"
              className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-maroon/90 text-brand-gold border-2 border-brand-gold flex items-center justify-center shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-brand-maroon transition-transform">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-brand-gold ml-1 text-brand-gold" />
              </div>
            </button>

            {/* Video Banner Info */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-gold text-brand-dark text-[11px] font-bold uppercase mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Physical Showroom Karachi</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-md">
                  Bidai Showroom & Rukhsati Setup Walkthrough
                </h3>
              </div>

              <div className="text-[11px] font-mono text-white/80 bg-black/60 px-3 py-1 rounded-full border border-white/20">
                Click to Play Tour
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Video Lightbox Player Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-brand-dark border-2 border-brand-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-brand-maroon text-white border-b border-brand-gold">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-brand-gold" />
                <h3 className="font-serif text-sm sm:text-base font-bold text-brand-gold">
                  Bidai Showroom Tour Video
                </h3>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Element with Fallback (Requirement #5, #9, #11) */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
              <video
                src={videoPath}
                poster={posterPath}
                controls
                autoPlay
                preload="metadata"
                className="max-w-full max-h-[75vh] object-contain"
                onError={(e) => {
                  // Hide missing video tag and display clean coming soon state
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />

              {/* Clean Coming Soon Placeholder State */}
              <div className="hidden flex-col items-center justify-center p-8 text-center text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-maroon/80 border-2 border-brand-gold flex items-center justify-center text-brand-gold">
                  <Film className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-gold">
                  Our Showroom Videos Are Coming Soon
                </h4>
                <p className="text-xs sm:text-sm text-white/80 max-w-md leading-relaxed">
                  Our official showroom walkthrough video is currently being recorded at our Karachi location: <br />
                  <strong className="text-white font-medium">{`Opposite Farzan Bakery, Korangi Number 1, Karachi`}</strong>.
                </p>
                <p className="text-[11px] text-brand-gold/80 font-mono bg-black/60 px-3 py-1 rounded border border-brand-gold/30">
                  Target Path: {videoPath}
                </p>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-5 py-2.5 bg-brand-gold text-brand-dark font-bold text-xs rounded-xl hover:bg-white transition-colors cursor-pointer"
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
