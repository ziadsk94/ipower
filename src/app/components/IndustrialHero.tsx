'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const IndustrialHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/images/projects-section/farm.png)',
            backgroundPosition: 'center center'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#007577]/80 via-[#007577]/40 to-transparent" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-orange-300/5 to-transparent animate-pulse" />
      </div>

      <div className={`relative z-20 h-full flex items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Built for Scale.</span>
              <span className="block text-[#E68E27]">Designed for Performance.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-regular mb-4 leading-relaxed">
              Powering Lebanon's Industries Toward Electrical Excellence.
            </p>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
              Advanced electrical infrastructure for factories, logistics centers, and heavy-duty facilities — engineered for efficiency and safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white bg-[#E68E27] rounded-full hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
              >
                <span className="relative z-10">Schedule an Industrial Electrical Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#007577] to-[#005a5c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="#metrics"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <span className="text-center">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialHero;
