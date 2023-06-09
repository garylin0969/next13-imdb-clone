import { movieServerApi } from '@/app/api/serverApi';
import Results from '@/components/Results';
import { MovieInfo, MoviesResponse } from '@/types';

interface SearchPageProps {
    params: {
        search: string;
    };
}

const SearchPage = async ({ params }: SearchPageProps) => {
    const data: MoviesResponse = await movieServerApi.searchMovies(params.search);
    const results: MovieInfo[] = data.results;
    return (
        <>
            <div>
                {results && results.length === 0 && <h1 className="text-center pt-6">No results found</h1>}
                {results && <Results results={results} />}
            </div>
        </>
    );
};

export default SearchPage;
