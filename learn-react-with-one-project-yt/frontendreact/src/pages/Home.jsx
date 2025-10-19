import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Home() { 
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {
      id: 1, 
      title: "John Wick",
      release_date: "2024"
    }, {
      id: 2, 
      title: "Amazing Spiderman",
      release_date: "2024"
    }, {
      id: 3, 
      title: "Zindagi Na Milegi Dobara",
      release_date: "2024"
    }, {
      id: 4, 
      title: "Matrix",
      release_date: "1993"
    }
  ] 

  function handleSearch(e) {
    e.preventDefault()
    alert(searchQuery); 
    setSearchQuery("")

  }

  return (
    <div className="home"> 
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="search-btn" type="submit">Search</button>

      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
    </div>
  )
} 

export default Home