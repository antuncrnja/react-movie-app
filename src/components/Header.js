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
					<Link to="/Search"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 30 30"
style={{fill: '#fff', height: '15px'}}><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path></svg>Search</Link>
				</li>
				<li>
					<Link to="/Watchlist">+ Watchlist {movies.length > 0 && <span className="count">{movies.length}</span>}</Link>
				</li>
			</ul>
		</div>
	</header>
  )
}
