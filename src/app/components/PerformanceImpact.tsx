'use client';

import { useState, useEffect, useRef } from 'react';
import { Lightning, Factory, Brain, Globe } from '@phosphor-icons/react';

const PerformanceImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    capacity: 0,
    installations: 0,
    years: 0,
    coverage: 0
  });
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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targetValues = {
        capacity: 30,
        installations: 50,
        years: 14,
        coverage: 100
      };

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          capacity: Math.floor(targetValues.capacity * progress),
          installations: Math.floor(targetValues.installations * progress),
          years: Math.floor(targetValues.years * progress),
          coverage: Math.floor(targetValues.coverage * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const metrics = [
    {
      icon: Lightning,
      value: `${counters.capacity}+`,
      unit: 'MW',
      label: 'Installed Capacity',
      description: 'Total electrical capacity across all projects',
      color: 'text-[#E68E27]'
    },
    {
      icon: Factory,
      value: `${counters.installations}+`,
      unit: '',
      label: 'Major Installations',
      description: 'Completed electrical projects',
      color: 'text-[#007577]'
    },
    {
      icon: Brain,
      value: `${counters.years}`,
      unit: 'Years',
      label: 'Engineering Expertise',
      description: 'Years of electrical engineering experience',
      color: 'text-[#E68E27]'
    },
    {
      icon: Globe,
      value: `${counters.coverage}%`,
      unit: '',
      label: 'Nationwide Coverage',
      description: 'Lebanon coverage and support',
      color: 'text-[#007577]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#007577] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Performance & Impact
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Summarizing the measurable success and reach of iPower's projects
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <metric.icon size={32} weight="bold" className="text-white" />
                </div>

                <div className="mb-4 flex flex-col flex-grow">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {metric.value}
                    {metric.unit && <span className="text-2xl text-white/80">{metric.unit}</span>}
                  </div>
                  <div className="text-lg font-bold text-white mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-white/80 leading-relaxed flex-grow">
                    {metric.description}
                  </div>
                </div>

                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden mt-auto">
                  <div 
                    className="h-full bg-[#E68E27] rounded-full transition-all duration-2000 ease-out"
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

        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-white/80">Safety Record</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">ISO</div>
            <div className="text-sm text-white/80">Certified</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-sm text-white/80">Years Warranty</div>
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-regular text-white italic leading-relaxed mb-4">
              "Building Lebanon's electrical infrastructure, one project at a time."
            </blockquote>
            <cite className="text-lg text-white/80 font-regular">
              — iPower Engineering Team
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceImpact;
