import React, {useContext} from 'react'
import { MovieCard } from '../components/MovieCard'
import WatchlistContext from '../context/WatchlistContext'
import { ScrollToTop } from '../components/ScrollToTop'
import {Link} from 'react-router-dom'
import { TransitionPage } from '../components/TransitionPage'

export const Watchlist = () => {
  const {movies} = useContext(WatchlistContext)

  return (
    <TransitionPage>
    <main>
      <ScrollToTop />
      <img class="backdrop" src="./bg.jpg" alt="" />
          <div className="overlay"></div>
        <div className="container">
          <h1>Watchlist</h1>

    {movies.length <= 0 && 
      <div>
        <p>There are no movies in Watchlist</p>
        <Link to='../'><button>Browse Movies</button></Link>
      </div>}

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
  </TransitionPage>
  )
}
