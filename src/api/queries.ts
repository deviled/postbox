import groupBy from 'lodash.groupby';
import { useInfiniteQuery, useQuery } from 'react-query';
import { getPosts } from './requests';
import { getPostsKey, POSTS_KEY } from './queryKeys';

export const usePostsBySenderQuery = (page: number) => {
  const { data: resp, ...rest } = useQuery(
    getPostsKey(page), async () => getPosts(page),
  );
  return { data: groupBy(resp?.data.posts, 'from_id'), ...rest };
};

export const usePostsQuery = () => useInfiniteQuery(
  POSTS_KEY, async ({ pageParam }) => getPosts(pageParam),
);
