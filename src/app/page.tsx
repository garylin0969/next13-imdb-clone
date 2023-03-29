import Results from '@/components/Results';
import { CardInfo } from '../types';
import { revalidateFetching } from './api/severApi/basicFetching';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface HomeProps {
    searchParams: {
        genre?: string;
    };
}

interface ResponseData {
    page: number;
    results: CardInfo[];
    total_pages: number;
    total_results: number;
}

export default async function Home({ searchParams }: HomeProps) {
    const genre: string = searchParams.genre || 'fetchTrending';
    const query: object = { api_key: API_KEY, language: 'en-US', page: 1 };
    const data: ResponseData = await revalidateFetching(
        `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}`,
        1000,
        query
    );
    const results: CardInfo[] = data?.results;

    return (
        <>
            <div>
                <Results results={results} />
            </div>
        </>
    );
}
