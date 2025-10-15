'use client';

import { useState, useEffect, useRef } from 'react';
import { Quotes } from '@phosphor-icons/react';

const OurClients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
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

  const clients = [
    {
      name: 'Jabal El Ez Restaurant',
      type: 'Restaurant',
      location: 'South Lebanon',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      name: 'Ben Jubail Hospital',
      type: 'Healthcare',
      location: 'Bent Jubail',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Toyota Tyre',
      type: 'Automotive',
      location: 'Lebanon',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      name: 'Municipality of Qana',
      type: 'Government',
      location: 'Qana',
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Al Mabarrat School',
      type: 'Education',
      location: 'Bent Jubail',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Screen Electrotech',
      type: 'Industrial',
      location: 'Lebanon',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  // Auto-rotate logos
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentLogoIndex(prev => (prev + 1) % clients.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, clients.length]);

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
            Our Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto" />
        </div>

        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F9FAF9] rounded-2xl p-8 md:p-12 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#E68E27] rounded-full flex items-center justify-center">
                <Quotes size={24} weight="bold" className="text-white" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-[#007577] leading-relaxed mb-6">
                "Our systems are built for resilience — powering Lebanon's hospitals, factories, and communities."
              </blockquote>
              
              <cite className="block text-lg text-gray-600 font-regular">
                — iPower Engineering Team
              </cite>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  currentLogoIndex === index ? 'scale-110' : 'scale-100'
                }`}
                onMouseEnter={() => setCurrentLogoIndex(index)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col">
                  <div className="relative h-16 w-full mb-4 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      currentLogoIndex === index ? 'opacity-100 scale-110' : 'opacity-60 scale-100'
                    } ${client.color}`}>
                      {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  
                  <div className="space-y-1 flex-grow flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-[#007577] group-hover:text-[#E68E27] transition-colors duration-300 mb-2">
                      {client.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">{client.type}</p>
                    <p className="text-xs text-gray-400">{client.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007577] mb-2">100+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#E68E27] mb-2">50+</div>
            <div className="text-sm text-gray-600">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007577] mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#E68E27] mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
