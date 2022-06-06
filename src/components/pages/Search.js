import React, {useState} from 'react'
import { MovieCard } from '../MovieCard'
import { motion } from 'framer-motion'

export const Search = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  function handleMovies(e){
    e.preventDefault()

    setQuery(e.target.value)

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(res => res.json())
    .then(data => {
      !data.errors ? setMovies(data.results) : setMovies([])
    })
  }

  return (
    <main className='search'>
     {/* <motion.img layoutId="test" animate={{scale: 1}} src="../bg.jpg" alt="" style={{width: '100%', height: '500px', margin: '0 auto', objectFit: 'cover'}} transition={{
          default: {duration: .2}, 
          ease: 'easeInOut'
        }} />
        */}
      <img className="backdrop" src="./bg.jpg" alt="" />
    <div className="overlay"></div>
	<div className="container">
    <h1>Search Movies</h1>
    <input type="search" placeholder="Search Movies" value={query} onChange={handleMovies}/>

    <div className="container">
      <div className="search-items">
        {movies.length > 0 && (
          movies.map( movie => (
              <MovieCard key={movie.id} movie={movie}/>
          ))
        )}
      </div>
    </div>
  </div>
  </main>
  )
}
