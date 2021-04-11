import { setupWorker } from 'msw';
import { authenticationHandlers } from '__tests__/mocks/handlers/authentication';
import { postsHandlers } from '__tests__/mocks/handlers/posts';

export const browserSetup = setupWorker(
  ...authenticationHandlers,
  ...postsHandlers,
);
