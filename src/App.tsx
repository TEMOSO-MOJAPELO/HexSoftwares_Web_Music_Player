import React from 'react';
import { songs } from './data/songs';
import { SongList } from './components/SongList';
import { PlayerControls } from './components/PlayerControls';
import { useAudioPlayer } from './hooks/useAudioPlayer';

function App() {
  const {
    playerState,
    togglePlayPause,
    handlePrevious,
    handleNext,
    handleSeek,
    handleVolumeChange,
    handleSongSelect,
  } = useAudioPlayer(songs.map(song => song.url));

  const currentSong = songs[playerState.currentSongIndex];

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Web Music Player</h1>
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              className="w-48 h-48 rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{currentSong.title}</h2>
            <p className="text-gray-600">{currentSong.artist}</p>
          </div>
          <PlayerControls
            isPlaying={playerState.isPlaying}
            currentTime={playerState.currentTime}
            duration={currentSong.duration}
            volume={playerState.volume}
            onPlayPause={togglePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSeek={handleSeek}
            onVolumeChange={handleVolumeChange}
          />
          <SongList
            songs={songs}
            currentSongIndex={playerState.currentSongIndex}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default App;