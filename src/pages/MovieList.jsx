import { Link } from "react-router-dom"
import { Movie } from "../components/Movie"
import styled from "styled-components"
import { Media } from "../components/Media"

//#region ---- Styling ----
const MovieListWrapper = styled.section`
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
//#endregion

export const MovieList = ({ movies }) => {


  return (
    <section>
      <MovieListWrapper>
        {movies.map((movie) => (
          <MovieListLinkWrapper key={movie.id} to={`/movie/${movie.id}`}>           
            <Movie
              title={movie.title}
              release_date={movie.release_date}
              image={movie.poster_path}
            />           
          </MovieListLinkWrapper>
        ))}
     </MovieListWrapper>
    </section>
  )
}