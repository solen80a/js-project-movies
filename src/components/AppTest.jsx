import { useFetchMovies } from "./FetchApi";

export const AppTest = () => {

  //Make a new Component
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const urlEn = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=-US&page=1`;
  const urlEs = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

  const { movies: moviesEn } = useFetchMovies(urlEn);
  const { movies: moviesEs } = useFetchMovies(urlEs);

  return (
    <>
      <p>Site 1 (English)</p>
      {moviesEn.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}

      <br />
      <hr />

      <p>Site 2 (Spanish)</p>
      {moviesEs.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
};