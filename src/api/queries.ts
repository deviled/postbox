import { useQuery } from 'react-query';
import { getAllPosts } from './requests';
import { POSTS_KEY } from './queryKeys';

export const useAllPostsQuery = () => useQuery(
  POSTS_KEY, () => getAllPosts(),
);
