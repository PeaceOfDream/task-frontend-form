import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { switchForm, addSingUpData } from '../../store/schemaSlice';
import InputMask from 'react-input-mask';
import { FormComponent } from '../UI/Form/FormComponent';
import { FormContainer } from '../UI/FormContainer/FormContainer';
import { FormTitle } from '../UI/FormTitle/FormTitle';
import { InputComponent } from '../UI/InputComponent/InputComponent';
import { PrimaryButton } from '../UI/PrimaryButton/PrimaryButton';
import { TextField } from '@mui/material';

export const SingUpInfo = () => {
  const stateSchema = useSelector((state) => state.schemaReducer.schema);
  const stateData = useSelector((state) => state.schemaReducer.data);

  const phoneRegExp = new RegExp(stateSchema?.mobilePhone?.regExp);
  const emailRegExp = new RegExp(stateSchema?.email?.regExp);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      mobilePhone: stateData.mobilePhone,
      email: stateData.email,
      password: stateData.password,
      repeatPassword: stateData.repeatPassword,
    },
    mode: 'onBlur',
  });

  const passwordValidate = (value) => {
	

  }

  const onSubmit = (data) => {
    if (data.password === data.repeatPassword) {
      dispatch(addSingUpData(data));
      dispatch(switchForm());
    }
  };

  return (
    <FormContainer>
      <FormTitle>Sign up form</FormTitle>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="mobilePhone"
          control={control}
          rules={{
            required: { value: stateSchema?.mobilePhone?.required, message: 'Required field' },
            pattern: { value: phoneRegExp, message: 'Invalid phone number' },
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputMask mask="+375999999999" value={value} onChange={onChange} onBlur={onBlur}>
              {(inputProps) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  {...inputProps}
                  type="tel"
                  id="mobilePhone"
                  label="Mobile Phone"
                  error={!!errors?.mobilePhone}
                  helperText={errors?.mobilePhone && errors.mobilePhone.message}
                />
              )}
            </InputMask>
          )}
        />
        <InputComponent
          {...register('email', {
            required: { value: stateSchema?.email?.required, message: 'Required field' },
            pattern: {
              value: emailRegExp,
              message: 'Invalid email',
            },
          })}
          id="email"
          type="email"
          label="Email"
          name="email"
          autoComplete="email"
          error={!!errors?.email}
          helperText={errors?.email && errors.email.message}
        />

        <InputComponent
          {...register('password', {
            required: { value: stateSchema?.password?.required, message: 'Required field' },
            minLength: {
              value: stateSchema?.password?.minLength,
              message: `Minimum ${stateSchema?.password?.minLength} letters`,
            },
            maxLength: {
              value: stateSchema?.password?.maxLength,
              message: `Maximum ${stateSchema?.password?.maxLength} letters`,
            },
          })}
          id="password"
          type="password"
          label="Password"
          name="password"
          error={!!errors?.password}
          helperText={errors?.password && errors.password.message}
        />
        <InputComponent
          {...register('repeatPassword', {
            required: { value: stateSchema?.password?.required, message: 'Required field' },
            minLength: {
              value: stateSchema?.password?.minLength,
              message: `Minimum ${stateSchema?.password?.minLength} letters`,
            },
            maxLength: {
              value: stateSchema?.password?.maxLength,
              message: `Maximum ${stateSchema?.password?.maxLength} letters`,
            },
            validate: {
              matchingPassword: passwordValidate,
            },
          })}
          id="repeatPassword"
          type="password"
          label="Repeat Password"
          name="repeatPassword"
          error={!!errors?.repeatPassword}
          helperText={errors?.repeatPassword && errors.repeatPassword.message}
        />

        <PrimaryButton>Next</PrimaryButton>
      </FormComponent>
    </FormContainer>
  );
};
