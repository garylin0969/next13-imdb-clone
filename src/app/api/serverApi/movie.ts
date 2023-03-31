import { MovieInfo, MoviesResponse } from '@/types';
import { revalidateFetching, staticFetching } from './request';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const showMovies = async (genre?: string): Promise<MoviesResponse> => {
    const isTopRated: string = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';
    const params: object = { api_key: API_KEY, language: 'en-US', page: 1 };
    return await revalidateFetching(`/${isTopRated}`, 1000, params);
};

const getMovie = async (movieId: string): Promise<MovieInfo> => {
    const params: object = { api_key: API_KEY };
    return await staticFetching(`/movie/${movieId}`, params);
};

const searchMovies = async (search: string): Promise<MoviesResponse> => {
    const params: object = { api_key: API_KEY, query: search, language: 'en-US', include_adult: false };
    return await staticFetching('/search/movie', params);
};

const movieServerApi: {
    showMovies: (genre?: string) => Promise<MoviesResponse>;
    getMovie: (movieId: string) => Promise<MovieInfo>;
    searchMovies: (search: string) => Promise<MoviesResponse>;
} = {
    showMovies,
    getMovie,
    searchMovies,
};

export default movieServerApi;
