import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled, { css } from 'styled-components';

type ILabelProps = ComponentPropsWithoutRef<'label'>;

const StyledLabel = styled.label(({ theme }) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing(16)};
  
  &:last-of-type {
    margin-bottom: ${theme.spacing(24)};
  }
`);

export const Label: FC<ILabelProps> = ({ children, ...rest }) => (
  <StyledLabel {...rest}>{children}</StyledLabel>
);
