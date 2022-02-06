import React, { useReducer } from 'react';

import { reducer, initialState } from 'models/tictactoe/reducers';

import { Board } from 'components/board';

import './game.css';
import { play, jump, gameOver } from 'models/tictactoe/actions';

export const Game = () => {
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

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={gameState.current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className='game-info'>
        <div>{gameState.status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
