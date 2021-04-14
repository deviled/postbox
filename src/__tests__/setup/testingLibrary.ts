import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { serverSetup } from '__tests__/mocks/serverSetup';

beforeAll(() => serverSetup.listen());
afterEach(() => serverSetup.resetHandlers());
afterAll(() => serverSetup.close());
