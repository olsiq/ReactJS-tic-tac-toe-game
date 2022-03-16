import React, { useReducer, createContext } from 'react';

import { Game } from '../components';

import { reducer, initialState } from 'models/tictactoe/reducers';
import { play, jumpTo } from 'models/tictactoe/actions';

export const MyContext = createContext(initialState);
export const DispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const game = (i) => {
    dispatch(play({ i }));
  };

  const jump = (step) => {
    dispatch(jumpTo({ step }));
  };

  return (
    <MyContext.Provider value={state}>
      <DispatchContext.Provider value={[game, jump]}>
        <Game />
      </DispatchContext.Provider>
    </MyContext.Provider>
  );
}
export { App };
