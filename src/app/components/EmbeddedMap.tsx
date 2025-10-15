'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Compass } from '@phosphor-icons/react';

const EmbeddedMap = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
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
      className="py-20 bg-[#F9FAF9] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Location Visualization
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#007577] text-white p-6">
              <div className="flex items-center gap-3">
                <MapPin size={24} weight="bold" />
                <div>
                  <h3 className="text-xl font-bold">iPower — Tyre, Lebanon</h3>
                  <p className="text-white/80">Lilia Center, Near Hiram Hospital, Tyre, Lebanon</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007577]/20 to-[#E68E27]/20 flex items-center justify-center">
                <div className="relative">
                  <svg width="300" height="200" viewBox="0 0 300 200" className="text-[#007577]">
                    <path
                      d="M50 50 L250 50 L250 150 L200 150 L200 180 L150 180 L150 150 L100 150 L100 180 L50 180 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-30"
                    />
                    
                    <circle cx="150" cy="100" r="8" fill="#E68E27" className="animate-pulse" />
                    <circle cx="150" cy="100" r="4" fill="white" />
                    
                    <circle cx="150" cy="100" r="12" fill="none" stroke="#E68E27" strokeWidth="2" className="opacity-50 animate-ping" />
                  </svg>
                  
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2 text-[#007577] font-bold">
                      <MapPin size={16} weight="bold" />
                      <span>iPower HQ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-sm text-gray-600">
                  <div className="font-bold text-[#007577] mb-1">South Lebanon</div>
                  <div>Near Lebanese Defense College</div>
                  <div className="text-xs text-gray-500 mt-1">Easy access from Beirut</div>
                </div>
              </div>

              {!isMapLoaded && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#007577] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Compass size={24} weight="bold" className="text-[#007577] mx-auto mb-2" />
                  <h4 className="font-bold text-[#007577] mb-1">Easy Access</h4>
                  <p className="text-sm text-gray-600">Located on main street with parking available</p>
                </div>
                <div className="text-center">
                  <MapPin size={24} weight="bold" className="text-[#E68E27] mx-auto mb-2" />
                  <h4 className="font-bold text-[#007577] mb-1">Central Location</h4>
                  <p className="text-sm text-gray-600">Strategic position in South Lebanon</p>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 bg-[#007577] rounded-full mx-auto mb-2"></div>
                  <h4 className="font-bold text-[#007577] mb-1">Professional</h4>
                  <p className="text-sm text-gray-600">Modern office with meeting facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com/?q=Abbaseye+Main+Street+South+Lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E68E27] text-white rounded-full font-regular hover:bg-[#007577] transition-all duration-300 transform hover:scale-105"
            >
              <Compass size={20} weight="bold" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbeddedMap;
