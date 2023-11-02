import { MoviesRepository } from "../domain/MoviesRepository";
import { MoviesApiService } from "./MoviesApiService";
import { Movie, MoviesListResponseData } from "./MoviesResponse";

export class MoviesRepositoryImpl implements MoviesRepository {
    constructor(private apiService: MoviesApiService) {}

    async fetchMovieById(id: number): Promise<Movie> {
        return await this.apiService.fetchMovieById(id)
            .then((response) => response.data.movie);
    }
    async fetchMovies(page: number, limit: number): Promise<MoviesListResponseData> {
        return await this.apiService.fetchMovies(page, limit)
            .then((response) => response.data)
    }
}