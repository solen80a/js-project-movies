import { useParams } from "react-router"
import styled from "styled-components"
import { Link } from "react-router";

const ShowMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93dvh;
  overflow: auto;
  background-image: url(${props => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white; 
  padding: 2rem;

  img {
  height: 550px;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  transition: ease .2s;
  border: solid 3px white;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }

`;

const MovieTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 50px;
  width: 100%;
  max-width: 1000px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`


export const ShowMovie = ({ movies }) => {
  const params = useParams()


  const movieMatch = movies.find((apa) => apa.id == params.movieID)

  const backgroundUrl = `https://image.tmdb.org/t/p/original${movieMatch.backdrop_path}`;

  return (
    <>
      <ShowMovieWrapper $background={backgroundUrl}>
        <Link to={"/"}>Back to Movies</Link>

        <MovieTextWrapper>
          <div>
            <img src={`https://image.tmdb.org/t/p/original${movieMatch.poster_path}`} alt="" />
          </div>
          <div>
            <h2>{movieMatch.title}</h2>
            <p>{movieMatch.overview}</p>
            <p>{`${movieMatch.vote_average.toFixed(1)} Stars`}</p>
          </div>
        </MovieTextWrapper>
      </ShowMovieWrapper >
    </>
  )
}



