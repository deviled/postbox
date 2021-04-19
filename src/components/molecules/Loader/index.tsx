import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { FlexCol } from 'components/atoms/Grid';
import { FlexboxProps, SizingProps } from '@material-ui/system';

export const Spinner = styled.span(({ theme }) => css`
  display: flex;
  margin: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${theme.palette.info};
  position: relative;
  animation: rotate 1s infinite linear;
  transform: translateZ(0);
  
  &:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${theme.palette.white};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);

export const Loader: FC<SizingProps & FlexboxProps> = (props) => (
  <FlexCol data-testid="loader" minHeight="100vh" {...props}>
    <Spinner />
  </FlexCol>
);
