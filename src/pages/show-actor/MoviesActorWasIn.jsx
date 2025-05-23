import styled from "styled-components"
import { Link } from "react-router";
import { Media } from "../../components/themes/Media";

const MoviesActorWasInWrapper = styled.section`
background-color: #efefef;

  h2 {
    margin-bottom: 0;
  }
`

const Actor = styled.article`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  flex-direction: row;
  align-items: flex-start;
  column-gap: 10px;
  padding: 20px;

  img {
    height: 150px;
    border-radius: 10px;
    width: 150px;
    object-fit: cover;
    background-color: black;
  }


    /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  

  @media ${Media.desktop}, ${Media.widescreen}{

    height: 40vh;
    align-items: center;
    column-gap: 25px;

     img {
        height: 230px;
  }
  }
`;

const InMoviesCardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: transform ease .3s;
    cursor: pointer;
    scroll-snap-align: start;
    flex-shrink: 0;
    padding: 20px;
    border: solid 2px white;
    border-radius: 10px;
    background-color: #ffffff;
    width: 200px;

  &:hover {
    transform: scale(1.05);
  }

    @media ${Media.desktop}, ${Media.widescreen}{
       width: 500px;
        flex-direction: row;
    }

    @media ${Media.mobile}{
      height: 400px; 
    }

`

export const MoviesActorWasIn = ({ moviesIn, language }) => {
  const sortedMoviesByPopular = [...moviesIn].sort((a, b) => b.popularity - a.popularity);

  return (
    <MoviesActorWasInWrapper>
      <h2 style={{ textAlign: "center" }}>Movies Credits</h2>
      <Actor>
        {sortedMoviesByPopular.slice(0, 20).map(movieIn => (
          <InMoviesCardLink key={movieIn.id} to={`/movie/${movieIn.id}/${language}`}>
            <img
              src={`https://image.tmdb.org/t/p/original${movieIn.poster_path}`}
              alt={movieIn.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/noMovie.png';
              }}
            />
            <div>
              <h3>{movieIn.title}</h3>
              <p>{`Character: ${movieIn.character}`}</p>
              <p>{`Release date: ${movieIn.release_date}`}</p>
              <p>{`Rating: ${movieIn.vote_count}`}</p>
            </div>
          </InMoviesCardLink>
        ))}
      </Actor>
    </MoviesActorWasInWrapper>
  );
};