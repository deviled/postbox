import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { formatDate } from 'tools/formatDate';
import { IPost } from 'types';

const Article = styled.article(({ theme }) => css`
  font-size: ${theme.fontSize[16]};
  padding: ${theme.spacing(4, 16)};
  border: ${theme.borders[1]};
  margin-bottom: ${theme.spacing(16)};
`);

interface IPostItemProps {
  createdTime: IPost['created_time'];
}

export const PostItem: FC<IPostItemProps> = ({ children, createdTime }) => (
  <Article>
    <p>{formatDate(createdTime)}</p>
    <hr />
    <p>{children}</p>
  </Article>
);
