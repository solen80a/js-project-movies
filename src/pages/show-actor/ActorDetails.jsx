import styled from "styled-components"
import { Media } from "../../components/themes/Media"

const ActorDetails2 = styled.div`
display: flex;
flex-direction: row;
text-align: center;
column-gap: 10px;
align-items: center;
justify-content: center;
height: 240px;


div {
  text-align: center;
  width: 50%;
  height: 100%;
  overflow: scroll;

   /* Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent; /* Optional: hide scrollbar track */
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
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
    height: 35vh;
    column-gap: 35px;
    justify-content: flex-start;

    img {
      height: 100%;

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