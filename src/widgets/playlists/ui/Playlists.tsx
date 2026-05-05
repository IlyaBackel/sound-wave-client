// Playlists.tsx
interface PlaylistsProps {
  onExpand?: () => void;
}

const Playlists = ({ onExpand }: PlaylistsProps) => {
  return (
    <div className="relative h-full bg-[#f57878]">
      <div className="p-4">
        <h2>Плейлисты</h2>
        <ul>
          <li>Плейлист 1</li>
          <li>Плейлист 2</li>
        </ul>
      </div>

      <button
        onClick={onExpand}
        className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-10 bg-gray-600 rounded-r-md flex items-center justify-center cursor-pointer hover:bg-gray-700"
        title="Развернуть панель"
      >
        ▶
      </button>
    </div>
  );
};

export default Playlists;