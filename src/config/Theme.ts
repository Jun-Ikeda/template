import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { merge } from 'lodash';

import { Theme } from 'src/interface';
import Color from './Color';

const primary = Color.green[4];
const accent = Color.green[15];

const light: Theme = merge(
  PaperDefaultTheme,
  NavigationDefaultTheme,
  { colors: { primary, accent, background: Color.white[0] } },
);

const dark: Theme = merge(
  PaperDarkTheme,
  NavigationDarkTheme,
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
