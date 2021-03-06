import sortBy from 'lodash.sortby';
import React, { FC, useMemo } from 'react';
import { useAllPostsQuery } from 'api/queries';
import { Loader } from 'components/molecules/Loader';
import { PostsList } from 'components/organisms/PostsList';
import { FlexBox } from 'components/atoms/Grid';
import { SendersList } from 'components/organisms/SendersList';
import { getSendersList } from 'tools/mappers/getSendersList';

export const Posts: FC = () => {
  const { isLoading, data: posts } = useAllPostsQuery();
  const senders = useMemo(() => sortBy(getSendersList(posts), 'name'), [posts]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlexBox>
      <FlexBox flexBasis="20%">
        <SendersList senders={senders} />
      </FlexBox>
      <PostsList posts={posts} />
    </FlexBox>
  );
};
