import { setupWorker } from 'msw';
import { loginHandlers } from '__tests__/mocks/handlers/login';
import { postsHandlers } from '__tests__/mocks/handlers/posts';

export const browserSetup = setupWorker(
  ...loginHandlers,
  ...postsHandlers,
);
