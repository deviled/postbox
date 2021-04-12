import React, { FC } from 'react';
import { useParams } from '@reach/router';

export const PostsListView: FC = () => {
  const { id } = useParams();

  return (
    <div>{id}</div>
  );
};
