import { setupServer } from 'msw/node';
import { loginHandlers } from '__tests__/mocks/handlers/login';
import { postsHandlers } from '__tests__/mocks/handlers/posts';

export const serverSetup = setupServer(
  ...loginHandlers,
  ...postsHandlers,
);
