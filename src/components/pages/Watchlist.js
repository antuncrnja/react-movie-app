import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../../components/MovieCard'
import WatchlistContext from '../../context/WatchlistContext'

export const Watchlist = () => {
  const {movies, RemoveFromWatchlist} = useContext(WatchlistContext)


  return (
	<div className="container">
    <h1>Watchlist</h1>

    {movies.length <= 0 && <p>There are no movies in Watchlist</p>}

    <div className="grid-4">
      {movies.length > 0 && (
            movies.map( item => (
              <div className="movie" key={item.movie.id}>
               
                  <MovieCard key={item.movie.id} movie={item.movie}/>
                <button onClick={() => RemoveFromWatchlist(item.movie.id)}>Remove</button>
              </div>
          )))}
      </div>
  </div>
  )
}
