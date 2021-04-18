import {
  MockedRequest, RequestQuery, ResponseResolver, RestContext,
} from 'msw';

interface IResponseParams {
  body: ((req: RequestQuery) => Record<string, unknown>);
  status?: number;
  delay?: number;
}

export const getResponse = ({ body = () => null, status = 200, delay = 500 }: IResponseParams) => {
  const resolver: ResponseResolver<MockedRequest, RestContext> = (req, res, ctx) => {
    ctx.delay(delay);
    ctx.status(status);
    return res(
      ctx.json({ data: typeof body === 'function' ? body(req) : body }),
    );
  };
  return resolver;
};
