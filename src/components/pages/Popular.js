import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { MovieCard } from '../MovieCard'
import { ScrollToTop } from '../ScrollToTop'
import { useFetch } from '../useFetch'
import { HomeLogo } from '../HomeLogo'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

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
</div>
{/* 
    <div className="slider">
      <Swiper
      breakpoints={{
        // when window width is >= 768px
        0: {
          width: 300,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 8.7,
        },
      }}
          modules={[Navigation]}
          spaceBetween={16}
         
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map( movie => (
           <SwiperSlide><MovieCard key={movie.id} movie={movie} hideTitle={true}/></SwiperSlide>
          ))}
        </Swiper>
      </div>
*/}
  <div className="container" style={{marginTop: 0}}>
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
