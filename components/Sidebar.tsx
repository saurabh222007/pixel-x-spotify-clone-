
import React from 'react';
import { HomeIcon, SearchIcon, LibraryIcon, PlusIcon } from './icons';

const Sidebar: React.FC = () => {
  const playlists = ["8-Bit Hits", "Synthwave Journeys", "RPG Soundtracks", "Lo-Fi Pixels", "Boss Battles"];

  return (
    <div className="hidden md:flex flex-col w-64 bg-black p-2 space-y-4 border-r-4 border-zinc-800">
      <div className="text-2xl text-yellow-400 p-4 font-bold tracking-widest">
        sum Music
      </div>
      <div className="p-2 bg-zinc-900 border-2 border-zinc-700">
        <nav className="space-y-2">
          <a href="#" className="flex items-center space-x-3 p-2 text-lg hover:text-yellow-400 transition-colors duration-150">
            <HomeIcon />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-lg hover:text-yellow-400 transition-colors duration-150">
            <SearchIcon />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 text-lg hover:text-yellow-400 transition-colors duration-150">
            <LibraryIcon />
            <span>Your Library</span>
          </a>
        </nav>
      </div>

      <div className="flex-grow p-2 bg-zinc-900 border-2 border-zinc-700 overflow-y-auto">
        <button className="w-full flex items-center space-x-3 p-2 text-lg mb-2 hover:text-yellow-400 transition-colors duration-150">
          <div className="p-1 bg-neutral-200 text-black">
            <PlusIcon />
          </div>
          <span>Create Playlist</span>
        </button>
        <hr className="border-zinc-700 my-2" />
        <div className="space-y-1">
          {playlists.map(playlist => (
            <a key={playlist} href="#" className="block p-2 text-neutral-400 hover:text-white transition-colors duration-150 truncate">
              {playlist}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
