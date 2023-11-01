import { IMovie } from "../domain/IMovie";
import MovieItemView from "./MovieItem.view";

type Props = {
  movies: IMovie[];
};

export default function MovieListView({ movies }: Props) {
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id} className="p-2">
          <MovieItemView movie={movie} />
        </li>
      ))}
    </ul>
  );
}
