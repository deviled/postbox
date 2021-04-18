import uniqBy from 'lodash.uniqby';
import flatMap from 'lodash.flatmap';
import { axios } from 'api/configs/axios';
import { POSTS_API_URL, REGISTER_API_URL } from 'api/routes';
import { CLIENT_ID, LOCAL_STORAGE_TOKEN } from 'tools/constants';
import { IPost } from 'types';

export interface IRegisterParams {
  name: string;
  email: string;
}

export const register = ({ name, email }: IRegisterParams) => axios.post<{ sl_token: string }>(
  REGISTER_API_URL, {
    name,
    email,
    client_id: CLIENT_ID,
  },
);

export interface IPostsResponse {
  page: number;
  posts: IPost[];
}

const getPosts = (page: number) => axios.get<IPostsResponse>(
  POSTS_API_URL, {
    params: {
      page,
      sl_token: localStorage.getItem(LOCAL_STORAGE_TOKEN),
    },
  },
);

const getBatch = (cursor: number, batch: number) => Promise.all<IPostsResponse>(
  Array.from({ length: batch }, async (_, index) => {
    const resp = await getPosts(cursor + index);
    return resp?.data;
  }),
);

export const getAllPosts = async (cursor = 1, batch = 11): Promise<IPost[]> => {
  const nextCursor = cursor + batch;
  const data = uniqBy(await getBatch(cursor, batch), 'page');
  const posts = flatMap(data.filter(Boolean), 'posts');
  if (data.length === 1 && batch % 2 === 1) return [];
  if (data.length < batch) return posts;
  return [...posts, ...(await getAllPosts(nextCursor, batch))];
};
