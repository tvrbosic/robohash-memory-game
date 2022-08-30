import { configureStore } from '@reduxjs/toolkit';

import gameSlice from './game-slice';

const store = configureStore({
  reducer: {
    game: gameSlice
  },
});

export default store;
