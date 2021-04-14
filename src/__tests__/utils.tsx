import React, { FC, ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { queryClient } from 'api/queryClient';
import { theme } from 'theme';

const Providers: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => render(ui, {
  wrapper: Providers,
  ...options,
});

export * from '@testing-library/react';

export { customRender as render };
