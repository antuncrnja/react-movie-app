import React, { useContext} from 'react'
import WatchlistContext  from '../context/WatchlistContext'
import { Trailer } from '../components/Trailer'

export const MovieDetails = ({movie}) => {

	const {movies, AddToWatchlist} = useContext(WatchlistContext)
  return (
	<div className="movie-details">
			<div className="grid-2">
				
			<img className='backdrop' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
			<div className="overlay"></div>
			
			{movie.poster_path ? <img className='sticky' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> : <h1>Loading...</h1>}

			<div>
				<h1>{movie.title}</h1>
				
				<div className="genres">
					{movie?.genres && movie.genres.map(genre=>(
						<span className='genre'>{genre.name}</span>
					))}
				</div>
				<span className='rating'> Rating: {movie.vote_average}</span><br />
				<p>{movie.overview}</p>
				
				<button onClick={() => AddToWatchlist(movie)}> {movies.some(a => a.movie.id === movie.id) ? 'Added' : '+ Add to Watchlist'}</button>
				<Trailer id={movie.id}/>

				

			</div>
			</div>
		</div>
  )
}
