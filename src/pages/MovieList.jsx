//import { Link } from "react-router-dom"
import { Movie } from "../components/Movie"
//import ships from "../star_wars_ships.json"
//import { FetchMovieDetails } from "../components/FetchMovieDetails"
import styled from "styled-components"

const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `

export const MovieList = ( { movie }) => {


  return (
    <>
    <MovieListWrapper>
        {movie.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            image={movie.backdrop_path}
          />
        ))}
      </MovieListWrapper>
    </>
  )
}