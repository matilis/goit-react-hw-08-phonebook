import { AppBar } from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
