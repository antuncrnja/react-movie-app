import { useFetch } from './useFetch'
import { useState } from 'react'
import { Loading } from './Loading'

export const Trailer = ({id}) => {

	const [loaded, setLoaded] = useState(0)

	const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)

	if(loading) return <div className='container'><p>Loading...</p></div>
	if(error) return <div></div>

	return (
		<div className='trailer'>
			
			{!loaded && <Loading text='Loading trailer' />}
			{data[0]?.key && <iframe className={loaded && 'iframe-loaded'} onLoad={()=> setLoaded(1)}key={data[0].key} src={`https://youtube.com/embed/${data[0].key}`} title={data[0].name}/> }
			
		</div>
	)
}
