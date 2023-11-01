export default async function fetchMovies(id: number) {
  const response = await fetch(
    `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
  );
  const data = response.json();
  return data;
}
