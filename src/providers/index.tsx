import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import ReduxProvider from './ReduxProvider';
import PaperProvider from './PaperProvider';
import NavigationProvider from './NavigationProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = (props: ProvidersProps) => {
  const colorScheme = useColorScheme();
  const { children } = props;
  const isDark = colorScheme === 'dark';
  return (
    <ReduxProvider>
      <PaperProvider isDark={isDark}>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          translucent
          backgroundColor="transparent"
        />
        <NavigationProvider>
          {children}
        </NavigationProvider>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default Providers;
