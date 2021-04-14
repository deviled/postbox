import { axios } from 'api/axios';
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

export const getPosts = (page: number) => axios.get<{ page: number; posts: IPost[] }>(
  POSTS_API_URL, {
    params: {
      page,
      sl_token: localStorage.getItem(LOCAL_STORAGE_TOKEN),
    },
  },
);
