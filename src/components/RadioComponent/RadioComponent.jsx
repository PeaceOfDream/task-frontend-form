import { FormControlLabel, FormHelperText, InputLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller, useController } from 'react-hook-form';

export const RadioComponent = ({ control, rules, name, label }) => {
  const {
    formState: { errors },
  } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <>
      <InputLabel component="legend">{label}</InputLabel>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field }) => (
          <RadioGroup aria-label="gender" {...field}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        )}
      />
      <FormHelperText sx={{ mb: 1 }} error variant="outlined">
        {errors?.[name]?.message || ' '}
      </FormHelperText>
    </>
  );
};
