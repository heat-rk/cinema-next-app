"use client"

import { useSearchParams } from 'next/navigation'
import MovieListContainer from '../modules/movies/ui/movies_list/MovieList.container';

export default function MovieDetailPage() {
    const searchParams = useSearchParams()
    const queryPage = searchParams.get('page')
    const page = queryPage ? parseInt(queryPage, 10) : 1
    return <MovieListContainer page={page} />
}