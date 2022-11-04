const defaultState = {
  statement1: 0,
};

export const exampleReducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'INCREMENT_STATE':
      return { ...state, statement1: state.statement1 + action.payload };

    case 'DECREMENT_STATE':
      return { ...state, statement1: state.statement1 - action.payload };

    default:
      return state;
  }
};

export default exampleReducer;
