import { Suspense } from 'react';
import AppControls from '../AppControls/AppControls';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

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
