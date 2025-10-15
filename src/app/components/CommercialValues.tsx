'use client';

import { useState, useEffect, useRef } from 'react';
import { CurrencyDollar, Gear, TrendUp } from '@phosphor-icons/react';

const CommercialValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const values = [
    {
      icon: CurrencyDollar,
      title: 'Lower Operating Costs',
      description: 'Reduce your electricity bills by up to 70% with smart commercial solar systems.',
      details: 'Average savings of $500-2000 per month depending on business size and energy consumption.',
      color: 'text-green-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Gear,
      title: 'Seamless Power Continuity',
      description: 'Never lose business momentum with reliable 24/7 power supply and backup systems.',
      details: 'Advanced battery storage ensures uninterrupted operations even during grid outages.',
      color: 'text-blue-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: TrendUp,
      title: 'Quick ROI & Long-Term Value',
      description: 'See returns in 3-5 years with 25+ year system lifespan and increasing energy costs.',
      details: 'Typical ROI of 15-25% annually with significant long-term value appreciation.',
      color: 'text-orange-500',
      bgGradient: 'from-orange-50 to-yellow-50'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="values"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Why Commercial Solar Makes Business Sense
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your business operations with reliable, cost-effective solar energy solutions designed for Lebanese enterprises.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br ${value.bgGradient} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col ${
                hoveredCard === index ? 'ring-2 ring-[#E68E27]' : ''
              }`}>
                {}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all duration-300 ${
                  hoveredCard === index ? 'scale-110 shadow-lg' : 'scale-100'
                }`}>
                  <value.icon 
                    size={40} 
                    weight="bold" 
                    className={`transition-all duration-300 ${
                      hoveredCard === index ? 'text-[#E68E27]' : value.color
                    }`}
                  />
                </div>

                {}
                <h3 className="text-2xl font-bold text-[#007577] mb-4 text-center group-hover:text-[#E68E27] transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed mb-4 flex-grow">
                  {value.description}
                </p>

                {}
                <div className={`text-sm text-gray-500 text-center transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  {value.details}
                </div>

                {}
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

export default CommercialValues;
