import { BrowserRouter, Routes, Route } from "react-router";
import { MovieList } from "./pages/MovieList";
import { ShowMovie } from "./pages/ShowMovie";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { NotFound } from "./pages/NotFound";
import { getMovieUrls } from "./components/getMovieUrls";

export const App = () => {

  const { en: urlEn, es: urlEs, ru: urlRu } = getMovieUrls();

  return (
    <>


      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MovieList url={urlEn} />} />
          <Route path="/es" element={<MovieList url={urlEs} />} />
          <Route path="/ru" element={<MovieList url={urlRu} />} />
          <Route path="/movie/:movieID" element={<ShowMovie />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter >
    </>
  )
}
