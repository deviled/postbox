import sortBy from 'lodash.sortby';
import React, { FC, useMemo } from 'react';
import { usePostsBySenderQuery } from 'api/queries';
import { getSenderList } from 'tools/mappers/getSenderList';
import { PAGES } from 'tools/constants';
import { Layout } from 'components/layouts/Layout';
import { useParams } from '@reach/router';
import { PostItem } from 'components/atoms/PostItem';
import { IPost } from 'types';

const DEFAULT_POSTS: IPost[] = [];

export const PostsView: FC = () => {
  const { id } = useParams();
  const { data, isLoading } = usePostsBySenderQuery(PAGES);
  const posts = data[id] ?? DEFAULT_POSTS;
  const senders = useMemo(() => sortBy(getSenderList(data), 'name'), [data]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout senders={senders}>
      {posts.map(({ id: postId, message, created_time }) => (
        <PostItem key={postId} createdTime={created_time}>
          {message}
        </PostItem>
      ))}
    </Layout>
  );
};
