import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from 'models/tictactoe/reducers';
import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';
// import { jumpTo } from 'models/tictactoe/actions';

const initialState = {
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

export const gameSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {
    play: (state, payload) => {
      state.player = !state.player;
      state.step++;
      state.player
        ? (state.status = 'Current Player is O ')
        : (state.status = 'Current Player is X');
      // *test
      // state.player = false;
      // state.step = 1;
      // state.history = [
      //   {
      //     squares: Array(9).fill(null),
      //     squares: [null, null, null, null, null, null, 'x', null],
      //   },
      // ];
      // state.current = {
      //   squares: [null, null, null, null, null, null, 'x', null],
      // };
      // state.status = `Player X it's your turn`;
      // state.winner = true;
      // *test//
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
export const { play, jumpTo } = gameSlice.actions;

// export default gameSlice.reducer;
