import React, { FC } from 'react';
import { getSendersFixture } from '__tests__/mocks/fixtures/senders';
import { screen, renderRoute } from '__tests__/utils';
import { POSTS_LIST_PATH, POSTS_VIEW_PATH } from 'routing/routes';
import { RouteComponentProps } from '@reach/router';
import userEvent from '@testing-library/user-event';
import { BaseLayout } from '.';

const TEST_ID = 'user_4';
const SENDERS = 10;

describe('BaseLayout.tsx', () => {
  const senders = getSendersFixture(SENDERS);

  const Route: FC<RouteComponentProps> = () => (
    <BaseLayout senders={senders}>
      Content of posts
    </BaseLayout>
  );

  it('should have rendered items', () => {
    renderRoute(<Route path={POSTS_LIST_PATH} />, { route: POSTS_LIST_PATH });

    expect(screen.getByRole('complementary').children).toHaveLength(SENDERS);
  });

  it('should render content', async () => {
    renderRoute(<Route path={POSTS_LIST_PATH} />, { route: POSTS_LIST_PATH });

    userEvent.click(screen.getByTestId(TEST_ID));

    expect(screen.getByText(/Content of posts/)).toBeInTheDocument();
  });

  it('should navigate to post view', async () => {
    renderRoute(<Route path={POSTS_LIST_PATH} />, { route: POSTS_LIST_PATH });

    userEvent.click(screen.getByTestId(TEST_ID));

    expect(window.location.pathname).toBe(POSTS_VIEW_PATH.replace(':id', TEST_ID));
  });
});
