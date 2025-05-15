// export const FetchApi = () => {

//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const apiKey = import.meta.env.VITE_TMDB_API_KEY


//   useEffect(() => {
//     setLoading(true);
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
//         if (!response.ok) {
//           throw new Error(`Status ${response.status}`)
//         }

//         const data = await response.json()

//         //console.log("One movie sample:", data.results[0]);
//         setMovies(data.results);

//       } catch (error) {
//         //alert("Oh no, something went wrong!\nThere was an error, please try again later \n" + error)    
//         console.error("Error fetching data:", error)
//       } finally {
//         setLoading(false);
//       };
//     }

//     fetchMovies();

//   }, [apiKey])

//   if (loading) {
//     return (
//       <Loader />
//     )
//   }