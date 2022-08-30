import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  boardWidth: 4,
  boardHeight: 4,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state, action) => {},
    setBoardSize: (state, action) => {},
    setMoveCount: (state, action) => {},
    setElapsedTime: (state, action) => {},
    setPlayerScore: (state, action) => {},
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
