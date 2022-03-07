import * as React from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper } from 'src/components';

import ParamList from '../ParamList';

type NavigationProps = NativeStackScreenProps<ParamList, 'EPaperDemo'>;
interface EPaperDemoProps {
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
const EPaperDemo = (props: EPaperDemoProps) => {
  const { navigation, route } = props;
  return (
    <Container style={styles.container}>
      <Text>EPaperDemo</Text>
    </Container>
  );
};

export default EPaperDemo;
