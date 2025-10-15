'use client';

import { useState, useEffect, useRef } from 'react';
import { ChatCircle, Envelope, Phone, ArrowRight } from '@phosphor-icons/react';

const QuickContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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

  const quickContactItems = [
    {
      icon: ChatCircle,
      title: 'WhatsApp Chat',
      subtitle: 'Talk to a Specialist',
      description: 'Get instant responses from our engineering team',
      action: 'Start Chat',
      link: 'https://wa.me/96170123456',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      iconBg: 'bg-green-100'
    },
    {
      icon: Envelope,
      title: 'Email',
      subtitle: 'i.power-leb@hotmail.com',
      description: 'Send us detailed project requirements and questions',
      action: 'Send Email',
      link: 'mailto:i.power-leb@hotmail.com',
      color: 'text-[#E68E27]',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      iconBg: 'bg-orange-100'
    },
    {
      icon: Phone,
      title: 'Phone',
      subtitle: 'Call Us Directly',
      description: 'Speak directly with our engineering team',
      action: 'Call Now',
      link: 'tel:+96170123456',
      color: 'text-[#007577]',
      bgColor: 'bg-teal-50',
      hoverColor: 'hover:bg-teal-100',
      iconBg: 'bg-teal-100'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#F6F7F7] relative overflow-hidden"
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
            Quick Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fast Communication Touchpoints
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quickContactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : '_self'}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#007577]/20 h-full flex flex-col ${
                hoveredItem === index ? 'ring-2 ring-[#E68E27]' : ''
              }`}>
                <div className={`w-16 h-16 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredItem === index ? 'scale-110' : ''
                }`}>
                  <item.icon size={32} weight="bold" className={item.color} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#007577] mb-2 group-hover:text-[#E68E27] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg font-regular text-gray-700 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className={`inline-flex items-center gap-2 px-6 py-3 ${item.bgColor} ${item.hoverColor} rounded-full font-regular transition-all duration-300 group-hover:scale-105`}>
                    <span className={item.color}>{item.action}</span>
                    <ArrowRight size={16} weight="bold" className={`${item.color} transition-transform duration-300 group-hover:translate-x-1`} />
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                  hoveredItem === index ? 'opacity-20' : 'opacity-0'
                }`} style={{
                  background: 'radial-gradient(circle at center, rgba(0,117,119,0.1) 0%, transparent 70%)'
                }} />

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#007577] to-[#E68E27] transition-all duration-500 ${
                  hoveredItem === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
              </div>
            </a>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-[#007577] mb-4">Fast Response Guarantee</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatCircle size={24} weight="bold" className="text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-[#007577] mb-2">WhatsApp</h4>
                <p className="text-gray-600 text-sm">Instant response during business hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Envelope size={24} weight="bold" className="text-[#E68E27]" />
                </div>
                <h4 className="text-lg font-bold text-[#007577] mb-2">Email</h4>
                <p className="text-gray-600 text-sm">Response within 24 hours guaranteed</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} weight="bold" className="text-[#007577]" />
                </div>
                <h4 className="text-lg font-bold text-[#007577] mb-2">Phone</h4>
                <p className="text-gray-600 text-sm">Direct line to our engineering team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
