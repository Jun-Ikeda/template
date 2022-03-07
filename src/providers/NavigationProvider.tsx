import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Theme } from 'src/interface';

interface NavigationProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

const NavigationProvider = (props: NavigationProviderProps) => {
  const { children, theme } = props;
  return (
    <NavigationContainer theme={theme}>
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
