
import React from 'react';
import { Track } from '../types';
import { ClockIcon, HashIcon, MusicNoteIcon } from './icons';

interface MainViewProps {
  tracks: Track[];
  currentTrack: Track | null;
  onTrackSelect: (trackId: number) => void;
}

const MainView: React.FC<MainViewProps> = ({ tracks, currentTrack, onTrackSelect }) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gradient-to-b from-purple-900 via-zinc-900 to-zinc-900">
      <div className="p-4 bg-black/50 border-4 border-purple-600">
        <div className="flex items-end space-x-6">
          <div className="w-48 h-48 bg-zinc-800 border-4 border-zinc-600 flex items-center justify-center">
            <img src="https://picsum.photos/seed/playlist/200" alt="Playlist Art" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm">PLAYLIST</p>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">Pixel Power-Ups</h1>
            <p className="text-neutral-400 mt-2">Your favorite chiptunes and retro tracks.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-12 gap-4 px-4 py-2 border-b-2 border-zinc-700 text-neutral-400 text-sm">
          <div className="col-span-1 flex items-center justify-center"><HashIcon /></div>
          <div className="col-span-5">TITLE</div>
          <div className="col-span-4 hidden md:block">ALBUM</div>
          <div className="col-span-2 flex items-center justify-end"><ClockIcon /></div>
        </div>
        <div className="space-y-1 mt-2">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              onClick={() => onTrackSelect(track.id)}
              className={`grid grid-cols-12 gap-4 px-4 py-2 cursor-pointer group hover:bg-zinc-800/70 ${currentTrack?.id === track.id ? 'bg-purple-800/50 text-yellow-400' : ''}`}
            >
              <div className="col-span-1 flex items-center justify-center">
                {currentTrack?.id === track.id ? <MusicNoteIcon className="animate-bounce" /> : <span className="group-hover:hidden">{index + 1}</span>}
                 <span className="hidden group-hover:inline">{currentTrack?.id !== track.id && '▶'}</span>
              </div>
              <div className="col-span-5 flex items-center space-x-4">
                <img src={track.coverArt} alt={track.title} className="w-10 h-10 border-2 border-zinc-700" />
                <div>
                  <p className={`truncate ${currentTrack?.id === track.id ? 'text-yellow-400' : 'text-white'}`}>{track.title}</p>
                  <p className="text-sm text-neutral-400 truncate">{track.artist}</p>
                </div>
              </div>
              <div className="col-span-4 hidden md:flex items-center text-neutral-400 truncate">{track.album}</div>
              <div className="col-span-2 flex items-center justify-end text-neutral-400">{Math.floor(track.duration / 60)}:{String(track.duration % 60).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainView;
