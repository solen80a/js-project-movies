import { useParams } from "react-router"
import { useFetchMovies } from "../../components/fetching/useFetchApi";
import { getMovieUrls } from "../../components/fetching/getMovieUrls";
import { Loader } from "../../components/fetching/Loader";
import { MovieDetails } from "./MovieDetails";
import { TopCast } from "./TopCast";

export const ShowMovie = () => {
  const { movieID, language } = useParams();
  const { movieDetailUrl, movieCreditsUrl } = getMovieUrls({ movieID, language });
  const { movies, loading } = useFetchMovies(movieDetailUrl);
  const { movies: actors } = useFetchMovies(movieCreditsUrl);

  console.log("loading")

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
        <TopCast actors={actors} language={language} />
      </section>
    </>

  )
}



