// TrackInformation.tsx
interface TrackInformationProps {
  onExpand?: () => void;
}

const TrackInformation = ({ onExpand }: TrackInformationProps) => {
  return (
    <div className="relative h-full bg-[#f57878]">
      <div className="p-4">
        <h2>Информация о треке</h2>
        <p>Название: ...</p>
      </div>

      <button
        onClick={onExpand}
        className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-10 bg-gray-600 rounded-l-md flex items-center justify-center cursor-pointer hover:bg-gray-700"
        title="Развернуть панель"
      >
        ◀
      </button>
    </div>
  );
};

export default TrackInformation;