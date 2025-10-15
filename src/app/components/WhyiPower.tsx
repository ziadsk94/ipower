'use client';

import { useState, useEffect, useRef } from 'react';
import { Lightning, Sun, Lightbulb, Handshake } from '@phosphor-icons/react';

const WhyiPower = () => {
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

  const values = [
    {
      icon: Lightning,
      title: 'Efficiency',
      description: 'Maximum electrical system performance and reliability.',
      color: 'text-yellow-500'
    },
    {
      icon: Sun,
      title: 'Safety',
      description: 'Safe electrical systems, built for compliance.',
      color: 'text-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Smart electrical systems, local engineering expertise.',
      color: 'text-blue-500'
    },
    {
      icon: Handshake,
      title: 'Trust',
      description: 'Installed by electrical engineers, supported for life.',
      color: 'text-green-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F9FAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-8">
              Why iPower — The Electrical Engineering Choice
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-4 transition-all duration-300 ${
                      hoveredIcon === index ? 'scale-110 shadow-lg' : 'scale-100'
                    }`}>
                      <value.icon 
                        size={32} 
                        weight="bold" 
                        className={`transition-all duration-300 ${
                          hoveredIcon === index ? 'text-[#E68E27]' : value.color
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#007577] mb-2 group-hover:text-[#E68E27] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/assets/images/projects-section/hospital.png)'
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#007577]">100+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#E68E27]">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#007577]">5MW+</div>
                      <div className="text-sm text-gray-600">Installed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyiPower;
