import { setupServer } from 'msw/node';
import { authenticationHandlers } from '__tests__/mocks/handlers/authentication';
import { postsHandlers } from '__tests__/mocks/handlers/posts';

export const serverSetup = setupServer(
  ...authenticationHandlers,
  ...postsHandlers,
);
