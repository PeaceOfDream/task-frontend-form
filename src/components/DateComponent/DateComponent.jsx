import { FormHelperText, TextField } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react'
import { Controller, useController } from 'react-hook-form';

export const DateComponent = ({control, name, label, rules}) => {
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
          render={({ field: { ref, ...rest } }) => (
            <MobileDatePicker
              margin="normal"
              id={name}
              label={label}
              inputFormat="DD/MM/YYYY"
              renderInput={(params) => <TextField {...params} />}
              {...rest}
            />
          )}
        />
      </LocalizationProvider>
      <FormHelperText sx={{ mb: 1 }} error variant="outlined">
        {errors?.[name]?.message || ' '}
      </FormHelperText>
    </>
  );
}
