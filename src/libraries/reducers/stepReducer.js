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

export default stepReducer;
