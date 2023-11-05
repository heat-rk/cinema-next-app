"use client";

import MovieListView from "./MovieList.view";
import PaginatorContainer from "@/app/components/paginator/Paginator.container";
import { useQuery } from "react-query";
import Loader from "@/app/components/loader/Loader";
import Error from "@/app/components/error/Error";
import { useInjection } from "@/app/page";

type Props = {
  page: number;
};

export default function MovieListContainer(
  { page }: Props,
  { moviesRepository = useInjection().getMoviesRepository() },
) {
  const limit = 10;

  const { isLoading, error, data } = useQuery(
    ["movies_list", page, limit],
    () => moviesRepository.fetchMovies(page, limit),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <Error />;
  }

  return (
    <>
      <MovieListView movies={data.movies} />
      <PaginatorContainer
        page={page}
        route="/movies"
        pagesCount={Math.ceil(data.movie_count / data.limit)}
      />
    </>
  );
}
