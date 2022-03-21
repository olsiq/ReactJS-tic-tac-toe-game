import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'models/tictactoe/reducers';
import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';

export const gameSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {
    play: (state, payload) => {
      const funcHistory = state.history;
      const current = funcHistory[state.step];
      //we copy the squares array from current object to squaresInFunc
      const squaresInFunc = current.squares;
      const updatedWinner = calculateTicTacToeWinner(squaresInFunc)
        ? true
        : false;

      let updatedStatus = state.player
        ? 'Current Player O'
        : `Current Player X`;
      console.log(state.history.slice(0, state.step + 1));
      // //one each click we check if we won or if btn has a value
      if (calculateTicTacToeWinner(squaresInFunc) || squaresInFunc[payload]) {
        state.winner = updatedWinner;
      } else {
        squaresInFunc[payload] = state.player ? 'X' : 'O';
        console.log(squaresInFunc[1]);
        const changeHistory = funcHistory.concat([{ squares: squaresInFunc }]);

        state.player = !state.player;
        state.step = funcHistory.length;
        state.history = changeHistory;
        state.current = changeHistory[funcHistory.length];
        state.status = updatedStatus;
        state.winner = updatedWinner;
      }
    },
    jumpTo: (state, payload) => {
      state.history = state.history[payload.step];
      let newPlayer;
      payload.step % 2 === 1 ? (newPlayer = false) : (newPlayer = true);
      state.status = newPlayer ? 'Current Player X' : `Current Player O`;
    },
  },
});

// Action creators are generated for each case reducer function
export const action = gameSlice.actions;

// export default gameSlice.reducer;
