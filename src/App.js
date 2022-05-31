import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header';
import { Search } from './components/pages/Search';
import { Watchlist } from './components/pages/Watchlist';
import { Popular } from './components/pages/Popular';
import { Movie } from './components/pages/Movie';

//Context
import {WatchlistProvider} from './context/WatchlistContext';

function App() {
  return (
    <WatchlistProvider>
      <Router>
        <Header />
          <Routes>
            <Route index path="/" element={<Popular />}/>
            <Route path="/Seacrh" element={<Search />}/>
            <Route path="/Watchlist" element={<Watchlist />}/>
            <Route path="/Movie/:id" element={<Movie />}/>
          </Routes>
      </Router>
    </WatchlistProvider>
  );
}

export default App;
