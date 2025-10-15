'use client';

import { useState, useEffect, useRef } from 'react';
import { Shield, Leaf, CheckCircle } from '@phosphor-icons/react';

const QualitySafety = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
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

  const panels = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      subtitle: 'Built to last. Designed to perform.',
      description: 'Every electrical system undergoes rigorous testing and quality control processes to ensure optimal performance and longevity.',
      features: [
        'Rigorous testing protocols',
        'Quality control processes',
        'Performance optimization',
        'Long-term reliability'
      ],
      color: 'text-blue-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      subtitle: 'Engineering solutions that respect our planet.',
      description: 'Our electrical systems are designed with environmental responsibility, focusing on energy efficiency and sustainable practices.',
      features: [
        'Energy efficiency focus',
        'Environmental responsibility',
        'Sustainable practices',
        'Green technology integration'
      ],
      color: 'text-green-500',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: Shield,
      title: 'Safety',
      subtitle: 'Zero compromise. Zero incidents.',
      description: 'Safety is our top priority. We adhere to international safety standards and implement comprehensive safety protocols.',
      features: [
        'International safety standards',
        'Comprehensive safety protocols',
        'Zero incident record',
        'Continuous safety monitoring'
      ],
      color: 'text-red-500',
      bgGradient: 'from-red-50 to-pink-50',
      iconBg: 'bg-red-100'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F5F6F5] relative overflow-hidden"
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
            Quality, Safety & Sustainability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reassuring with credibility — emphasizing certifications, process, and standards
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPanel(index)}
              onMouseLeave={() => setHoveredPanel(null)}
            >
              <div className={`relative bg-gradient-to-br ${panel.bgGradient} rounded-2xl p-8 shadow-sm transition-all duration-300 transform h-full flex flex-col ${
                hoveredPanel === index ? 'ring-2 ring-[#E68E27] shadow-xl -translate-y-2' : ''
              }`}>
                <div className={`w-16 h-16 ${panel.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredPanel === index ? 'scale-110' : ''
                }`}>
                  <panel.icon size={32} weight="bold" className={panel.color} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#007577] mb-2 group-hover:text-[#E68E27] transition-colors duration-300">
                    {panel.title}
                  </h3>
                  
                  <p className="text-lg font-regular text-gray-600 mb-4">
                    {panel.subtitle}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {panel.description}
                  </p>

                  <div className="space-y-2">
                    {panel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#007577] rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                  hoveredPanel === index ? 'opacity-20' : 'opacity-0'
                }`} style={{
                  background: 'radial-gradient(circle at center, rgba(230,142,39,0.1) 0%, transparent 70%)'
                }} />

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#007577] to-[#E68E27] transition-all duration-500 ${
                  hoveredPanel === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007577] mb-2">100%</div>
            <div className="text-sm text-gray-600">Safety Record</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#E68E27] mb-2">25+</div>
            <div className="text-sm text-gray-600">Years Warranty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007577] mb-2">ISO</div>
            <div className="text-sm text-gray-600">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#E68E27] mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySafety;
