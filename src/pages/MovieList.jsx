import { Link } from "react-router-dom"
// import { Link } from "react-router"
import { Movie } from "../components/Movie"
//import ships from "../star_wars_ships.json"
//import { FetchMovieDetails } from "../components/FetchMovieDetails"
import styled from "styled-components"
import { Media } from "../components/Media"

const MovieListWrapper = styled.div`
  display: flex;  
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;  
  `

const MovieListLinkWrapper = styled(Link)`
  text-decoration: none;
  display: block;
  width: 95%;

   /* Tablet */
  @media ${Media.tablet}{      
    width: 50%;    
  }

  /* desktop */
    @media ${Media.desktop}{   
    width: 33%;   
  }

   /* Widescreen */
    @media ${Media.widescreen}{   
    width: 25%;   
  }
`

export const MovieList = ({ movies }) => {


  return (
    <>
      <MovieListWrapper>
        {movies.map((movie) => (
          <MovieListLinkWrapper key={movie.id} to={`/movie/${movie.id}`}>           
            <Movie
              title={movie.title}
              release_date={movie.release_date}
              image={movie.backdrop_path}
            />           
          </MovieListLinkWrapper>
        ))}
     </MovieListWrapper>
    </>
  )
}