import * as React from 'react';
import { StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { Text, Button, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper } from 'src/components';
import { actions } from 'src/redux/helloworld';

import ParamList from '../ParamList';

type NavigationProps = NativeStackScreenProps<ParamList, 'HelloWorld'>;
type HelloWorldActions = typeof actions;
interface HelloWorldProps extends HelloWorldActions {
  navigation: NavigationProps['navigation'];
  route: NavigationProps['route'];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

const { Container } = EPaper;
const HelloWorld = (props: HelloWorldProps) => {
  const [message, setMessage] = React.useState<string>('');
  const {
    navigation, route, setMessage: setMessageRedux, incrementCount, decrementCount,
  } = props;
  return (
    <Container style={styles.container}>
      <Text>Hello World!</Text>
      <TextInput value={message} onChangeText={setMessage} autoComplete />
      <Button onPress={() => navigation.navigate('Detail', { message })}>Go to Detail</Button>
      <Text>Redux</Text>
      <Button onPress={() => setMessageRedux(message)}>set message</Button>
      <Button onPress={() => incrementCount()}>increament count</Button>
      <Button onPress={() => decrementCount()}>decrement count</Button>
    </Container>
  );
};

export default connect(
  () => ({}),
  actions,
)(HelloWorld);
