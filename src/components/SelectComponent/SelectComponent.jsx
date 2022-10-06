import { FormHelperText, InputLabel, MenuItem, Select, } from '@mui/material';
import React from 'react';
import { Controller, useController } from 'react-hook-form';

export const SelectComponent = ({ control, rules, name, label, options=[] }) => {
  const {
    formState: { errors },
  } = useController({
    name,
    control,
    rules: rules,
  });
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        rules={rules}
        render={({ field }) => (
          <Select labelId="ocean" {...field}>
            {options.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        )}
        name={name}
        control={control}
      />
      <FormHelperText sx={{ mb: 1 }} error variant="outlined">
        {errors?.[name]?.message || ' '}
      </FormHelperText>
    </>
  );
};


