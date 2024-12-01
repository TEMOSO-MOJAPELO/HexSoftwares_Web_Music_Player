import { Song } from '../types/music';

export const songs: Song[] = [
  {
    id: 1,
    title: "Summer Breeze",
    artist: "Ocean Waves",
    duration: 245, // 4:05
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Mountain Echo",
    artist: "Nature's Call",
    duration: 184, // 3:04
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    coverUrl: "https://images.unsplash.com/photo-1495305379050-64540d6ee95d?w=300&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Urban Dreams",
    artist: "City Lights",
    duration: 213, // 3:33
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
  }
];