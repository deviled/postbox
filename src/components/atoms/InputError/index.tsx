import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const StyledText = styled.div(({ theme }) => css`
  font-size: ${theme.fontSize[12]};
  color: ${theme.palette.error};
`);

export const InputError: FC = ({ children }) => (
  <StyledText>{children}</StyledText>
);
