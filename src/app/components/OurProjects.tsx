'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sun, Buildings, Factory } from '@phosphor-icons/react';

const OurProjects = () => {
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
      description: '250kW on-grid electrical system for industrial manufacturing facility',
      category: 'industrial'
    },
    {
      id: 2,
      name: 'Bent Jubail Hospital',
      location: 'Bent Jubail, Lebanon',
      capacity: '100kW',
      type: 'Healthcare System',
      image: '/assets/images/projects-section/hospital.png',
      description: '100kW on-grid electrical system with hospital-grade safety standards',
      category: 'commercial'
    },
    {
      id: 3,
      name: 'Jabal El Ez Restaurant',
      location: 'South Lebanon',
      capacity: '150 KVA',
      type: 'Restaurant System',
      image: '/assets/images/projects-section/business-complex.png',
      description: '150 KVA full load electrical system for restaurant operations',
      category: 'commercial'
    },
    {
      id: 4,
      name: 'Al Mabarrat School',
      location: 'Bent Jubail, Lebanon',
      capacity: '60kW',
      type: 'Educational System',
      image: '/assets/images/projects-section/school.png',
      description: '60kW on-grid system with generator synchronization (100, 150, 200 KVA)',
      category: 'commercial'
    },
    {
      id: 5,
      name: 'Solar Pump System',
      location: 'Byot El Sayyad, Lebanon',
      capacity: '50 HP',
      type: 'Solar Pump System',
      image: '/assets/images/projects-section/farm.png',
      description: '50 HP solar pump system with 11 hours daily operation',
      category: 'industrial'
    },
    {
      id: 6,
      name: 'Alaweye Villa',
      location: 'Maron El Ras, Lebanon',
      capacity: '30kW',
      type: 'Residential System',
      image: '/assets/images/projects-section/villa.png',
      description: '30kW hybrid 3-phase system for luxury residential villa',
      category: 'residential'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'industrial':
        return Factory;
      case 'commercial':
        return Buildings;
      case 'residential':
        return Sun;
      default:
        return Sun;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'industrial':
        return 'text-blue-500';
      case 'commercial':
        return 'text-orange-500';
      case 'residential':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F5F5F5] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007577' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Proof of Power
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const categoryColor = getCategoryColor(project.category);
            
            return (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loader={({ src }) => src}
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#007577]/80 via-[#007577]/20 to-transparent transition-opacity duration-300 ${
                      hoveredProject === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <CategoryIcon size={20} weight="bold" className={categoryColor} />
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
                      hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-sm text-white/90 mb-2">{project.location}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-regular bg-[#E68E27] px-3 py-1 rounded-full">
                          {project.capacity}
                        </span>
                        <span className="text-sm text-white/80">{project.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#007577] mb-3 group-hover:text-[#E68E27] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#007577] font-regular">{project.capacity}</span>
                      <span className="text-gray-500">{project.type}</span>
                    </div>
                  </div>

                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-20' : 'opacity-0'
                  }`} style={{
                    background: 'radial-gradient(circle at center, rgba(230,142,39,0.1) 0%, transparent 70%)'
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to see your project here?
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>View Full Project Portfolio</span>
            <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
