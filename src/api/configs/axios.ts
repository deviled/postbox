import axios from 'axios';
import { navigate } from '@reach/router';
import { LOGIN_PAGE_PATH } from 'routing/routes';

axios.interceptors.response.use((response) => response.data);
axios.interceptors.response.use(null, async () => {
  await navigate(LOGIN_PAGE_PATH);
});

export { axios };
