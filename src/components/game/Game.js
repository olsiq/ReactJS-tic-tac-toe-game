import React from 'react';
import { Board } from 'components/board';
import { useDispatch, useSelector } from 'react-redux';
import { action } from 'redux/slice';

import './game.css';

export const Game = () => {
  const dispatch = useDispatch();
  const jump = (payload) => dispatch(action.jumpTo(payload));
  const history = useSelector((state) => state.history);
  const status = useSelector((state) => state.status);
  console.log(history);
  const moves = history.map((step, move) => {
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
        <Board />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
