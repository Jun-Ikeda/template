import { HelloWorldAction, HelloWorldState } from './type';
import initState from './state';
import actions from './action';
import reducer from './reducer';

export default { reducer, actions, initState };
export {
  reducer, actions, initState, HelloWorldAction, HelloWorldState,
};
