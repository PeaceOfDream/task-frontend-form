import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useController } from 'react-hook-form';
import InputMask from 'react-input-mask';

export const PhoneComponent = ({ name, control, rules, label, mask }) => {
  const {
    formState: { errors },
  } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputMask mask={mask} {...field}>
          {(inputProps) => (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              {...inputProps}
              type="tel"
              label={label}
              error={!!errors?.mobilePhone}
              helperText={errors?.mobilePhone && errors.mobilePhone.message}
            />
          )}
        </InputMask>
      )}
    />
  );
};
