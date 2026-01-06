
import React from 'react';
import { TEXTS } from '../constants';
import { useIntersection } from '../hooks/useIntersection';

const NoOffSection: React.FC = () => {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="no-off"
      className="relative min-h-screen bg-[#1C2333] flex flex-col items-center justify-center px-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`w-16 h-16 md:w-24 md:h-24 border border-[#EDEDED]/20 flex items-center justify-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={`w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-[#FF2A2A]' : 'bg-[#FFE600]'} animate-pulse-fast`} />
          </div>
        ))}
      </div>

      <h2 className="text-5xl md:text-8xl font-black text-[#EDEDED] mb-8 text-center italic">
        {TEXTS.NO_OFF}
      </h2>

      <div className="max-w-2xl border-l-2 border-[#FF2A2A] pl-8 py-4">
        <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed">
          Это не выбор. 
        </p>
      </div>
    </section>
  );
};

export default NoOffSection;
