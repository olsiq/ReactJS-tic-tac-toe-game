import React from 'react';

import { Board } from 'components/board';

import './game.css';

export const Game = (props) => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={props.squares} onClick={props.click} />
      </div>
      <div className='game-info'>
        <div>{props.status}</div>
        <ol>{props.moves}</ol>
      </div>
    </div>
  );
};
