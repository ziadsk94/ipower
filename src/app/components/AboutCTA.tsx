'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Envelope } from '@phosphor-icons/react';

const AboutCTA = () => {
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
      className="relative py-20 bg-[#007577] overflow-hidden"
    >
      {}
      <div className="absolute inset-0">
        {}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E68E27]/10 via-transparent to-[#007577]/20" />
        
        {}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" 
               style={{ animationDuration: '3s' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to power your future with{' '}
            <span className="text-[#E68E27] relative">
              precision?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#E68E27]/50 rounded-full" />
            </span>
          </h2>

          {}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's design your next electrical solution — safe, efficient, and sustainable.
          </p>

          {}
          <div className="mb-12">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-regular text-white bg-[#E68E27] rounded-full hover:bg-white hover:text-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              {}
              <div
                className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                  isButtonHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  animation: isButtonHovered ? 'shimmer 1.5s ease-in-out' : 'none'
                }}
              />

              <span className="relative z-10">Contact Our Engineering Team</span>

              {}
              <ArrowRight size={24} weight="bold" className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone size={24} weight="bold" className="text-white" />
              </div>
              <div>
                <div className="text-sm text-white/60">Call Us</div>
                <div className="font-regular">+961 3 123 456</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-white/80">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Envelope size={24} weight="bold" className="text-white" />
              </div>
              <div>
                <div className="text-sm text-white/60">Email Us</div>
                <div className="font-regular">info@ipower.com.lb</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;
