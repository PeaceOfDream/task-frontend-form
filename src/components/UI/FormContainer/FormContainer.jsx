import { Container } from '@mui/material';
import React from 'react';
import style from './FormContainer.module.css';

export const FormContainer = ({ children, ...props }) => {
  return (
    <Container className={style.container} container="main" maxWidth="sm" {...props}>
      {children}
    </Container>
  );
};
