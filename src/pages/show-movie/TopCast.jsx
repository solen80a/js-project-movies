import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "../../components/themes/Media";

const ActorsWrapper = styled.article`
display: flex;
flex-direction: column;
text-align: center;
background-color:#d5d5d5;

h2 {
  font-size: 36px;
  margin: 60px;
}
`;

const ActorsWrapper2 = styled.article`
  height: 100%;
  max-width: 1000px;     
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  justify-content: center; 
  margin: 0 auto;   
  margin-bottom: 100px;

    @media ${Media.mobile} { 
    grid-template-columns: repeat(2, 1fr);
    }
`;

const ActorCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto; 
  transition: transform ease .3s;
  cursor: pointer;

    &:hover {
    transform: scale(1.05);
  }
  

  img {
    width: 150px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transition: ease .2s;
    border: solid 2px white;
    border-radius: 100px;

      @media ${Media.mobile}{ 
       width: 120px;
   }
  }

`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const TopCast = ({ actors, language }) => {

  return (
    <ActorsWrapper>
      <h2>Top Cast</h2>
      <ActorsWrapper2>
        {actors.slice(0, 8).map((actor) => (
          <StyledLink
            key={actor.id}
            to={`/actor/${actor.id}/${language}`}
          >
            <ActorCard>
              <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={`Image of ${actor.name}`} />
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </ActorCard>
          </StyledLink>
        ))}
      </ActorsWrapper2>
    </ActorsWrapper>
  );
};