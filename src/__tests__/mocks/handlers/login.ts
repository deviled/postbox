import { REGISTER_API_URL } from 'api/routes';
import { rest } from 'msw';
import { getResponse } from './helpers';

export const loginHandlers = [
  rest.post(REGISTER_API_URL, getResponse({
    body: () => ({ sl_token: 'smslt_3854bdc915314_ac9e949a37206' }),
  })),
];
