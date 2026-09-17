import { useTrendingTracks } from '../api/trendingApi';
import Track from '../../../entities/track';
import { ContentTabs } from '../../../features';

const TrendingPage = () => {
  const { data: trendingTracks } = useTrendingTracks();

  return (
    <div className='flex flex-col justify-center w-full px-10 mb-24 py-2'>
      <ContentTabs />
      <h1 className="text-2xl font-bold">Trending</h1>
      {trendingTracks?.map((track) => (
        <Track
          key={track.id}
          id={track.id}
          title={track.title}
          artist={track.user.name}
          duration={track.duration}
          picture={track.artwork['150x150']}
          streamUrl={track.stream.url}
        />
      ))}
    </div>
  );
};

export default TrendingPage;