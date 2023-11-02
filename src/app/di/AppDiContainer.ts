import { MoviesApiService } from "../modules/movies/data/MoviesApiService";
import { MoviesRepositoryImpl } from "../modules/movies/data/MoviesRepositoryImpl";
import { MoviesRepository } from "../modules/movies/domain/MoviesRepository";
import { DiContainer } from "./DiContainer";

export class AppDiContainer implements DiContainer {
    private readonly moviesApiService = new MoviesApiService()

    useApiService(): MoviesApiService {
        return this.moviesApiService;
    }

    useMoviesRepository(): MoviesRepository {
        return new MoviesRepositoryImpl(
            this.useApiService()
        );
    }
}