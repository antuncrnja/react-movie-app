import { useFetch } from './useFetch'

export const Trailer = ({id}) => {

	const {loading, error, data} = useFetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)

	if(loading) return <div className='container'><h1>Loading...</h1></div>
	if(error) return 

  return (
	 <div className='trailer'>
		<iframe key={data[0].key} src={`https://youtube.com/embed/${data[0].key}`} title={data[0].name}/>
		
	 </div>
  )
}
