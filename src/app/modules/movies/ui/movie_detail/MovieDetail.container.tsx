"use client";

import MovieDetailCommentsContainer from "@/app/modules/movies/ui/movie_detail/comment field/MovieDetailComments.container";
import MovieDetailView from "./MovieDetail.view";
import { useEffect, useState } from "react";
import { Movie } from "../../data/movies/MoviesResponse";
import { useInjection } from "@/app/pages/_app";

type Props = {
    id: number;
};

export default function MovieDetailContainer({ id }: Props) {
    const repository = useInjection().getMoviesRepository();

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
