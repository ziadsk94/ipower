'use client';

import { useState, useEffect, useRef } from 'react';
import { Gear, Shield, Lightning, ChartLine } from '@phosphor-icons/react';

const IndustrialEngineering = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
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

  const features = [
    {
      icon: Gear,
      title: 'Inverter Systems',
      description: 'Advanced industrial-grade inverters with maximum power point tracking',
      details: 'High-efficiency inverters designed for harsh industrial environments with 25+ year lifespan.'
    },
    {
      icon: ChartLine,
      title: 'Grid-Tie Optimization',
      description: 'Smart grid integration with load balancing and peak shaving capabilities',
      details: 'Intelligent energy management systems that optimize power flow and reduce demand charges.'
    },
    {
      icon: Shield,
      title: 'Safety Standards',
      description: 'Comprehensive safety protocols and emergency shutdown systems',
      details: 'Industry-leading safety standards with automatic fault detection and rapid shutdown capabilities.'
    },
    {
      icon: Lightning,
      title: 'Power Quality',
      description: 'Premium power conditioning and harmonic filtering for sensitive equipment',
      details: 'Advanced power quality management ensuring clean, stable power for critical industrial processes.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/assets/images/projects-section/warehouse.png)'
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#007577]">2.5MW</div>
                      <div className="text-sm text-gray-600">System Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#E68E27]">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#007577]">15yr</div>
                      <div className="text-sm text-gray-600">Warranty</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
              Engineering Excellence
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our industrial solar systems are engineered for maximum performance, reliability, and safety. 
              Every component is selected and configured for optimal operation in demanding industrial environments.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#F9FAF9]">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      hoveredFeature === index ? 'bg-[#E68E27]' : 'bg-[#007577]'
                    }`}>
                      <feature.icon size={24} weight="bold" className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#007577] mb-2 group-hover:text-[#E68E27] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {feature.description}
                      </p>
                      <div className={`text-sm text-gray-500 transition-all duration-300 ${
                        hoveredFeature === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                      }`}>
                        {feature.details}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 hover:shadow-xl"
              >
                Talk to Our Engineers
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#007577] text-[#007577] rounded-full font-regular text-lg hover:bg-[#007577] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialEngineering;
