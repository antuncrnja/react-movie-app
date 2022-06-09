import './App.scss';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { Header } from './components/Header';
import { Search } from './pages/Search';
import { Watchlist } from './pages/Watchlist';
import { Popular } from './pages/Popular';
import { Movie } from './pages/Movie';
//Context
import {WatchlistProvider} from './context/WatchlistContext';
import { AnimatePresence } from 'framer-motion';

function App() {
 const location = useLocation();

  return (
    <WatchlistProvider>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Popular />}/>
            <Route exact path="/Search" element={<Search />}/>
            <Route exact path="/Watchlist" element={<Watchlist />}/>
            <Route path="/Movie/:id" element={<Movie />}/>
          </Routes>
          </AnimatePresence>
    </WatchlistProvider>
  );
}

export default App;

/*GIT
    git init

    git config --global user.name 'Thoonx'
    git config --global user.email 'ggold.zg@gmail.com'

    sudo git remote add origin https://github.com/Thoonx/test1.git

        sudo git add .
        sudo git commit -m 'update'
        sudo git push -u origin main -f

    git push -u origin master
    git checkout dev
    git pull 
*/