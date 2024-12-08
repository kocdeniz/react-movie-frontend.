//page router
// State is something where once it's updated, the component will change and re-render itself to show the new state.
// Use Effect allow you to add side effects to your functions or to your components and define when they should run
// Context will allow state to be globally available to anything that's within the provided context
import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react"  //hook
import  "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";


// Search form for searching movies
function Home() {
    const[searchQuery, setSearchQuery] = useState("");  // Changed from seachQuery


    
    // API ILE PUBLICLY AVAILABLE SOURCE'TAN FILM BILGILERI CEKECEGIZ BU SEKILDE ELLE YAZMAMIZA GEREK KALMAYACAK api adresi @themoviedb.org@ creating folder /src/services/api.js
   //const movies = [  
       // { id: 1, title: "John Wick", release_date: "2020" },
       // { id: 2, title: "Terminator", release_date: "1999" },
       // { id: 3, title: "The Matrix", release_date: "1998" },
        //];

       //USE EFFECT
       const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
       useEffect(() => {
        const loadPopularMovies = async () => {
          try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies...");
          } finally {
            setLoading(false);
          }
        };
    
        loadPopularMovies();
      }, []);





   
    




       //search API feature
       const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return
    
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
      };
    

    return (



        <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>





            <div className="movies-grid">

                {movies.map((movie) =>( 
                (<MovieCard movie={movie} key={movie.id} />
                )
                
                ))}
            </div>
        </div>
   



);


}


export default Home;