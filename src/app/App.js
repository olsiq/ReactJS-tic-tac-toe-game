import React, { useReducer, createContext } from 'react';
import { reducer, initialState } from 'models/tictactoe/reducers';
import { play, jumpTo } from 'models/tictactoe/actions';

import { Game } from '../components';

export const MyContext = createContext(initialState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const game = (i) => {
    dispatch(play({ i }));
  };

  const jump = (step) => {
    dispatch(jumpTo({ step }));
  };

  return (
    <MyContext.Provider value={[state, game, jump]}>
      <Game
      //jump={jump}
      //history={history(state)}
      // squares={squares(state)}
      // play={game}
      // status={status(state)}
      />
    </MyContext.Provider>
  );
}
export { App };
