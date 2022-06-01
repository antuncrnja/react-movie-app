import { useState, useEffect } from 'react'

export const Trailer = ({id}) => {
	const [video, setVideo] = useState([])

		useEffect(() => {
			
			fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
			.then(res => res.json())
			.then(data => {
				!data.errors ? setVideo(data) : setVideo([])
			})

		},[id])

  return (
	 <>
	 {video?.results && video.results.splice(0, 1).map( trailer => (
			<iframe key={trailer.key} src={`https://youtube.com/embed/${trailer.key}`} title={trailer.name}/>
	 ))}
	 </>
  )
}
