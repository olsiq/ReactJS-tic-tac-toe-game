import React, { useReducer } from 'react';
import { reducer, initialState } from 'models/tictactoe/reducers';

import { play, jump } from 'models/tictactoe/actions';

export const useHook = () => {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  const handleClick = (i) => {
    dispatch(play({ i }));
  };

  const jumpTo = (step) => {
    dispatch(jump({ step }));
  };

  const moves = gameState.history.map((step, move) => {
    const description = move ? `go to move ${move}` : `Start!`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return gameState, handleClick, moves, jumpTo;
};
