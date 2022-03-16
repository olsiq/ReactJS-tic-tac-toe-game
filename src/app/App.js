import React, { useReducer, createContext } from 'react';

import { Game } from '../components';

import { reducer, initialState } from 'models/tictactoe/reducers';
import { play, jumpTo } from 'models/tictactoe/actions';

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
      <Game />
    </MyContext.Provider>
  );
}
export { App };
