import { BrowserRouter, Routes, Route } from "react-router";
import { MovieList } from "./pages/MovieList";
import { ShowMovie } from "./pages/ShowMovie";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
//import { FetchMovieDetails } from "./components/FetchMovieDetails";
import { Movie } from "./components/Movie";
import { useEffect, useState } from "react";

export const App = () => {

const [movie, setMovie] = useState([]);

  //Something wrong with the .env file?????
  const apiKey = import.meta.env.VITE_TMDB_API_KEY  
  //console.log("API Key:", apiKey);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        if (!response.ok) {
          throw new Error(`Status ${response.status}`)
        }

        const data = await response.json()
          
        console.log("One movie sample:", data.results[0]);
        setMovie(data.results);

      } catch (error) {
        //alert("Oh no, something went wrong!\nThere was an error, please try again later \n" + error)    
        console.error("Error fetching data:", error)
      }
    }

    fetchMovies();
  }, [apiKey])

  return (
    <>
      <Nav />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList movie={movie} />} />
          <Route path="/movie" element={<ShowMovie movie={movie} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

