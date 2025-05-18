import styled from "styled-components"
import { Link } from "react-router";

const MoviesActorWasInWrapper = styled.section`
background-color: #efefef;
padding-top: 15px;
`

const Actor = styled.article`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  column-gap: 25px;
  margin-bottom: 100px;
  padding: 20px;
  scroll-padding-left: 30px;

  img {
    height: 230px;
  }

    /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
`;

const InMoviesCardLink = styled(Link)`
    display: flex;
    column-gap: 20px;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: transform ease .3s;
    cursor: pointer;
    scroll-snap-align: start;
    flex-shrink: 0;
    padding: 10px;
    border: solid 2px white;
    border-radius: 10px;
    background-color: #ffffff;
    width: 500px;

  &:hover {
    transform: scale(1.05);
  }
`

export const MoviesActorWasIn = ({ moviesIn, language }) => {
  return (
    <>
      <MoviesActorWasInWrapper>
        <h2 style={{ textAlign: "center" }}>Movies Credits</h2>
        <Actor>
          {moviesIn.slice(0, 10).map(movieIn => (
            <InMoviesCardLink key={movieIn.Id} to={`/movie/${movieIn.id}/${language}`}>
              <img src={`https://image.tmdb.org/t/p/original${movieIn.poster_path}`} alt="" />
              <div>
                <h3>{movieIn.title}</h3>
                <p>{`Character: ${movieIn.character}`}</p>
                <p>{`Relese date: ${movieIn.release_date}`}</p>
                <p>{`Rating: ${movieIn.vote_count}`}</p>
              </div>

            </InMoviesCardLink>
          ))}
        </Actor >
      </MoviesActorWasInWrapper>
    </>
  )
}



