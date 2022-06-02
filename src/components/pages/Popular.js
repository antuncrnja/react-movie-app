import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard'
import { ScrollToTop } from '../ScrollToTop'
import { useFetch } from '../useFetch'
import { HomeLogo } from '../HomeLogo'

export const Popular = () => {
  const [page, setPage] = useState(1)

  const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`)

  if(loading) return <div className='container'><h1>Loading...</h1></div>
  if(error) return <div className='container'><h1>Something Went Wrong!</h1></div>

  return (
    <main className='home'>
      <img class="backdrop" src="./bg.jpg" alt="" />
      <div className="overlay"></div>
     
	<div className="container">

    <HomeLogo />
  
    <ScrollToTop dep={page} />

<div className="movie-grid">
    <h1>Popular Movies Right Now</h1>
		<div className="grid-4">

      {data.map( movie => (
            <div className="movie" key={movie.id}>
                <MovieCard key={movie.id} movie={movie} button={true}/>
            </div>
      ))}

	  </div>

    <div className="container">

      <Link to={`?page=${page}`}>
       <button onClick={() => setPage(page-1)} disabled={page <= 1}>Prev</button>
      </Link>

      <Link to={`?page=${page}`}>
        <button onClick={() => setPage(page+1)}>Next</button>
      </Link>
      
    </div>

    </div>
  </div>
  </main>
  )
}
