import { MoviesApiService } from "../modules/movies/data/movies/MoviesApiService";
import { CommentsRepository } from "../modules/movies/domain/CommentsRepository";
import { MoviesRepository } from "../modules/movies/domain/MoviesRepository";

export interface DiContainer {
  getApiService(): MoviesApiService;
  getMoviesRepository(): MoviesRepository;
  getCommentsRepository(): CommentsRepository;
}
