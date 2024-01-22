import { Container, useMediaQuery } from '@mui/material';
import { Stage } from '@pixi/react';
import { FC } from 'react';

import ScratchCard from 'components/ScratchCard';

const containerStyles = { display: 'flex', justifyContent: 'center', alignItems: 'center' };

const Main: FC<Record<string, never>> = () => {
  const desktop = useMediaQuery('(min-width:1200px)');
  return (
    <Container component="section" sx={containerStyles}>
      <Stage width={desktop ? 1000 : 500} height={desktop ? 800 : 600} options={{ eventMode: 'static' }}>
        <ScratchCard />
      </Stage>
    </Container>
  );
};

export default Main;
