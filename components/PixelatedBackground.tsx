
import React from 'react';

const PixelatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <div className="absolute top-1/4 left-0 w-16 h-16 bg-cyan-500 animate-pacman-x">
        <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-black"></div>
      </div>
       <div className="absolute bottom-1/4 right-0 w-12 h-12 bg-red-500 animate-ghost-x">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white"></div>
      </div>
      <style>{`
        @keyframes pacman-x {
          0%, 100% { transform: translateX(-100px) rotate(0deg); }
          48% { transform: translateX(calc(100vw + 100px)) rotate(0deg); }
          50% { transform: translateX(calc(100vw + 100px)) rotateY(180deg); }
          98% { transform: translateX(-100px) rotateY(180deg); }
        }
         @keyframes ghost-x {
          0%, 100% { transform: translateX(100px); }
          50% { transform: translateX(calc(-100vw - 100px)); }
        }
        .animate-pacman-x {
          animation: pacman-x 30s linear infinite;
        }
        .animate-ghost-x {
          animation: ghost-x 35s linear infinite 5s;
        }
      `}</style>
    </div>
  );
};

export default PixelatedBackground;
