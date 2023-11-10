import { MovieResponseDto, MoviesListResponseDto } from "./MoviesResponse";

export class MoviesApiService {
  constructor() {}

  async fetchMovieById(id: number): Promise<MovieResponseDto> {
    return await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    ).then((response) => response.json());
  }

  async fetchMovies(
    page: number,
    limit: number,
  ): Promise<MoviesListResponseDto> {
    return await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}`,
    ).then((response) => response.json());
  }
}
