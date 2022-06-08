import React, { useContext} from 'react'
import WatchlistContext  from '../context/WatchlistContext'
import { Trailer } from '../components/Trailer'

export const MovieDetails = ({movie}) => {

  const {movies, AddToWatchlist} = useContext(WatchlistContext)

  return (
	<div className="movie-details">
			<div className="grid-2">
				
			{movie?.backdrop_path ? <img className='backdrop' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} /> : <img className='backdrop' src='../bg.jpg' alt={movie.title} />}
			<div className="overlay"></div>
			
			{movie?.poster_path ? <img className='sticky' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> : <img className='sticky' src='../bg.jpg' alt={movie.title} />}

			<div>
				<h1>{movie.title}</h1>
				
				<div className="genres">
					{movie?.genres && movie.genres.map(genre=>(
						<span className='genre' key={genre.id}>{genre.name}</span>
					))}
				</div>

				<span className='rating'> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg> {movie.vote_average}<small> / 10</small></span><br />
				
				<p>{movie.overview}</p>
				
				<button onClick={() => AddToWatchlist(movie)}> {movies.some(a => a.movie.id === movie.id) ? 'Added' : '+ Add to Watchlist'}</button>
				<Trailer id={movie.id}/>
			</div>
			</div>
		</div>
  )
}
