"use client";

import MovieDetailCommentsContainer from "@/app/modules/movies/ui/movie_detail/comment field/MovieDetailComments.container";
import MovieDetailView from "./MovieDetail.view";
import { useQuery } from "react-query";
import Loader from "@/app/components/loader/Loader";
import Error from "@/app/components/error/Error";
import { useInjection } from "@/app/di/DiContext";

type Props = {
  id: number;
};

export default function MovieDetailContainer(
  { id }: Props,
  { moviesRepository = useInjection().getMoviesRepository() },
) {
  const { isLoading, error, data } = useQuery(["movie_detail", id], () =>
    moviesRepository.fetchMovieById(id),
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <Error />;
  }

  return (
    <>
      <MovieDetailView movie={data} />
      <MovieDetailCommentsContainer movieID={id} />
    </>
  );
}
