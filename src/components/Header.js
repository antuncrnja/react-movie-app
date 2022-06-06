import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import WatchlistContext  from '../context/WatchlistContext'

export const Header = () => {
	const {movies} = useContext(WatchlistContext)

	const [scroll, setScroll] = useState(false);

	useEffect(() => {
	window.addEventListener("scroll", () => {
		setScroll(window.scrollY > 20);
	});
	}, []);
  return (
	<header className={scroll ? 'header-scroll-active' : ''}>
		<div className="container">
		<Link to="/"><div className="logo"><span className='main-color'>Base</span></div></Link>

			<ul className="nav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/Search">Search</Link>
				</li>
				<li>
					<Link to="/Watchlist">Watchlist {movies.length > 0 && <span className="count">{movies.length}</span>}</Link>
				</li>
			</ul>
		</div>
	</header>
  )
}
