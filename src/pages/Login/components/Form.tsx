import styled, { css } from 'styled-components';

export const Form = styled.form(({ theme }) => css`
  width: 20rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.background};
  padding: ${theme.spacing(32)};
`);
