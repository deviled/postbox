import React, { FC, ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import {
  createHistory, createMemorySource, LocationProvider, Router,
} from '@reach/router';
import { render as rootRender, RenderOptions } from '@testing-library/react';
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

const RouteProviders = (route: string): FC => ({ children }) => (
  <Providers>
    <LocationProvider history={createHistory(createMemorySource(route))}>
      <Router>
        {children}
      </Router>
    </LocationProvider>
  </Providers>
);

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => rootRender(
  ui,
  {
    wrapper: Providers,
    ...options,
  },
);

interface IRenderRouteOptions extends Omit<RenderOptions, 'queries'> {
  route?: string;
}

const renderRoute = (ui: ReactElement, { route = '/', ...options }: IRenderRouteOptions = {}) => rootRender(
  ui,
  {
    wrapper: RouteProviders(route),
    ...options,
  },
);

export * from '@testing-library/react';

export { render, renderRoute };
