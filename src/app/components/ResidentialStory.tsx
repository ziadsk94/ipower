'use client';

import { useState, useEffect, useRef } from 'react';

const ResidentialStory = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F9FAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/assets/images/projects-section/villa.png)'
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E68E27] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">A</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-regular leading-relaxed mb-2">
                        "We stopped worrying about power cuts — iPower made our home self-reliant."
                      </p>
                      <div className="text-sm text-gray-600">
                        <div className="font-bold">Ahmad & Sarah</div>
                        <div>Beirut, Lebanon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
              Real Stories from Real Families
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of Lebanese families who have transformed their homes with solar energy. 
              Discover how solar power has brought peace of mind, energy independence, and significant savings to families across Lebanon.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E68E27]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#007577]">80% Reduction in Electricity Bills</h3>
                  <p className="text-gray-600">Average savings of $200-400 per month</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E68E27]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔋</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#007577]">24/7 Power Reliability</h3>
                  <p className="text-gray-600">Never worry about power cuts again</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E68E27]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#007577]">Environmental Impact</h3>
                  <p className="text-gray-600">Reduce your carbon footprint by 3-5 tons annually</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Your Solar Journey
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#007577] text-[#007577] rounded-full font-regular text-lg hover:bg-[#007577] hover:text-white transition-all duration-300"
              >
                View More Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialStory;
