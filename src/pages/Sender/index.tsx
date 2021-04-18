import sortBy from 'lodash.sortby';
import React, { FC, useCallback, useMemo } from 'react';
import { useAllPostsQuery } from 'api/queries';
import { useParams } from '@reach/router';
import { Loader } from 'components/molecules/Loader';
import { getSendersList } from 'tools/mappers/getSendersList';
import { FlexBox } from 'components/atoms/Grid';
import { SendersList } from 'components/organisms/SendersList';
import { PostsList } from 'components/organisms/PostsList';
import { ISender } from 'types';

export const Sender: FC = () => {
  const { id } = useParams();
  const { isLoading, data: posts } = useAllPostsQuery();
  const senders = useMemo(() => sortBy(getSendersList(posts), 'name'), [posts]);
  const isActive = useCallback((sender: ISender) => sender?.id === id, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlexBox>
      <FlexBox flexBasis="20%">
        <SendersList senders={senders} activeId={id} />
      </FlexBox>
      <PostsList key={id} posts={[...senders.find(isActive)?.posts]} />
    </FlexBox>
  );
};
