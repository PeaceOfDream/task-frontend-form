import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addPersonalData, switchForm, switchModal } from '../../store/schemaSlice';
import { FormTitle } from '../UI/FormTitle/FormTitle';
import { FormContainer } from '../UI/FormContainer/FormContainer';
import { PrimaryButton } from '../UI/PrimaryButton/PrimaryButton';
import { FormComponent } from '../UI/Form/FormComponent';
import { InputComponent } from '../UI/InputComponent/InputComponent';
import { Button } from '@mui/material';
import { ModalComponent } from '../ModalComponent/ModalComponent';
import dayjs from 'dayjs';
import { CheckboxComponent } from '../CheckboxComponent/CheckboxComponent';
import { DateComponent } from '../DateComponent/DateComponent';
import { RadioComponent } from '../RadioComponent/RadioComponent';
import { SelectComponent } from '../SelectComponent/SelectComponent';

export const PersonalInfo = () => {
  const stateSchema = useSelector((state) => state.schemaReducer.schema);
  const stateData = useSelector((state) => state.schemaReducer.data);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: stateData.firstName,
      lastName: stateData.lastName,
      sex: stateData.sex,
      birthday: stateData.birthday,
      ocean: stateData.ocean,
      hobby: stateData.hobby,
    },
    mode: 'onBlur',
  });

  const changeInfo = (data) => {
    data.birthday = dayjs(data.birthday).format('DD-MM-YYYY');
    dispatch(addPersonalData(data));
    dispatch(switchForm());
  };

  const onSubmit = (data) => {
    data.birthday = dayjs(data.birthday).format('DD-MM-YYYY');
    dispatch(addPersonalData(data));
    dispatch(switchModal(true));
  };

  const ageValidate = (value) => {
    const age = new Date().getFullYear() - new Date(value).getFullYear();

    if (age > +stateSchema?.birthday?.maxAge) {
      return `Maximum ${stateSchema?.birthday?.maxAge} age`;
    } else if (age < +stateSchema?.birthday?.minAge) {
      return `Minimum ${stateSchema?.birthday?.minAge} age`;
    }
  };

  return (
    <FormContainer>
      <FormTitle>Sign up form</FormTitle>
      <FormComponent onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          {...register('firstName', {
            required: { value: stateSchema?.firstName?.required, message: 'Required field' },
            minLength: {
              value: stateSchema?.firstName?.minLength,
              message: `Minimum ${stateSchema?.firstName?.minLength} letters`,
            },
            maxLength: {
              value: stateSchema?.firstName?.maxLength,
              message: `Maximum ${stateSchema?.firstName?.maxLength} letters`,
            },
          })}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />

        <InputComponent
          {...register('lastName', {
            required: { value: stateSchema?.lastName?.required, message: 'Required field' },
            minLength: {
              value: stateSchema?.lastName?.minLength,
              message: `Minimum ${stateSchema?.lastName?.minLength} letters`,
            },
            maxLength: {
              value: stateSchema?.lastName?.maxLength,
              message: `Maximum ${stateSchema?.lastName?.maxLength} letters`,
            },
          })}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />

        <RadioComponent
          control={control}
          rules={{
            required: { value: stateSchema?.sex?.required, message: 'Required field' },
          }}
          name="sex"
          label="Sex"
        />

        <DateComponent
          control={control}
          name="birthday"
          label="Birthday"
          rules={{
            required: {
              value: stateSchema?.birthday?.required,
              message: 'Required field',
            },
            validate: {
              allowableАge: ageValidate,
            },
          }}
        />

        <SelectComponent
          control={control}
          name="ocean"
          label="Ocean"
          rules={{
            required: { value: stateSchema?.ocean?.required, message: 'Required field' },
          }}
          options={stateSchema?.ocean?.oneOf}
        />

        <CheckboxComponent
          control={control}
          label="Hobby"
          name="hobby"
          rules={{
            required: { value: stateSchema?.ocean?.required, message: 'Required field' },
          }}
          options={stateSchema?.hobby?.anyOf}
          row
        />

        <Button sx={{ marginBottom: '10px' }} variant="outlined" onClick={handleSubmit(changeInfo)}>
          Change SignUp Information
        </Button>
        <PrimaryButton>Complete</PrimaryButton>
        <ModalComponent />
      </FormComponent>
    </FormContainer>
  );
};
