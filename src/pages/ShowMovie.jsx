import { useParams } from "react-router"
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Media } from "../components/Media"
import { NotFound } from "./NotFound";
import { Loader } from "../components/Loader";

//#region ---- Styling ----

const ShowMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92dvh;
  overflow: auto;
  background-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0) 50%),
    url(${props => props.$background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white; 
  padding: 2rem;

  img {
  width: 55dvw;
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

  
   /* Tablet */
  @media ${Media.tablet}{   
      img {
           width: 300px;
      } 
  }

  /* desktop */
    @media ${Media.desktop}{  
      
      img {
       width: 400px;
      }  
  }

   /* Widescreen */
    @media ${Media.widescreen}{  

     img {
         width: 400px;
      }
  }
`;

const MovieTextWrapper = styled.div`
  display: block;
  column-gap: 50px;
  width: 100%;
  max-width: 1000px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

     /* Tablet */
  @media ${Media.tablet}{        
  }

  /* desktop */
    @media ${Media.desktop}{  
      display: flex;
      align-items: flex-end;
  }

   /* Widescreen */
    @media ${Media.widescreen}{ 
      display: flex;
      align-items: flex-end;   
  }
`

const BackToMoviesWrapper = styled(Link)` 
  width: 250px;
  text-align: left;  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem ;

`

//#endregion


export const ShowMovie = () => {
  const { movieID } = useParams();
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`)
        if (!response.ok) {
          throw new Error(`Status ${response.status}
      `)
        }
        const data = await response.json()
        setMovieDetails(data)
      } catch (error) {
        console.log("Error fetching data:", error)
      }finally {
        setLoading(false);
      };
    }
    fetchMovieDetails();
  }, [apiKey, movieID])

  if (loading) {
      return (
        <Loader />
      )
    }

  const backgroundUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

  return (
    <section>
      <ShowMovieWrapper $background={backgroundUrl}>
        <BackToMoviesWrapper to={"/"}> ⬅ Back to Movies</BackToMoviesWrapper>

        <MovieTextWrapper>
          <div>
            <img src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt={`A picture of the movie called ${movieDetails.title}`} />
          </div>
          <div>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.overview}</p>
            <p>{`${Number(movieDetails.vote_average).toFixed(1)} ⭐`}</p>
          </div>
        </MovieTextWrapper>
      </ShowMovieWrapper >
    </section>
  )
}



