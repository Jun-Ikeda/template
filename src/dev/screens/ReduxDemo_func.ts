import { combineReducers, createStore } from 'redux';

const INITIAL_STATE = { name: 'Jun' };

// actionというobjectを生成する関数たち
export const deleteName = () => (
  { type: 'DELETE_NAME', name: '' }
);
export const setName = (name) => (
  { type: 'SET_NAME', name }
);

// actionというobjectを受け取り、編集されたstateを生成する関数
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DELETE_NAME':
      return { name: '' };
    case 'SET_NAME':
      return { name: action.name };
    default:
      return state;
  }
};
export const reducers = combineReducers({ user: userReducer });

// reducerに基づくstoreを生成
export const store = createStore(reducers);
