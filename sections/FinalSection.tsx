
import React from 'react';
import { TEXTS } from '../constants';
import { useIntersection } from '../hooks/useIntersection';

const FinalSection: React.FC = () => {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.2 });

  return (
    <footer
      ref={ref}
      id="final"
      className="relative min-h-screen bg-[#0E0E11] flex flex-col items-center justify-center text-center px-6"
    >
      <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
          ТИШИНА НУЖНА ВСЕМ
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-[#EDEDED]/60 mb-12 mx-auto font-light">
          {TEXTS.FINAL_DESC}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="w-full md:w-auto px-10 py-4 border border-[#EDEDED] hover:bg-[#EDEDED] hover:text-[#0E0E11] transition-all font-bold uppercase text-xs tracking-widest">
            {TEXTS.CTA_LEARN}
          </button>
          <button className="w-full md:w-auto px-10 py-4 bg-[#FF2A2A] text-[#0E0E11] hover:bg-[#FFE600] transition-all font-bold uppercase text-xs tracking-widest">
            {TEXTS.CTA_SUPPORT}
          </button>
          <button className="w-full md:w-auto px-10 py-4 border border-[#EDEDED]/20 hover:border-[#EDEDED] transition-all font-bold uppercase text-xs tracking-widest">
            {TEXTS.CTA_SHARE}
          </button>
        </div>
      </div>

      <div className="mt-24 text-[10px] uppercase tracking-widest opacity-20">
        © 2026 ГОРОД КРИЧИТ. СОЦИАЛЬНАЯ КАМПАНИЯ.
      </div>
    </footer>
  );
};

export default FinalSection;
