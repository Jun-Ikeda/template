import * as React from 'react';

import { Provider } from 'react-native-paper';

import { Theme } from 'src/config';

interface PaperProviderProps {
  children: React.ReactNode;
  isDark: boolean;
}

const PaperProvider = (props: PaperProviderProps) => {
  const { children, isDark } = props;
  return (
    <Provider theme={isDark ? Theme.dark : Theme.light}>
      {children}
    </Provider>
  );
};

export default PaperProvider;
