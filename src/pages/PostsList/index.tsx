import sortBy from 'lodash.sortby';
import React, { FC, Fragment, useMemo } from 'react';
import { usePostsBySenderQuery, usePostsQuery } from 'api/queries';
import { getSenderList } from 'tools/mappers/getSenderList';
import { PAGES } from 'tools/constants';
import { BaseLayout } from 'components/layouts/BaseLayout';
import { Loader } from 'components/atoms/Loader';
import { PostItem } from 'components/atoms/PostItem';

export const PostsList: FC = () => {
  const { data, isLoading } = usePostsBySenderQuery(PAGES);
  const { data: postsData } = usePostsQuery();
  const senders = useMemo(() => sortBy(getSenderList(data), 'name'), [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BaseLayout senders={senders}>
      {postsData?.pages.map(({ data: { posts, page } }) => (
        <Fragment key={page}>
          {posts.map(({ id: postId, message, created_time }) => (
            <PostItem key={postId} createdTime={created_time}>
              {message}
            </PostItem>
          ))}
        </Fragment>
      ))}
    </BaseLayout>
  );
};
