'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Buildings, ArrowRight } from '@phosphor-icons/react';

const CommercialCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#007577] to-[#005a5c] overflow-hidden">
      {}
      <div className="absolute inset-0">
        {}
        <div className="absolute top-8 right-8 w-16 h-16 text-yellow-300/20 animate-spin" style={{ animationDuration: '20s' }}>
          <Buildings size={64} weight="bold" className="w-full h-full" />
        </div>
        
        {}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10v20l-10-10zm-10 0l10-10v20l-10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {}
      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Power Your Business Growth
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join Lebanon's leading businesses who have already made the switch to reliable, cost-effective solar energy. 
          Your competitive advantage starts with a free business energy consultation.
        </p>

        {}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-[#007577] bg-white rounded-full hover:bg-[#E68E27] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full transition-transform duration-1000 ${
              isButtonHovered ? 'animate-shimmer' : ''
            }`} />
            
            <span className="relative z-10">Get Your Business Consultation</span>
            <ArrowRight size={20} weight="bold" className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {}
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
            <span className="text-sm font-regular">Free Business Assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
            <span className="text-sm font-regular">ROI Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
            <span className="text-sm font-regular">Expert Guidance</span>
          </div>
        </div>
      </div>

      {}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-200/30 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300/50 rounded-full animate-pulse delay-3000" />
      </div>
    </section>
  );
};

export default CommercialCTA;
