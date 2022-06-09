import React, {useState} from 'react'
import { MovieCard } from '../components/MovieCard'
import { TransitionPage } from '../components/TransitionPage'

export const Search = () => {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  function handleMovies(e){
      e.preventDefault()
    
          setQuery(e.target.value)

          setTimeout(()=>{
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(res => res.json())
            .then(data => {
              !data.errors ? setMovies(data.results) : setMovies([])
            })
          }, 1000)
  }

  return (
    <TransitionPage>
    <main className='search'>
      <img className="backdrop" src="./bg.jpg" alt="" />
      <div className="overlay"></div>

    	<div className="container">
        <h1>Search Movies</h1>
        <input type="search" placeholder="Search Movies" value={query} onChange={ handleMovies}/>

          <div className="search-items">
            {movies.length > 0 ? (
              movies.map( movie => (
                  <MovieCard key={movie.id} movie={movie}/>
              ))
            ) : <p>{(movies.length === 0 && query.length > 0) && 'No Results'}</p>}
          </div>
    
      </div>
  </main>
  </TransitionPage>
  )
}
