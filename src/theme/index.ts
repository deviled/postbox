import { DefaultTheme } from 'styled-components';
import { spacing } from 'theme/spacing';
import { fontSize } from './fontSize';
import { palette } from './palette';

export const theme: DefaultTheme = {
  spacing,
  palette,
  fontSize,
  borders: [
    'none',
    '1px solid lightgray',
  ],
};
