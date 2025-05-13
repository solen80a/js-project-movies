
export const Movie = ({ name, image }) => {
  return (
    <>
      <p>{name}</p>
      <img src={image} alt="" />
    </>
  )
}