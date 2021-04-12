import React, { FC } from 'react';
import { render } from 'react-dom';
import { BaseRouting } from 'routing';

import 'normalize.css';

const mockServiceWorker = async () => {
  const { browserSetup: { start } } = await import('__tests__/mocks/browserSetup');
  await start({ waitUntilReady: true });
};

const App: FC = () => {
  if (process.env.NODE_ENV === 'development') {
    mockServiceWorker();
  }
  return <BaseRouting />;
};

render(
  <App />,
  document.getElementById('root'),
);
