"use client";

import { useEffect, useState } from "react";
import MovieListView from "./MovieList.view";
import PaginatorContainer from "@/app/components/paginator/Paginator.container";
import { diContainer } from "@/app/pages/_app";
import { Movie } from "../../data/movies/MoviesResponse";

type Props = {
	page: number
}

export default function MovieListContainer({ page } : Props) {
	const repository = diContainer.useMoviesRepository();
	const limit = 10;

	const [movies, setMovies] = useState<Movie[]>([]);
	const [pagesCount, setPagesCount] = useState(0);

	useEffect(() => {
		repository.fetchMovies(page, limit)
			.then(response => {
				setMovies(response.movies)
				setPagesCount(Math.ceil(response.movie_count / response.limit))
			})
			.catch((err) => {
			console.log(err.message);
		});
	}, [page])

	return (
		<>
		<MovieListView movies={movies} />
		<PaginatorContainer 
			page={page} 
			route="/movies"
			pagesCount={pagesCount} />
		</>
	);
}
