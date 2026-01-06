
import React from 'react';
import { TEXTS } from '../constants';
import { useIntersection } from '../hooks/useIntersection';
import city from '../img/city.png';

const HeroSection: React.FC = () => {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.2 });

  const scrollToStory = () => {
    const metroSection = document.getElementById('metro');
    if (metroSection) {
      metroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#0E0E11]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#EDEDED 1px, transparent 1px), linear-gradient(90deg, #EDEDED 1px, transparent 1px)`,
          backgroundSize: '100px 50px'
        }} 
      />

      <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        {/* The Image Block / Poster */}
        <div className="relative mb-12 group">
          {/* Decorative frame elements */}
          <div className="absolute -inset-2 border border-[#FF2A2A]/20 scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#FFE600]" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#FF2A2A]" />
          
          <div className="overflow-hidden border border-[#EDEDED]/10 bg-[#1C2333]">
            <img 
              src={city} 
              alt="Городской пейзаж в стиле скретч-арт" 
              className="w-full max-w-[800px] h-auto grayscale brightness-75 contrast-125 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          
          {/* Image Tag / Label */}
          <div className="absolute top-4 right-4 bg-[#FF2A2A] text-[#0E0E11] text-[8px] font-black px-2 py-0.5 uppercase tracking-tighter">
            Sector 01: Urban Noise
          </div>
        </div>

        <div className="max-w-4xl text-center">
          <div className="inline-block border border-[#FF2A2A] text-[#FF2A2A] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 animate-pulse">
            Линия: {TEXTS.TITLE}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none text-[#EDEDED]">
            {TEXTS.TITLE}
          </h1>
          
          <p className="max-w-xl text-base md:text-lg text-[#EDEDED]/50 font-light mb-10 mx-auto leading-relaxed italic">
            {TEXTS.SUBTITLE}
          </p>
          
          <button
            onClick={scrollToStory}
            className="group relative px-10 py-4 border border-[#EDEDED] overflow-hidden transition-all"
          >
            <div className="absolute inset-0 bg-[#EDEDED] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 uppercase font-bold tracking-widest text-xs group-hover:text-[#0E0E11]">
              {TEXTS.CTA_START}
            </span>
          </button>
        </div>
      </div>
      
      {/* Perspective Lines Meta-Visual */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFE600]/30 to-transparent" />
      
      <div className="absolute bottom-6 flex flex-col items-center opacity-30 animate-bounce">
        <span className="text-[8px] uppercase tracking-[0.5em] mb-2">скролл</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
