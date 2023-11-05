import { LARGE_SCREEN_MIN_WIDTH } from "@/app/utils/ui/ScreenSizes";
import { Movie } from "../../data/movies/MoviesResponse";
import MediaQuery from "react-responsive";

type Props = {
  movie: Movie;
};

export default function MovieDetailView({ movie }: Props) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md">
      <MediaQuery maxWidth={LARGE_SCREEN_MIN_WIDTH - 1}>
        <img
          src={movie?.background_image}
          alt={movie?.title}
          className="w-full h-auto absolute"
        />
      </MediaQuery>
      <div className="p-8 relative">
        <MediaQuery minWidth={LARGE_SCREEN_MIN_WIDTH}>
          <div className="flex items-center">
            <img
              src={movie?.large_cover_image}
              alt={movie?.title}
              className="w-56 h-auto rounded-lg"
            />
            <div className="ml-4 text-xl">
              <h1 className="text-3xl font-bold text-white">{movie?.title}</h1>
              <p className="text-gray-400">{movie?.title_english}</p>
              <p className="text-gray-400">{movie?.year}</p>
              <p className="text-gray-400">Rating: {movie?.rating}</p>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={LARGE_SCREEN_MIN_WIDTH - 1}>
          <div className="flex flex-col items-center">
            <img
              src={movie?.large_cover_image}
              alt={movie?.title}
              className="w-64 h-auto rounded-lg"
            />
            <div className="text-xl flex flex-col items-center">
              <h1 className="text-3xl font-bold text-white">{movie?.title}</h1>
              <p className="text-gray-400">{movie?.title_english}</p>
              <p className="text-gray-400">{movie?.year}</p>
              <p className="text-gray-400">Rating: {movie?.rating}</p>
            </div>
          </div>
        </MediaQuery>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-white">Summary</h2>
          <p className="text-gray-400 text-lg">
            {movie?.summary
              ? movie?.summary
              : "There is no Summury ... But we are working on it :-)"}
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-white">Genres</h2>
          <p className="text-gray-400 text-lg">{movie?.genres.join(", ")}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-white">Description</h2>
          <p className="text-gray-400 text-lg">
            {movie?.description_full
              ? movie?.description_full
              : "There is no Description ... But we are working on it :-)"}
          </p>
        </div>
      </div>
    </div>
  );
}
