import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  cardsCount: 16,
  activeCards: [],
  movesCounter: 0,
  matchedCards: [],
  progress: 0,
  score: 0,
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
    incrementMovesCounter: (state) => {
      state.movesCounter++;
    },
    resetMovesCounter: (state) => {
      state.movesCounter = 0;
    },
    setMatchedCard: (state, action) => {
      state.matchedCards.push(action.payload);
      state.progress = ((state.matchedCards.length * 2) / state.cardsCount) * 100;
    },
    resetMatchedCards: (state) => {
      state.matchedCards = [];
      state.progress = 0;
    },
    addScore: (state, action) => {
      // Added score = 10000 / (number of moves + elapsed time)
      state.score += Math.floor(10000 / (state.movesCounter + action.payload));
    },
    resetScore: (state) => {
      state.score += 0;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
