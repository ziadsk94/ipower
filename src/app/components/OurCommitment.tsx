'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle, Users, Leaf, Shield, Calendar } from '@phosphor-icons/react';

const OurCommitment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const items = [0, 1, 2, 3, 4];
          items.forEach((item, index) => {
            setTimeout(() => {
              setCheckedItems(prev => [...prev, item]);
            }, index * 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const commitments = [
    {
      icon: CheckCircle,
      title: 'Advanced design & analysis tools',
      description: 'Cutting-edge engineering software and analysis tools for optimal system design',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Highly skilled engineering teams',
      description: 'Certified electrical engineers with extensive experience in complex projects',
      color: 'text-green-500'
    },
    {
      icon: Leaf,
      title: 'Focus on sustainability',
      description: 'Environmental responsibility integrated into every electrical solution',
      color: 'text-emerald-500'
    },
    {
      icon: Shield,
      title: 'Adherence to global safety standards',
      description: 'International safety protocols and compliance with electrical codes',
      color: 'text-red-500'
    },
    {
      icon: Calendar,
      title: 'Projects delivered on time, every time',
      description: 'Reliable project management ensuring timely completion and quality',
      color: 'text-orange-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="our-commitment"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <Image
                src="/assets/images/projects-section/hospital.png"
                alt="iPower engineers inspecting electrical panels"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                loader={({ src }) => src}
              />
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#007577]/20 to-transparent rounded-2xl" />
              
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Shield size={24} weight="bold" className="text-[#007577]" />
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle size={24} weight="bold" className="text-[#E68E27]" />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#007577] leading-tight">
                  Our Commitment
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Excellence, Safety, and Sustainability
                </p>
                <div className="w-16 h-1 bg-[#E68E27] rounded-full" />
              </div>

              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      checkedItems.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      checkedItems.includes(index) ? 'bg-[#E68E27] scale-110' : 'bg-gray-100'
                    }`}>
                      <commitment.icon 
                        size={24} 
                        weight="bold" 
                        className={`transition-colors duration-300 ${
                          checkedItems.includes(index) ? 'text-white' : commitment.color
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#007577] mb-2">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {commitment.description}
                      </p>
                    </div>

                    <div className={`transition-all duration-300 ${
                      checkedItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}>
                      <CheckCircle size={20} weight="bold" className="text-[#E68E27]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F9FAF9] rounded-2xl p-6 border-l-4 border-[#E68E27]">
                <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                  "Our systems are built for resilience — powering Lebanon's hospitals, factories, and communities."
                </blockquote>
                <cite className="block text-sm text-[#007577] font-regular mt-3">
                  — iPower Engineering Team
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
