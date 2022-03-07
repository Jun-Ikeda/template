import { HelloWorldAction } from './type';
import initState from './state';

export const initMessage = (): HelloWorldAction => ({
  type: 'INIT_MESSAGE',
  payload: { message: initState.message },
});

export const deleteMessage = (): HelloWorldAction => ({
  type: 'DELETE_MESSAGE',
  payload: { message: '' },
});

export const setMessage = (message): HelloWorldAction => ({
  type: 'SET_MESSAGE',
  payload: { message },
});

export const initCount = (): HelloWorldAction => ({
  type: 'INIT_COUNT',
  payload: { count: initState.count },
});

export const incrementCount = (): HelloWorldAction => ({
  type: 'INCREMENT_COUNT',
  payload: { count: 1 },
});

export const decrementCount = (): HelloWorldAction => ({
  type: 'DECREMENT_COUNT',
  payload: { count: 1 },
});

export default {
  initMessage,
  deleteMessage,
  setMessage,
  initCount,
  incrementCount,
  decrementCount,
};
