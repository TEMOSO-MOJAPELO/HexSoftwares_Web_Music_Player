export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  url: string;
  coverUrl: string;
}

export interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  currentSongIndex: number;
}