import { BrowserRouter, Routes, Route } from "react-router";
import { MovieList } from "./pages/movie-list/MovieList";
import { ShowMovie } from "./pages/show-movie/ShowMovie";
import { About } from "./pages/about/About";
import { Nav } from "./components/nav/Nav";
import { NotFound } from "./pages/page-not-found/NotFound";
import { getMovieUrls, LanguageTags } from "./components/fetching/getMovieUrls";
import { ShowActor } from "./pages/show-actor/ShowActor";


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
