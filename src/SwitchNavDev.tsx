import * as React from 'react-native';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface SwitchNavDevProps {
  isNav: boolean,
  setIsNav: (isNav: boolean) => void,
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwitchNavDev = (props: SwitchNavDevProps) => {
  const { isNav, setIsNav } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => setIsNav(!isNav)}>
      <Text>Switch</Text>
    </TouchableOpacity>
  );
};

export default SwitchNavDev;
