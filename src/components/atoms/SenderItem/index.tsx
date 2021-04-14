import React, { ComponentPropsWithRef, forwardRef } from 'react';
import { ISender } from 'types';
import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  isActive?: boolean;
}

const StyledButton = styled.button<IStyledButtonProps>(({ theme, isActive }) => css`
  padding: ${theme.spacing(16)};
  appearance: none;
  font-size: ${theme.fontSize[16]};
  margin-bottom: ${theme.spacing(16)};
  border: ${theme.borders[1]};
  background-color: ${isActive ? theme.palette.info : 'initial'};
`);

const StyledSpan = styled.span(({ theme }) => css`
  padding: ${theme.spacing(4, 8)};
  border-radius: 50%;
  margin-left: ${theme.spacing(8)};
  background: ${theme.palette.background};
`);

interface ISenderItem extends IStyledButtonProps, ComponentPropsWithRef<'button'> {
  name: ISender['name'];
  count: ISender['count'];
}

export const SenderItem = forwardRef<HTMLButtonElement, ISenderItem>(
  ({ name, count, ...rest }, ref) => (
    <StyledButton ref={ref} {...rest}>
      {name}
      <StyledSpan>{count}</StyledSpan>
    </StyledButton>
  ),
);
