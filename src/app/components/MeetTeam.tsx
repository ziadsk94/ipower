'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Users, Wrench, Lightbulb, Shield } from '@phosphor-icons/react';

const MeetTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState<number | null>(null);
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

  const teamRoles = [
    {
      icon: Wrench,
      title: 'Electrical Design Lead',
      name: 'Ali Hamze',
      description: 'Senior electrical engineer with 15+ years in system design and planning',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Lightbulb,
      title: 'Automation Specialist',
      name: 'Isam Hussein',
      description: 'PLC programming and control systems expert with international certifications',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Shield,
      title: 'Site Engineer',
      name: 'Ali Hamze',
      description: 'Field installation specialist ensuring safety and compliance standards',
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F9FAF9] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/projects-section/school.png"
                  alt="iPower Engineering Team"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                  loader={({ src }) => src}
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#E68E27]/20 via-transparent to-[#007577]/20" />
                
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Users size={32} weight="bold" className="text-[#007577]" />
                </div>
              </div>

              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#E68E27] rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#007577] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#007577] leading-tight">
                  Meet the Team
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The People Behind the Power
                </p>
                <div className="w-16 h-1 bg-[#E68E27] rounded-full" />
              </div>

              <div className="bg-white rounded-2xl p-6 border-l-4 border-[#E68E27]">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "Our people are our greatest circuit — connecting innovation, precision, and purpose."
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#007577]">Our Engineering Team</h3>
                <div className="space-y-4">
                  {teamRoles.map((role, index) => (
                    <div
                      key={index}
                      className={`group cursor-pointer transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                      onMouseEnter={() => setActiveRole(index)}
                      onMouseLeave={() => setActiveRole(null)}
                    >
                      <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${
                        activeRole === index ? 'ring-2 ring-[#E68E27]' : ''
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 ${role.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            activeRole === index ? 'scale-110' : ''
                          }`}>
                            <role.icon size={24} weight="bold" className={role.color} />
                          </div>

                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-[#007577] mb-1 group-hover:text-[#E68E27] transition-colors duration-300">
                              {role.title}
                            </h4>
                            <p className="text-sm font-regular text-gray-600 mb-2">{role.name}</p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {role.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#007577] rounded-full" />
                  <span className="font-regular text-gray-700">Local Expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                  <span className="font-regular text-gray-700">Technical Innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#007577] rounded-full" />
                  <span className="font-regular text-gray-700">Safety First</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                  <span className="font-regular text-gray-700">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
