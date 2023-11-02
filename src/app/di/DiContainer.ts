import { MoviesApiService } from "../modules/movies/data/MoviesApiService";
import { MoviesRepository } from "../modules/movies/domain/MoviesRepository";

export interface DiContainer {
    useApiService(): MoviesApiService
    useMoviesRepository(): MoviesRepository
}