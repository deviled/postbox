import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/atoms/Input';
import { Label } from 'components/atoms/Label';
import { InputError } from 'components/atoms/InputError';
import { Centered } from 'components/layouts/CenteredLayout';
import { IRegisterParams } from 'api/requests';
import { useRegisterQuery } from 'api/mutators';
import { Loader } from 'components/atoms/Loader';
import { Form } from './components/Form';

export const Register: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterParams>();
  const { isLoading, mutateAsync: registerUser } = useRegisterQuery();

  const onSubmit = useCallback(async (values: IRegisterParams) => {
    await registerUser(values);
  }, [registerUser]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Centered>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name
          <Input
            type="text"
            isError={!!errors.name}
            {...register('name', { required: true })}
          />
          {errors.name && <InputError>Required</InputError>}
        </Label>

        <Label>
          Email
          <Input
            type="email"
            isError={!!errors.email}
            {...register('email', { required: true })}
          />
          {errors.email && <InputError>Required</InputError>}
        </Label>

        <Input type="submit" />
      </Form>
    </Centered>
  );
};
