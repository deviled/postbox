import styled, { css } from 'styled-components';
import {
  palette,
  PaletteProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
} from '@material-ui/system';

type TextProps = SpacingProps & PaletteProps & TypographyProps;

export const Text = styled.span<TextProps>(({ theme }) => css<TextProps>`
  font-size: ${theme.typography.fontSize[16]};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.palette.text};
  
  ${palette};
  ${spacing};
  ${typography};
`);
