const initial = {
  player: true,
  step: 0,
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
};

const oneReducer = (state = initial, action) => {
  switch (action.type) {
    case 'JUMP_TO':
      return {
        player: state.player,
        step: action.payload,
        history: state.history,
      };

    case 'PLAY':
      return {
        player: !state.player,
        step: action.payload1,
        history: action.payload2,
      };
  }
};
export { oneReducer, initial };
