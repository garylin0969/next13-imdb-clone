import Results from '@/components/Results';
import { MovieInfo, MoviesResponse } from '../types';
import { showMovies } from './api/serverApi/movieApi';

interface HomeProps {
    searchParams: {
        genre?: string;
    };
}

export default async function Home({ searchParams }: HomeProps) {
    const data: MoviesResponse = await showMovies(searchParams.genre);
    const results: MovieInfo[] = data.results;

    return (
        <>
            <div>
                <Results results={results} />
            </div>
        </>
    );
}
