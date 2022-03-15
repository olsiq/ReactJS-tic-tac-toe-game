import React, { useReducer } from 'react';

import { reducer, initialState } from 'models/tictactoe/reducers';
import { play, jumpTo } from 'models/tictactoe/actions';
import { history, squares, status } from 'models/tictactoe/selectors';

import { Game } from '../components';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const game = (i) => {
    dispatch(play({ i }));
  };

  const jump = (step) => {
    dispatch(jumpTo({ step }));
  };

  return (
    <Game
      jump={(step) => jump(step)}
      history={history(state)}
      squares={squares(state)}
      play={game}
      status={status(state)}
    />
  );
}
export { App };
