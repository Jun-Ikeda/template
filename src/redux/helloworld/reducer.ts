import { HelloWorldAction, HelloWorldState } from './type';
import initState from './state';

const reducer = (
  state: HelloWorldState = initState,
  action: HelloWorldAction,
): HelloWorldState => {
  switch (action.type) {
    case 'INIT_MESSAGE':
    case 'DELETE_MESSAGE':
    case 'SET_MESSAGE':
      return { ...state, message: action.payload.message };
    case 'INIT_COUNT':
      return { ...state, count: action.payload.count };
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + action.payload.count };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - action.payload.count };
    default:
      return { ...state };
  }
};

export default reducer;
