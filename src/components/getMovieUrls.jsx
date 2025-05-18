export const getMovieUrls = ({ movieID, language, actorID } = {}) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  return {
    movieDetailUrl: `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=${language}`,
    movieCreditsUrl: `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}&language=${language}`,
    // actor: `https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${apiKey}&language=${language}`,
    actorDetails: `https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=${apiKey}&language=${language}`,
    englishUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    spanishUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`,
    russianUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru-RU&page=1`,
  };
};

export const LanguageTags = () => {
  const englishTag = "en-EN";
  const spanishTag = "es-ES";
  const russianTag = "ru-RU";

  return { englishTag, spanishTag, russianTag };
};