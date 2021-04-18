import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/atoms/Input';
import { Text } from 'components/atoms/Text';
import { IRegisterParams } from 'api/requests';
import { useRegisterQuery } from 'api/mutators';
import { Loader } from 'components/molecules/Loader';
import { Button } from 'components/atoms/Button';
import { FlexCol } from 'components/atoms/Grid';
import { Form } from './components/Form';

export const Login: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterParams>();
  const { isLoading, mutateAsync: registerUser } = useRegisterQuery();

  const onSubmit = useCallback(async (values: IRegisterParams) => {
    await registerUser(values);
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
      </Form>
    </FlexCol>
  );
};
