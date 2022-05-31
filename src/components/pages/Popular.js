import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard'

export const Popular = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  }, [page])
  
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`)
	.then(res => res.json())
    .then(data => {
      !data.errors ? setMovies(data.results) : setMovies([])

    })

  return (
	<div className="container">
    <h1>Popular Movies</h1>
		<div className="grid-4">

      {movies.length > 0 && (
        movies.map( movie => (
          <div className="movie" key={movie.id}>
              <MovieCard key={movie.id} movie={movie} button={true}/>
          </div>
      )))}

	  </div>
    <div className="container">
     <Link to={`?page=${page}`}><button onClick={() => setPage(page-1)} disabled={page <= 1}>Prev</button> </Link>
     <Link to={`?page=${page}`}><button onClick={() => setPage(page+1)}>Next</button></Link>
    </div>
  </div>
  )
}