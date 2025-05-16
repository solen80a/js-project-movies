import { useState, useEffect } from "react";

export const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          url);
        const data = await response.json();
        if (data.results) {
          setMovies(data.results);
        } else {
          setMovies(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);


  return { movies, loading };
};