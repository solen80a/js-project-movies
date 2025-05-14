import { Link } from "react-router-dom"
// import { Link } from "react-router"
import { Movie } from "../components/Movie"
//import ships from "../star_wars_ships.json"
//import { FetchMovieDetails } from "../components/FetchMovieDetails"
import styled from "styled-components"

const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  `

export const MovieList = ({ movies }) => {


  return (
    <>
      <MovieListWrapper>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <Movie
              title={movie.title}
              release_date={movie.release_date}
              image={movie.backdrop_path}
            />
          </Link>
        ))}
      </MovieListWrapper>
    </>
  )
}