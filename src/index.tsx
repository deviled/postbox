import React, { FC } from 'react';
import { render } from 'react-dom';
import './index.scss';
import { browserSetup } from '__tests__/mocks/browserSetup';

browserSetup.start();

const App: FC = () => <div />;

render(
  <App />,
  document.getElementById('root'),
);
