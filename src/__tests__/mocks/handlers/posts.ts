import { POSTS_API_URL } from 'api/routes';
import { rest } from 'msw';
import { getPostsFixture } from '__tests__/mocks/fixtures/posts';
import { getResponse } from '__tests__/mocks/handlers/helpers';

export const postsHandlers = [
  rest.get(POSTS_API_URL, getResponse({
    body: (req) => ({
      page: parseInt(req.url.searchParams.get('page'), 10),
      posts: getPostsFixture(10),
    }),
  })),
];
