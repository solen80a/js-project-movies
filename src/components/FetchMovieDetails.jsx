import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import styled from "styled-components";
import { MovieList } from "../pages/MovieList"


// const MovieListWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   `

// export const FetchMovieDetails = () => {

//   const [movie, setMovie] = useState([]);

//   //Something wrong with the .env file?????
//   //const apiKey = import.meta.env.VITE_TMDB_API_KEY
//   const apiKey = "24ae968b7a038aa4c60fa52f4d10f194";
//   //console.log("API Key:", apiKey);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
//         if (!response.ok) {
//           throw new Error(`Status ${response.status}`)
//         }

//         const data = await response.json()
          
//         console.log("One movie sample:", data.results[0]);
//         setMovie(data.results);

//       } catch (error) {
//         //alert("Oh no, something went wrong!\nThere was an error, please try again later \n" + error)    
//         console.error("Error fetching data:", error)
//       }
//     }

//     fetchMovies();
//   }, [apiKey])

  // return <MovieList movie={movie} />;

//   return (
//     <>
//       {/* <h1>The Popular Movies</h1>  */}
//       <MovieListWrapper>
//         {movie.map((movie) => (
//           <Movie
//             key={movie.id}
//             title={movie.title}
//             release_date={movie.release_date}
//             image={movie.backdrop_path}
//           />
//         ))}
//       </MovieListWrapper>

//     </>
//   )
// }