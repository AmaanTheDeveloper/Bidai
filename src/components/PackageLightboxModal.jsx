import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';

export default function PackageLightboxModal({ isOpen, imagePath, title, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setZoomLevel(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !imagePath) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[96vh] flex flex-col bg-brand-dark/95 border border-brand-gold/40 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-brand-maroon/90 text-white border-b border-brand-gold/40 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-gold"></span>
            <h3 className="font-serif text-sm sm:text-base font-bold text-brand-gold tracking-wide truncate max-w-[200px] sm:max-w-md">
              {title || 'Original Package Details'}
            </h3>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
              Full Set Spec Sheet
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <button
              onClick={handleResetZoom}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <a
              href={imagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-1"
              title="Open Original Image in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-brand-gold text-brand-dark hover:bg-white font-bold transition-colors cursor-pointer ml-2"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Display Area */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40 min-h-[300px] sm:min-h-[500px]">
          <img
            src={imagePath}
            alt={title || 'Original Package Full Set'}
            style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl cursor-grab active:cursor-grabbing select-none"
          />
        </div>

        {/* Modal Bottom Footer Info */}
        <div className="px-4 py-2.5 bg-brand-dark text-white/80 text-xs flex items-center justify-between border-t border-white/10 shrink-0">
          <span>🔍 Click + / - to zoom. Original specimen image with full package details.</span>
          <button
            onClick={onClose}
            className="text-brand-gold hover:underline text-xs font-semibold cursor-pointer"
          >
            Close Spec Sheet
          </button>
        </div>

      </div>
    </div>
  );
}
