'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, Lightbulb, Wrench, ChartLine } from '@phosphor-icons/react';

const ProcessTechnology = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const steps = [
    {
      icon: Phone,
      title: 'Consultation',
      description: 'Free electrical assessment and system design consultation tailored to your needs.',
      details: 'We analyze your electrical requirements, facility needs, and budget to create the perfect electrical solution.'
    },
    {
      icon: Lightbulb,
      title: 'Design & Planning',
      description: 'Detailed electrical system design and planning to optimize your electrical infrastructure.',
      details: 'Advanced engineering creates detailed plans showing exactly how your electrical system will perform.'
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Professional installation by certified electrical engineers with minimal disruption.',
      details: 'Our expert team installs your electrical system efficiently while maintaining the highest safety standards.'
    },
    {
      icon: ChartLine,
      title: 'Monitoring & Maintenance',
      description: '24/7 system monitoring and regular maintenance for optimal electrical performance.',
      details: 'Continuous monitoring ensures your electrical system performs at peak efficiency year after year.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F5F5F5] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30-30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            How Electrical Engineering Works with iPower
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From first call to full system completion — every iPower electrical system is precision-engineered, locally installed, and continuously monitored for peak performance.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(-1)}
              >
                <div className={`relative bg-white rounded-2xl p-6 shadow-sm transition-all duration-300 transform h-full flex flex-col ${
                  activeStep === index ? 'ring-2 ring-[#E68E27] shadow-xl -translate-y-2' : ''
                }`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#007577] to-[#E68E27] flex items-center justify-center transition-all duration-300 ${
                    activeStep === index ? 'scale-110 shadow-lg' : 'scale-100'
                  }`}>
                    <step.icon size={32} weight="bold" className="text-white" />
                  </div>

                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#E68E27] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-[#007577] mb-3 text-center group-hover:text-[#E68E27] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed mb-4 flex-grow">
                    {step.description}
                  </p>

                  <div className={`text-sm text-gray-500 text-center transition-all duration-300 ${
                    activeStep === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {step.details}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-px h-8 bg-gradient-to-b from-[#007577] to-[#E68E27]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#007577] mb-4">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert team is ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Start Free Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#007577] text-[#007577] rounded-full font-regular text-lg hover:bg-[#007577] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTechnology;
