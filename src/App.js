import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Scoreboard from './pages/Scoreboard/Scoreboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/play' element={<Game />}></Route>
      <Route path='/scoreboard' element={<Scoreboard />}></Route>
    </Routes>
  );
}

export default App;
