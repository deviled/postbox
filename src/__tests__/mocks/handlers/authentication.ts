import { REGISTER_API_URL } from 'api/routes';
import { rest } from 'msw';

export const authenticationHandlers = [
  rest.post(REGISTER_API_URL, (req, res, ctx) => res(
    ctx.delay(1000),
    ctx.status(200),
    ctx.json({
      sl_token: '123456789',
      client_id: '987654321',
      email: 'test@example.com',
    }),
  )),
];
