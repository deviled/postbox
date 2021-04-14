import 'styled-components';
import { Palette } from './palette';
import { FontSize } from './fontSize';
import { spacing } from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: FontSize;
    palette: Palette;
    spacing: typeof spacing;
    borders: string[];
  }
}
