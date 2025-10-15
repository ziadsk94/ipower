'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, FileText, Phone } from '@phosphor-icons/react';

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const ctaActions = [
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a free engineering consultation',
      action: 'Request Consultation',
      link: '#contact-form',
      color: 'text-[#E68E27]',
      bgColor: 'bg-[#E68E27]',
      hoverColor: 'hover:bg-[#007577]'
    },
    {
      icon: FileText,
      title: 'Download Brochure',
      description: 'Get our latest project portfolio',
      action: 'Download PDF',
      link: '#',
      color: 'text-[#007577]',
      bgColor: 'bg-[#007577]',
      hoverColor: 'hover:bg-[#E68E27]'
    },
    {
      icon: Phone,
      title: 'Call Directly',
      description: 'Speak with our engineering team',
      action: 'Call Now',
      link: 'tel:+96170123456',
      color: 'text-[#E68E27]',
      bgColor: 'bg-[#E68E27]',
      hoverColor: 'hover:bg-[#007577]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#007577] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Looking to start your next{' '}
            <span className="text-[#E68E27] relative">
              electrical project?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#E68E27]/50 rounded-full" />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 font-regular mb-8 leading-relaxed max-w-4xl mx-auto">
            Schedule a free engineering consultation and discover how iPower can power your vision with precision.
          </p>

          <div className="mb-16">
            <Link
              href="#contact-form"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-regular text-[#007577] bg-[#E68E27] rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Request a Consultation</span>
              <ArrowRight size={24} weight="bold" className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {ctaActions.map((action, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <action.icon size={32} weight="bold" className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E68E27] transition-colors duration-300">
                    {action.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {action.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href={action.link}
                    className={`inline-flex items-center gap-2 px-6 py-3 ${action.bgColor} text-white rounded-full font-regular transition-all duration-300 group-hover:scale-105 ${action.hoverColor}`}
                  >
                    <span>{action.action}</span>
                    <ArrowRight size={16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-20" style={{
                  background: 'radial-gradient(circle at center, rgba(230,142,39,0.2) 0%, transparent 70%)'
                }} />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose iPower?</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E68E27] mb-2">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E68E27] mb-2">100+</div>
                <div className="text-white/80 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E68E27] mb-2">50+</div>
                <div className="text-white/80 text-sm">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E68E27] mb-2">24/7</div>
                <div className="text-white/80 text-sm">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether it's solar, automation, or control systems — our team brings precision to every wire and watt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
