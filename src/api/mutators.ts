import { register } from 'api/requests';
import { useMutation } from 'react-query';
import { LOCAL_STORAGE_TOKEN } from 'tools/constants';
import { navigate } from '@reach/router';
import { POSTS_PAGE_PATH } from 'routing/routes';

export const useRegisterQuery = () => useMutation(register, {
  onSuccess: async ({ data }) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN, data.sl_token);
    navigate(POSTS_PAGE_PATH);
  },
});
