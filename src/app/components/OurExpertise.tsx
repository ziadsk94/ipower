'use client';

import { useState, useEffect, useRef } from 'react';
import { Gear, BatteryHigh, Brain, Lightbulb, Shield } from '@phosphor-icons/react';

const OurExpertise = () => {
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

  const expertiseAreas = [
    {
      icon: Gear,
      title: 'Electrical Design & Planning',
      description: 'Tailored blueprints ensuring efficiency and compliance',
      details: 'Advanced electrical system design with comprehensive planning for optimal performance and safety standards.',
      color: 'text-blue-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: BatteryHigh,
      title: 'Power Distribution & Control',
      description: 'From low to medium voltage systems',
      details: 'Complete power distribution solutions with advanced control systems for reliable electrical infrastructure.',
      color: 'text-green-500',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: Brain,
      title: 'Control Systems & Automation',
      description: 'PLC programming, Delta HMI, DEIF controllers',
      details: 'Advanced automation systems with PLC programming, HMI interfaces, and intelligent control solutions.',
      color: 'text-purple-500',
      bgGradient: 'from-purple-50 to-violet-50',
      iconBg: 'bg-purple-100'
    },
    {
      icon: Lightbulb,
      title: 'Lighting & Energy Efficiency',
      description: 'Smarter systems for reduced consumption',
      details: 'Intelligent lighting solutions and energy efficiency systems designed to minimize consumption and maximize performance.',
      color: 'text-yellow-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      iconBg: 'bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Certified, code-compliant systems built to protect',
      details: 'Comprehensive safety protocols and compliance standards ensuring the highest levels of electrical safety.',
      color: 'text-red-500',
      bgGradient: 'from-red-50 to-pink-50',
      iconBg: 'bg-red-100'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F9FAF9] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Engineering That Powers Lebanon
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br ${area.bgGradient} rounded-2xl p-8 shadow-sm transition-all duration-300 transform h-full flex flex-col ${
                hoveredCard === index ? 'ring-2 ring-[#E68E27] shadow-xl -translate-y-2' : ''
              }`}>
                <div className={`w-16 h-16 ${area.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredCard === index ? 'scale-110' : ''
                }`}>
                  <area.icon size={32} weight="bold" className={area.color} />
                </div>

                <h3 className="text-2xl font-bold text-[#007577] mb-4 group-hover:text-[#E68E27] transition-colors duration-300">
                  {area.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                  {area.description}
                </p>

                <div className={`transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {area.details}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#007577] to-[#E68E27] transition-all duration-500 ${
                  hoveredCard === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />

                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-20' : 'opacity-0'
                }`} style={{
                  background: 'radial-gradient(circle at center, rgba(230,142,39,0.1) 0%, transparent 70%)'
                }} />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience our engineering expertise?
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
              <span>Discuss Your Project</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
