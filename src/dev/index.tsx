import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import EPaperDemo from './screens/EPaperDemo';
import ReduxDemo from './screens/ReduxDemo';
import AsyncStorageDemo from './screens/AsyncStorageDemo';

const DevStack = createNativeStackNavigator<ParamList>();

const DevNavigator = () => (
  <DevStack.Navigator initialRouteName="EPaperDemo">
    <DevStack.Screen name="EPaperDemo" component={EPaperDemo} />
    <DevStack.Screen name="ReduxDemo" component={ReduxDemo} />
    <DevStack.Screen name="AsyncStorageDemo" component={AsyncStorageDemo} />
  </DevStack.Navigator>
);

export default DevNavigator;
