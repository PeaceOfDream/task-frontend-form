import { Typography } from '@mui/material';
import React from 'react';
import style from './FormTitle.module.css';

export const FormTitle = ({ children, ...props }) => {
  return (
    <Typography className={style.title} component="h1" variant="h5" {...props}>
      {children}
    </Typography>
  );
};
