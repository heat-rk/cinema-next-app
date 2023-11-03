import { Movie } from "../../data/movies/MoviesResponse";

type Props = {
  movie: Movie;
};

export default function MovieDetailView({ movie }: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={movie?.large_cover_image}
          alt={movie?.title}
          className="w-44 h-auto rounded-lg"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold text-white">{movie?.title}</h1>
          <p className="text-gray-400">{movie?.title_english}</p>
          <p className="text-gray-400">{movie?.year}</p>
          <p className="text-gray-400">Rating: {movie?.rating}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white">Summary</h2>
        <p className="text-gray-400">
          {movie?.summary
            ? movie?.summary
            : "There is no Summury ... But we are working on it :-)"}
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white">Genres</h2>
        <p className="text-gray-400">{movie?.genres.join(", ")}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-gray-400">
          {movie?.description_full
            ? movie?.description_full
            : "There is no Description ... But we are working on it :-)"}
        </p>
      </div>
    </div>
  );
}
