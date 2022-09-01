import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  cardsCount: 16,
  activeCards: [],
  matchedCards: []
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
    setActiveCard: (state, action) => {
      state.activeCards.push(action.payload);
    },
    resetActiveCards: (state) => {
      state.activeCards = [];
    },
    setMatchedCard: (state, action) => {
      state.matchedCards.push(action.payload);
    },
    resetMatchedCards: (state) => {
      state.matchedCards = [];
    },
    setMoveCount: (state, action) => {},
    setElapsedTime: (state, action) => {},
    setPlayerScore: (state, action) => {},
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
