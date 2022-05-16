
import React from 'react';
import { Board } from 'components/board';
import { useDispatch, useSelector } from 'react-redux';
import { jumpTo } from 'redux/index';

import { status, history } from "models/tictactoe/selectors";


export const Game = () => {
  const history = useSelector((state) => state.history);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();
  const jump = (payload) => dispatch(jumpTo(payload));
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
      <div className="game-info">
        <div>{view}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
