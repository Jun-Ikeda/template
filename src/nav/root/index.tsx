import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ParamList from './ParamList';

import HelloWorld from './screens/HelloWorld';
import Detail from './screens/Detail';

const RootStack = createNativeStackNavigator<ParamList>();

const RootNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="HelloWorld" component={HelloWorld} />
    <RootStack.Screen name="Detail" component={Detail} />
  </RootStack.Navigator>
);

export default RootNavigator;
