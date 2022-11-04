const defaultState = {
  sampleArray: [],
};

export const secondExampleReducer = (
  state = defaultState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, sampleArray: [...state.sampleArray, action.payload] };

    case 'REMOVE_ITEM':
      return {
        ...state,
        sampleArray: state.sampleArray.slice(0, state.sampleArray.length - 1),
      };

    case 'CLEAR_ALL_ITEMS': {
      return { ...state, sampleArray: [] };
    }

    default:
      return state;
  }
};
