import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard'
import { ScrollToTop } from '../ScrollToTop'
import { useFetch } from '../useFetch'

export const Popular = () => {
  //const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`)

  if(loading) return <div className='container'><h1>Loading...</h1></div>
  if(error) return <div className='container'><h1>Something Went Wrong!</h1></div>

/*
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`)
	.then(res => {
    if(res.ok) return res.json();
    throw new Error('Something went wrong');
  })
    .then(data => {
       !data.errors ? setMovies(data.results) : setMovies([])
    })
    .catch(error => console.log(error))
  }, [page])
*/
  return (
    <main className='home'>
      <img class="backdrop" src="./bg.jpg" alt="" />
      <div className="overlay"></div>
     
	<div className="container">

<div className="logo-wrapper">
  <h1 className="logo">It'sThe<span className='main-color'>Base</span></h1>
  <p>The Movie Database</p>
</div>
  

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
     <Link to={`?page=${page}`}><button onClick={() => setPage(page-1)} disabled={page <= 1}>Prev</button> </Link>
     <Link to={`?page=${page}`}><button onClick={() => setPage(page+1)}>Next</button></Link>
    </div>
    </div>
  </div>
  </main>
  )
}
