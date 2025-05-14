import { useParams } from "react-router"
// import { Movie } from "../components/Movie"

export const ShowMovie = ({ movies }) => {
  const params = useParams()


  const movieMatch = movies.find((apa) => apa.id == params.movieID)

  return (
    <>
      <p>{movieMatch.title}</p>
      <p>{movieMatch.release_date}</p>
      <p>{movieMatch.backdrop_path}</p>
    </>
  )
}



