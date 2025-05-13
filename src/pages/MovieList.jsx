//import { Link } from "react-router-dom"
import { Movie } from "../components/Movie"
import ships from "../star_wars_ships.json"

export const MovieList = () => {
  return (
    <>
{ships.map((ship) => (
<a href="">
<Movie name={ship.name} image={ship.image_url} /> 
</a>
) )}
    </>
  )
}