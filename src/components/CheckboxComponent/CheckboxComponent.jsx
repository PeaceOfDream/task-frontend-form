import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
} from '@mui/material';
import { useWatch, useController } from 'react-hook-form';




export const CheckboxComponent = ({ control, rules, label, name, options = [], row, ...rest }) => {
  const {
    field: { ref, value, onChange, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: [],
    rules: rules,
  });


  const checkboxIds = useWatch({ control, name: name }) || [];

  const handleChange = (value) => {
    const newArray = [...checkboxIds];
    const item = value;
    if (newArray.length > 0) {
      const index = newArray.findIndex((x) => x === item);
      if (index === -1) {
        newArray.push(item);
      } else {
        newArray.splice(index, 1);
      }
    } else {
      newArray.push(item);
    }
    onChange(newArray);
  };

  return (
    <>
      <InputLabel component="legend">{label}</InputLabel>
      <FormControl>
        <FormGroup row={row}>
          {options.map((option) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value?.some((checked) => checked === option)}
                  {...inputProps}
                  inputRef={ref}
                  onChange={() => handleChange(option)}
                  disabled={rest?.disabled}
                />
              }
              label={<p>{option}</p>}
              key={option}
            />
          ))}
        </FormGroup>
        <FormHelperText sx={{ mb: 1 }} error variant="outlined">
          {errors?.[name]?.message || ' '}
        </FormHelperText>
      </FormControl>
    </>
  );
};




