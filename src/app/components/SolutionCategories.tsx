'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { House, Buildings, Factory, ArrowRight } from '@phosphor-icons/react';

const SolutionCategories = () => {
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

  const solutions = [
    {
      id: 1,
      type: 'residential',
      icon: House,
      title: 'Residential Electrical Systems',
      description: 'Safe, reliable electrical systems for homes with modern safety standards and smart home integration.',
      image: '/assets/images/projects-section/villa.png',
      features: ['Smart Home Integration', 'Safety Compliance', 'Energy Efficiency'],
      color: '#007577',
      bgGradient: 'from-blue-50 to-teal-50'
    },
    {
      id: 2,
      type: 'commercial',
      icon: Buildings,
      title: 'Commercial Electrical Solutions',
      description: 'Professional electrical systems for offices, retail, and commercial centers — reliability that never switches off.',
      image: '/assets/images/projects-section/shopping-center.png',
      features: ['24/7 Monitoring', 'Control Systems', 'Safety Compliance'],
      color: '#E68E27',
      bgGradient: 'from-orange-50 to-yellow-50'
    },
    {
      id: 3,
      type: 'industrial',
      icon: Factory,
      title: 'Industrial Electrical Engineering',
      description: 'Heavy-duty electrical systems designed for factories and large facilities with high power demands.',
      image: '/assets/images/projects-section/warehouse.png',
      features: ['High Capacity', 'Power Distribution', 'Control Systems'],
      color: '#007577',
      bgGradient: 'from-gray-50 to-blue-50'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="solutions"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Solution Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From residential rooftops to industrial facilities, we design solar solutions that power Lebanon's energy independence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${solution.image})`
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-6 right-6">
                  <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === solution.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  }`}>
                    <solution.icon size={24} weight="bold" className="text-white" />
                  </div>
                </div>
              </div>

              <div className="relative p-8 bg-white">
                <h3 className="text-2xl font-bold text-[#007577] mb-4 group-hover:text-[#E68E27] transition-colors duration-300">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/solutions/${solution.type}`}
                  className="group/cta inline-flex items-center gap-2 text-[#007577] hover:text-[#E68E27] font-regular transition-colors duration-300"
                >
                  <span>Explore {solution.type === 'residential' ? 'Residential' : solution.type === 'commercial' ? 'Commercial' : 'Industrial'} Solutions</span>
                  <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                </Link>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#007577]/10 to-[#E68E27]/10" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-gray-600 mb-8">
            Not sure which solution is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Get Personalized Recommendations</span>
            <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionCategories;
