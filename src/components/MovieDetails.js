import React, { useContext} from 'react'
import WatchlistContext  from '../context/WatchlistContext'

export const MovieDetails = ({movie}) => {

	const {movies, AddToWatchlist} = useContext(WatchlistContext)
  return (
	<div className="movie-details">
			<div className="grid-2">
			
			{movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> : <h1>Loading...</h1>}

			<div>
				<h1>{movie.title} <span> {movie.vote_average}</span></h1>
				<p>{movie.overview}</p>
				<button onClick={() => AddToWatchlist(movie)}> {movies.some(a => a.movie.id === movie.id) ? 'Added' : '+ Add to Watchlist'}</button>
			</div>
			</div>
		</div>
  )
}
