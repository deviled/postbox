import styled, { css } from 'styled-components';
import {
  border, BordersProps, palette, PaletteProps, sizing, SizingProps, spacing, SpacingProps,
} from '@material-ui/system';

type InputProps = SpacingProps & PaletteProps & BordersProps & SizingProps;

export const Input = styled.input<InputProps>(({ theme }) => css<InputProps>`
  font-size: ${theme.typography.fontSize[16]};
  color: ${theme.palette.text};
  padding: ${theme.spacing(12)};
  border: 1px solid ${theme.palette.divider};
  background-color: ${theme.palette.white};

  ${spacing};
  ${palette};
  ${border};
  ${sizing};
  
  &:hover {
    border-color: ${theme.palette.text};
  }
`);
