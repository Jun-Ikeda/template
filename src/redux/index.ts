import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';

import helloworld, { HelloWorldState, HelloWorldAction } from './helloworld';

// create the store
const persistConfig = {
  key: 'helloworld', // the key in Storage
  storage: ExpoFileSystemStorage,
  // whitelist: [],
  // blacklist: [],
};
const reducers = combineReducers({ helloworld: persistReducer(persistConfig, helloworld.reducer) });
// const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(reducers);
const persistor = persistStore(store);

export default { store, persistor, helloworld };

// export interfaces
type State = {
  helloworld: HelloWorldState;
}
type Action = {
  helloworld: HelloWorldAction;
}
export {
  State, Action, store, persistor, helloworld,
};
