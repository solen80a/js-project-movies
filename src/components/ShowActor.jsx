import { useFetchMovies } from "./useFetchApi";
import { useParams } from "react-router";
import { getMovieUrls } from "./getMovieUrls";
import styled from "styled-components";
import { Link } from "react-router";

const ActorDetails = styled.div`
display: flex;
text-align: center;
margin: 50px;
column-gap: 30px;
align-items: flex-end;

div {
  text-align: left;
  width: 50%;
}

img {
      height: 400px;
}
`

const Actor = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 100px;
  margin-bottom: 100px;


  img {
    height: 300px;
  }
`;

const InMoviesCardLink = styled(Link)`
transition: transform ease .3s;
cursor: pointer;

&:hover {
  transform: scale(1.05);
}
`

const BackToMoviesWrapper = styled(Link)` 
  width: 250px;
  text-align: left;  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem ;
`

export const ShowActor = () => {
  const { actorID, language } = useParams();
  const { actorDetails, actorPersobalDetailUrl } = getMovieUrls({ actorID, language });
  const { movies: moviesIn } = useFetchMovies(actorDetails);
  const { movies: actor } = useFetchMovies(actorPersobalDetailUrl);

  return (
    <>
      <BackToMoviesWrapper to={language === "en-EN" ? "/" : `/${language}`}> ⬅ Back to Movies</BackToMoviesWrapper>


      <ActorDetails>
        <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.name} />
        <div>
          <p>{actor.name}</p>
          <p>{actor.birthday}</p>
          <p>{actor.place_of_birth}</p>
          <p>
            {actor.biography?.length > 400
              ? `${actor.biography.slice(0, 400)}…`
              : actor.biography}
          </p>
        </div>
      </ActorDetails>
      <h2>Movies Credits</h2>
      <Actor>
        {moviesIn.slice(0, 10).map(movieIn => (
          <InMoviesCardLink key={movieIn.Id} to={`/movie/${movieIn.id}/${language}`}>

            <img src={`https://image.tmdb.org/t/p/original${movieIn.poster_path}`} alt="" />
            <h3>{movieIn.title}</h3>
            <p>{`Character: ${movieIn.character}`}</p>

          </InMoviesCardLink>
        ))}
      </Actor >
    </>
  );
};