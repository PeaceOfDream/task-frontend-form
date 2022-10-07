import { FormHelperText, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { Controller, useController } from 'react-hook-form';

export const DateComponent = ({ control, name, label, rules, inputFormat }) => {
  const {
    formState: { errors },
  } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <MobileDatePicker
              margin="normal"
              label={label}
              inputFormat={inputFormat}
              renderInput={(params) => <TextField {...params} />}
              {...field}
            />
          )}
        />
      </LocalizationProvider>
      <FormHelperText sx={{ mb: 1 }} error variant="outlined">
        {errors?.[name]?.message || ' '}
      </FormHelperText>
    </>
  );
};
