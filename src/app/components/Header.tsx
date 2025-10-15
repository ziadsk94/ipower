'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, X } from '@phosphor-icons/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`flex-shrink-0 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/logo.png"
                  alt="iPOWER GETCONNECTED"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  loader={({ src }) => src}
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-regular text-[#666] hover:text-[#E68E27] transition-colors duration-200 ${
                    isActive(item.href) ? 'text-[#E68E27]' : ''
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E68E27] transform transition-transform duration-300 ease-in-out"></span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-[#E68E27] text-white px-6 py-2 rounded-full text-sm font-regular hover:bg-[#d17a1f] transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </div>

            <div className={`md:hidden ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
              <button
                onClick={toggleMobileMenu}
                className="text-[#666] hover:text-[#E68E27] focus:outline-none focus:text-[#E68E27]"
              >
                <List size={24} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        />
        
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <Image
                src="/assets/images/logo.png"
                alt="iPOWER GETCONNECTED"
                width={100}
                height={32}
                className="h-6 w-auto"
                loader={({ src }) => src}
              />
              <button
                onClick={() => {
                  console.log('Close button clicked');
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 text-[#666] hover:text-[#E68E27] focus:outline-none focus:ring-2 focus:ring-[#E68E27] rounded-full transition-colors duration-200"
                aria-label="Close menu"
                type="button"
              >
                <X size={24} weight="bold" />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-lg font-regular text-[#666] hover:text-[#E68E27] transition-colors duration-200 ${
                      isActive(item.href) ? 'text-[#E68E27]' : ''
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="p-6 border-t">
              <Link
                href="/contact"
                className="block w-full bg-[#E68E27] text-white text-center py-3 rounded-full font-regular hover:bg-[#d17a1f] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
