import { Box } from '@mui/material';
import { FC } from 'react';

import Header from './Header';
import Main from './Main';

const containerStyles = { display: 'flex', flexDirection: 'column', height: '100vh' };

const Layout: FC<Record<string, never>> = () => (
  <Box sx={containerStyles}>
    <Header />
    <Main />
  </Box>
);

export default Layout;
