import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  );
}

export default App;
