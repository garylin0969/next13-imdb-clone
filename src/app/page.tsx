import Results from '@/components/Results';
import { CardInfo } from '../../types';

const API_KEY = process.env.API_KEY;

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
    const res: Response = await fetch(
        `https://api.themoviedb.org/3/${
            genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 1000 } }
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data: ResponseData = await res.json();
    const results: CardInfo[] = data.results;

    return (
        <>
            <div>
                <Results results={results} />
            </div>
        </>
    );
}
