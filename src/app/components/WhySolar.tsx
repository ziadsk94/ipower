'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const WhySolar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsInView(true);
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSliderMove = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current || !isDragging) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleSliderMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleSliderMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleSliderMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleSliderMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section 
      ref={sectionRef}
      className="relative lg:min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: Math.max(0, 1 - (sliderPosition / 50)),
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
          }}
        >
        </div>

        <div 
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: Math.max(0, (sliderPosition - 50) / 50),
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f0f8ff 100%)'
          }}
        >
          <div className="absolute top-1/4 right-1/4 w-32 h-20 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-lg animate-solar-glow" />
          <div className="absolute top-1/3 right-1/3 w-24 h-16 bg-gradient-to-br from-yellow-200/40 to-orange-300/30 rounded-lg animate-solar-glow delay-1000" />
        </div>
      </div>

      <div className="hidden lg:block relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-[600px]">
            
            <div 
              className="relative p-8 lg:p-12 flex flex-col justify-center transition-all duration-1000"
              style={{
                opacity: Math.max(0, 1 - (sliderPosition / 50)),
                transform: `translateX(${(1 - (sliderPosition / 50)) * -20}px)`
              }}
            >
              <div className="max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              When electrical systems fail,{' '}
              <span className="text-gray-400 animate-flicker">operations stop</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Outdated electrical systems, power failures, and safety concerns impact your business operations.
            </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-red-400 transition-colors">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center animate-flicker">
                      ⚡
                    </div>
                    <span className="text-sm font-regular">System Failures</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center animate-flicker delay-1000">
                      💡
                    </div>
                    <span className="text-sm font-regular">Safety Risks</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center animate-flicker delay-2000">
                      🏠
                    </div>
                    <span className="text-sm font-regular">Outdated Systems</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  <p>Electrical system failures impact businesses across Lebanon</p>
                </div>
              </div>
            </div>

            <div 
              className="relative p-8 lg:p-12 flex flex-col justify-center transition-all duration-1000"
              style={{
                opacity: Math.max(0, (sliderPosition - 50) / 50),
                transform: `translateX(${((sliderPosition - 50) / 50) * 20}px)`
              }}
            >
              <div className="max-w-lg">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  System failures are temporary.{' '}
                  <span className="text-[#007577]">Electrical reliability is forever</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  With iPower, you get reliable electrical systems — safe, efficient, and engineered for Lebanon's industries.
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3 text-gray-600 hover:text-[#E68E27] transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-solar-pulse">
                      🌞
                    </div>
                    <span className="text-sm font-regular">Reliable Power</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 hover:text-[#007577] transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-battery-charge">
                      🔋
                    </div>
                    <span className="text-sm font-regular">Smart Control</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 hover:text-[#E68E27] transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center animate-home-glow">
                      🏡
                    </div>
                    <span className="text-sm font-regular">System Safety</span>
                  </div>
                </div>

                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-regular text-white bg-[#E68E27] rounded-full hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Discover Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={sliderRef}
        className="absolute inset-0 cursor-col-resize lg:block hidden"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div 
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#E68E27] to-[#007577] shadow-lg transition-all duration-150"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        />
        
        <div 
          className={`absolute top-1/2 w-8 h-8 bg-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-150 ${
            isDragging ? 'scale-110 shadow-xl' : 'hover:scale-105'
          }`}
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-4 h-4 bg-gradient-to-br from-[#E68E27] to-[#007577] rounded-full animate-pulse" />
        </div>

        <div 
          className="absolute top-1/4 bottom-1/4 w-2 bg-gradient-to-b from-yellow-300/50 to-orange-400/50 blur-sm transition-all duration-150"
          style={{ 
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)'
          }}
        />

        <div 
          className="absolute inset-0"
          onClick={(e) => {
            if (!isDragging && sliderRef.current) {
              const rect = sliderRef.current.getBoundingClientRect();
              const percentage = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
              setSliderPosition(percentage);
            }
          }}
        />
      </div>

      <div className="lg:hidden">
        <div className="pb-8 px-4 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              When electrical systems fail, operations stop
            </h2>
            <p className="text-base text-gray-300 mb-4">
              Outdated electrical systems, power failures, and safety concerns impact your business operations.
            </p>
            <div className="flex justify-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center animate-flicker">
                ⚡
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center animate-flicker delay-1000">
                💡
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center animate-flicker delay-2000">
                🏠
              </div>
            </div>
          </div>

          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <h2 className="text-2xl font-bold text-white mb-3">
              Electrical reliability is forever
            </h2>
            <p className="text-base text-gray-200 mb-4">
              With iPower, you get reliable electrical systems — safe, efficient, and engineered for Lebanon's industries.
            </p>
            <div className="flex justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-solar-pulse">
                🌞
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-battery-charge">
                🔋
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center animate-home-glow">
                🏡
              </div>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-regular text-white bg-[#E68E27] rounded-full hover:bg-[#007577] transition-all duration-300"
            >
              Discover Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
