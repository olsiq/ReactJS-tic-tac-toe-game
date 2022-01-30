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

export default playerReducer;
