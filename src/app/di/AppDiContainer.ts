import { CommentsRepositoryImpl } from "../modules/movies/data/comments/CommentsRepositoryImpl";
import { MoviesApiService } from "../modules/movies/data/movies/MoviesApiService";
import { MoviesRepositoryImpl } from "../modules/movies/data/movies/MoviesRepositoryImpl";
import { CommentsRepository } from "../modules/movies/domain/CommentsRepository";
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

    useCommentsRepository(): CommentsRepository {
        return new CommentsRepositoryImpl();
    }
}