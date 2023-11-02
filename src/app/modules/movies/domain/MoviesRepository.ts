import { Movie, MoviesListResponseData } from "../data/MoviesResponse";

export interface MoviesRepository {
    fetchMovieById(id: number): Promise<Movie>;
    fetchMovies(page: number, limit: number): Promise<MoviesListResponseData>;
}