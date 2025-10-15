'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Factory, Gear, Buildings, BatteryHigh } from '@phosphor-icons/react';
import { projects } from '@/app/data/projects';

const ProjectsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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

  const projectsData = projects.map(project => ({
    id: project.id,
    name: project.name,
    location: project.location,
    capacity: project.capacity,
    type: project.category,
    category: project.tags[0].toLowerCase(),
    image: `/assets/images/projects-section/${project.images[0]}`,
    description: project.solution
  }));

  const filters = [
    { id: 'all', label: 'All', icon: null },
    { id: 'industrial', label: 'Industrial', icon: Factory, color: '#E68E27' },
    { id: 'healthcare', label: 'Healthcare', icon: Sun, color: '#007577' },
    { id: 'commercial', label: 'Commercial', icon: Buildings, color: '#6B7280' },
    { id: 'educational', label: 'Educational', icon: Sun, color: '#007577' },
    { id: 'solar', label: 'Solar', icon: Sun, color: '#007577' },
    { id: 'hybrid', label: 'Hybrid', icon: BatteryHigh, color: '#007577' },
    { id: 'residential', label: 'Residential', icon: Buildings, color: '#6B7280' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const filter = filters.find(f => f.id === category);
    return filter?.color || '#007577';
  };

  const getCategoryIcon = (category: string) => {
    const filter = filters.find(f => f.id === category);
    return filter?.icon || Sun;
  };

  return (
    <section 
      ref={sectionRef}
      id="projects-grid"
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
            Projects Grid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proof of Excellence
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className={`sticky top-4 z-20 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-regular transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-[#007577] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {IconComponent && <IconComponent size={18} weight="bold" />}
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              const categoryColor = getCategoryColor(project.category);
              
              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className={`group cursor-pointer transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
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
                        <CategoryIcon size={20} weight="bold" style={{ color: categoryColor }} />
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

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-[#007577] mb-3 group-hover:text-[#E68E27] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm mt-auto">
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
                </Link>
              );
            })}
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to see your project here?
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span>Start Your Project</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
