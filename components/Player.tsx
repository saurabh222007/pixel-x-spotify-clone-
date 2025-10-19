
import React from 'react';
import { Track } from '../types';
import Equalizer from './Equalizer';
import { PlayIcon, PauseIcon, NextIcon, PrevIcon, VolumeIcon } from './icons';

interface PlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  equalizerBands: number[];
  togglePlayPause: () => void;
  handleNext: () => void;
  handlePrev: () => void;
  handleProgressChange: (newProgress: number) => void;
  handleVolumeChange: (newVolume: number) => void;
}

const PixelButton = ({ onClick, children, className = '' }: { onClick?: () => void, children: React.ReactNode, className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-zinc-700 border-2 border-t-zinc-500 border-l-zinc-500 border-b-zinc-800 border-r-zinc-800 p-2 text-white active:bg-zinc-600 active:border-t-zinc-800 active:border-l-zinc-800 active:border-b-zinc-500 active:border-r-zinc-500 active:translate-y-px active:translate-x-px transition-all duration-75 ${className}`}
    >
      {children}
    </button>
  );
};

const Player: React.FC<PlayerProps> = ({
  currentTrack, isPlaying, progress, volume, equalizerBands,
  togglePlayPause, handleNext, handlePrev, handleProgressChange, handleVolumeChange
}) => {

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <footer className="w-full bg-zinc-900 border-t-4 border-zinc-800 p-3 grid grid-cols-3 items-center gap-4">
      {/* Left: Song Info */}
      <div className="flex items-center space-x-3">
        {currentTrack ? (
          <>
            <img src={currentTrack.coverArt} alt={currentTrack.title} className="w-16 h-16 border-2 border-zinc-700" />
            <div>
              <p className="font-bold text-white truncate">{currentTrack.title}</p>
              <p className="text-sm text-neutral-400 truncate">{currentTrack.artist}</p>
            </div>
          </>
        ) : (
            <div className="w-16 h-16 bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center text-zinc-500 text-3xl">?</div>
        )}
      </div>

      {/* Center: Controls & Progress */}
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-4">
          <PixelButton onClick={handlePrev}><PrevIcon /></PixelButton>
          <PixelButton onClick={togglePlayPause} className="w-14 h-14 !p-0 flex items-center justify-center">
            {isPlaying ? <PauseIcon className="w-8 h-8"/> : <PlayIcon className="w-8 h-8"/>}
          </PixelButton>
          <PixelButton onClick={handleNext}><NextIcon /></PixelButton>
        </div>
        <div className="w-full flex items-center space-x-2 text-xs">
          <span>{formatTime(progress)}</span>
          <input
            type="range"
            min="0"
            max={currentTrack?.duration || 100}
            value={progress}
            onChange={(e) => handleProgressChange(Number(e.target.value))}
            className="w-full h-2 bg-zinc-700 appearance-none cursor-pointer"
            style={{ 
              background: `linear-gradient(to right, #fde047 ${((progress / (currentTrack?.duration || 1)) * 100)}%, #3f3f46 ${((progress / (currentTrack?.duration || 1)) * 100)}%)`
            }}
          />
          <span>{currentTrack ? formatTime(currentTrack.duration) : '0:00'}</span>
        </div>
      </div>

      {/* Right: Volume & Equalizer */}
      <div className="flex items-center justify-end space-x-4">
        <Equalizer bands={equalizerBands} />
        <div className="flex items-center space-x-2 w-32">
          <VolumeIcon />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(Number(e.target.value))}
            className="w-full h-2 bg-zinc-700 appearance-none cursor-pointer"
            style={{
                background: `linear-gradient(to right, #ffffff ${volume * 100}%, #3f3f46 ${volume * 100}%)`
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Player;
