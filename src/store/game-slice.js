import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  cardsCount: 16,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setCardsCount: (state, action) => {
      state.cardsCount = action.payload;
    },
    setMoveCount: (state, action) => {},
    setElapsedTime: (state, action) => {},
    setPlayerScore: (state, action) => {},
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
