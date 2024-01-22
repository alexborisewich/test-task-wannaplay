import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

const Header: FC<Record<string, never>> = () => (
  <AppBar component="header" position="static">
    <Toolbar>
      <Typography variant="h6" component="h1" textAlign="center">
        Test Quiz
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
