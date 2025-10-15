'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Gear, Factory, Buildings } from '@phosphor-icons/react';

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
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

  const galleryImages = [
    {
      id: 1,
      src: '/assets/images/projects-section/warehouse.png',
      title: 'Industrial Control Systems',
      type: 'Control Systems',
      description: 'Advanced PLC programming and automation systems',
      icon: Gear,
      color: '#939C98'
    },
    {
      id: 2,
      src: '/assets/images/projects-section/hospital.png',
      title: 'Healthcare Electrical Systems',
      type: 'Solar',
      description: 'Hospital-grade electrical infrastructure',
      icon: Sun,
      color: '#007577'
    },
    {
      id: 3,
      src: '/assets/images/projects-section/business-complex.png',
      title: 'Commercial Installations',
      type: 'Industrial',
      description: 'Large-scale commercial electrical projects',
      icon: Factory,
      color: '#E68E27'
    },
    {
      id: 4,
      src: '/assets/images/projects-section/school.png',
      title: 'Educational Facilities',
      type: 'Solar',
      description: 'Educational institution electrical systems',
      icon: Sun,
      color: '#007577'
    },
    {
      id: 5,
      src: '/assets/images/projects-section/farm.png',
      title: 'Agricultural Solutions',
      type: 'Solar',
      description: 'Solar-powered agricultural systems',
      icon: Sun,
      color: '#007577'
    },
    {
      id: 6,
      src: '/assets/images/projects-section/villa.png',
      title: 'Residential Systems',
      type: 'Solar',
      description: 'Luxury residential electrical installations',
      icon: Buildings,
      color: '#007577'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Solar':
        return Sun;
      case 'Control Systems':
        return Gear;
      case 'Industrial':
        return Factory;
      case 'Commercial':
        return Buildings;
      default:
        return Sun;
    }
  };

  const getProjectLink = (type: string) => {
    switch (type) {
      case 'Solar':
        return 'solar-pump-system';
      case 'Control Systems':
        return 'screen-electrotech-company';
      case 'Industrial':
        return 'screen-electrotech-company';
      case 'Commercial':
        return 'jabal-el-ez-restaurant';
      default:
        return 'screen-electrotech-company';
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
            Gallery Section
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Power of Visual Proof
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => {
            const IconComponent = getTypeIcon(image.type);
            return (
              <Link
                key={image.id}
                href={`/projects/${getProjectLink(image.type)}`}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loader={({ src }) => src}
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#007577]/80 via-[#007577]/20 to-transparent transition-opacity duration-300 ${
                      hoveredImage === index ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent size={20} weight="bold" style={{ color: image.color }} />
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 ${
                      hoveredImage === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-white/90 mb-2">{image.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-regular bg-[#E68E27] px-3 py-1 rounded-full">
                          {image.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#007577] mb-3 group-hover:text-[#E68E27] transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {image.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm mt-auto">
                      <IconComponent size={16} weight="bold" style={{ color: image.color }} />
                      <span className="text-gray-500">{image.type}</span>
                    </div>
                  </div>

                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                    hoveredImage === index ? 'opacity-20' : 'opacity-0'
                  }`} style={{
                    background: 'radial-gradient(circle at center, rgba(230,142,39,0.1) 0%, transparent 70%)'
                  }} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            See more of our work in action
          </p>
          <div className="flex justify-center">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <span>View Full Gallery</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
