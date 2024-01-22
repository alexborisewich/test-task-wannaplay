import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';

import Layout from 'components/Layout';
import { useAppDispatch } from 'hooks';
import { fetchData } from 'store/appSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <Layout />
    </>
  );
}

export default App;
