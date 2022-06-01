import './App.scss';
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