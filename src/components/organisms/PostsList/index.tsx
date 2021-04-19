import React, { FC } from 'react';
import { IPost } from 'types';
import { FlexBox, FlexCol } from 'components/atoms/Grid';
import { Post } from 'components/molecules/Post';
import { Toolbar } from 'components/molecules/Toolbar';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { usePagination } from 'tools/hooks/usePagination';
import { useSearch } from 'tools/hooks/useSearch';
import { useOrder } from 'tools/hooks/useOrder';
import { PAGE_SIZE } from 'tools/constants';

interface IPostsList {
  posts: IPost[];
}

const DEFAULT_POSTS: IPost[] = [];

export const PostsList: FC<IPostsList> = ({ posts: initialItems = DEFAULT_POSTS }) => {
  const { items: filteredItems, setSearch } = useSearch<IPost>(initialItems, ['message']);
  const { items: orderedItems, setOrder } = useOrder<IPost>(filteredItems, ['created_time']);
  const { items: paginatedItems, nextPage } = usePagination<IPost>(orderedItems, PAGE_SIZE);

  return (
    <FlexCol p={16} flex={1}>
      <Toolbar mb={32}>
        <FlexBox>
          <Button
            py={12}
            px={24}
            mr={12}
            onClick={() => setOrder('desc')}
            color="text"
            bgcolor="background"
          >
            Latest
          </Button>
          <Button
            py={12}
            px={24}
            mr={12}
            onClick={() => setOrder('asc')}
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </Toolbar>
      <FlexCol data-testid="posts-list">
        {paginatedItems.map(({ id, message, created_time }) => (
          <Post
            data-testid={id}
            key={id}
            message={message}
            created_time={created_time}
            mb={16}
          />
        ))}
      </FlexCol>
      <Button
        onClick={nextPage}
        disabled={filteredItems.length === paginatedItems.length}
      >
        Load more
      </Button>
    </FlexCol>
  );
};
