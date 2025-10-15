'use client';

import { useState, useEffect, useRef } from 'react';

const IndustrialMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ capacity: 0, uptime: 0, warranty: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounter('capacity', 10);
          animateCounter('uptime', 99.9);
          animateCounter('warranty', 15);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (key: string, target: number) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: key === 'uptime' ? parseFloat(current.toFixed(1)) : Math.floor(current)
      }));
    }, duration / steps);
  };

  const metrics = [
    {
      value: `+${counters.capacity}MW`,
      label: 'Installed Capacity',
      description: 'Total solar capacity deployed across industrial facilities',
      color: 'text-[#007577]'
    },
    {
      value: `${counters.uptime}%`,
      label: 'System Uptime',
      description: 'Reliability and performance guarantee',
      color: 'text-[#E68E27]'
    },
    {
      value: `${counters.warranty} Year`,
      label: 'Warranty',
      description: 'Comprehensive system warranty coverage',
      color: 'text-[#007577]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="metrics"
      className="py-20 bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Industrial Scale Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proven results from large-scale solar installations across Lebanon's industrial sector.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`text-5xl lg:text-6xl font-bold ${metric.color} mb-4`}>
                {metric.value}
              </div>
              
              <h3 className="text-xl font-bold text-[#007577] mb-3">
                {metric.label}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {metric.description}
              </p>

              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-2000 ${
                      metric.color === 'text-[#E68E27]' ? 'bg-[#E68E27]' : 'bg-[#007577]'
                    }`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#007577] mb-6">
              Industrial Solar Excellence
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E68E27] mb-2">50+</div>
                <div className="text-gray-600">Industrial Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#007577] mb-2">24/7</div>
                <div className="text-gray-600">Technical Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E68E27] mb-2">99.9%</div>
                <div className="text-gray-600">System Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#007577] mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialMetrics;
