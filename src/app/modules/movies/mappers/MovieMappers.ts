import {
  MovieDto,
  MoviesListResponseDataDto,
} from "../data/movies/MoviesResponse";
import { Movie } from "../domain/movies/Movie";
import { MoviesList } from "../domain/movies/MoviesList";

export function mapMovieDtoToDomain(movieDto: MovieDto): Movie {
  return {
    id: movieDto.id,
    title: movieDto.title,
    titleEnglish: movieDto.title_english,
    year: movieDto.year,
    rating: movieDto.rating,
    genres: movieDto.genres,
    summary: movieDto.summary,
    descriptionFull: movieDto.description_full,
    backgroundImage: movieDto.background_image,
    mediumCoverImage: movieDto.medium_cover_image,
    largeCoverImage: movieDto.large_cover_image,
  };
}

export function mapMoviesListDtoToDomain(
  dataDto: MoviesListResponseDataDto,
): MoviesList {
  return {
    movieCount: dataDto.movie_count,
    limit: dataDto.limit,
    pageNumber: dataDto.page_number,
    movies: dataDto.movies.map((movieDto) => mapMovieDtoToDomain(movieDto)),
  };
}
