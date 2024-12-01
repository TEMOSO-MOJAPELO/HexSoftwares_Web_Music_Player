import { useState, useRef, useEffect } from 'react';
import { PlayerState } from '../types/music';

export const useAudioPlayer = (audioUrls: string[]) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    currentTime: 0,
    volume: 0.7,
    currentSongIndex: 0,
  });

  useEffect(() => {
    audioRef.current = new Audio(audioUrls[playerState.currentSongIndex]);
    audioRef.current.volume = playerState.volume;

    const updateTime = () => {
      if (audioRef.current) {
        setPlayerState(prev => ({
          ...prev,
          currentTime: audioRef.current?.currentTime || 0,
        }));
      }
    };

    const handleEnded = () => {
      handleNext();
    };

    audioRef.current.addEventListener('timeupdate', updateTime);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [playerState.currentSongIndex]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (playerState.isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlayerState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
    }
  };

  const handlePrevious = () => {
    const newIndex = (playerState.currentSongIndex - 1 + audioUrls.length) % audioUrls.length;
    setPlayerState(prev => ({ ...prev, currentSongIndex: newIndex, currentTime: 0 }));
  };

  const handleNext = () => {
    const newIndex = (playerState.currentSongIndex + 1) % audioUrls.length;
    setPlayerState(prev => ({ ...prev, currentSongIndex: newIndex, currentTime: 0 }));
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setPlayerState(prev => ({ ...prev, currentTime: time }));
    }
  };

  const handleVolumeChange = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      setPlayerState(prev => ({ ...prev, volume }));
    }
  };

  const handleSongSelect = (index: number) => {
    setPlayerState(prev => ({
      ...prev,
      currentSongIndex: index,
      currentTime: 0,
      isPlaying: true,
    }));
  };

  return {
    playerState,
    togglePlayPause,
    handlePrevious,
    handleNext,
    handleSeek,
    handleVolumeChange,
    handleSongSelect,
  };
};