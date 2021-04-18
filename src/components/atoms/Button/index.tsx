import styled, { css } from 'styled-components';
import {
  palette, PaletteProps, spacing, SpacingProps,
} from '@material-ui/system';

type ButtonProps = PaletteProps & SpacingProps;

export const Button = styled.button<ButtonProps>(({ theme }) => css<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(16, 32)};
  cursor: pointer;
  appearance: none;
  text-decoration: none;
  color: ${theme.palette.white};
  font-size: ${theme.typography.fontSize[16]};
  border: none;
  background-color: ${theme.palette.primary};

  &:hover {
    filter: brightness(85%);
  }

  &:disabled {
    filter: initial;
    background-color: ${theme.palette.background};
  }
  
  ${palette};
  ${spacing};
`);
