import { Movie } from "../../domain/movies/Movie";
import { MoviesList } from "../../domain/movies/MoviesList";
import { MoviesRepository } from "../../domain/movies/MoviesRepository";
import { mapMovieDtoToDomain, mapMoviesListDtoToDomain } from "../../mappers/MovieMappers";
import { MoviesApiService } from "./MoviesApiService";

export class MoviesRepositoryImpl implements MoviesRepository {
  constructor(private apiService: MoviesApiService) {}

  async fetchMovieById(id: number): Promise<Movie> {
    return await this.apiService
      .fetchMovieById(id)
      .then((response) => response.data.movie)
      .then((movieDto) => mapMovieDtoToDomain(movieDto));
  }
  async fetchMovies(
    page: number,
    limit: number,
  ): Promise<MoviesList> {
    return await this.apiService
      .fetchMovies(page, limit)
      .then((response) => response.data)
      .then((dataDto) => mapMoviesListDtoToDomain(dataDto));
  }
}
