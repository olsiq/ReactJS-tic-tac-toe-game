import React, { useReducer } from 'react';

import { calculateTicTacToeWinner } from 'libraries/tictactoe';
import { Board } from 'components/board';

import './game.css';

const stepReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_STEP':
      // console.log('change step action works');
      return (state = action.payload);

    case 'JUMP_TO':
      // console.log('jump to action works');
      return (state = action.payload);
    default:
      break;
  }
};

const playerReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      // console.log('change player action works');
      return (state = !state);

    case 'SET_PLAYER':
      // console.log('set player works action works');
      return (state = action.payload);

    default:
      // console.log('error at player reducer');
      break;
  }
};

const historyReducer = (state, action) => {
  //console.log('history action works');
  if (action.type === 'CHANGE_HISTORY') {
    return (state = action.payload);
  }
};

function Game() {
  //states
  //const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  // const [xIsNext, setXIsnext] = useState(true);
  //const [stepNumber, setStepNumber] = useState(0);

  //use reduce

  const initialStep = 0;
  const [statePlayer, dispatchPlayer] = useReducer(playerReducer, 'x');
  const [stepState, dispatchStep] = useReducer(stepReducer, initialStep);
  const [stateHistory, dispatchHistory] = useReducer(historyReducer, [
    {
      squares: Array(9).fill(null),
    },
  ]);

  //variables
  const current = stateHistory[stepState];
  // console.log(current);
  const winnersFunc = calculateTicTacToeWinner(current.squares);
  const winner = winnersFunc ? winnersFunc.slice(0, 1) : null;
  let winners;
  winnersFunc && (winners = winnersFunc.slice(1));
  //status
  let status;
  winner
    ? (status = `winner ${winner}`)
    : (status = `next player ${statePlayer ? 'X' : 'O'}`);

  //(true) && (code) ==> if left of AND operator is true continue else go to next line
  //if there are no winners status is draw
  stepState === 9 && (status = 'DRAW');
  //click function
  const handleClick = (i) => {
    //if we click a btn in previous move history will update

    const funcHistory = stateHistory.slice(0, stepState + 1);

    const current = funcHistory[stepState];

    //we copy the squares array from current object to squaresInFunc
    const squaresInFunc = current.squares.slice();

    // //one each click we check if we won or if btn has a value
    if (calculateTicTacToeWinner(squaresInFunc) || squaresInFunc[i]) {
      return;
    }
    squaresInFunc[i] = statePlayer ? 'X' : 'O';
    const changeHistory = funcHistory.concat([{ squares: squaresInFunc }]);

    dispatchHistory({ type: 'CHANGE_HISTORY', payload: changeHistory });
    dispatchStep({ type: 'CHANGE_STEP', payload: funcHistory.length });
    dispatchPlayer({ type: 'CHANGE_PLAYER' });
  };
  const jumpTo = (step) => {
    dispatchStep({ type: 'JUMP_TO', payload: step });
    //if the step we move is even the next player is must be "x"
    step % 2 === 0
      ? dispatchPlayer({ type: 'SET_PLAYER', payload: true })
      : dispatchPlayer({ type: 'SET_PLAYER', payload: false });
  };
  //console.log(history);
  const moves = stateHistory.map((step, move) => {
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
}

export { Game };
