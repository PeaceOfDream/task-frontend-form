import { TextField } from '@mui/material';
import React, { forwardRef } from 'react';

export const InputComponent = forwardRef((props, ref) => {
  return <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props} />;
});
