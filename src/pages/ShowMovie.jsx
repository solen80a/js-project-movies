import { useParams } from "react-router"
import { useFetchMovies } from "../components/useFetchApi";
import { getMovieUrls } from "../components/getMovieUrls";
import { Loader } from "../components/Loader";
import { Outlet } from "react-router";
import { MovieDetails } from "../components/MovieDetails";

export const ShowMovie = () => {
  const { movieID, language } = useParams();
  const { movieDetailUrl, movieCreditsUrl } = getMovieUrls({ movieID, language });
  const { movies, loading } = useFetchMovies(movieDetailUrl);
  const { movies: actors } = useFetchMovies(movieCreditsUrl);

  // const backgroundUrl = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section>
        <MovieDetails movies={movies} language={language}></MovieDetails>
      </section>
      <section>
        <Outlet context={{ actors }} />
      </section>
    </>

  )
}



