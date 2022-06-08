import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import WatchlistContext  from '../context/WatchlistContext'

export const MovieCard = ({movie, button,removeButton, hideTitle}) => {
  const {movies, AddToWatchlist, RemoveFromWatchlist} = useContext(WatchlistContext)

  return (
	<div>
    <Link to={`../Movie/${movie.id}`}>
        {movie?.poster_path ? 
          <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} /> 
          :  <img src='../placeholder.jpg' alt={movie.title} />}

     {!hideTitle && <h4>{movie.title}</h4> }
    </Link>

    {button && <button onClick={() => AddToWatchlist(movie)}>
      {movies.some(a => a.movie.id === movie.id) ? '✓ Added' : '+ Add to Watchlist'}
    </button>} 

    {removeButton && <button onClick={() => RemoveFromWatchlist(movie.id)}>Remove</button>}
	</div>
  )
}
