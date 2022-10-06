import { TextField } from '@mui/material'
import React, { forwardRef } from 'react'
import style from './InputComponent.module.css'


export const InputComponent = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

