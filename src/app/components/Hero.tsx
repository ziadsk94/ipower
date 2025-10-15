'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const taglines = [
    "Leading Electrical Engineering Solutions Provider.",
    "Innovative Electrical Systems — Powering Lebanon's Future."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-300/10 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-200/30 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300/50 rounded-full animate-pulse delay-3000" />
      </div>

      <div className={`relative z-20 h-full flex items-center transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Electrical Engineering</span>
              <span className="block text-[#E68E27]">Solutions</span>
            </h1>

            <div className="h-20 mb-8">
              <p 
                key={currentTagline}
                className="text-xl md:text-2xl text-white/90 font-regular leading-relaxed animate-fade-in"
              >
                {taglines[currentTagline]}
              </p>
            </div>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Transform your electrical systems with innovative engineering solutions designed for Lebanon's industrial and commercial needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white bg-[#E68E27] rounded-full hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
              >
                <span className="relative z-10 text-center">Get Your Free Electrical Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#007577] to-[#005a5c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <span className="text-center">Learn More</span>
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                <span className="text-sm font-regular">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                <span className="text-sm font-regular">Lebanon Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                <span className="text-sm font-regular">15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs font-regular mb-1">Scroll to explore</span>
          <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 bg-white/60 rounded-full mt-1 animate-bounce" />
          </div>
        </div>
      </div>

      {!showContent && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center z-30">
          <div className="text-white text-center">
            <div className="w-8 h-8 border-2 border-[#E68E27] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-regular">Loading...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
