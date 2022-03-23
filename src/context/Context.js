import React, { useReducer, createContext } from 'react';

import { reducer, initialState } from 'models/tictactoe/reducers';
import { play, jumpTo } from 'models/tictactoe/actions';

const MyContext = createContext(initialState);

const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const game = (i) => {
    dispatch(play({ i }));
  };

  const jump = (step) => {
    dispatch(jumpTo({ step }));
  };
  const contextValues = { ...state, game: game, jump: jump };
  return (
    <MyContext.Provider value={contextValues}>
      {props.children}
    </MyContext.Provider>
  );
};
export { Context, MyContext };
