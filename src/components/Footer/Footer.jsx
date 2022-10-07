import { AppBar, Box, IconButton, Link, Toolbar, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ margin: '0 auto' }} variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Link href="https://t.me/bartima" target='_blank'>
              <TelegramIcon sx={{color: 'white'}} />
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Bartashevich Dzmitry 2022
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
