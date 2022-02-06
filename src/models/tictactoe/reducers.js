import { PLAY, JUMP_TO } from './actions';

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
  winnersFunc: null,
  status: `Player X it's your turn`,
};

const reducer = (state = initialState, action) => {
  const current = state.history[state.step];
  // console.log(current);
  const winnersFunc = calculateTicTacToeWinner(current.squares);

  let winners;
  winnersFunc && (winners = winnersFunc.slice(1));

  switch (action.type) {
    case JUMP_TO:
      let newplayer;
      if (action.payload.step % 2 === 0) {
        newplayer = true;
      } else {
        newplayer = false;
      }
      return {
        player: newplayer,
        step: action.payload.step,
        history: state.history,
        current: state.current,
        status: state.status,
      };

    case PLAY:
      //if we click a btn in previous move history will update

      const funcHistory = state.history.slice(0, state.step + 1);

      const current = funcHistory[state.step];

      //we copy the squares array from current object to squaresInFunc
      const squaresInFunc = current.squares.slice();
      console.log(squaresInFunc);
      console.log(squaresInFunc[action.payload.i]);
      const updatedStatus = state.player
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
          winnersFunc: state.winnersFunc,
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
        winnersFunc: null,
      };

    default:
      console.log('error at switch statement');
      break;
  }
};
export { reducer, initialState };
