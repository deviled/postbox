import groupBy from 'lodash.groupby';
import React, { FC, useMemo } from 'react';
import { useAllPostsQuery } from 'api/queries';
import { useParams } from '@reach/router';
import { Loader } from 'components/molecules/Loader';
import { getSendersList } from 'tools/mappers/getSendersList';
import { FlexBox } from 'components/atoms/Grid';
import { SendersList } from 'components/organisms/SendersList';
import { PostsList } from 'components/organisms/PostsList';

export const Sender: FC = () => {
  const { id } = useParams();
  const { isLoading, data: posts } = useAllPostsQuery();
  const groupedPosts = useMemo(() => groupBy(posts, 'from_id'), [posts]);
  const senders = useMemo(() => getSendersList(groupedPosts), [posts]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlexBox>
      <FlexBox flexBasis="20%">
        <SendersList senders={senders} activeId={id} />
      </FlexBox>
      <PostsList posts={groupedPosts[id]} />
    </FlexBox>
  );
};
