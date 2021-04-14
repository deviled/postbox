import React, { FC } from 'react';
import { render } from 'react-dom';
import { BaseRouting } from 'routing';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import 'normalize.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BaseRouting />
    </ThemeProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

render(
  <App />,
  document.getElementById('root'),
);
