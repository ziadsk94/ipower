'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MapPin, Envelope, Phone, WhatsappLogo, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { name: 'WhatsApp', icon: WhatsappLogo, href: 'https://wa.me/96170123456' },
    { name: 'Instagram', icon: InstagramLogo, href: 'https://instagram.com/ipower' },
    { name: 'Facebook', icon: FacebookLogo, href: 'https://facebook.com/ipower' }
  ];

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About iPower', href: '/about' },
    { name: 'Our Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#F9FAF9] overflow-hidden"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="solar-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 0L20 0M0 0L0 20" stroke="#E5E7E6" strokeWidth="0.5" fill="none"/>
            </pattern>
            <pattern id="sun-rays" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <g stroke="#E5E7E6" strokeWidth="0.3" fill="none">
                <line x1="20" y1="0" x2="20" y2="40"/>
                <line x1="0" y1="20" x2="40" y2="20"/>
                <line x1="5" y1="5" x2="35" y2="35"/>
                <line x1="35" y1="5" x2="5" y2="35"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#solar-grid)"/>
          <rect width="100%" height="100%" fill="url(#sun-rays)"/>
        </svg>
      </div>

      <div 
        className={`absolute inset-0 opacity-5 transition-opacity duration-2000 ${
          isVisible ? 'opacity-5' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          animation: 'shimmer 15s ease-in-out infinite'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <Link href="/" className="flex items-center">
                  <img 
                    src="/assets/images/logo.png" 
                    alt="iPOWER GETCONNECTED" 
                    className="h-12 w-auto"
                  />
                </Link>
                <div className="w-10 h-1 bg-[#E68E27] rounded-full mt-3" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Empowering Lebanon with Intelligent Electrical Engineering
              </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              iPower is Lebanon's trusted electrical engineering partner, helping homes, businesses, and institutions achieve reliable electrical systems with modern, safe technology.
            </p>

              <p className="text-sm text-gray-500 italic">
                "The future is safer when it's powered by reliable electrical systems."
              </p>
            </div>

            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-6">Explore</h4>
              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 hover:text-[#007577] transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div 
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-6">Connect</h4>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={20} weight="bold" className="text-[#007577]" />
                  <span>Tyre, Lebanon</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Envelope size={20} weight="bold" className="text-[#007577]" />
                  <a 
                    href="mailto:info@ipower.com.lb" 
                    className="hover:text-[#007577] transition-colors duration-300"
                  >
                    i.power-leb@hotmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={20} weight="bold" className="text-[#007577]" />
                  <a 
                    href="tel:+96170123456" 
                    className="hover:text-[#007577] transition-colors duration-300"
                  >
                    +961 70 123 456
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#939C98] hover:text-[#007577] hover:bg-[#007577]/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon size={20} weight="bold" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-500 text-center md:text-left">
                © 2025 iPower. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Designed & Developed by{' '}
                <a 
                  href="https://ctrl-build.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#007577] hover:text-[#E68E27] transition-colors duration-300 font-medium"
                >
                  CTRL+BUILD
                </a>
              </p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-[#007577] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#007577] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
