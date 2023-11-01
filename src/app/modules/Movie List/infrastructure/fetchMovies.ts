export default async function fetchMovies(page: number, limit: number) {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?page=${page}&limit=${limit}`,
  );
  const data = response.json();
  return data;
}
