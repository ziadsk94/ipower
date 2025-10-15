'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, Eye, Lightbulb, Wrench, ChartLine } from '@phosphor-icons/react';

const ResidentialProcess = () => {
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
      description: 'Free home electrical assessment and personalized electrical consultation.',
      details: 'We analyze your electrical needs, home structure, and safety requirements to design the perfect system.'
    },
    {
      icon: Eye,
      title: 'Electrical Inspection',
      description: 'Professional electrical evaluation to ensure optimal system placement and safety.',
      details: 'Our experts assess your home structure, electrical capacity, and safety requirements for maximum efficiency.'
    },
    {
      icon: Lightbulb,
      title: 'System Design',
      description: 'Custom electrical system design tailored to your home and safety goals.',
      details: 'Detailed electrical plans and safety compliance to show exactly how your system will perform.'
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Professional installation by certified electrical engineers with minimal disruption.',
      details: 'Our expert team installs your electrical system efficiently while maintaining the highest safety standards.'
    },
    {
      icon: ChartLine,
      title: 'Monitoring',
      description: '24/7 system monitoring and regular maintenance for optimal electrical performance.',
      details: 'Continuous monitoring ensures your electrical system performs at peak efficiency year after year.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From consultation to electrical system completion, we guide you through every step of your electrical journey.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(-1)}
              >
                <div className={`relative bg-[#F9FAF9] rounded-2xl p-6 shadow-sm transition-all duration-300 h-full flex flex-col ${
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

                  <h3 className={`text-xl font-bold mb-3 text-center transition-colors duration-300 ${
                    activeStep === index ? 'text-[#E68E27]' : 'text-[#007577]'
                  }`}>
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
      </div>
    </section>
  );
};

export default ResidentialProcess;
