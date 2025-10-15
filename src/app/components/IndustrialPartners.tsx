'use client';

import { useState, useEffect, useRef } from 'react';

const IndustrialPartners = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Committed to the highest standards of quality, safety, and environmental responsibility.
          </p>
        </div>

        <div className={`text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#F9FAF9] rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#007577] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">ISO</span>
                </div>
                <div className="text-sm font-bold text-[#007577]">ISO 9001</div>
                <div className="text-xs text-gray-600">Quality Management</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E68E27] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">CE</span>
                </div>
                <div className="text-sm font-bold text-[#007577]">CE Marking</div>
                <div className="text-xs text-gray-600">European Conformity</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#007577] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">UL</span>
                </div>
                <div className="text-sm font-bold text-[#007577]">UL Listed</div>
                <div className="text-xs text-gray-600">Safety Standards</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#E68E27] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">IEC</span>
                </div>
                <div className="text-sm font-bold text-[#007577]">IEC 61215</div>
                <div className="text-xs text-gray-600">Solar Panel Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialPartners;
