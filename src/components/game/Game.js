import React, { useContext } from 'react';

import { Board } from 'components/board';
import { MyContext } from 'context/Context';

import { status, history } from 'models/tictactoe/selectors';

import './game.css';

export const Game = () => {
  const context = useContext(MyContext);

  const view = status(context);

  const moves = history(context).map((step, move) => {
    const description = move ? `go to move ${move}` : `Start!`;
    return (
      <li key={move}>
        <button onClick={() => context.jump(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{view}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
