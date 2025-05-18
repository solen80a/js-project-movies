import { useFetchMovies } from "./useFetchApi";
import { useParams } from "react-router";
import { getMovieUrls } from "./getMovieUrls";
import styled from "styled-components";

const InWhatMovies = styled.div`
text-align: center;
margin: 50px;
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

export const ShowActor = () => {
  const { actorID, language } = useParams();
  const { actorDetails } = getMovieUrls({ actorID, language });
  const { movies: moviesIn } = useFetchMovies(actorDetails);


  return (
    <>
      <InWhatMovies>
        <h2>Movies Credits</h2>
      </InWhatMovies>
      <Actor>
        {moviesIn.slice(0, 8).map(movieIn => (
          <div key={movieIn.Id}>
            <img src={`https://image.tmdb.org/t/p/original${movieIn.poster_path}`} alt="" />
            <h3>{movieIn.title}</h3>
            <p>{`Character: ${movieIn.character}`}</p>
          </div>
        ))}
      </Actor>
    </>
  );
};