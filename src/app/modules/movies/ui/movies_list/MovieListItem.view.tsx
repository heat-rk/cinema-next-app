import Link from "next/link";
import { Movie } from "../../data/movies/MoviesResponse";

type Props = {
	movie: Movie
}

export default function MovieListItemView({ movie }: Props) {
  return (
    <div className="flex items-center rounded-lg p-4 bg-gray-900 max-w-screen-xl mx-auto">
      <Link href={`/movies/${movie.id}`}>
        <div className="mr-4">
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            className="w-16 h-auto"
          />
        </div>
      </Link>
      <div className="flex-1">
        <Link href={`/movies/${movie.id}`}>
          <div className="text-lg font-semibold mb-1">{movie.title}</div>
        </Link>
        <div className="text-sm text-gray-500 mb-1">{movie.year}</div>
        <div className="text-sm text-gray-500">
          Genres: {movie.genres.join(", ")}
        </div>
        <div className="text-sm text-gray-500">
          Rating: {movie.rating === 0 ? "Brand New" : movie.rating}
        </div>
      </div>
    </div>
  );
}
