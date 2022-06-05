import React, {useContext} from 'react'
import { MovieCard } from '../../components/MovieCard'
import WatchlistContext from '../../context/WatchlistContext'
import { ScrollToTop } from '../ScrollToTop'

export const Watchlist = () => {
  const {movies} = useContext(WatchlistContext)

  return (
    <main>
      <ScrollToTop />
      <img class="backdrop" src="./bg.jpg" alt="" />
          <div className="overlay"></div>
        <div className="container">
          <h1>Watchlist</h1>

    {movies.length <= 0 && <p>There are no movies in Watchlist</p>}

    <div className="grid-5">
      {movies.length > 0 && (
            movies.map( item => (
              <div className="movie" key={item.movie.id}>
                  <MovieCard key={item.movie.id} movie={item.movie} removeButton={true}/>
              </div>
          )))}
      </div>
  </div>
  </main>
  )
}
