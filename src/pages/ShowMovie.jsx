import { useParams } from "react-router"
// import { Movie } from "../components/Movie"

export const ShowMovie = ({ movies }) => {
  const params = useParams()

  // {
  //   movies.map((movie) => (
  //     console.log(movie.title)
  //   ))
  // }

  const movieMatch = movies.find((apa) => apa.id == params.movieID)
  //console.log(movieID.title)
  // console.log(movieMatch)
  //console.log(movieMatch.title)

  // {
  //   movieMatch.map((movie) => (
  // console.log(movies)
  //   ))
  // }

  return (
    <>
      {/* <Movie title={movieMatch.title} image={movieMatch.backdrop_path} />
      <p>{movieMatch.title}</p> */}
    </>
  )
}



