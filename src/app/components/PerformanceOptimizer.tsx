'use client';

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    const preloadCriticalResources = () => {
      const heroImages = [
        '/assets/images/projects-section/business-complex.png',
        '/assets/images/projects-section/villa.png',
        '/assets/images/projects-section/warehouse.png',
        '/assets/images/projects-section/hospital.png'
      ];

      heroImages.forEach(imageSrc => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageSrc;
        document.head.appendChild(link);
      });
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = '/assets/fonts/Polly_Rounded_Regular/PollyRounded-Regular.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScroll = () => {
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScroll);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
    };
    preloadCriticalResources();
    lazyLoadImages();
    optimizeScroll();
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
