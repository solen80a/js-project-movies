import { BrowserRouter, Routes, Route } from "react-router";
import { MovieList } from "./pages/MovieList";
import { ShowMovie } from "./pages/ShowMovie";
import { About } from "./pages/About";
import { Nav } from "./components/Nav";
import { NotFound } from "./pages/NotFound";
import { getMovieUrls, LanguageTags } from "./components/getMovieUrls";
import { TopCast } from "./components/TopCast";
import { ShowActor } from "./components/ShowActor";


export const App = () => {

  const { englishUrl: urlEn, spanishUrl: urlEs, russianUrl: urlRu } = getMovieUrls();
  const { englishTag, spanishTag, russianTag } = LanguageTags()

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MovieList url={urlEn} language={englishTag} />} />
          <Route path="/es-ES" element={<MovieList url={urlEs} language={spanishTag} />} />
          <Route path="/ru-RU" element={<MovieList url={urlRu} language={russianTag} />} />
          <Route path="/movie/:movieID/:language" element={<ShowMovie />} />
          <Route path="/actor/:actorID/:language" element={<ShowActor />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}
