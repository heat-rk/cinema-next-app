import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchMovies from "./fetchMovies";

export default function useFetchMovies(page: number, limit: number) {
  const { data: movies } = useQuery({
    queryKey: ["getFilmsList", [page, limit]],
    queryFn: () => fetchMovies(page, limit),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
  });

  return {
    movies,
  };
}
