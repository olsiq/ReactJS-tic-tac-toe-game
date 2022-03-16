import React, { useContext } from 'react';
import { DispatchContext, MyContext } from 'context/Context';
import { squares } from 'models/tictactoe/selectors';

import './square.css';

const Square = ({ squareValue }) => {
  const state = useContext(MyContext);
  const play = useContext(DispatchContext)[0];
  const value = squares(state)[squareValue];
  return (
    <button className='square' onClick={() => play(squareValue)}>
      {value}
    </button>
  );
};

export { Square };
