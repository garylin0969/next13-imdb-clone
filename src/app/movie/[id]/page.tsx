import { movieServerApi } from '@/app/api/serverApi';
import { MovieInfo } from '@/types';
import Image from 'next/image';

type MoviePageProps = {
    params: {
        id: string;
    };
};

const MoviePage = async ({ params }: MoviePageProps) => {
    const movieId: string = params.id;
    const movie: MovieInfo = await movieServerApi.getMovie(movieId);
    return (
        <>
            <div className="w-full">
                <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                        className="rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                        width={500}
                        height={300}
                        alt={movie.title || movie.name}
                        placeholder="blur"
                        blurDataURL="/spinner.svg"
                        style={{
                            maxWidth: '100%',
                            height: '100%',
                        }}
                    />
                    <div className="p-2">
                        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
                        <p className="text-lg mb-3">
                            <span className="font-semibold mr-1">Overview:</span>
                            {movie.overview}
                        </p>
                        <p className="mb-3">
                            <span className="font-semibold mr-1">Date Released:</span>
                            {movie.release_date || movie.first_air_date}
                        </p>
                        <p className="mb-3">
                            <span className="font-semibold mr-1">Date Rating:</span>
                            {movie.vote_count}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviePage;
