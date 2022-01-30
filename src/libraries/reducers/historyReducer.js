const historyReducer = (state, action) => {
  //console.log('history action works');
  if (action.type === 'CHANGE_HISTORY') {
    return (state = action.payload);
  }
};

export default historyReducer;
