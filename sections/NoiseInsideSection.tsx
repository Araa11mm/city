
import React from 'react';
import { TEXTS } from '../constants';
import { useIntersection } from '../hooks/useIntersection';
import { MotionConfig } from '../types';
import { getJitterClass } from '../utils/motion';

interface Props {
  motionConfig: MotionConfig;
}

const NoiseInsideSection: React.FC<Props> = ({ motionConfig }) => {
  const [ref, isVisible] = useIntersection<HTMLElement>({ threshold: 0.3 });
  const jitterClass = getJitterClass(motionConfig, isVisible);

  return (
    <section
      ref={ref}
      id="noise"
      className="relative min-h-screen bg-[#0E0E11] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className={`relative z-10 text-center ${jitterClass}`}>
        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4 text-[#EDEDED]">
          {TEXTS.NOISE_INSIDE}
        </h2>
        <div className="flex gap-2 justify-center">
          <div className="w-12 h-1 bg-[#FF2A2A] animate-pulse"></div>
          <div className="w-12 h-1 bg-[#FFE600] animate-pulse delay-75"></div>
          <div className="w-12 h-1 bg-[#FF2A2A] animate-pulse delay-150"></div>
        </div>
      </div>

      {/* Abstract Noise Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-[#EDEDED] ${motionConfig.isQuietMode ? 'hidden' : 'block'} animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100}px`,
              height: '1px',
              opacity: Math.random() * 0.5,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-md text-center mt-12 px-6 relative z-10">
        <p className={`transition-all duration-700 font-medium ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Это не фон. Это давление.
        </p>
      </div>
    </section>
  );
};

export default NoiseInsideSection;
