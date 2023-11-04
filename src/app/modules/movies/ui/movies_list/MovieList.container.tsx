"use client";

import MovieListView from "./MovieList.view";
import PaginatorContainer from "@/app/components/paginator/Paginator.container";
import { useInjection } from "@/app/pages/_app";
import { useQuery } from "react-query";
import Loader from "@/app/components/loader/Loader";
import Error from "@/app/components/error/Error";

type Props = {
  page: number;
};

export default function MovieListContainer({ page }: Props) {
  const repository = useInjection().getMoviesRepository();
  const limit = 10;

  const { isLoading, error, data } = useQuery(
    ["movies_list", page, limit],
    () => repository.fetchMovies(page, limit),
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
