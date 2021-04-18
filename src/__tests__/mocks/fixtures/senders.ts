import { ISender } from 'types';
import { getPostsFixture } from './posts';

const getSenderFixture = (props?: Partial<ISender>): ISender => ({
  id: 'user_1',
  name: 'Britany Heise',
  posts: getPostsFixture(10),
  ...props,
});

const getSendersFixture = (length: number = 10): ISender[] => Array.from({ length },
  (_, index) => getSenderFixture({
    id: `user_${index}`,
    name: `Name ${index}`,
    posts: getPostsFixture(index),
  }));

export { getSenderFixture, getSendersFixture };
