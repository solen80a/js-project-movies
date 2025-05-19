import styled from "styled-components"
import { Media } from "./Media"

const ActorDetails2 = styled.div`
display: flex;
flex-direction: row;
text-align: center;
margin-top: 50px;
column-gap: 30px;
align-items: center;
background-color: #efefef;
height: 300px;
overflow: scroll;


div {
  text-align: center;
  width: 50%;
}

img {
      height: 230px;
      border-radius: 10px;  
}

  @media ${Media.tablet}{ 
    
    align-content: center;
    justify-content: center;

    img {
      height: 250px;

      } 

    div {
      text-align: left;
      width: 50%;
}
  }

  @media ${Media.desktop}, ${Media.widescreen}{ 
    
    flex-direction: row;
    align-items: flex-end;
    margin-left: 10%; 
    height: 33vh;

    img {
      height: 300px;

      } 

    div {
      text-align: left;
      width: 40%;
}
  }
`

export const ActorDetails = ({ actor }) => {
  return (
    <>
      <ActorDetails2>
        <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.name} />
        <div>
          <h2>{actor.name}</h2>
          <p>{`Birth day: ${actor.birthday}`}</p>
          <p>{`Place of bith: ${actor.place_of_birth}`}</p>
          <p>
            {actor.biography?.length > 450
              ? `${actor.biography.slice(0, 450)}…`
              : actor.biography}
          </p>
        </div>
      </ActorDetails2>
    </>
  )
}