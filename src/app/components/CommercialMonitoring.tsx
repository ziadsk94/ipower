'use client';

import { useState, useEffect, useRef } from 'react';
import { ChartLine, BatteryHigh, Sun, Lightning } from '@phosphor-icons/react';

const CommercialMonitoring = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
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

  const metrics = [
    { icon: Sun, label: 'Solar Generation', value: '2.4kW', status: 'Active' },
    { icon: BatteryHigh, label: 'Battery Level', value: '87%', status: 'Charging' },
    { icon: Lightning, label: 'Grid Usage', value: '0.2kW', status: 'Minimal' },
    { icon: ChartLine, label: 'Daily Savings', value: '$45.20', status: 'Excellent' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#007577] mb-2">Smart Monitoring Dashboard</h3>
                  <p className="text-gray-600">Real-time system performance</p>
                </div>

                {}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        activeMetric === index 
                          ? 'border-[#E68E27] bg-[#E68E27]/5' 
                          : 'border-gray-200 hover:border-[#007577]/30'
                      }`}
                      onClick={() => setActiveMetric(index)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeMetric === index ? 'bg-[#E68E27]' : 'bg-[#007577]'
                        }`}>
                          <metric.icon size={16} weight="bold" className="text-white" />
                        </div>
                        <span className="text-sm font-regular text-gray-600">{metric.label}</span>
                      </div>
                      <div className="text-2xl font-bold text-[#007577] mb-1">{metric.value}</div>
                      <div className="text-xs text-green-600 font-regular">{metric.status}</div>
                    </div>
                  ))}
                </div>

                {}
                <div className="bg-gray-50 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-[#007577]">Energy Generation</h4>
                    <span className="text-sm text-gray-600">Last 24 hours</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#007577]/20 to-[#E68E27]/20 rounded-lg flex items-end justify-center">
                    <div className="text-gray-500 text-sm">Performance Chart</div>
                  </div>
                </div>

                {}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">System Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#E68E27] rounded-full"></div>
                    <span className="text-gray-600">Optimal Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007577] mb-6">
              Smart Monitoring & Control
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Monitor your solar system's performance in real-time with our advanced dashboard. 
              Track energy generation, consumption, savings, and system health from anywhere.
            </p>

            {}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E68E27]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ChartLine size={20} weight="bold" className="text-[#E68E27]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#007577] mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-600">Track energy production, consumption patterns, and cost savings with detailed analytics.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E68E27]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BatteryHigh size={20} weight="bold" className="text-[#E68E27]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#007577] mb-2">Battery Management</h3>
                  <p className="text-gray-600">Optimize battery usage and monitor backup power availability for uninterrupted operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#E68E27]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightning size={20} weight="bold" className="text-[#E68E27]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#007577] mb-2">Grid Integration</h3>
                  <p className="text-gray-600">Seamlessly switch between solar, battery, and grid power based on demand and availability.</p>
                </div>
              </div>
            </div>

            {}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E68E27] text-white rounded-full font-regular text-lg hover:bg-[#007577] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Smart Monitoring
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#007577] text-[#007577] rounded-full font-regular text-lg hover:bg-[#007577] hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialMonitoring;
