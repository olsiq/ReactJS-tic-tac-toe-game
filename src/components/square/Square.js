import React, { useContext } from 'react';
import { MyContext } from 'app/App';
import { squares } from 'models/tictactoe/selectors';

import './square.css';

const Square = ({ squareValue }) => {
  const ctx = useContext(MyContext);
  const state = ctx[0];
  const play = ctx[1];
  const value = squares(state)[squareValue];
  return (
    <button className='square' onClick={() => play(squareValue)}>
      {value}
    </button>
  );
};

export { Square };
