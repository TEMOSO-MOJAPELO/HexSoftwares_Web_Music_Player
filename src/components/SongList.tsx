import React from 'react';
import { Play } from 'lucide-react';
import { Song } from '../types/music';
import { formatTime } from '../utils/timeFormat';

interface SongListProps {
  songs: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

export const SongList: React.FC<SongListProps> = ({
  songs,
  currentSongIndex,
  onSongSelect,
}) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Playing Next</h2>
      <div className="space-y-2">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors
              ${currentSongIndex === index ? 'bg-blue-50' : ''}`}
            onClick={() => onSongSelect(index)}
          >
            <img
              src={song.coverUrl}
              alt={song.title}
              className="w-12 h-12 rounded-md object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{song.title}</h3>
              <p className="text-sm text-gray-600">{song.artist}</p>
            </div>
            <span className="text-sm text-gray-500">
              {formatTime(song.duration)}
            </span>
            {currentSongIndex === index && (
              <Play className="w-5 h-5 ml-4 text-blue-600" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};