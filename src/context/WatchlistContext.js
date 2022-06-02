import React, { createContext, useState } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({children}){
	const [movies, setMovies] = useState([])
		function AddToWatchlist(movie){
			if(movies.some( a => a.movie.id === movie.id)) return
			setMovies( prevState => [...prevState, {movie}])	
		}
		function RemoveFromWatchlist(movie){
			setMovies(movies.filter(a => a.movie.id !== movie) )
		}

	return(
		<WatchlistContext.Provider value={{movies, AddToWatchlist, RemoveFromWatchlist}}>
			{children}
		</WatchlistContext.Provider>
	)
}

export default WatchlistContext;