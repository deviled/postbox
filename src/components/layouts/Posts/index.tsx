import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

export const Posts: FC<RouteComponentProps> = ({ children }) => (
  <div>{ children }</div>
);
