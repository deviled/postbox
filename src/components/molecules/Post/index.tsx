import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { format } from 'date-fns';
import { IPost } from 'types';
import { spacing, SpacingProps } from '@material-ui/system';
import { Text } from 'components/atoms/Text';

type PostProps = SpacingProps & Pick<IPost, 'created_time' | 'message'>;

const StyledPost = styled.article(({ theme }) => css`
  font-size: ${theme.typography.fontSize[16]};
  padding: ${theme.spacing(8, 16)};
  border: 1px solid ${theme.palette.divider};
  
  ${spacing};
`);

export const Post: FC<PostProps> = ({ created_time, message, ...rest }) => (
  <StyledPost {...rest}>
    <Text as="p" fontWeight="bold">
      {format(new Date(created_time), 'MMMM d, Y hh:mm:ss')}
    </Text>
    <hr />
    <p>{message}</p>
  </StyledPost>
);
