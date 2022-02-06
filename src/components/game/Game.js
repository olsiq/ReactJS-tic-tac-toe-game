import React, { useReducer } from 'react';

import { reducer, initialState } from 'models/tictactoe/reducers';
import { Board } from 'components/board';

import './game.css';
import { play, jump } from 'models/tictactoe/actions';

export const Game = () => {
  const [obj, dispatch] = useReducer(reducer, initialState);

  //click function
  const handleClick = (i) => {
    dispatch(play({ i }));
  };

  const jumpTo = (step) => {
    dispatch(jump({ step }));
  };

  const moves = obj.history.map((step, move) => {
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
        <Board squares={obj.current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{obj.status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
