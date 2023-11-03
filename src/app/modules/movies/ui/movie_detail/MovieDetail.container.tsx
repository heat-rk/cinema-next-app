"use client";

import MovieDetailCommentsContainer from "@/app/modules/movies/ui/movie_detail/comment field/MovieDetailComments.container";
import MovieDetailView from "./MovieDetail.view";
import { diContainer } from "@/app/pages/_app";
import { useEffect, useState } from "react";
import { Movie } from "../../data/movies/MoviesResponse";

type Props = {
    id: number;
};

export default function MovieDetailContainer({ id }: Props) {
    const repository = diContainer.useMoviesRepository();

    const [movie, setMovie] = useState<Movie>()

    useEffect(() => {
        repository.fetchMovieById(id)
            .then(movie => setMovie(movie))
            .catch((err) => {
                console.log(err.message);
            });
    }, [])

    if (movie) {
        return (
            <>
                <MovieDetailView movie={movie} />
                <MovieDetailCommentsContainer movieID={id} />
            </>
        );
    } else {
        return <></>
    }
}
