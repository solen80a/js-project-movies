import styled from "styled-components"

const ActorDetails2 = styled.div`
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
      height: 300px;
}
`

export const ActorDetails = ({ actor }) => {
  return (
    <>
      <ActorDetails2>
        <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={actor.name} />
        <div>
          <p>{actor.name}</p>
          <p>{`Birth day: ${actor.birthday}`}</p>
          <p>{`Place of bith: ${actor.place_of_birth}`}</p>
          <p>
            {actor.biography?.length > 400
              ? `${actor.biography.slice(0, 400)}…`
              : actor.biography}
          </p>
        </div>
      </ActorDetails2>
    </>
  )
}