export const getMovieUrls = () => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  return {
    en: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    es: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`,
    ru: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ru-RU&page=1`,
  };
};