'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Sun } from '@phosphor-icons/react';

const ProjectsGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      category: 'commercial',
      title: 'Jabal El Ez Restaurant',
      location: 'South Lebanon',
      description: '150 KVA full load electrical system for restaurant operations',
      image: '/assets/images/projects-section/business-complex.png',
      size: '150 KVA',
      type: 'Restaurant System'
    },
    {
      id: 2,
      category: 'commercial',
      title: 'Ben Jubail Hospital',
      location: 'Bent Jubail, Lebanon',
      description: '100kW on-grid electrical system with hospital-grade safety standards',
      image: '/assets/images/projects-section/hospital.png',
      size: '100kW',
      type: 'Healthcare System'
    },
    {
      id: 3,
      category: 'industrial',
      title: 'Screen Electrotech Company',
      location: 'Lebanon',
      description: '250kW on-grid electrical system for industrial manufacturing facility',
      image: '/assets/images/projects-section/warehouse.png',
      size: '250kW',
      type: 'Industrial System'
    },
    {
      id: 4,
      category: 'commercial',
      title: 'Al Mabarrat School',
      location: 'Bent Jubail, Lebanon',
      description: '60kW on-grid system with generator synchronization (100, 150, 200 KVA)',
      image: '/assets/images/projects-section/school.png',
      size: '60kW',
      type: 'Educational System'
    },
    {
      id: 5,
      category: 'commercial',
      title: 'Hill Side Restaurant',
      location: 'Shamaa, South Lebanon',
      description: '250 KVA load system with 50 HP water pump and 4-generator load sharing',
      image: '/assets/images/projects-section/business-complex.png',
      size: '250 KVA',
      type: 'Restaurant System'
    },
    {
      id: 6,
      category: 'industrial',
      title: 'Solar Pump System',
      location: 'Byot El Sayyad, Lebanon',
      description: '50 HP solar pump system with 11 hours daily operation',
      image: '/assets/images/projects-section/farm.png',
      size: '50 HP',
      type: 'Solar Pump System'
    },
    {
      id: 7,
      category: 'commercial',
      title: 'Bent Jbeil University',
      location: 'Bent Jbeil, Lebanon',
      description: '15kW hybrid system with Italian CIMIC team collaboration',
      image: '/assets/images/projects-section/school.png',
      size: '15kW',
      type: 'Hybrid System'
    },
    {
      id: 8,
      category: 'residential',
      title: 'Mr Alaweye Villa',
      location: 'Maron El Ras, Lebanon',
      description: '30kW hybrid 3-phase system for luxury residential villa',
      image: '/assets/images/projects-section/villa.png',
      size: '30kW',
      type: 'Residential System'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const getCardSize = (index: number) => {
    const sizes = ['medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium'];
    return sizes[index % sizes.length];
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F8F9F8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Electrical Projects Across Lebanon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From restaurants and hospitals to universities and municipalities, iPower delivers reliable electrical systems across Lebanon's diverse industries.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#007577] via-[#E68E27] to-[#007577] rounded-full animate-gradient-x" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'residential', label: 'Residential' },
              { key: 'commercial', label: 'Commercial' },
              { key: 'industrial', label: 'Industrial' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full text-sm font-regular transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#007577] text-white shadow-lg'
                    : 'bg-white text-[#939C98] hover:bg-gray-50 hover:text-[#007577]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease-out'
                  }}
                />

                <div 
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-[#007577]/80 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div 
                  className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
                    hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm font-regular text-white/80 mb-2">{project.location}</p>
                  <p className="text-sm font-regular text-white/90 mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                      <span className="text-sm font-regular">{project.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full" />
                      <span className="text-sm font-regular">{project.type}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-regular text-white hover:text-[#E68E27] transition-colors duration-300"
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div 
                  className={`absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                  }`}
                >
                  <Sun size={20} weight="bold" className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see your electrical project here?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#007577] to-[#E68E27] text-white rounded-full font-regular text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Start Your Electrical Project</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-0">
              <div 
                className="h-64 md:h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${projects.find(p => p.id === selectedProject)?.image})`
                }}
              />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <p className="text-lg text-[#007577] mb-4">
                    {projects.find(p => p.id === selectedProject)?.location}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#E68E27] rounded-full" />
                      <span className="font-regular">System Size: {projects.find(p => p.id === selectedProject)?.size}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#007577] rounded-full" />
                      <span className="font-regular">Type: {projects.find(p => p.id === selectedProject)?.type}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <Link
                      href={`/projects/${selectedProject}`}
                      className="flex-1 bg-[#E68E27] text-white px-6 py-3 rounded-full font-regular hover:bg-[#007577] transition-colors duration-300 text-center"
                    >
                      View Full Case Study
                    </Link>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 border border-gray-300 rounded-full font-regular hover:bg-gray-50 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;
