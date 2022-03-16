import React, { useContext } from 'react';

import { Board } from 'components/board';
import { DispatchContext, MyContext } from 'context/Context';

import { status, history } from 'models/tictactoe/selectors';

import './game.css';

export const Game = ({ play }) => {
  const state = useContext(MyContext);

  const jump = useContext(DispatchContext)[1];
  const view = status(state);

  const moves = history(state).map((step, move) => {
    const description = move ? `go to move ${move}` : `Start!`;
    return (
      <li key={move}>
        <button onClick={() => jump(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board play={play} />
      </div>
      <div className='game-info'>
        <div>{view}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
