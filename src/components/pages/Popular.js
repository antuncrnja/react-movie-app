import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard'
import { useFetch } from '../useFetch'
import { HomeLogo } from '../HomeLogo'

import { useLocation } from "react-router-dom";

export const Popular = () => {
  window.scrollTo({top: 0,left: 0,behavior: 'smooth'})

  const query = useLocation().search;
  const queryValue = new URLSearchParams(query).get('page')

  const [page, setPage] = useState(1)
  
  let {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`, page)

  useEffect(() => queryValue === null ?setPage(1) : setPage(+queryValue),[queryValue])

  const [filter, setFilter] = useState('')

  const handleFilter = e => {
    setFilter(e.target.value)
    console.log(data)
  }

  if(loading) return <div className='container'><h1>Loading...</h1></div>
  if(error) return <div className='container'><h1>Something Went Wrong!</h1></div>
  
  return (
    <main className='home'>
      <img className="backdrop" src="./bg.jpg" alt="" />
      <div className="overlay"></div>
     
	<div className="container">
    <HomeLogo />
  </div>

<div className="container" style={{marginTop: 0}}>
  
<div className="movie-grid">
    <h1>Popular Movies Right Now</h1>

    <select onChange={handleFilter}>
      <option value="--" selected disabled>Select filter</option>
      <option value="rating">Rating</option>
      <option value="popularity">Popularity</option>
    </select>

		<div className="grid-5">
      
      {data.sort((a,b)=>{
        if(filter === 'rating') return a.vote_average - b.vote_average
        if(filter === 'popularity') return  a.popularity - b.popularity
      }).reverse().map( movie => (
        <div className="movie" key={movie.id}>
            <MovieCard key={movie.id} movie={movie} button={true}/>
        </div>
      ))}

	  </div>

    <div className="paginate container" style={{width: '100%'}}>

      <Link to={`?page=${page-1}`}>
       <button disabled={page <= 1}><span className='button-arrow'>&#x2039;</span> Previous</button>
      </Link>

      <Link to={`?page=${page+1}`}>
        <button>Next <span className='button-arrow'>&#x203A;	</span></button>
      </Link>

    </div>

    </div>
    </div>
  </main>
  )
}
