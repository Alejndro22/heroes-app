import { Outlet } from 'react-router';
import { Navbar } from './ui';

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <div className='container px-4 mx-auto'>
        <Outlet />
      </div>
    </>
  );
};
