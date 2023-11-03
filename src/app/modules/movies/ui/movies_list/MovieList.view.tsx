import { Movie } from "../../data/movies/MoviesResponse";
import MovieListItemView from "./MovieListItem.view";

type Props = {
  movies: Movie[];
};

export default function MovieListView({ movies }: Props) {
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id} className="p-2">
          <MovieListItemView movie={movie} />
        </li>
      ))}
    </ul>
  );
}
