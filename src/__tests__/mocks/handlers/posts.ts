import { POSTS_API_URL } from 'api/routes';
import { rest } from 'msw';
import { getResponse, getPostsResponse } from '__tests__/mocks/handlers/helpers';

export const postsHandlers = [
  rest.get(POSTS_API_URL, getResponse({
    body: getPostsResponse(15),
  })),
];
