import * as React from 'react-native';
import { StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { Text, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper } from 'src/components';
import { State } from 'src/redux';

import ParamList from '../ParamList';

type NavigationProps = NativeStackScreenProps<ParamList, 'Detail'>;
interface DetailProps {
  navigation: NavigationProps['navigation'];
  route: NavigationProps['route'];
  helloworld: State['helloworld'];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

const { Container } = EPaper;
const Detail = (props: DetailProps) => {
  const { navigation, route, helloworld } = props;
  const { params: { message } } = route;
  return (
    <Container style={styles.container}>
      <Button onPress={() => navigation.goBack()}>Back to Hello World</Button>
      <Text>{`This is passed by navigation.navigate('Detail', { message }): ${message}`}</Text>
      <Text>{`This is retrieved from redux: ${helloworld.message}, ${helloworld.count}`}</Text>
    </Container>
  );
};

export default connect(
  (state: State) => ({ helloworld: state.helloworld }),
  {},
)(Detail);
