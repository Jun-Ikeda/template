import * as React from 'react';

import Providers from 'src/providers';
import RootNavigator from 'src/nav';
import DevNavigator from 'src/dev';
import SwitchNavDev from 'src/SwitchNavDev';

interface AppProps {}

const App = (props: AppProps) => {
  const [isNav, setIsNav] = React.useState(true);
  return (
    <Providers>
      {isNav ? <RootNavigator /> : <DevNavigator />}
      <SwitchNavDev isNav={isNav} setIsNav={setIsNav} />
    </Providers>
  );
};

export default App;
