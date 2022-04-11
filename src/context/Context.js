import React, { useReducer, createContext } from "react";

import { reducer, initialState } from "models/tictactoe/reducers";
import { play, jumpTo } from "models/tictactoe/actions";

const MyContext = createContext(initialState);
const DispatchContext = createContext();

const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const game = (i) => {
    dispatch(play({ i }));
  };

  const jump = (step) => {
    dispatch(jumpTo({ step }));
  };
  const action = { jump: jump, game: game };
  return (
    <MyContext.Provider value={state}>
      <DispatchContext.Provider value={action}>
        {props.children}
      </DispatchContext.Provider>
    </MyContext.Provider>
  );
};
export { Context, MyContext, DispatchContext };
