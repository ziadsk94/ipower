'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Door, 
  ShieldCheck, 
  Fingerprint, 
  Lightbulb, 
  Drop, 
  Garage, 
  Power, 
  Palette 
} from '@phosphor-icons/react';

const AutomationServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
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

  const services = [
    {
      id: 1,
      icon: Door,
      title: 'Automatic Door Opening & Closing',
      description: 'Smart automated door systems that open and close automatically for enhanced convenience and security.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: 'Retractable Bollards',
      description: 'Automated retractable bollards for secure access control and perimeter protection of your property.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 3,
      icon: Fingerprint,
      title: 'Biometric Entry System',
      description: 'Advanced biometric access control systems using fingerprint recognition for secure, keyless entry.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      icon: Lightbulb,
      title: 'Light Control',
      description: 'Intelligent lighting control systems with dimming, scheduling, and motion sensor integration.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 5,
      icon: Drop,
      title: 'Watering System',
      description: 'Automated irrigation and watering systems with smart scheduling and moisture sensor integration.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      id: 6,
      icon: Garage,
      title: 'Garage Doors',
      description: 'Automated garage door systems with remote control, timer settings, and security features.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 7,
      icon: Power,
      title: 'Wireless Socket ON/OFF',
      description: 'Smart wireless socket control systems allowing remote and scheduled power management for your devices.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 8,
      icon: Palette,
      title: 'Spot Light Color Control',
      description: 'RGB color control systems for spotlights with customizable colors, dimming, and scene presets.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="py-20 bg-[#F9FAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Our Automation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automation solutions designed to enhance convenience, security, and efficiency for your property in Lebanon.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] rounded-full animate-gradient-x" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${service.bgColor} flex items-center justify-center transition-all duration-300 ${
                  hoveredService === service.id ? 'scale-110 shadow-lg' : 'scale-100'
                }`}>
                  <service.icon 
                    size={32} 
                    weight="bold" 
                    className={`transition-all duration-300 ${
                      hoveredService === service.id ? 'text-[#E68E27]' : service.color
                    }`}
                  />
                </div>

                <h3 className="text-lg font-bold text-[#007577] mb-3 group-hover:text-[#E68E27] transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#007577]/5 to-[#E68E27]/5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-3xl h-auto rounded-2xl shadow-lg"
          >
            <source src="/assets/videos/hero2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default AutomationServices;

