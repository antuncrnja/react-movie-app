import { useState, useEffect } from 'react'
import { MovieCard } from '../components/MovieCard'
import { useFetch } from '../components/useFetch'
import { HomeLogo } from '../components/HomeLogo'
import { useLocation } from "react-router-dom";
import { Pagination } from '../components/Pagination'
import { TransitionPage } from '../components/TransitionPage';

export const Popular = () => {
  window.scrollTo(0,0)

  const query = useLocation().search;
  const queryValue = new URLSearchParams(query).get('page')

  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')

  useEffect(() => queryValue === null ?setPage(1) : setPage(+queryValue),[queryValue])
  
  const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`, page)

  if(loading) return <div className='container'><h1>Loading...</h1></div>
  if(error) return <div className='container'><h1>Something Went Wrong!</h1></div>
  
  return (
    <TransitionPage>
    <main className='home'>
      <img className="backdrop" src="./bg.jpg" alt="" />
      <div className="overlay"></div>
     
	<div className="container d-m-0">
    <HomeLogo />
  </div>

<div className="container" style={{marginTop: 0}}>
  
<div className="movie-grid">

  <div className='flex flex-center'>
    <h1>Popular Right Now</h1>

      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
      </select>

    </div>

		<div className="grid-5">
      
      {data.sort((a,b)=>{
        if(filter === 'rating') return a.vote_average - b.vote_average
        if(filter === 'popularity' || filter === '') return  a.popularity - b.popularity
      }).reverse().map( movie => (
        <div className="movie" key={movie.id}>
            <MovieCard key={movie.id} movie={movie} button={true}/>
        </div>
      ))}

	  </div>

    <Pagination page={page}/>

    </div>
    </div>
  </main>
  </TransitionPage>
  )
}
