'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Play, Images, Video } from '@phosphor-icons/react';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ src: string; type: 'image' | 'video'; index: number } | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Gallery items - images and videos from /assets/gallery
  const galleryItems = [
    { src: '/assets/gallery/DCIM_IMG_6035.jpg', type: 'image' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Image 2025-05-22 at 1.57.33 PM.jpeg', type: 'image' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Image 2025-06-14 at 12.11.40 PM.jpeg', type: 'image' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Image 2025-06-14 at 12.13.09 PM (1).jpeg', type: 'image' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Image 2025-06-14 at 12.13.09 PM.jpeg', type: 'image' as const },
    { src: '/assets/gallery/villa.jpeg', type: 'image' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.11.50 PM.mp4', type: 'video' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.11.58 PM.mp4', type: 'video' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.12.20 PM.mp4', type: 'video' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.12.36 PM.mp4', type: 'video' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.13.28 PM.mp4', type: 'video' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.13.40 PM.mp4', type: 'video' as const },
    { src: '/assets/gallery/DCIM_WhatsApp Video 2025-06-14 at 12.13.43 PM.mp4', type: 'video' as const },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  const openModal = (src: string, type: 'image' | 'video', index: number) => {
    setSelectedItem({ src, type, index });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const navigateItem = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex(item => item.src === selectedItem.src);
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    const newItem = galleryItems[newIndex];
    setSelectedItem({ src: newItem.src, type: newItem.type, index: newIndex });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateItem('next');
      if (e.key === 'ArrowLeft') navigateItem('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const images = galleryItems.filter(item => item.type === 'image');
  const videos = galleryItems.filter(item => item.type === 'video');

  return (
    <>
      <section 
        ref={sectionRef}
        className="py-20 bg-[#F9FAF9] min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#007577] mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Explore our portfolio of projects, installations, and electrical engineering solutions across Lebanon.
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Images size={20} weight="bold" />
                <span>{images.length} Images</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={20} weight="bold" />
                <span>{videos.length} Videos</span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-32 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] rounded-full animate-gradient-x" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openModal(item.src, item.type, index)}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loader={({ src }) => src}
                  />
                ) : (
                  <div className="relative w-full h-full bg-gray-900">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                      <Play size={48} weight="fill" className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <X size={24} weight="bold" className="text-white" />
            </button>

            {selectedItem.type === 'image' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedItem.src}
                  alt="Gallery image"
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  loader={({ src }) => src}
                />
              </div>
            ) : (
              <div className="relative w-full max-w-5xl">
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[90vh] rounded-lg"
                />
              </div>
            )}

            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateItem('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                >
                  <span className="text-white text-xl">‹</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateItem('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                >
                  <span className="text-white text-xl">›</span>
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {galleryItems.findIndex(item => item.src === selectedItem.src) + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;

