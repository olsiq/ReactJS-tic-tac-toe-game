import React, { useReducer } from 'react';

import { calculateTicTacToeWinner } from 'libraries/helpers/tictactoe';
import { reducer } from 'models/tictactoe/reducers';
import { Board } from 'components/board';

import './game.css';
import { play } from 'models/tictactoe/actions';

export const Game = () => {
  //use reduce

  const [obj, dispatch] = useReducer(reducer);

  //variables
  const current = obj.history[obj.step];
  // console.log(current);
  const winnersFunc = calculateTicTacToeWinner(current.squares);
  const winner = winnersFunc ? winnersFunc.slice(0, 1) : null;
  let winners;
  winnersFunc && (winners = winnersFunc.slice(1));
  //status
  let status;
  winner
    ? (status = `winner ${winner}`)
    : (status = `next player ${obj.player ? 'X' : 'O'}`);
  if (obj.step === 9 && !winner) {
    status = 'DRAW';
  }
  //click function
  const handleClick = (i) => {
    dispatch(play({ i }));
  };
  const jumpTo = (step) => {
    dispatch(jump(step));
    //if the step we move is even the next player is must be "x"
    step % 2 === 0
      ? dispatchOneReducer({ type: 'SET_PLAYER', payload: true })
      : dispatchOneReducer({ type: 'SET_PLAYER', payload: false });
  };
  //console.log(history);
  const moves = obj.history.map((step, move) => {
    const description = move ? `go to move ${move}` : `Start!`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className='game-info'>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
