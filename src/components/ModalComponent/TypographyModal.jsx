import { Typography } from '@mui/material';
import React from 'react';

export const TypographyModal = ({ label, field }) => {
  return (
    <>
      <Typography level="h2" component="h3">
        {label}
      </Typography>
      <Typography color="primary" sx={{ mb: 1 }}>
        {field}
      </Typography>
    </>
  );
};
