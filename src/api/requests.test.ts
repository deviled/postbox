import { serverSetup } from '__tests__/mocks/serverSetup';
import { POSTS_API_URL } from 'api/routes';
import { getPostsResponse, getResponse } from '__tests__/mocks/handlers/helpers';
import { rest } from 'msw';
import * as api from './requests';

describe('requests', () => {
  const getAllPostsSpy = jest.spyOn(api, 'getAllPosts');

  describe('getAllPosts', () => {
    it('should fetch 10 pages', async () => {
      const POSTS_PER_PAGE = 10;
      const TOTAL_PAGES = 10;

      serverSetup.use(
        rest.get(POSTS_API_URL, getResponse({
          body: getPostsResponse(POSTS_PER_PAGE, TOTAL_PAGES),
        })),
      );

      const result = await api.getAllPosts();
      expect(getAllPostsSpy).toHaveBeenCalledTimes(1);
      expect(result.length).toBe(POSTS_PER_PAGE * TOTAL_PAGES);
    });

    it('should fetch 20 pages', async () => {
      const POSTS_PER_PAGE = 10;
      const TOTAL_PAGES = 20;

      serverSetup.use(
        rest.get(POSTS_API_URL, getResponse({
          body: getPostsResponse(POSTS_PER_PAGE, TOTAL_PAGES),
        })),
      );

      const result = await api.getAllPosts();
      expect(getAllPostsSpy).toHaveBeenCalledTimes(2);
      expect(result.length).toBe(POSTS_PER_PAGE * TOTAL_PAGES);
    });

    it('should accept batch number', async () => {
      const POSTS_PER_PAGE = 10;
      const TOTAL_PAGES = 10;

      serverSetup.use(
        rest.get(POSTS_API_URL, getResponse({
          body: getPostsResponse(POSTS_PER_PAGE, TOTAL_PAGES),
        })),
      );

      const result = await api.getAllPosts(1, 5);
      expect(getAllPostsSpy).toHaveBeenCalledTimes(3);
      expect(result.length).toBe(POSTS_PER_PAGE * TOTAL_PAGES);
    });
  });
});
