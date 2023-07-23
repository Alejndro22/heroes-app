import { Outlet } from 'react-router';
import { Navbar } from './ui';

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
