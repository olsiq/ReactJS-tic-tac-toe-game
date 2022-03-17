import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'models/tictactoe/reducers';
import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';

export const gameSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {
    jumpTo: (state, action) => {
      state.history = state.history[action.payload.step];
      let newPlayer;
      action.payload.step % 2 === 1 ? (newPlayer = false) : (newPlayer = true);
      state.status = newPlayer ? 'Current Player X' : `Current Player O`;
    },
    play: (state, action) => {
      const funcHistory = state.history.slice(0, state.step + 1);

      const current = funcHistory[state.step];

      //we copy the squares array from current object to squaresInFunc
      const squaresInFunc = current.squares;

      const updatedWinner = calculateTicTacToeWinner(squaresInFunc)
        ? true
        : false;

      let updatedStatus = state.player
        ? 'Current Player O'
        : `Current Player X`;

      // //one each click we check if we won or if btn has a value
      if (
        calculateTicTacToeWinner(squaresInFunc) ||
        squaresInFunc[action.payload.i]
      ) {
        state.winner = updatedWinner;
      } else {
        squaresInFunc[action.payload.i] = state.player ? 'X' : 'O';
        const changeHistory = funcHistory.concat([{ squares: squaresInFunc }]);

        state.player = !state.player;
        state.step = funcHistory.length;
        state.history = changeHistory;
        state.current = changeHistory[funcHistory.length];
        state.status = updatedStatus;
        state.winner = updatedWinner;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { jumpTo, play } = counterSlice.actions;

export default gameSlice.reducer;
