'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MapPin, Lightning, PuzzlePiece, Clock, ArrowRight, Play, X } from '@phosphor-icons/react';

interface ProjectDetailProps {
  project: {
    id: string;
    name: string;
    location: string;
    category: string;
    capacity: string;
    year: string;
    tags: string[];
    challenge: string;
    solution: string;
    results: string;
    specs: {
      systemType: string;
      capacity: string;
      controllers: string;
      inverters: string;
      mounting: string;
      integration: string;
      monitoring: string;
    };
    metrics: {
      capacity: string;
      savings: string;
      hours: string;
      co2: string;
    };
    images: string[];
    video?: string;
    engineeringInsight?: {
      title: string;
      content: string;
    };
  };
  relatedProjects: Array<{
    id: string;
    name: string;
    category: string;
    capacity: string;
    image: string;
  }>;
}

const ProjectDetail = ({ project, relatedProjects }: ProjectDetailProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/images/projects-section/${project.images[0]}')`,
              backgroundPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className={`relative z-20 h-full flex items-end transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {project.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-regular mb-6">
                {project.location} · {project.category}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <MapPin size={20} weight="bold" className="text-[#E68E27]" />
                  <div>
                    <div className="text-xs text-white/70">Location</div>
                    <div className="font-medium">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Lightning size={20} weight="bold" className="text-[#E68E27]" />
                  <div>
                    <div className="text-xs text-white/70">Capacity</div>
                    <div className="font-medium">{project.capacity}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <PuzzlePiece size={20} weight="bold" className="text-[#E68E27]" />
                  <div>
                    <div className="text-xs text-white/70">Category</div>
                    <div className="font-medium">{project.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock size={20} weight="bold" className="text-[#E68E27]" />
                  <div>
                    <div className="text-xs text-white/70">Year</div>
                    <div className="font-medium">{project.year}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#007577] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-900">Challenge</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#E68E27] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900">iPower's Solution</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#007577] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900">Results</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed system specifications and equipment data for technical reference
            </p>
          </div>

          <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">System Type</span>
                  <span className="text-gray-900">{project.specs.systemType}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Installed Capacity</span>
                  <span className="text-gray-900">{project.specs.capacity}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Controllers</span>
                  <span className="text-gray-900">{project.specs.controllers}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Inverters</span>
                  <span className="text-gray-900">{project.specs.inverters}</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Mounting</span>
                  <span className="text-gray-900">{project.specs.mounting}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Integration</span>
                  <span className="text-gray-900">{project.specs.integration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Monitoring</span>
                  <span className="text-gray-900">{project.specs.monitoring}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visual documentation of the project from design to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={`/assets/images/projects-section/${image}`}
                  alt={`${project.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {project.video && (
            <div className={`mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer" onClick={handleVideoPlay}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={`/assets/images/projects-section/${project.images[0]}`}
                >
                  <source src={`/assets/videos/${project.video}`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={24} weight="fill" className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {project.engineeringInsight && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.engineeringInsight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.engineeringInsight.content}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-[#007577]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Results & Impact</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Measurable outcomes and environmental impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightning size={32} weight="bold" className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{project.metrics.capacity}</div>
              <div className="text-white/80">Installed Capacity</div>
            </div>
            <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{project.metrics.savings}</div>
              <div className="text-white/80">Fuel Savings</div>
            </div>
            <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌞</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{project.metrics.hours}</div>
              <div className="text-white/80">Solar Hours/Day</div>
            </div>
            <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{project.metrics.co2}</div>
              <div className="text-white/80">CO₂ Reduction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See More iPower Systems in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore other successful electrical engineering projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject, index) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className={`group block transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`/assets/images/projects-section/${relatedProject.image}`}
                      alt={relatedProject.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedProject.name}</h3>
                    <p className="text-gray-600 mb-3">{relatedProject.category}</p>
                    <div className="flex items-center gap-2 text-[#007577] font-medium">
                      <span>View Project</span>
                      <ArrowRight size={16} weight="bold" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E68E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to energize your next project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              From automation to solar design, our engineers bring precision and reliability to every system.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#E68E27] rounded-full font-regular text-lg hover:bg-[#007577] hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span>Start Your Consultation</span>
              <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X size={20} weight="bold" />
            </button>
            <img
              src={`/assets/images/projects-section/${selectedImage}`}
              alt={`${project.name} - Full size`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={handleVideoClose}>
          <div className="relative max-w-4xl w-full">
            <button
              onClick={handleVideoClose}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            >
              <X size={20} weight="bold" />
            </button>
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
            >
              <source src={`/assets/videos/${project.video}`} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
