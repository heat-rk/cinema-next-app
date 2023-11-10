import { Movie } from "./Movie";

export interface MoviesList {
  movieCount: number;
  limit: number;
  pageNumber: number;
  movies: Movie[];
}
