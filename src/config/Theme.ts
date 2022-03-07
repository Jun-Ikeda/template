import { DefaultTheme as DefaultThemeOriginal, DarkTheme as DarkThemeOriginal } from 'react-native-paper';
import { merge } from 'lodash';

import { Theme } from 'src/interface';
import Color from './Color';

const primary = Color.green[4];
const accent = Color.green[7];

const light: Theme = merge(
  DefaultThemeOriginal,
  { colors: { primary, accent, background: Color.white[0] } },
);

const dark: Theme = merge(
  DarkThemeOriginal,
  {
    colors: {
      primary,
      accent,
      background: Color.grey[9],
      text: Color.grey[1],
      surface: Color.grey[8],
    },
  },
);

export default { light, dark };
export { light, dark };
