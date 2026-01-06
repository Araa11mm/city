
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  isQuietMode: boolean;
  toggleQuietMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isQuietMode, toggleQuietMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex flex-col gap-2 mix-blend-difference">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          {/* Metro Symbol Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF2A2A]">
            <path d="M4 18V6H6V16H9V6H11V16H13V6H15V16H18V6H20V18H4Z" fill="currentColor" />
          </svg>
          <div className="font-black text-xl tracking-tighter text-[#EDEDED] hidden md:block">
            ГОРОД КРИЧИТ
          </div>
        </div>
        
        <button
          onClick={toggleQuietMode}
          aria-label={isQuietMode ? "Выключить тихий режим" : "Включить тихий режим"}
          className={`px-4 py-1.5 border border-[#EDEDED] rounded-none text-[10px] font-bold uppercase transition-all ${
            isQuietMode ? 'bg-[#EDEDED] text-[#0E0E11]' : 'bg-transparent text-[#EDEDED]'
          }`}
        >
          {isQuietMode ? 'Громко' : 'Тише'}
        </button>
      </div>

      {/* Metro Line Progress Bar */}
      <div className="w-full h-px bg-[#EDEDED]/20 relative">
        <div 
          className="absolute h-1 bg-[#FF2A2A] top-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        {/* "Stations" indicators */}
        {[0, 25, 50, 75, 100].map((pos) => (
          <div 
            key={pos}
            className={`absolute w-1.5 h-1.5 rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 ${scrollProgress >= pos ? 'bg-[#FF2A2A]' : 'bg-[#EDEDED]/40'}`}
            style={{ left: `${pos}%` }}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
