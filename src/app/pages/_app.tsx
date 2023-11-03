import type { AppProps } from 'next/app'
import { MoviesApiService } from '../modules/movies/data/movies/MoviesApiService';
import { MoviesRepository } from '../modules/movies/domain/MoviesRepository';
import { MoviesRepositoryImpl } from '../modules/movies/data/movies/MoviesRepositoryImpl';
import { DiContainer } from '../di/DiContainer';
import { AppDiContainer } from '../di/AppDiContainer';

export const diContainer: DiContainer = new AppDiContainer();
 
export default function MyApp({ Component, pageProps }: AppProps) {
  	return <Component {...pageProps} />
}