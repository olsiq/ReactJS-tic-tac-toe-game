const oneReducer = (state, action) => {
  switch (action.type) {
    case 'JUMP_TO':
      return {
        player: state.player,
        step: action.payload,
        history: state.history,
      };

    case 'SET_PLAYER':
      return {
        player: action.payload,
        step: state.step,
        history: state.history,
      };

    case 'ON_CLICK':
      return {
        player: !state.player,
        step: action.payload1,
        history: action.payload2,
      };
  }
};
export default oneReducer;
