import { ISender } from 'types';

const getSenderFixture = (props?: Partial<ISender>): ISender => ({
  id: 'user_1',
  name: 'Britany Heise',
  count: 10,
  ...props,
});

const getSendersFixture = (length: number): ISender[] => Array.from({ length },
  (_, index) => getSenderFixture({
    id: `user_${index}`,
    name: `User ${index}`,
    count: index * 10,
  }));

export { getSenderFixture, getSendersFixture };
