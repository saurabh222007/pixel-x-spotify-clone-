
import React from 'react';
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import Player from './components/Player';
import PixelatedBackground from './components/PixelatedBackground';
import { useMusicPlayer } from './hooks/useMusicPlayer';

const App: React.FC = () => {
  const musicPlayer = useMusicPlayer();

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col font-mono bg-zinc-900 text-neutral-200">
      <PixelatedBackground />
      <div className="relative z-10 flex flex-grow" style={{ minHeight: 0 }}>
        <Sidebar />
        <MainView tracks={musicPlayer.tracks} currentTrack={musicPlayer.currentTrack} onTrackSelect={musicPlayer.selectTrack} />
      </div>
      <div className="relative z-10">
        <Player {...musicPlayer} />
      </div>
      <div className="absolute bottom-2 right-4 z-20 text-xs text-yellow-400 opacity-70">
        made by sum1
      </div>
    </div>
  );
};

export default App;
