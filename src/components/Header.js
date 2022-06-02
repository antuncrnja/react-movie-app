import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import WatchlistContext  from '../context/WatchlistContext'

export const Header = () => {
	const {movies} = useContext(WatchlistContext)
  return (
	<header>
		<div className="container">
		<Link to="/"><h1 className="logo"><span className='main-color'>Base</span></h1></Link>

			<ul className="nav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Seacrh">Search</Link>
				</li>
				<li>
					<Link to="/Watchlist">Watchlist {movies.length > 0 && <span className="count">{movies.length}</span>}</Link>
				</li>
			</ul>
		</div>
	</header>
  )
}
