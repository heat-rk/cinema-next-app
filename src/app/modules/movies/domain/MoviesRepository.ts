import { Movie, MoviesListResponseData } from "../data/movies/MoviesResponse";

export interface MoviesRepository {
    fetchMovieById(id: number): Promise<Movie>;
    fetchMovies(page: number, limit: number): Promise<MoviesListResponseData>;
}