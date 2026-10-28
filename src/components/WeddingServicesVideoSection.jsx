import React, { useState } from 'react';
import { Video, Sparkles, Play, X, Camera, UtensilsCrossed, Sparkle, Building } from 'lucide-react';

export default function WeddingServicesVideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Service Video Configurations (Requirement #7, #9)
  const serviceVideos = [
    {
      id: "hall",
      title: "Wedding Hall & Stage Decor",
      desc: "Watch real wedding hall setups, stage lighting and floral arrangements organized by Bidai.",
      videoPath: "/videos/services/hall-decor.mp4",
      poster: "/images/cards/card_pkg_all_in_one.jpg",
      icon: Building
    },
    {
      id: "makeup",
      title: "Bridal Makeup & Styling",
      desc: "Highlights from our professional salon partner bridal makeover sessions.",
      videoPath: "/videos/services/bridal-makeup.mp4",
      poster: "/images/cards/card_pkg_a.jpg",
      icon: Sparkle
    },
    {
      id: "photography",
      title: "Photo & Video Shoot",
      desc: "Behind the scenes of HD bridal photo albums and cinematic wedding video shoots.",
      videoPath: "/videos/services/photography.mp4",
      poster: "/images/cards/card_pkg_b.jpg",
      icon: Camera
    },
    {
      id: "catering",
      title: "Catering & Banquet Service",
      desc: "Inspection of hot Pakistani banquet catering setups, biryani, karahi and desserts.",
      videoPath: "/videos/services/catering-service.mp4",
      poster: "/images/cards/card_pkg_d.jpg",
      icon: UtensilsCrossed
    }
  ];

  return (
    <section id="services-videos" className="py-20 bg-brand-ivory/50 border-b border-brand-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Pakistani Wedding Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Wedding Service Videos
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Watch actual video footage of Bidai wedding halls, bridal makeup sessions, photography shoots and banquet catering services.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceVideos.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-brand-gold/40 overflow-hidden shadow-card hover:shadow-wedding transition-all duration-300 flex flex-col justify-between"
              >
                {/* Video Card Top Thumbnail */}
                <div className="relative h-48 bg-brand-dark group overflow-hidden">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  <button
                    onClick={() => setActiveVideo(item)}
                    aria-label={`Play ${item.title}`}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-maroon/90 text-brand-gold border border-brand-gold flex items-center justify-center shadow-xl group-hover/play:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-brand-gold ml-0.5 text-brand-gold" />
                    </div>
                  </button>

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-brand-maroon/90 text-brand-gold text-[10px] font-bold uppercase border border-brand-gold/40 flex items-center gap-1">
                    <Icon className="w-3 h-3 text-brand-gold" />
                    <span>Service Video</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-base font-bold text-brand-dark mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveVideo(item)}
                    className="w-full py-2.5 px-3 bg-brand-ivory text-brand-maroon hover:bg-brand-maroon hover:text-white border border-brand-gold/60 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Video className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Watch Service Video</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-brand-dark border-2 border-brand-gold rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-brand-maroon text-white border-b border-brand-gold">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-brand-gold" />
                <h3 className="font-serif text-sm sm:text-base font-bold text-brand-gold">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* HTML5 Video Element with Fallback */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
              <video
                src={activeVideo.videoPath}
                poster={activeVideo.poster}
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
                <Video className="w-12 h-12 text-brand-gold" />
                <h4 className="font-serif text-xl font-bold text-brand-gold">
                  Service Video Coming Soon
                </h4>
                <p className="text-xs text-white/80 max-w-md leading-relaxed">
                  Official video coverage for <strong className="text-white">{activeVideo.title}</strong> is being compiled. Once uploaded to <code className="text-brand-gold bg-black/50 px-2 py-0.5 rounded font-mono text-[11px]">{activeVideo.videoPath}</code>, it will stream directly here!
                </p>
                <button
                  onClick={() => setActiveVideo(null)}
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
