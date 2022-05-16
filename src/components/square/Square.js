
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { play } from 'redux/index';
import './square.css';

const Square = ({ value }) => {
  const dispatch = useDispatch();
  const squareValue = useSelector((state) => state.current.squares);
  console.log(squareValue);

  return (
    <button className='square' onClick={() => dispatch(play(value))}>
      {squareValue[value]}
    </button>
  );
};

export { Square };
