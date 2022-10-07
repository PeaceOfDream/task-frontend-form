import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ bottom: 'auto', top: 0 }}>
        <Toolbar sx={{ margin: '0 auto' }} variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AppRegistrationIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Registration app
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
