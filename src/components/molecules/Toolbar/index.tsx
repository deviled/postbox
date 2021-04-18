import styled from 'styled-components';
import {
  flexbox, FlexboxProps, spacing, SpacingProps,
} from '@material-ui/system';

export const Toolbar = styled.header<SpacingProps & FlexboxProps>`
  display: flex;
  justify-content: space-between;
  
  ${spacing};
  ${flexbox};
`;
