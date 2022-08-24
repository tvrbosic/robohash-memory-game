import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Highscores from './pages/Highscores/Highscores';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/play' element={<Game />}></Route>
      <Route path='/highscores' element={<Highscores />}></Route>
    </Routes>
  );
}

export default App;
