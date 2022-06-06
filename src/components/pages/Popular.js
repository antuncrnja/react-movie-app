import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard'
import { useFetch } from '../useFetch'
import { HomeLogo } from '../HomeLogo'

import { useLocation } from "react-router-dom";

export const Popular = () => {
  const query = useLocation().search;
  const queryValue = new URLSearchParams(query).get('page')
  const [page, setPage] = useState(1)

  useEffect( ()=> {window.scrollTo({top: 0,left: 0,behavior: 'smooth'})},[page])

  useEffect(() =>{
    if(queryValue === null) setPage(1) 
      else setPage(+queryValue)
  },[queryValue])

    const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`, page)


  if(loading) return <div className='container'><h1>Loading...</h1></div>
  if(error) return <div className='container'><h1>Something Went Wrong!</h1></div>

  return (
    <main className='home'>
      <img className="backdrop" src="./bg.jpg" alt="" />
      <div className="overlay"></div>
     
	<div className="container">
    

    <HomeLogo />
   {/*  <Link to="/Search">
    <motion.img layoutId="test" animate={{scale: 1}} src="../bg.jpg" alt="" style={{width: 200, margin: '0 auto'}} transition={{
          default: {duration: .2}, 
          ease: 'easeInOut'
        }} />
        </Link>
        */}
</div>

{/*
    <div className="slider">
      <Swiper
     
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView= {window.innerWidth <= 800 ? 3 : 7.7}
          navigation
          centeredSlides
          loop
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map( movie => (
           <SwiperSlide key={movie.id}>
             <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt={movie.title} />
           </SwiperSlide>
          ))}
        </Swiper>
      </div>
*/}
  <div className="container" style={{marginTop: 0}}>
   

<div className="movie-grid">
    <h1>Popular Movies Right Now</h1>



		<div className="grid-5">
  
      {data.map( movie => (
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
