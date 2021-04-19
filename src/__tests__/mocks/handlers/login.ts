import { REGISTER_API_URL } from 'api/routes';
import { rest } from 'msw';
import { getResponse } from './helpers';

export const loginHandlers = [
  rest.post(REGISTER_API_URL, getResponse({
    status: 500,
  })),
];
