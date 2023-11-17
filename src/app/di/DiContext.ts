import React, { useContext } from "react";
import { DiContainer } from "./DiContainer";
import { MoviesApiService } from "../modules/movies/data/movies/MoviesApiService";
import { CommentsRepositoryImpl } from "../modules/movies/data/comments/CommentsRepositoryImpl";
import { MoviesRepositoryImpl } from "../modules/movies/data/movies/MoviesRepositoryImpl";
import { CommentsRepository } from "../modules/movies/domain/comments/CommentsRepository";
import { MoviesRepository } from "../modules/movies/domain/movies/MoviesRepository";

const appDiContainer: DiContainer = new (class implements DiContainer {
  private readonly moviesApiService = new MoviesApiService();

  getApiService(): MoviesApiService {
    return this.moviesApiService;
  }

  getMoviesRepository(): MoviesRepository {
    return new MoviesRepositoryImpl(this.getApiService());
  }

  getCommentsRepository(): CommentsRepository {
    return new CommentsRepositoryImpl();
  }
})();

const DIContext = React.createContext<Partial<DiContainer>>(appDiContainer);

export const useInjection = (): DiContainer => {
  return useContext(DIContext) as DiContainer;
};
