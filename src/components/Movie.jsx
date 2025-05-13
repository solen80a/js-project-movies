import styled from "styled-components"

const MovieWraper = styled.div`
  position: relative;
  border: solid black 2px;
  width: 25%;
  aspect-ratio: 2 / 3;
  text-align: left;

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: ease .2s;
} 

img:hover {
filter: brightness(30%);
}

 &:hover div {
    display: block;
    transition: ease .2s;
  }
`

const TextContainer = styled.div`
position: absolute;
top: 90%;
left: 30%;
transform: translate(-50%, -50%);
text-align: left;
color: white;
display: none;

`

export const Movie = ({ title, release_date, image }) => {

  return (
    <>
      <MovieWraper>
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title} />
        <TextContainer>
          <h2>{title}</h2>
          <p>Release: {release_date}</p>
          {/* <p>Movies should be shown above</p> */}

          {/* <div>
        <p>{name}</p>
        <img src={image} alt="" />
      </div> */}
        </TextContainer>
      </MovieWraper>

    </>
  )
}