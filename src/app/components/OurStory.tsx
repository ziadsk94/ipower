'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
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

  const images = [
    '/assets/images/projects-section/warehouse.png',
    '/assets/images/projects-section/business-complex.png'
  ];

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveImage(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, images.length]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images[activeImage]}
                  alt={activeImage === 0 ? "iPower Industrial Projects" : "iPower Commercial Projects"}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-all duration-1000"
                  loader={({ src }) => src}
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#007577]/20 to-transparent" />
                
                <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-500" />
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#E68E27] rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#007577] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#007577] leading-tight">
                  Our Story
                </h2>
                <div className="w-16 h-1 bg-[#E68E27] rounded-full" />
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2011 in Batoulay, iPower began with a simple vision — to empower communities through smarter electrical systems.
                </p>
                <p>
                  Today, from our Abbaseye headquarters, we serve clients nationwide with cutting-edge engineering solutions that redefine reliability and sustainability.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#007577]">Our Journey</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#E68E27] rounded-full" />
                    <span className="text-gray-700">2011: Founded in Batoulay with vision for electrical excellence</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#007577] rounded-full" />
                    <span className="text-gray-700">2018: Moved to Abbaseye headquarters for expanded operations</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#E68E27] rounded-full" />
                    <span className="text-gray-700">2020: 100+ electrical projects completed nationwide</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#007577] rounded-full" />
                    <span className="text-gray-700">2024: Advanced automation systems and international partnerships</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#007577] rounded-full" />
                  <span className="font-regular text-gray-700">Local Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                  <span className="font-regular text-gray-700">Technical Innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#007577] rounded-full" />
                  <span className="font-regular text-gray-700">Safety First</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                  <span className="font-regular text-gray-700">Sustainable Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
