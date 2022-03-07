import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

interface NavigationProviderProps {
  children: React.ReactNode
}

const NavigationProvider = (props: NavigationProviderProps) => {
  const { children } = props;
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
