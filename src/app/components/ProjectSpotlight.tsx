'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, MapPin, Lightning, Gear, Calendar, ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const ProjectSpotlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      year: '2023',
      description: 'This 250kW on-grid system for Plastimid integrates advanced Delta PLC programming and DEIF fuel-saving controllers, ensuring optimized performance and safety under variable load conditions.',
      technicalHighlights: [
        'Delta PLC Programming',
        'DEIF Fuel-Save Controllers',
        'Advanced Load Management',
        'Safety Compliance Systems'
      ],
      images: [
        '/assets/images/projects-section/warehouse.png',
        '/assets/images/projects-section/business-complex.png'
      ],
      tagline: 'Precision-engineered for resilience.'
    },
    {
      id: 2,
      name: 'Bent Jubail Hospital',
      location: 'Bent Jubail, Lebanon',
      capacity: '100kW',
      type: 'Healthcare System',
      year: '2022',
      description: 'A critical healthcare facility powered by a 100kW on-grid electrical system with hospital-grade safety standards and backup power systems.',
      technicalHighlights: [
        'Hospital-Grade Safety',
        'Backup Power Systems',
        'Medical Equipment Integration',
        'Emergency Response Systems'
      ],
      images: [
        '/assets/images/projects-section/hospital.png',
        '/assets/images/projects-section/school.png'
      ],
      tagline: 'Powering healthcare excellence.'
    },
    {
      id: 3,
      name: 'Solar Pump System',
      location: 'Byot El Sayyad, Lebanon',
      capacity: '50 HP',
      type: 'Solar Pump System',
      year: '2024',
      description: 'Advanced 50 HP solar pump system providing 11 hours of daily operation for agricultural irrigation with intelligent water management.',
      technicalHighlights: [
        'Solar-Powered Operation',
        '11 Hours Daily Operation',
        'Agricultural Integration',
        'Water Management Systems'
      ],
      images: [
        '/assets/images/projects-section/farm.png',
        '/assets/images/projects-section/warehouse.png'
      ],
      tagline: 'Sustainable water solutions.'
    }
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <>
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
              Project Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Engineering case studies that showcase our expertise
            </p>
            <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => openModal(project.id)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loader={({ src }) => src}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#007577]/80 via-[#007577]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                      {project.description.substring(0, 120)}...
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#007577] font-regular">{project.capacity}</span>
                      <span className="text-gray-500">{project.year}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#E68E27] text-white px-4 py-2 rounded-full text-sm font-regular">
                      View Case Study
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProjectData && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-[#007577]">{selectedProjectData.name}</h3>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="p-6">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={selectedProjectData.images[currentImageIndex]}
                  alt={selectedProjectData.name}
                  fill
                  className="object-cover"
                  loader={({ src }) => src}
                />
                
                {selectedProjectData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <ArrowLeft size={20} weight="bold" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <ArrowRight size={20} weight="bold" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} weight="bold" className="text-[#007577]" />
                    <span className="font-regular">{selectedProjectData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Lightning size={16} weight="bold" className="text-[#E68E27]" />
                    <span className="font-regular">{selectedProjectData.capacity}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-[#F9FAF9] rounded-lg">
                  <MapPin size={24} weight="bold" className="text-[#007577] mx-auto mb-2" />
                  <div className="text-sm font-regular text-gray-600">Location</div>
                  <div className="text-sm font-bold text-[#007577]">{selectedProjectData.location}</div>
                </div>
                <div className="text-center p-4 bg-[#F9FAF9] rounded-lg">
                  <Lightning size={24} weight="bold" className="text-[#E68E27] mx-auto mb-2" />
                  <div className="text-sm font-regular text-gray-600">Capacity</div>
                  <div className="text-sm font-bold text-[#007577]">{selectedProjectData.capacity}</div>
                </div>
                <div className="text-center p-4 bg-[#F9FAF9] rounded-lg">
                  <Gear size={24} weight="bold" className="text-[#939C98] mx-auto mb-2" />
                  <div className="text-sm font-regular text-gray-600">System Type</div>
                  <div className="text-sm font-bold text-[#007577]">{selectedProjectData.type}</div>
                </div>
                <div className="text-center p-4 bg-[#F9FAF9] rounded-lg">
                  <Calendar size={24} weight="bold" className="text-[#007577] mx-auto mb-2" />
                  <div className="text-sm font-regular text-gray-600">Year</div>
                  <div className="text-sm font-bold text-[#007577]">{selectedProjectData.year}</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#007577] mb-3">Project Overview</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProjectData.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-[#007577] mb-3">Technical Highlights</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProjectData.technicalHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#F9FAF9] rounded-lg">
                      <div className="w-2 h-2 bg-[#E68E27] rounded-full" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#007577] text-white p-6 rounded-2xl text-center">
                <p className="text-lg font-regular italic">"{selectedProjectData.tagline}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSpotlight;
