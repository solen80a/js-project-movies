import styled from "styled-components"
import { Media } from "../components/Media"

const MovieWraper = styled.div`
  position: relative;
  border: solid black 2px;  
  width: 100%;
  aspect-ratio: 2 / 3;
  text-align: left;
  
  

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: ease .2s;
  
} 

/* Desktop */
 @media ${Media.desktop}{      
    
    width: 100%;

     &:hover div {
    display: block;
    transition: ease .2s;
    
  }

  img:hover {
  filter: brightness(30%);

  }
}  

/* Widescreen */
 @media ${Media.widescreen}{      
    
    width: 100%;

     &:hover div {
    display: block;
    transition: ease .2s;
    
  }

  img:hover {
  filter: brightness(30%);

  }
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

  h2{
    font-size: 16px;
  }

/* Tablet */
 @media ${Media.tablet}{      
    

}

/* Desktop */
 @media ${Media.desktop}{      
    display: none;
    width: 200px;
    top: 85%;
    left: 50%;

    h2{
      font-size: 24px;  
    } 
}

/* Widescreen */
 @media ${Media.widescreen}{      
    display: none;
    width: 300px;
    top: 85%;
    left: 50%;

    h2{
      font-size: 24px;  
    } 
}
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