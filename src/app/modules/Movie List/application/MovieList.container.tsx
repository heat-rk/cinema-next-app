"use client";

import React from "react";
import useFetchMovies from "../infrastructure/useFetchMovies";
import MovieListView from "./MovieList.view";
import PaginatorContainer from "@/app/components/Paginator/Paginator.container";

export default function MovieListContainer() {
  const [page, setPage] = React.useState<number>(1);
  const limit = 10;

  const { movies: data } = useFetchMovies(page, limit);
  return (
    <>
      <MovieListView movies={data?.data?.movies} />
      <PaginatorContainer page={page} setPage={setPage} limit={limit} />
    </>
  );
}
