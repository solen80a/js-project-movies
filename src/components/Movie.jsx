import styled from "styled-components"

export const Movie = ({ title }) => {

  const MovieWraper = styled.div`
border: solid black 2px;
text-align: center;
height: 500px;
width: 350px;
`

  return (
    <>
      <MovieWraper>
        <h2>{title}</h2>
        {/* <p>Movies should be shown above</p> */}

        {/* <div>
        <p>{name}</p>
        <img src={image} alt="" />
      </div> */}
      </MovieWraper>

    </>
  )
}