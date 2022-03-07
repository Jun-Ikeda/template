import * as React from 'react-native';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';

import { connect, Provider } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ParamList from '../ParamList';

import { store, deleteName, setName } from './ReduxDemo_func';

const Component1 = (props) => {
  const { deleteName, setName } = props;
  return (
    <View style={{ borderWidth: 1 }}>
      <Text>Component 1</Text>
      <Button title="Delete" onPress={deleteName} />
      <Button title="Set1" onPress={() => setName('May')} />
      <Button title="Set2" onPress={() => setName('April')} />
    </View>
  );
};
const ConnectedComponent1 = connect(
  () => ({}),
  { setName, deleteName },
)(Component1);

const Component2 = (props) => {
  const { name } = props;
  return (
    <View style={{ borderWidth: 1 }}>
      <Text>Component 2</Text>
      <Text>{`name: ${name}`}</Text>
    </View>
  );
};
const ConnectedComponent2 = connect(
  (state) => ({ name: state.user.name }),
  {},
)(Component2);

type NavigationProps = NativeStackScreenProps<ParamList, 'ReduxDemo'>;
interface ReduxDemoProps {
  navigation: NavigationProps['navigation'];
  route: NavigationProps['route'];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ReduxDemo = (props: ReduxDemoProps) => {
  const { navigation, route } = props;
  return (
    <Provider store={store}>
      <ConnectedComponent1 />
      <ConnectedComponent2 />
    </Provider>
  );
};

export default ReduxDemo;
