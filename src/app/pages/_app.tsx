import type { AppProps } from 'next/app'
import { MoviesApiService } from '../modules/movies/data/movies/MoviesApiService';
import { MoviesRepository } from '../modules/movies/domain/MoviesRepository';
import { MoviesRepositoryImpl } from '../modules/movies/data/movies/MoviesRepositoryImpl';
import { DiContainer } from '../di/DiContainer';
import { CommentsRepository } from '../modules/movies/domain/CommentsRepository';
import { CommentsRepositoryImpl } from '../modules/movies/data/comments/CommentsRepositoryImpl';
import React, { useContext } from 'react';

const appDiContainer: DiContainer = new class implements DiContainer {
	private readonly moviesApiService = new MoviesApiService()

    getApiService(): MoviesApiService {
        return this.moviesApiService;
    }

    getMoviesRepository(): MoviesRepository {
        return new MoviesRepositoryImpl(this.getApiService());
    }

    getCommentsRepository(): CommentsRepository {
        return new CommentsRepositoryImpl();
    }
};

export const DIContext = React.createContext<Partial<DiContainer>>(appDiContainer);

export const useInjection = (): DiContainer => {
	return useContext(DIContext) as DiContainer;
};
 
export default function MyApp({ Component, pageProps }: AppProps) {
  	return <Component {...pageProps} />
}