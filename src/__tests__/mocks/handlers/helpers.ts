import {
  MockedRequest, RequestQuery, ResponseResolver, RestContext,
} from 'msw';
import { getPostsFixture } from '__tests__/mocks/fixtures/posts';

export const getPostsResponse = (size = 10, lastPage = 15) => (req: RequestQuery) => {
  const page = parseInt(req.url.searchParams.get('page'), 10);
  return {
    page: page <= lastPage ? page : lastPage,
    posts: getPostsFixture(size),
  };
};

interface IResponseParams {
  body?: ((req: RequestQuery) => Record<string, unknown>);
  status?: number;
  delay?: number;
}

export const getResponse = ({ body = () => null, status = 200, delay = 500 }: IResponseParams) => {
  const resolver: ResponseResolver<MockedRequest, RestContext> = (req, res, ctx) => res(
    ctx.delay(delay),
    ctx.status(status),
    ctx.json({ data: typeof body === 'function' ? body(req) : body }),
  );
  return resolver;
};
