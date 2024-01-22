import { Box } from '@mui/material';
import { FC, Suspense, lazy } from 'react';

import Question from 'components/QuizeView';
import { useAppSelector } from 'hooks';

const GameView = lazy(() => import('components/GameView'));

const mainStyles = { display: 'flex', flexGrow: 1 };

const Main: FC<Record<string, never>> = () => {
  const { isGameStarted } = useAppSelector((state) => state.app);

  return (
    <Box component="main" sx={mainStyles}>
      {isGameStarted ? (
        <Suspense>
          <GameView />
        </Suspense>
      ) : (
        <Question />
      )}
    </Box>
  );
};

export default Main;
