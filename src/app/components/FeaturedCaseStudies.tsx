'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lightning, MapPin, Calendar } from '@phosphor-icons/react';

const FeaturedCaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
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

  const caseStudies = [
    {
      id: 'screen-electrotech-company',
      title: 'Screen Electrotech Company — 250kW Industrial System',
      location: 'Lebanon',
      capacity: '250kW',
      year: '2024',
      description: 'Advanced industrial electrical system with Delta PLC programming and DEIF controllers, ensuring optimized performance under variable load conditions.',
      image: '/assets/images/projects-section/warehouse.png',
      highlights: [
        'Delta PLC Programming',
        'DEIF Controllers',
        'Advanced Load Management',
        'Safety Compliance Systems'
      ],
      results: '30% reduction in operational costs',
      color: '#E68E27'
    },
    {
      id: 'bent-jubail-hospital',
      title: 'Bent Jubail Hospital — 100kW Healthcare System',
      location: 'Bent Jubail, Lebanon',
      capacity: '100kW',
      year: '2023',
      description: 'Critical healthcare facility powered by hospital-grade electrical system with backup power systems and medical equipment integration.',
      image: '/assets/images/projects-section/hospital.png',
      highlights: [
        'Hospital-Grade Safety',
        'Backup Power Systems',
        'Medical Equipment Integration',
        'Emergency Response Systems'
      ],
      results: '100% uptime during critical operations',
      color: '#007577'
    },
    {
      id: 'solar-pump-system',
      title: 'Solar Pump System — 50 HP Agricultural Solution',
      location: 'Byot El Sayyad, Lebanon',
      capacity: '50 HP',
      year: '2023',
      description: 'Advanced solar pump system providing 11 hours of daily operation for agricultural irrigation with intelligent water management.',
      image: '/assets/images/projects-section/farm.png',
      highlights: [
        'Solar-Powered Operation',
        '11 Hours Daily Operation',
        'Agricultural Integration',
        'Water Management Systems'
      ],
      results: '100% fuel cost reduction',
      color: '#E68E27'
    },
    {
      id: 'alaweye-villa',
      title: 'Alaweye Villa — 30kW Residential System',
      location: 'Maron El Ras, Lebanon',
      capacity: '30kW',
      year: '2023',
      description: 'Luxury residential villa with 30kW hybrid 3-phase system featuring smart home integration and energy management.',
      image: '/assets/images/projects-section/villa.png',
      highlights: [
        'Hybrid 3-Phase System',
        'Smart Home Integration',
        'Energy Management',
        'Luxury Residential'
      ],
      results: '45% energy cost reduction',
      color: '#007577'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
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
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The flagship projects that best represent iPower's innovation and scale
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="space-y-12">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCase(index)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <div className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform ${
                hoveredCase === index ? '-translate-y-2' : ''
              }`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loader={({ src }) => src}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-[#007577]/20 to-transparent" />
                    
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Lightning size={16} weight="bold" style={{ color: caseStudy.color }} />
                        <span className="font-bold text-[#007577]">{caseStudy.capacity}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} weight="bold" className="text-[#007577]" />
                        <span className="font-regular text-gray-700">{caseStudy.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#007577] group-hover:text-[#E68E27] transition-colors duration-300">
                        {caseStudy.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {caseStudy.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-[#007577]">Technical Highlights</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {caseStudy.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: caseStudy.color }} />
                              <span className="text-sm text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#F9FAF9] rounded-lg p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: caseStudy.color }} />
                          <span className="text-sm font-regular text-gray-600">Key Result:</span>
                          <span className="text-sm font-bold text-[#007577]">{caseStudy.results}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} weight="bold" />
                        <span>Completed {caseStudy.year}</span>
                      </div>

                      <div className="pt-4">
                        <Link
                          href={`/projects/${caseStudy.id}`}
                          className="inline-flex items-center gap-2 text-[#E68E27] font-regular hover:text-[#007577] transition-colors duration-300 group"
                        >
                          <span>View Case Study</span>
                          <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your own success story?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
