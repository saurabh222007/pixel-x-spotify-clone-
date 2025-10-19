
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Track } from '../types';

const MOCK_TRACKS: Track[] = [
  { id: 1, title: "Pixel Dreams", artist: "8-Bit Heroes", album: "Retro Waves", duration: 185, coverArt: "https://picsum.photos/seed/1/200" },
  { id: 2, title: "Neon Grid", artist: "Synthwave Rider", album: "Future Funk", duration: 220, coverArt: "https://picsum.photos/seed/2/200" },
  { id: 3, title: "Chiptune Joy", artist: "8-Bit Heroes", album: "Retro Waves", duration: 150, coverArt: "https://picsum.photos/seed/3/200" },
  { id: 4, title: "Castle Quest", artist: "RPG Masters", album: "Fantasy Realms", duration: 301, coverArt: "https://picsum.photos/seed/4/200" },
  { id: 5, title: "Arcade Fire", artist: "Player One", album: "High Score", duration: 195, coverArt: "https://picsum.photos/seed/5/200" },
  { id: 6, title: "Sunset Drive", artist: "Synthwave Rider", album: "Future Funk", duration: 243, coverArt: "https://picsum.photos/seed/6/200" },
  { id: 7, title: "Forest Lullaby", artist: "RPG Masters", album: "Fantasy Realms", duration: 180, coverArt: "https://picsum.photos/seed/7/200" },
  { id: 8, title: "Game Over", artist: "Player One", album: "High Score", duration: 95, coverArt: "https://picsum.photos/seed/8/200" },
];

export const useMusicPlayer = () => {
  const [tracks] = useState<Track[]>(MOCK_TRACKS);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [equalizerBands, setEqualizerBands] = useState<number[]>(Array(8).fill(0));

  const currentTrack = useMemo(() => 
    currentTrackIndex !== null ? tracks[currentTrackIndex] : null,
    [currentTrackIndex, tracks]
  );

  useEffect(() => {
    let progressInterval: number;
    let equalizerInterval: number;

    if (isPlaying && currentTrack) {
      progressInterval = window.setInterval(() => {
        setProgress(p => {
          if (p >= currentTrack.duration) {
            handleNext();
            return 0;
          }
          return p + 1;
        });
      }, 1000);

      equalizerInterval = window.setInterval(() => {
        setEqualizerBands(Array(8).fill(0).map(() => Math.random() * 100));
      }, 150);
    } else {
      setEqualizerBands(Array(8).fill(0));
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(equalizerInterval);
    };
  }, [isPlaying, currentTrack]);

  const selectTrack = useCallback((trackId: number) => {
    const trackIndex = tracks.findIndex(t => t.id === trackId);
    if (trackIndex !== -1) {
      setCurrentTrackIndex(trackIndex);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [tracks]);

  const togglePlayPause = useCallback(() => {
    if (currentTrack) {
      setIsPlaying(prev => !prev);
    }
  }, [currentTrack]);

  const handleNext = useCallback(() => {
    if (currentTrackIndex !== null) {
      const nextIndex = (currentTrackIndex + 1) % tracks.length;
      setCurrentTrackIndex(nextIndex);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [currentTrackIndex, tracks.length]);

  const handlePrev = useCallback(() => {
    if (currentTrackIndex !== null) {
      if (progress > 3) {
        setProgress(0);
      } else {
        const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(prevIndex);
        setProgress(0);
        setIsPlaying(true);
      }
    }
  }, [currentTrackIndex, tracks.length, progress]);

  const handleProgressChange = useCallback((newProgress: number) => {
    setProgress(newProgress);
  }, []);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
  }, []);

  return {
    tracks,
    currentTrack,
    isPlaying,
    progress,
    volume,
    equalizerBands,
    selectTrack,
    togglePlayPause,
    handleNext,
    handlePrev,
    handleProgressChange,
    handleVolumeChange,
  };
};
