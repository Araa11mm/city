
import React from 'react';
import { useIntersection } from '../hooks/useIntersection';

const MetroSection: React.FC = () => {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="metro"
      className="relative min-h-screen bg-[#0E0E11] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Platform & Tunnel Perspective */}
      <div className={`w-full max-w-6xl px-6 transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
        <svg viewBox="0 0 1000 500" className="w-full h-auto text-[#EDEDED]/20 fill-none stroke-current" strokeWidth="1">
          {/* Tunnel Vault */}
          <path d="M100,450 C100,50 900,50 900,450" strokeWidth="2" className="opacity-40" />
          <path d="M150,450 C150,150 850,150 850,450" className="opacity-20" />
          <path d="M200,450 C200,220 800,220 800,450" className="opacity-10" />
          
          {/* Rails / Tracks */}
          <line x1="350" y1="450" x2="480" y2="350" strokeWidth="2" />
          <line x1="650" y1="450" x2="520" y2="350" strokeWidth="2" />
          
          {/* Sleepers ( шпалы ) */}
          {[...Array(10)].map((_, i) => (
            <line 
              key={i}
              x1={350 + i * 15} 
              y1={450 - i * 10} 
              x2={650 - i * 15} 
              y2={450 - i * 10} 
              className="opacity-30"
              strokeWidth={1 + (10 - i) * 0.5}
            />
          ))}

          {/* Platform Edge Yellow Line */}
          <line x1="0" y1="460" x2="340" y2="460" stroke="#FFE600" strokeWidth="4" className="animate-pulse" />
          <line x1="660" y1="460" x2="1000" y2="460" stroke="#FFE600" strokeWidth="4" className="animate-pulse" />
          
          {/* Platform Texture */}
          <rect x="0" y="465" width="340" height="40" className="fill-[#1C2333]/40 stroke-none" />
          <rect x="660" y="465" width="340" height="40" className="fill-[#1C2333]/40 stroke-none" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <div className="text-[10px] tracking-[0.5em] uppercase text-[#FF2A2A] mb-4 opacity-70">Станция: Перегрузка</div>
        <h2 className={`text-4xl md:text-7xl font-black tracking-tighter text-[#EDEDED] transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          ПОЕЗД НЕ ОСТАНОВИТСЯ
        </h2>
      </div>

      {/* Decorative vertical lines like station pillars */}
      <div className="absolute left-10 top-0 w-1 h-full bg-[#1C2333]/30 hidden md:block" />
      <div className="absolute right-10 top-0 w-1 h-full bg-[#1C2333]/30 hidden md:block" />
    </section>
  );
};

export default MetroSection;
