'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const AutomationHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src="/assets/videos/hero2.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#007577]/80 via-[#007577]/40 to-transparent" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-300/5 to-transparent animate-pulse" />
      </div>

      <div className={`relative z-20 h-full flex items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Power & Automation</span>
              <span className="block text-[#E68E27]">Control Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-regular mb-4 leading-relaxed">
              Intelligent control systems that bring convenience and efficiency to your property.
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              From smart door systems to biometric security and automated lighting — iPower delivers cutting-edge automation solutions across Lebanon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white bg-[#E68E27] rounded-full hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
              >
                <span className="relative z-10 text-center">Request Your Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#007577] to-[#005a5c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <span className="text-center">Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;

