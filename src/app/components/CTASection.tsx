'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sun } from '@phosphor-icons/react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 70% 50%, rgba(230,142,39,0.25), rgba(0,117,119,1))'
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-yellow-200/20 to-orange-300/20 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-300/40 rounded-full animate-bounce" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-400/50 rounded-full animate-bounce delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-200/30 rounded-full animate-bounce delay-2000" />
        </div>

        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            animation: 'shimmer 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 
            className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Ready to Upgrade Your{' '}
            <span className="text-[#E68E27] relative">
              Electrical Systems?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#E68E27]/50 rounded-full" />
            </span>
          </h2>

          <p 
            className={`text-lg md:text-xl text-[#F1F1F1] mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Power your home or business with reliable, safe electrical systems — designed for Lebanon's needs, built for your safety and efficiency.
          </p>

          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-regular text-white bg-[#E68E27] rounded-full hover:bg-white hover:text-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <div 
                className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                  isButtonHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  animation: isButtonHovered ? 'shimmer 1.5s ease-in-out' : 'none'
                }}
              />
              
              <span className="relative z-10">Get Your Free Electrical Consultation</span>
              
              <ArrowRight size={20} weight="bold" className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div 
            className={`mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
              <span className="text-sm font-regular">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
              <span className="text-sm font-regular">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
              <span className="text-sm font-regular">Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 w-16 h-16 text-yellow-300/20 animate-spin" style={{ animationDuration: '20s' }}>
        <Sun size={64} weight="bold" className="w-full h-full" />
      </div>
    </section>
  );
};

export default CTASection;
