import { POSTS_API_URL } from 'api/routes';
import { rest } from 'msw';
import { getPostsFixture } from '__tests__/mocks/fixtures/posts';

export const postsHandlers = [
  rest.post(POSTS_API_URL, (req, res, ctx) => res(
    ctx.delay(500),
    ctx.status(200),
    ctx.json(getPostsFixture(10)),
  )),
];
