import { PLAY, JUMP_TO, GAME_OVER } from './actions';

import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JUMP_TO:
      const updatedCurrent = state.history[action.payload.step];

      let newplayer;
      if (action.payload.step % 2 === 1) {
        newplayer = false;
      } else {
        newplayer = true;
      }

      return {
        player: newplayer,
        step: action.payload.step,
        history: state.history,
        current: updatedCurrent,
        status: newplayer ? 'Current Player X' : `Current Player O`,
        winner: false,
      };

    case PLAY:
      //if we click a btn in previous move history will update

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

      // //one each click we check if we won or if btn has a value
      if (
        calculateTicTacToeWinner(squaresInFunc) ||
        squaresInFunc[action.payload.i]
      ) {
        return {
          player: state.player,
          step: state.step,
          history: state.history,
          current: state.current,
          status: state.status,
          winner: updatedWinner,
        };
      }
      squaresInFunc[action.payload.i] = state.player ? 'X' : 'O';
      const changeHistory = funcHistory.concat([{ squares: squaresInFunc }]);
      return {
        player: !state.player,
        step: funcHistory.length,
        history: changeHistory,
        current: changeHistory[funcHistory.length],
        status: updatedStatus,
        winner: updatedWinner,
      };

    case GAME_OVER:
      const winnerIs = state.player
        ? 'Winner is Player O'
        : 'Winner is Player X';

      return {
        player: state.player,
        step: state.step,
        history: state.history,
        current: state.current,
        status: winnerIs,
        winner: true,
      };

    default:
      console.log('error at switch statement');
      break;
  }
};
export { reducer, initialState };
