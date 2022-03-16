import React, { useContext } from 'react';
import { MyContext } from 'app/App';
import { status, history } from 'models/tictactoe/selectors';

import { Board } from 'components/board';

import './game.css';

export const Game = ({ play }) => {
  const ctx = useContext(MyContext);

  const state = ctx[0];
  const jump = ctx[2];
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
