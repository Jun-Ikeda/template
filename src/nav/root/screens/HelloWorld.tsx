import * as React from 'react';
import { StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { Button, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper } from 'src/components';
import { actions } from 'src/redux/helloworld';
import { State } from 'src/redux';

import ParamList from '../ParamList';

type NavigationProps = NativeStackScreenProps<ParamList, 'HelloWorld'>;
type HelloWorldActions = typeof actions;
interface HelloWorldProps extends HelloWorldActions {
  navigation: NavigationProps['navigation'];
  route: NavigationProps['route'];
  helloworld: State['helloworld'];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const { Container } = EPaper;
const HelloWorld = (props: HelloWorldProps) => {
  const {
    navigation, route, helloworld: { message }, setMessage, incrementCount, decrementCount,
  } = props;
  return (
    <Container style={styles.container}>
      <TextInput value={message} onChangeText={setMessage} autoComplete />
      <Button onPress={() => navigation.navigate('Detail', { message })}>Go to Detail</Button>
      <Button onPress={() => incrementCount()}>increament count</Button>
      <Button onPress={() => decrementCount()}>decrement count</Button>
    </Container>
  );
};

export default connect(
  (state: State) => ({ helloworld: state.helloworld }),
  actions,
)(HelloWorld);
