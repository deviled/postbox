import React, { ComponentPropsWithRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface IInputProps extends ComponentPropsWithRef<'input'> {
  isError?: boolean;
}

const StyledInput = styled.input<IInputProps>(({ theme, type, isError }) => css`
  width: auto;
  padding: ${theme.spacing(8)};
  margin: ${theme.spacing(4, 0)};
  border: ${theme.borders[1]};
  border-color: ${isError ? theme.palette.error : theme.palette.background};
  background-color: ${type === 'submit' ? theme.palette.primary : theme.palette.white};
`);

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));
