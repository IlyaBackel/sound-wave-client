import { useQuery } from '@tanstack/react-query';
// import { useStore } from '../../../app/providers/StoreProvider';
import api from '../../../shared/api/axiosInstance';

async function getTrendingTracks() {
  return await api.get('/trending?limit=2').then((res) => res.data.data);
}

const TrendingPage = () => {
  // const { store } = useStore();
  const { data: trendingTracks } = useQuery({
    queryKey: ['trending-tracks'],
    queryFn: getTrendingTracks,
  })
  console.log(trendingTracks);  

  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      {/* <p className='text-2xl font-bold'>{store.isAuth ? store.user.email : 'not auth'}</p> */}
      <div>{trendingTracks?.map((track) => <div key={track.track_id}>{track.title}</div>)}</div>
    </div>
  );
};

export default TrendingPage;