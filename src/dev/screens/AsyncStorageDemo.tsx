import * as React from 'react-native';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface AsyncStorageDemoProps {
}

const AsyncStorageDemo = (props: AsyncStorageDemoProps) => {
  const { } = props;
  return (
    <View style={styles.container}>
      <Text>AsyncStorageDemo</Text>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.getItem('helloworld').then((value) => {
            console.log(`helloworld: ${value}`);
          });
        }}
      >
        <Text>Get root</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AsyncStorageDemo;
