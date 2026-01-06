
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import MetroSection from './sections/MetroSection';
import NoiseInsideSection from './sections/NoiseInsideSection';
import NoOffSection from './sections/NoOffSection';
import FinalSection from './sections/FinalSection';
import { MotionConfig } from './types';

const App: React.FC = () => {
  const [isQuietMode, setIsQuietMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleQuietMode = () => setIsQuietMode(prev => !prev);

  const motionConfig: MotionConfig = {
    isQuietMode,
    prefersReducedMotion
  };

  return (
    <div className={`min-h-screen ${prefersReducedMotion ? 'reduced-motion' : ''}`}>
      {/* Noise Grain Effect */}
      {!isQuietMode && <div className="noise-overlay" />}
      
      <Header isQuietMode={isQuietMode} toggleQuietMode={toggleQuietMode} />
      
      <main>
        <HeroSection />
        <MetroSection />
        <NoiseInsideSection motionConfig={motionConfig} />
        <NoOffSection />
        <FinalSection />
      </main>
      
      {/* Visual background elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#0E0E11]">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#1C2333] opacity-20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[#FF2A2A] opacity-5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
