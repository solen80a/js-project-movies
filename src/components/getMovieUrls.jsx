export const getMovieUrls = ({ movieID, language } = {}) => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  return {
    englishUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    spanishUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`,
    russianUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru-RU&page=1`,
    movieDetailUrl: `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=${language}`

  };
};