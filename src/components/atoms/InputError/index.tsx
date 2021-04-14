import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledError = styled.div(({ theme }) => css`
  font-size: ${theme.fontSize[12]};
  color: ${theme.palette.error};
`);

export const InputError: FC = ({ children }) => (
  <StyledError>{children}</StyledError>
);
