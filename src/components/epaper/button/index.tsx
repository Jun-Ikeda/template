import * as React from 'react';
import { Button as ButtonOriginal, withTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

import { Theme } from 'src/interface';

type ButtonProps =
  React.ComponentPropsWithoutRef<typeof ButtonOriginal> & {
  colors?: string[]
  start?: [number, number]
  end?: [number, number]
  theme: Theme
}

const Button = ({
  colors = [], start = [0, 0], end = [1, 1], ...props
}: ButtonProps) => {
  const {
    children,
    mode,
    style,
    theme: { colors: { primary, accent, text }, roundness },
    color,
    ...buttonProps
  } = props;
  if (mode === 'contained') {
    let gradient = [];
    switch (colors.length) {
      case 0: gradient = [primary, accent]; break;
      case 1: gradient = [primary, ...colors]; break;
      default: gradient = colors;
    }
    return (
      <LinearGradient
        style={[style, { borderRadius: roundness }]}
        colors={gradient}
        start={start}
        end={end}
      >
        <ButtonOriginal mode="text" color={color || text} {...buttonProps}>
          {children}
        </ButtonOriginal>
      </LinearGradient>
    );
  }
  return (
    <ButtonOriginal mode={mode} style={style} color={color} {...buttonProps}>
      {children}
    </ButtonOriginal>
  );
};

export default withTheme(Button);
