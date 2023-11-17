"use client";

import MovieListContainer from "./modules/movies/ui/movies_list/MovieList.container";

export default function Home() {
  return <MovieListContainer page={1} />;
}
