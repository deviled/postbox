import React, { FC } from 'react';
import { IPost } from 'types';
import { FlexBox, FlexCol } from 'components/atoms/Grid';
import { Post } from 'components/molecules/Post';
import { Toolbar } from 'components/molecules/Toolbar';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { usePagination } from 'tools/hooks/usePagination';

interface IPostsList {
  posts: IPost[];
}

const DEFAULT_POSTS: IPost[] = [];

export const PostsList: FC<IPostsList> = ({ posts = DEFAULT_POSTS }) => {
  const { items, loadMore } = usePagination<IPost>(posts, 10);

  return (
    <FlexCol p={16} flex={1}>
      <Toolbar mb={32}>
        <FlexBox>
          <Button
            py={12}
            px={24}
            mr={12}
            // onClick={orderDesc}
            color="text"
            bgcolor="background"
          >
            Latest
          </Button>
          <Button
            py={12}
            px={24}
            mr={12}
            // onClick={orderAsc}
            color="text"
            bgcolor="background"
          >
            Oldest
          </Button>
        </FlexBox>
        <Input
          minWidth="15rem"
          py={12}
          px={24}
          placeholder="Search ..."
        />
      </Toolbar>
      {items.map(({ id, message, created_time }) => (
        <Post
          key={id}
          message={message}
          created_time={created_time}
          mb={16}
        />
      ))}
      <Button
        onClick={loadMore}
        disabled={posts.length === items.length}
      >
        Load more
      </Button>
    </FlexCol>
  );
};
