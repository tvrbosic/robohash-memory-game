import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  cardsCount: 16,
  activeCards: [],
  matchedCards: [],
  movesCounter: 0,
  progress: 0,
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
    addActiveCard: (state, action) => {
      state.activeCards.push(action.payload);
    },
    resetActiveCards: (state) => {
      state.activeCards = [];
    },
    setMatchedCard: (state, action) => {
      state.matchedCards.push(action.payload);
      state.progress = ((state.matchedCards.length * 2) / state.cardsCount) * 100;
    },
    resetMatchedCards: (state) => {
      state.matchedCards = [];
      state.progress = 0;
    },
    incrementMovesCounter: (state) => {
      state.movesCounter++;
    },
    resetMovesCounter: (state) => {
      state.movesCounter = 0;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
