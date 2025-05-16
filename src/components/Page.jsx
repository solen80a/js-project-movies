import { useFetchMovies } from "./useFetchApi";

export const Page = ({ url }) => {


  const { movies: neMovies } = useFetchMovies(url);

  return (
    <>
      <p>Site 1 (English)</p>
      {neMovies.map((neMovies) => (
        <p key={neMovies.id}>{neMovies.title}</p>
      ))}
    </>
  )
}