'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { House, Buildings, Factory, ArrowRight } from '@phosphor-icons/react';

const OurSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      id: 1,
      category: 'residential',
      icon: House,
      title: 'Residential Electrical Systems',
      description: 'Safe, reliable electrical systems for homes with modern safety standards.',
      cta: 'Learn More',
      color: '#007577',
      bgGradient: 'from-blue-50 to-teal-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      id: 2,
      category: 'commercial',
      icon: Buildings,
      title: 'Commercial Electrical Solutions',
      description: 'Professional electrical systems for businesses with advanced control and automation.',
      cta: 'Learn More',
      color: '#007577',
      bgGradient: 'from-orange-50 to-yellow-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      id: 3,
      category: 'industrial',
      icon: Factory,
      title: 'Industrial Electrical Engineering',
      description: 'Heavy-duty electrical systems for industrial facilities with power distribution and control.',
      cta: 'Learn More',
      color: '#007577',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  const filteredSolutions = activeFilter === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeFilter);

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
      className="relative py-20 bg-[#F5F7F6] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-teal-200/15 to-blue-200/15 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Electrical Engineering Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're powering a home, a business, or an industry — iPower designs reliable electrical systems that scale with you.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] rounded-full animate-gradient-x" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Solutions' },
              { key: 'residential', label: 'Residential' },
              { key: 'commercial', label: 'Commercial' },
              { key: 'industrial', label: 'Industrial' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full text-sm font-regular transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#007577] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#007577]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 ${solution.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon size={32} weight="bold" className={solution.iconColor} />
                </div>

                <h3 className="text-2xl font-bold text-[#007577] mb-4 text-center group-hover:text-[#E68E27] transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                  {solution.title}
                </h3>

                <p className="text-gray-600 mb-8 text-center leading-relaxed flex-grow min-h-[4.5rem] flex items-start justify-center">
                  {solution.description}
                </p>

                <div className="text-center mt-auto">
                  <Link
                    href={`/solutions/${solution.category}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#E68E27] text-white rounded-full font-regular hover:bg-[#007577] transition-all duration-300 group-hover:shadow-lg"
                  >
                    <span>{solution.cta}</span>
                    <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl border-2 border-[#E68E27]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to find your perfect solar solution?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#007577] to-[#E68E27] text-white rounded-full font-regular text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Your Free Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
