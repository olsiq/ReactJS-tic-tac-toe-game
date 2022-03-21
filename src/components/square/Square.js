import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { action } from 'redux/slice';
import './square.css';

const Square = ({ value }) => {
  const dispatch = useDispatch();
  const squareValue = useSelector((state) => state.current.squares);
  const play = () => action.play();

  return (
    <button className='square' onClick={() => dispatch(play(value))}>
      {squareValue[value]}
    </button>
  );
};

export { Square };
