import { usePlayerStore } from "../../../entities/audio-player";
import track from "../../../entities/track";


const Player = () => {

    const currentTrack = usePlayerStore((state) => state.currentTrack);
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const volume = usePlayerStore((state) => state.volume);
    const play = usePlayerStore((state) => state.play);
    const pause = usePlayerStore((state) => state.pause);
    const setVolume = usePlayerStore((state) => state.setVolume);

    return (
        <div className="w-full flex items-center justify-center h-20 bg-[#ff9e9e]">
            <p>{currentTrack?.title}</p>
            <button onClick={() => currentTrack ? pause() : play(track)}>
                {isPlaying ? '⏸' : '▶'}
            </button>
            <input
                type="range"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
            />
        </div>
    );
};

export default Player;