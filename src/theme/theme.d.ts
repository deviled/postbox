import 'styled-components';

import { Palette } from './palette';
import { Typography } from './typography';
import { Space } from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    spacing: (...args: Space[]) => string;
    typography: Typography;
  }
}
