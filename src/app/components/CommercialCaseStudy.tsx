'use client';

import { useState, useEffect, useRef } from 'react';

const CommercialCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCase, setCurrentCase] = useState(0);
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
      title: 'Beirut Office Complex',
      location: 'Beirut, Lebanon',
      image: '/assets/images/projects-section/business-complex.png',
      savings: '30%',
      timeframe: '12 months',
      description: 'Modern office building with 150kW solar system',
      details: 'Reduced electricity costs by 30% while maintaining 24/7 operations during power outages.'
    },
    {
      title: 'Byblos Retail Store',
      location: 'Byblos, Lebanon',
      image: '/assets/images/projects-section/shopping-center.png',
      savings: '45%',
      timeframe: '8 months',
      description: 'Shopping center with 80kW hybrid solar system',
      details: 'Achieved 45% energy savings with smart grid integration and battery backup.'
    },
    {
      title: 'Zahle Industrial Facility',
      location: 'Zahle, Lebanon',
      image: '/assets/images/projects-section/warehouse.png',
      savings: '60%',
      timeframe: '6 months',
      description: 'Industrial warehouse with 200kW solar installation',
      details: 'Massive 60% reduction in energy costs for heavy-duty operations.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Lebanese businesses are transforming their operations with solar energy.
          </p>
        </div>

        {}
        <div className="relative">
          {}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {}
              <div className="relative h-80 lg:h-96">
                <div
                  className="w-full h-full bg-cover bg-center transition-all duration-500"
                  style={{
                    backgroundImage: `url(${caseStudies[currentCase].image})`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-[#007577] mb-2">
                      {caseStudies[currentCase].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {caseStudies[currentCase].location}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#E68E27]">
                          {caseStudies[currentCase].savings}
                        </div>
                        <div className="text-sm text-gray-600">Energy Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#007577]">
                          {caseStudies[currentCase].timeframe}
                        </div>
                        <div className="text-sm text-gray-600">Timeframe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-[#007577] mb-4">
                  {caseStudies[currentCase].description}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {caseStudies[currentCase].details}
                </p>

                {}
                <div className="flex gap-2 mb-6">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentCase === index ? 'bg-[#E68E27]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 text-[#007577] hover:text-[#E68E27] font-regular transition-colors duration-300"
                >
                  <span>View Full Case Study</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialCaseStudy;
