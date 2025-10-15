'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Envelope, Phone, Clock } from '@phosphor-icons/react';

const ContactInfo = () => {
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

  const contactItems = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Lilia Center, Near Hiram Hospital, Tyre, Lebanon',
      color: 'text-[#007577]',
      bgColor: 'bg-[#007577]/10',
      hoverColor: 'hover:bg-[#007577]/20'
    },
    {
      icon: Envelope,
      title: 'Email',
      content: 'i.power-leb@hotmail.com',
      color: 'text-[#E68E27]',
      bgColor: 'bg-[#E68E27]/10',
      hoverColor: 'hover:bg-[#E68E27]/20'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+961 70 123 456',
      color: 'text-[#007577]',
      bgColor: 'bg-[#007577]/10',
      hoverColor: 'hover:bg-[#007577]/20'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon–Sat, 8:00 AM – 5:00 PM',
      color: 'text-[#E68E27]',
      bgColor: 'bg-[#E68E27]/10',
      hoverColor: 'hover:bg-[#E68E27]/20'
    }
  ];

  return (
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
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clarity & Confidence
          </p>
          <div className="w-16 h-1 bg-[#E68E27] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <div
              key={index}
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
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredItem === index ? 'scale-110' : ''
                }`}>
                  <item.icon size={32} weight="bold" className={item.color} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#007577] mb-3 group-hover:text-[#E68E27] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                  hoveredItem === index ? 'opacity-20' : 'opacity-0'
                }`} style={{
                  background: 'radial-gradient(circle at center, rgba(230,142,39,0.1) 0%, transparent 70%)'
                }} />

                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#007577] to-[#E68E27] transition-all duration-500 ${
                  hoveredItem === index ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-[#F9FAF9] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#007577] mb-6">Why Choose iPower?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#007577]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} weight="bold" className="text-[#007577]" />
                </div>
                <h4 className="text-lg font-bold text-[#007577] mb-2">24-Hour Response</h4>
                <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#E68E27]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} weight="bold" className="text-[#E68E27]" />
                </div>
                <h4 className="text-lg font-bold text-[#007577] mb-2">Local Expertise</h4>
                <p className="text-gray-600 text-sm">Based in Lebanon, serving Lebanon</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#007577]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} weight="bold" className="text-[#007577]" />
                </div>
                <h4 className="text-lg font-bold text-[#007577] mb-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">Certified electrical engineers and technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
