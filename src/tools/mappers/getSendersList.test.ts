import { getPostsFixture } from '__tests__/mocks/fixtures/posts';
import { getSendersList } from 'tools/mappers/getSendersList';
import { ISender } from 'types';

describe('getSendersList', () => {
  const posts = getPostsFixture(10);

  it('should return empty array if empty array passed', () => {
    const sendersList: ISender[] = getSendersList();

    expect(sendersList).toHaveLength(0);
  });

  it('should return empty array if no data passed', () => {
    const sendersList: ISender[] = getSendersList();

    expect(sendersList).toHaveLength(0);
  });

  it('should generate senders list', () => {
    const sendersList: ISender[] = getSendersList(posts);

    expect(sendersList).toHaveLength(10);
  });
});
