'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sun, Leaf, Factory, Heart } from '@phosphor-icons/react';

const AboutiPower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);

  const milestones = [
    {
      year: '2011',
      title: 'iPower founded in Ksara',
      description: 'Started with a vision to provide reliable electrical engineering solutions in Lebanon',
      icon: Leaf
    },
    {
      year: '2018',
      title: 'Moved to Abbassieh',
      description: 'Expanded operations and established our main headquarters in Abbassieh',
      icon: Heart
    },
    {
      year: '2020',
      title: '100+ electrical projects completed',
      description: 'Reached our first major milestone in electrical system installations',
      icon: Factory
    },
    {
      year: '2022',
      title: 'Industrial electrical systems',
      description: 'Launched our largest industrial electrical project with advanced control systems',
      icon: Sun
    },
    {
      year: '2024',
      title: 'Advanced automation systems',
      description: 'Partnered with international companies for smart electrical control systems',
      icon: Heart
    }
  ];

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          milestones.forEach((_, index) => {
            setTimeout(() => {
              setVisibleMilestones(prev => [...prev, index]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (milestonesRef.current) {
      observer.observe(milestonesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F9FAF9] overflow-hidden relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/20 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-200/20 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300/25 rounded-full animate-pulse delay-3000" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-50/10 to-orange-50/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#007577]">iPower</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Electrical Engineering Excellence, Lebanese Spirit
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] rounded-full animate-gradient-x" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-8'
            }`}
          >
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/assets/images/about%20section.png)'
                }}
              />
              
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#E68E27] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm">☀️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#007577] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs">⚡</span>
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-8'
            }`}
          >
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Empowering Lebanon —{' '}
                <span className="text-[#007577] relative">
                  One Electrical System, One Story at a Time
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#007577]/20 rounded-full" />
                </span>
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  iPower was founded with a single mission — to bring reliable, safe electrical systems to every corner of Lebanon.
                </p>
                <p>
                  Our team of electrical engineers, designers, and technicians believe that progress begins with people.
                </p>
                <p>
                  From residential installations to industrial electrical projects, we're powering safety, efficiency, and reliability — together.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#007577] rounded-full" />
                  <span className="font-regular text-gray-700">Electrical Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#E68E27] rounded-full" />
                  <span className="font-regular text-gray-700">Safety First</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#007577] rounded-full" />
                  <span className="font-regular text-gray-700">Lebanese Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#E68E27] rounded-full" />
                  <span className="font-regular text-gray-700">Reliable Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={milestonesRef}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#007577] to-[#E68E27] transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div 
                    className={`flex-1 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div 
                      className={`inline-block p-6 bg-white rounded-2xl shadow-lg border-l-4 border-[#007577] ${
                        visibleMilestones.includes(index) 
                          ? 'animate-fade-in-up opacity-100' 
                          : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <milestone.icon size={24} weight="bold" className="text-[#007577]" />
                        <span className="text-2xl font-bold text-[#007577]">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 font-regular">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div 
                      className={`w-6 h-6 bg-white border-4 border-[#007577] rounded-full shadow-lg transition-all duration-500 ${
                        visibleMilestones.includes(index) 
                          ? 'scale-110 shadow-xl' 
                          : 'scale-100'
                      }`}
                    />
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to be part of Lebanon's electrical engineering transformation?
          </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span>Meet the Team</span>
              <ArrowRight size={20} weight="bold" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutiPower;
