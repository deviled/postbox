import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/atoms/Input';
import { Text } from 'components/atoms/Text';
import { IRegisterParams } from 'api/requests';
import { useRegisterQuery } from 'api/mutators';
import { Button } from 'components/atoms/Button';
import { FlexBox, FlexCol } from 'components/atoms/Grid';
import { ERROR_MESSAGE } from 'tools/constants';
import { Loader } from 'components/molecules/Loader';
import { Form } from './components/Form';

interface IFormValues extends IRegisterParams {
  error?: string;
}

export const Login: FC = () => {
  const { isLoading, mutateAsync: registerUser } = useRegisterQuery();
  const {
    register, handleSubmit, setError, formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit = useCallback(async (values: IRegisterParams) => {
    try {
      await registerUser(values);
    } catch {
      setError('error', { message: ERROR_MESSAGE });
    }
  }, [registerUser]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlexCol alignItems="center" justifyContent="center" minHeight="100vh">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexCol mb={16}>
          <Text htmlFor="name" as="label" mb={8}>Name</Text>
          <Input
            id="name"
            type="text"
            mb={8}
            {...register('name', { required: true })}
          />
          {errors.name && <Text color="error">Required</Text>}
        </FlexCol>

        <FlexCol mb={24}>
          <Text htmlFor="email" as="label" mb={8}>Email</Text>
          <Input
            id="email"
            type="email"
            mb={8}
            {...register('email', { required: true })}
          />
          {errors.email && <Text color="error">Required</Text>}
        </FlexCol>

        <Button type="submit">Submit</Button>

        <FlexBox mt={16} justifyContent="center">
          <Text color="error">{errors.error?.message}</Text>
        </FlexBox>
      </Form>
    </FlexCol>
  );
};
