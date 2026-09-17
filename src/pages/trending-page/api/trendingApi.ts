import { useQuery } from '@tanstack/react-query';
import api from '../../../shared/api/axiosInstance';

export interface Track {
    id: string;
    title: string;
    user: {
        name: string;
    };
    artwork: {
        [key: string]: string;
    };
    duration?: number;
    stream: {
        url: string;
    }
}

const fetchTrendingTracks = async (limit: number = 10): Promise<Track[]> => await api.get('/trending', { params: { limit } }).then((res) => res.data.data);

export const useTrendingTracks = (limit: number = 10) => {
    return useQuery({
        queryKey: ['trending-tracks', limit],
        queryFn: () => fetchTrendingTracks(limit),
        staleTime: 5 * 60 * 1000,
    });
};