import { Suspense } from 'react';
import AppControls from 'components/AppControls/AppControls';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const MainPage = () => {
  return (
    <>
      <AppControls />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainPage;
