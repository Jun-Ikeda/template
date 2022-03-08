import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Theme } from 'src/interface';

interface NavigationProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const NavState_Key = 'NavState_Key';
const NavigationProvider = (props: NavigationProviderProps) => {
  const { children, theme } = props;
  const [isReady, setIsReady] = React.useState(false);
  const [initialNavState, setInitialNavState] = React.useState();

  React.useEffect(() => {
    const restoreNavState = async () => {
      try {
        const savedNavStateString = await AsyncStorage.getItem(NavState_Key);
        const state = savedNavStateString ? JSON.parse(savedNavStateString) : undefined;
        if (state !== undefined) { setInitialNavState(state); }
      } catch (e) {
        console.error(e);
      } finally {
        setIsReady(true);
      }
    };
    if (!isReady) { restoreNavState(); }
  }, [isReady]);

  const saveNavState = (navState) => {
    AsyncStorage.setItem(NavState_Key, JSON.stringify(navState));
  };

  if (!isReady) { return null; }
  return (
    <NavigationContainer theme={theme} initialState={initialNavState} onStateChange={saveNavState}>
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
