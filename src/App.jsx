import { BrowserRouter, Routes, Route } from "react-router";
import { MovieList } from "./pages/MovieList";
import { ShowMovie } from "./pages/ShowMovie";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { FetchMovieDetails } from "./components/FetchMovieDetails";
import { Movie } from "./components/Movie";


export const App = () => {
  return (
    <>
      <Nav />
      <FetchMovieDetails />

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MovieList />} /> */}
          <Route path="/movie" element={<ShowMovie />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

