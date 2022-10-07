import { useState } from 'react';
import { useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { switchForm, addSingUpData } from '../../../store/schemaSlice';
import { FormComponent } from '../../UI/Form/FormComponent';
import { FormContainer } from '../../UI/FormContainer/FormContainer';
import { FormTitle } from '../../UI/FormTitle/FormTitle';
import { InputComponent } from '../../UI/InputComponent/InputComponent';
import { PrimaryButton } from '../../UI/PrimaryButton/PrimaryButton';
import { FormHelperText} from '@mui/material';
import { PhoneComponent } from '../../PhoneComponent/PhoneComponent';

export const SingUpInfo = () => {
  const [isMatch, setIsMatch] = useState(true);
  const { mobilePhone, email, password } = useSelector((state) => state.schemaReducer.schema);
  const stateData = useSelector((state) => state.schemaReducer.data);

  const phoneRegExp = new RegExp(mobilePhone?.regExp);
  const emailRegExp = new RegExp(email?.regExp);

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

  const onSubmit = (data) => {
    if (data.password !== data.repeatPassword) {
      setIsMatch(false);
    } else {
      setIsMatch(true);
      dispatch(addSingUpData(data));
      dispatch(switchForm());
    }
  };

  return (
    <FormContainer>
      <FormTitle>Sign up form</FormTitle>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <PhoneComponent
          name="mobilePhone"
          control={control}
          label="Mobile Phone"
          mask="+375999999999"
          rules={{
            required: { value: mobilePhone?.required, message: 'Required field' },
            pattern: { value: phoneRegExp, message: 'Invalid phone number' },
          }}
        />

        <InputComponent
          {...register('email', {
            required: { value: email?.required, message: 'Required field' },
            pattern: {
              value: emailRegExp,
              message: 'Invalid email',
            },
          })}
          type="email"
          label="Email"
          name="email"
          autoComplete="email"
          error={!!errors?.email}
          helperText={errors?.email && errors.email.message}
        />

        <InputComponent
          {...register('password', {
            required: { value: password?.required, message: 'Required field' },
            minLength: {
              value: password?.minLength,
              message: `Minimum ${password?.minLength} letters`,
            },
            maxLength: {
              value: password?.maxLength,
              message: `Maximum ${password?.maxLength} letters`,
            },
          })}
          type="password"
          label="Password"
          name="password"
          error={!!errors?.password}
          helperText={errors?.password && errors.password.message}
        />
        <InputComponent
          {...register('repeatPassword', {
            required: { value: password?.required, message: 'Required field' },
            minLength: {
              value: password?.minLength,
              message: `Minimum ${password?.minLength} letters`,
            },
            maxLength: {
              value: password?.maxLength,
              message: `Maximum ${password?.maxLength} letters`,
            },
          })}
          type="password"
          label="Repeat Password"
          name="repeatPassword"
          error={!!errors?.repeatPassword}
          helperText={errors?.repeatPassword && errors.repeatPassword.message}
        />
        {!isMatch && (
          <FormHelperText sx={{ mb: 1 }} error>
            Password does not match
          </FormHelperText>
        )}
        <PrimaryButton>Next</PrimaryButton>
      </FormComponent>
    </FormContainer>
  );
};
