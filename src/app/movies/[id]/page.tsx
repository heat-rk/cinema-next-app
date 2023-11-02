import MovieDetailContainer from "@/app/modules/movies/ui/movie_detail/MovieDetail.container";

type Props = {
    params: {
        id: number;
    };
};

export default function MovieDetailPage({ params }: Props) {
    return <MovieDetailContainer params={params} />
}