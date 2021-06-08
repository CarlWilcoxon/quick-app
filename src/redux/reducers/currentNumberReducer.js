function currentNumberReducer(state, action) {
  switch (action.type) {
    case 'ONE':
      return {num1: state.num1 + '1'};
    case 'TWO':
      return {num1: state.num1 + '2'};
    case 'RESET':
      return {num1:0};
    default:
      throw new Error();
  }
}

export default currentNumberReducer;