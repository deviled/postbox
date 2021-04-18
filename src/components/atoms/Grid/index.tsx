import styled from 'styled-components';
import {
  flexbox, FlexboxProps, palette, PaletteProps, sizing, SizingProps, spacing, SpacingProps,
} from '@material-ui/system';

export type FlexProps = FlexboxProps & SpacingProps & PaletteProps & SizingProps;

export const FlexBox = styled.div<FlexProps>`
  display: flex;
  ${sizing}
  ${palette};
  ${spacing};
  ${flexbox};
`;

export const FlexCol = styled(FlexBox)`
  flex-direction: column; 
`;
