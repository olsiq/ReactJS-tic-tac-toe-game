import React, { useReducer } from 'react';

import { reducer, initialState } from 'models/tictactoe/reducers';
import { play, jumpTo } from 'models/tictactoe/actions';

import { Game } from '../components';

function App() {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  const handleClick = (i) => {
    dispatch(play({ i }));
  };

  const jump = (step) => {
    dispatch(jumpTo({ step }));
  };

  return (
    <Game
      jump={(step) => jump(step)}
      history={gameState.history}
      squares={gameState.current.squares}
      game={(i) => handleClick(i)}
      status={gameState.status}
    />
  );
}
export { App };
