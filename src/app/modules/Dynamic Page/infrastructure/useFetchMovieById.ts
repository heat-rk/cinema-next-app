import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchMovieById from "./fetchMovieById";

export default function useFetchMovieById(id: number) {
  const { data: movie } = useQuery({
    queryKey: ["getFilmsList", id],
    queryFn: () => fetchMovieById(id),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
  });

  return {
    movie,
  };
}
