
import React from 'react';

interface EqualizerProps {
  bands: number[];
}

const Equalizer: React.FC<EqualizerProps> = ({ bands }) => {
  return (
    <div className="flex items-end h-10 space-x-1">
      {bands.map((level, index) => (
        <div
          key={index}
          className="w-2 bg-yellow-400"
          style={{
            height: `${Math.max(level, 5)}%`,
            transition: 'height 0.1s ease-out'
          }}
        ></div>
      ))}
    </div>
  );
};

export default Equalizer;
