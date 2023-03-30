import { searchMovies } from '@/app/api/serverApi/movieApi';
import Results from '@/components/Results';
import { MovieInfo, MoviesResponse } from '@/types';

interface SearchPage {
    params: {
        search: string;
    };
}

const SearchPage = async ({ params }: SearchPage) => {
    const data: MoviesResponse = await searchMovies(params.search);
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
