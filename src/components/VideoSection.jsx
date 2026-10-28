import React, { useState } from 'react';
import { Play, Video, Film, Star, MessageSquare, Sparkles, X } from 'lucide-react';

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState('showroom'); // 'showroom' | 'services' | 'reviews'
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  // Configuration for Video Categories & Future Videos
  const categories = [
    {
      id: 'showroom',
      title: 'Showroom & Furniture',
      subtitle: 'Explore our physical showroom, furniture setups & Rukhsati items.',
      icon: Film,
      folderPath: '/videos/showroom/',
      // Sample list of video slots ready for real .mp4 files
      videos: [
        {
          id: 's1',
          title: 'Bidai Main Furniture Showroom Walkthrough',
          desc: 'A complete tour of our master bedroom sets, wardrobes, and living furniture.',
          videoUrl: '/videos/showroom/showroom-tour.mp4',
          poster: '/images/cards/card_pkg_a.jpg'
        },
        {
          id: 's2',
          title: 'Rukhsati Household Items Display',
          desc: 'Inspection of kitchenware, dinner sets, luggage and electronics.',
          videoUrl: '/videos/showroom/items-display.mp4',
          poster: '/images/cards/card_pkg_d.jpg'
        }
      ]
    },
    {
      id: 'services',
      title: 'Wedding Services & Halls',
      subtitle: 'Watch our bridal makeup, hall arrangements & catering setups in action.',
      icon: Video,
      folderPath: '/videos/services/',
      videos: [
        {
          id: 'v1',
          title: 'Complete Wedding Hall & Stage Decor',
          desc: 'Behind the scenes of our royal wedding stage and guest arrangements.',
          videoUrl: '/videos/services/hall-decor.mp4',
          poster: '/images/cards/card_pkg_all_in_one.jpg'
        },
        {
          id: 'v2',
          title: 'Bridal Preparation & Photography Shoot',
          desc: 'Highlights from our professional photography and bridal makeup sessions.',
          videoUrl: '/videos/services/bridal-shoot.mp4',
          poster: '/images/cards/card_pkg_b.jpg'
        }
      ]
    },
    {
      id: 'reviews',
      title: 'Customer Video Reviews',
      subtitle: 'Real customer feedback and testimonial videos from satisfied families.',
      icon: MessageSquare,
      folderPath: '/videos/reviews/',
      videos: [
        {
          id: 'r1',
          title: 'Family Testimonial — Package D Comfort',
          desc: 'Watch how Bidai delivered complete household setup before the wedding date.',
          videoUrl: '/videos/reviews/customer-review-1.mp4',
          poster: '/images/cards/card_pkg_d1.jpg'
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="videos" className="py-20 bg-white border-y border-brand-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Our Work & Video Experience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Bidai Showroom & Video Gallery
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Take a visual tour of our physical showroom, wedding arrangements, bridal services and customer testimonial videos.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full font-serif text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-maroon text-white border-2 border-brand-gold shadow-md'
                    : 'bg-brand-ivory text-brand-dark hover:bg-brand-beige border border-brand-gold/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-gold' : 'text-brand-maroon'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">
            {currentCategory.title}
          </h3>
          <p className="text-xs text-brand-muted">
            {currentCategory.subtitle}
          </p>
        </div>

        {/* Video Cards Grid with Placeholder State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.videos.map((item) => (
            <div
              key={item.id}
              className="bg-brand-ivory rounded-2xl border border-brand-gold/40 overflow-hidden shadow-card hover:shadow-wedding transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Thumbnail / Preview Area */}
              <div className="relative h-52 bg-brand-dark group overflow-hidden">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Play Button Overlay */}
                <button
                  onClick={() => setActiveVideoModal(item)}
                  aria-label={`Play ${item.title}`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-maroon/90 text-brand-gold border-2 border-brand-gold flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-brand-maroon transition-transform">
                    <Play className="w-6 h-6 fill-brand-gold ml-1" />
                  </div>
                </button>

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <span className="font-mono text-[10px] bg-brand-gold text-brand-dark font-bold px-2 py-0.5 rounded uppercase">
                    Video Preview
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-dark mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => setActiveVideoModal(item)}
                  className="w-full py-2.5 px-4 bg-white text-brand-maroon hover:bg-brand-maroon hover:text-white border border-brand-gold/60 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          ))}

          {/* Videos Coming Soon Placeholder Card */}
          <div className="bg-brand-ivory/60 rounded-2xl border-2 border-dashed border-brand-gold/50 p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[300px]">
            <div className="w-14 h-14 rounded-full bg-brand-beige text-brand-maroon flex items-center justify-center border border-brand-gold/60">
              <Film className="w-7 h-7 text-brand-gold" />
            </div>

            <h4 className="font-serif text-lg font-bold text-brand-dark">
              More Videos Coming Soon
            </h4>

            <p className="text-xs text-brand-muted max-w-xs leading-relaxed">
              New showroom walkthroughs and customer review videos are regularly added to <code className="bg-white px-1.5 py-0.5 rounded text-brand-maroon font-mono text-[11px]">{currentCategory.folderPath}</code>.
            </p>

            <span className="inline-block text-[11px] font-semibold text-brand-gold bg-brand-maroon px-3 py-1 rounded-full uppercase tracking-wider">
              Bidai Official Work
            </span>
          </div>

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
            <div className="flex items-center justify-between px-5 py-3 bg-brand-maroon text-white border-b border-brand-gold">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-brand-gold" />
                <h3 className="font-serif text-sm sm:text-base font-bold text-brand-gold truncate max-w-md">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
              <video
                src={activeVideoModal.videoUrl}
                poster={activeVideoModal.poster}
                controls
                autoPlay
                className="max-w-full max-h-[75vh] object-contain"
                onError={(e) => {
                  // Fallback when video file is not yet uploaded to folder
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback overlay when video file is pending upload */}
              <div className="hidden flex-col items-center justify-center p-8 text-center text-white space-y-3">
                <Film className="w-12 h-12 text-brand-gold animate-bounce" />
                <h4 className="font-serif text-xl font-bold text-brand-gold">
                  Official Video Coming Soon
                </h4>
                <p className="text-xs text-white/80 max-w-md leading-relaxed">
                  The official video file for <strong className="text-white">{activeVideoModal.title}</strong> is being processed. Once uploaded to <code className="text-brand-gold bg-black/50 px-2 py-0.5 rounded font-mono">{activeVideoModal.videoUrl}</code>, it will play automatically here!
                </p>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-4 py-2 bg-brand-gold text-brand-dark font-bold text-xs rounded-lg hover:bg-white transition-colors"
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
