import { BrowserRouter, Routes, Route } from "react-router";
import { MovieList } from "./pages/MovieList";
import { ShowMovie } from "./pages/ShowMovie";
import { About } from "./pages/About";
import { Nav } from "./pages/Nav";
import { NotFound } from "./pages/NotFound";
import { getMovieUrls } from "./components/getMovieUrls";

export const App = () => {

  const { en: urlEn, es: urlEs, ru: urlRu } = getMovieUrls();

  const englishTag = "en-EN"
  const spanishTag = "es-ES"
  const russianTag = "ru-RU"

  return (
    <>


      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MovieList url={urlEn} language={englishTag} />} />
          <Route path="/es" element={<MovieList url={urlEs} language={spanishTag} />} />
          <Route path="/ru" element={<MovieList url={urlRu} language={russianTag} />} />
          <Route path="/movie/:movieID/:language" element={<ShowMovie />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter >
    </>
  )
}
