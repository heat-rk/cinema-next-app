import { Movie } from "./Movie";
import { MoviesList } from "./MoviesList";

export interface MoviesRepository {
  fetchMovieById(id: number): Promise<Movie>;
  fetchMovies(page: number, limit: number): Promise<MoviesList>;
}
