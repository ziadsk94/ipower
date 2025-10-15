'use client';

import { useState, useEffect, useRef } from 'react';
import { Sun } from '@phosphor-icons/react';

const IndustrialProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects = [
    {
      id: 1,
      name: 'Screen Electrotech Company',
      location: 'Lebanon',
      capacity: '250kW',
      type: 'Industrial System',
      image: '/assets/images/projects-section/warehouse.png',
      description: '250kW on-grid electrical system for industrial manufacturing facility'
    },
    {
      id: 2,
      name: 'Plastimid Industrial',
      location: 'Lebanon',
      capacity: '250kW',
      type: 'Industrial Solar',
      image: '/assets/images/projects-section/farm.png',
      description: '250kW on-grid solar system for industrial manufacturing'
    },
    {
      id: 3,
      name: 'Solar Pump System',
      location: 'Byot El Sayyad, Lebanon',
      capacity: '50 HP',
      type: 'Solar Pump',
      image: '/assets/images/projects-section/business-complex.png',
      description: '50 HP solar pump system with 11 hours daily operation'
    },
    {
      id: 4,
      name: 'Al-Abbassieh Solar System',
      location: 'Al-Abbassieh, Lebanon',
      capacity: '220kW',
      type: 'Industrial Control',
      image: '/assets/images/projects-section/warehouse.png',
      description: '220kW solar system with Delta PLC and HMI programming for fuel save control'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Industrial Project Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of large-scale industrial solar installations across Lebanon.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${project.image})`
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className={`absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? 'rotate-12' : 'rotate-0'
                }`}>
                  <Sun size={20} weight="bold" className="text-white" />
                </div>

                <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ${
                  hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                  <p className="text-sm text-white/80 mb-2">{project.location}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-[#E68E27] px-2 py-1 rounded-full">{project.capacity}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">{project.type}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-[#007577] mb-2 group-hover:text-[#E68E27] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#007577] font-bold">{project.capacity}</span>
                  <span className="text-gray-500">{project.type}</span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#007577]/10 to-[#E68E27]/10" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 hover:shadow-xl"
          >
            <span>View All Industrial Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustrialProjects;
