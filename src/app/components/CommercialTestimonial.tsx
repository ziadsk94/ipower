'use client';

import { useState, useEffect, useRef } from 'react';

const CommercialTestimonial = () => {
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
      className="py-20 bg-[#007577]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-6xl text-[#E68E27]/20 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8">
              With iPower, our operations never stop — even when the grid does.
            </blockquote>
            <div className="text-xl text-white/80">
              <div className="font-bold mb-2">Marwan Khoury</div>
              <div>CEO, Beirut Manufacturing Co.</div>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E68E27] mb-2">99.9%</div>
              <div className="text-white/80">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E68E27] mb-2">$2,400</div>
              <div className="text-white/80">Monthly Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E68E27] mb-2">18</div>
              <div className="text-white/80">Months ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialTestimonial;
