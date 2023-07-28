import { Outlet } from 'react-router';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4'>
        <Outlet />
      </div>
    </>
  );
};
