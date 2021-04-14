import React, { ComponentPropsWithRef, forwardRef } from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input(({ theme }) => css`
  width: auto;
  padding: ${theme.spacing(8)};
  margin: ${theme.spacing(4, 0)};
`);

type IInputProps = ComponentPropsWithRef<'input'>;

export const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
  <StyledInput ref={ref} {...props} />
));
