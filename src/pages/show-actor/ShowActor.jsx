import { useFetchMovies } from "../../components/fetching/useFetchApi";
import { useParams } from "react-router";
import { getMovieUrls } from "../../components/fetching/getMovieUrls";
import styled from "styled-components";
import { Link } from "react-router";
import { ActorDetails } from "./ActorDetails";
import { MoviesActorWasIn } from "./MoviesActorWasIn";

const BackgroundWrapper = styled.div`
background-color: #efefef;
`

const ActorWrapper = styled.div`
height: 96dvh;
margin: 0 auto;
`

const BackToMoviesWrapper = styled(Link)` 
  display: inline-block;
  color: inherit;
  width: 300px;
  text-align: left;  
  margin-top: 40px ;
  margin-left: 40px;
  text-decoration: none;
  cursor: pointer;  
  font-size: 20px;
`

export const ShowActor = () => {
  const { actorID, language } = useParams();
  const { actorDetails, actorPersobalDetailUrl } = getMovieUrls({ actorID, language });
  const { movies: moviesIn } = useFetchMovies(actorDetails);
  const { movies: actor } = useFetchMovies(actorPersobalDetailUrl);

  return (
    <BackgroundWrapper>

      <BackToMoviesWrapper to={language === "en-EN" ? "/" : `/${language}`}> ⬅ Back to Movies</BackToMoviesWrapper>
      <ActorWrapper>
        <ActorDetails actor={actor} />
        <MoviesActorWasIn moviesIn={moviesIn} language={language} />
      </ActorWrapper>

    </BackgroundWrapper>
  );
};