import React, { useContext } from 'react';
import { MyContext } from 'context/Context';
import { squares } from 'models/tictactoe/selectors';

import './square.css';

const Square = ({ squareValue }) => {
  const context = useContext(MyContext);
  const play = context.game;
  const value = squares(context)[squareValue];
  return (
    <button className='square' onClick={() => play(squareValue)}>
      {value}
    </button>
  );
};

export { Square };
