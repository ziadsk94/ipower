'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun, BatteryHigh, Globe } from '@phosphor-icons/react';

const ResidentialBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
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

  const benefits = [
    {
      icon: Sun,
      title: 'Safe Electrical Systems',
      description: 'Modern electrical systems with safety compliance and code standards.',
      color: 'text-yellow-500'
    },
    {
      icon: BatteryHigh,
      title: '24/7 Electrical Reliability',
      description: 'Never worry about electrical failures with reliable backup systems.',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Smart Home Integration',
      description: 'Advanced electrical systems that integrate with modern smart home technology.',
      color: 'text-green-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="benefits"
      className="py-20 bg-[#F9FAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Why Choose Electrical Systems for Your Home?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your home into a safe, reliable sanctuary with smart electrical systems designed for Lebanese families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-all duration-300 ${
                  hoveredIcon === index ? 'scale-110 shadow-lg' : 'scale-100'
                }`}>
                  <benefit.icon 
                    size={40} 
                    weight="bold" 
                    className={`transition-all duration-300 ${
                      hoveredIcon === index ? 'text-[#E68E27]' : benefit.color
                    }`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#007577] mb-4 group-hover:text-[#E68E27] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {benefit.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#007577]/5 to-[#E68E27]/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialBenefits;
