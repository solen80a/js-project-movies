import styled from "styled-components"
import { Media } from "../../components/themes/Media"

//#region ---- Styling ----
const MovieWraper = styled.div`
  position: relative;
  border: solid white 2px;  
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  text-align: left;

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: ease .2s;  
} 

&:hover div {
  display: block;
  transition: ease .2s;    
}

img:hover {
  filter: brightness(25%);
}
`

const TextContainer = styled.div`
position: absolute;
top: 90%;
left: 35%;
transform: translate(-50%, -50%);
text-align: left;
color: white;
width: 150px;
display: none;

  h2{
    font-size: 16px;
  }

/* Desktop */
 @media ${Media.desktop}{ 
    width: 200px;
    top: 85%;
    left: 50%;

    h2{
      font-size: 24px;  
    } 
}

/* Widescreen */
 @media ${Media.widescreen}{ 
    width: 300px;
    top: 85%;
    left: 50%;

    h2{
      font-size: 24px;  
    } 
}
`
//#endregion

export const Movie = ({ title, release_date, image }) => {

  return (
    <>
      <MovieWraper>
        <img src={`https://image.tmdb.org/t/p/original${image}`} alt={`A picture of the movie called ${title}`} />
        <TextContainer>
          <h2>{title}</h2>
          <p>Release: {release_date}</p>
        </TextContainer>
      </MovieWraper>

    </>
  )
}