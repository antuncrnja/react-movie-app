import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { MovieDetails } from '../MovieDetails';

export const Movie = () => {
	let params = useParams();

	const [movie, setMovie] = useState({})

		useEffect(() => {
			fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
			.then(res => res.json())
			.then(data => {
			!data.errors ? setMovie(data) : setMovie([])
			})
			console.log(movie)
		},[])
	
  return (
	<div className="container"> 
		<MovieDetails movie={movie}/>
	</div>
  )
}
