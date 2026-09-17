import { create } from 'zustand';

interface Track {
    id: string;
    title: string;
    user: {
        name: string;
    };
    artwork: {
        [key: string]: string;
    };
    duration?: number;
    streamUrl: string;
}

interface PlayerState {
    currentTrack: Track | null;
    isPlaying: boolean;
    volume: number;

    play: (track: Track) => void;
    pause: () => void;
    setVolume: (volume: number) => void;
}

const usePlayerStore = create<PlayerState>((set) => ({
    currentTrack: null,
    isPlaying: false,
    volume: 70,

    play: (track) => set({ currentTrack: track, isPlaying: true }),
    pause: () => set({ isPlaying: false }),
    setVolume: (volume) => set({ volume }),
    
}))

export default usePlayerStore;