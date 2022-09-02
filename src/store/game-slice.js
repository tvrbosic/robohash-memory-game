import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  cardsCount: 16,
  activeCards: [],
  matchedCards: [],
  movesCounter: 0,
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
    },
    resetMatchedCards: (state) => {
      state.matchedCards = [];
    },
    incrementMovesCounter: (state) => {
      state.movesCounter++;
    },
    resetMovesCounter: (state) => {
      state.movesCounter = 0;
    }
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
