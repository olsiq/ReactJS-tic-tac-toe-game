import { createSlice } from '@reduxjs/toolkit';
import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';

const initial = {
  player: true,
  step: 0,
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],

  current: {
    squares: Array(9).fill(null),
  },

  status: `Player X it's your turn`,
  winner: false,
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: initial,
  reducers: {
    play(state, action) {
      const funcHistory = state.history.slice(0, state.step + 1);

      const current = funcHistory[state.step];

      //we copy the squares array from current object to squaresInFunc
      const squaresInFunc = current.squares.slice();

      const updatedWinner = calculateTicTacToeWinner(squaresInFunc)
        ? true
        : false;

      let updatedStatus = state.player
        ? 'Current Player O'
        : `Current Player X`;

      if (
        calculateTicTacToeWinner(squaresInFunc) ||
        squaresInFunc[action.payload.i]
      ) {
        const theWinner = !state.player ? 'player X' : 'player O';
        updatedWinner && (updatedStatus = `Game is over, ${theWinner} has won`);

        state.status = updatedStatus;
        state.winner = updatedWinner;
      }
      squaresInFunc[action.payload.i] = state.player ? 'X' : 'O';
      const changeHistory = funcHistory.concat([{ squares: squaresInFunc }]);

      state.player = !state.player;
      state.step = funcHistory.length;
      state.history = changeHistory;
      state.current = changeHistory[funcHistory.length];
      state.status = updatedStatus;
      state.winner = updatedWinner;
    },
    jumpTo(state, action) {
      state.current = state.history[action.payload.step];
      state.status =
        action.payload.step % 2 ? 'current Player is X' : 'current Player is 0';
      state.step = action.payload.step;
      state.player = action.payload.step % 2;
    },
  },
});
export { gameSlice };
export const { play, jumpTo } = gameSlice.actions;
