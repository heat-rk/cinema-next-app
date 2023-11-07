"use client";

import React, { useContext } from "react";
import { DiContainer } from "./di/DiContainer";
import { CommentsRepositoryImpl } from "./modules/movies/data/comments/CommentsRepositoryImpl";
import { MoviesApiService } from "./modules/movies/data/movies/MoviesApiService";
import { MoviesRepositoryImpl } from "./modules/movies/data/movies/MoviesRepositoryImpl";
import { CommentsRepository } from "./modules/movies/domain/comments/CommentsRepository";
import { MoviesRepository } from "./modules/movies/domain/movies/MoviesRepository";
import MovieListContainer from "./modules/movies/ui/movies_list/MovieList.container";

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

export const DIContext =
  React.createContext<Partial<DiContainer>>(appDiContainer);

export const useInjection = (): DiContainer => {
  return useContext(DIContext) as DiContainer;
};

export default function Home() {
  return <MovieListContainer page={1} />;
}
