import { Outlet } from 'react-router';
import { Navbar } from './ui';
import { AuthProvider } from './auth';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div className='container mx-auto px-4'>
        <Outlet />
      </div>
    </AuthProvider>
  );
};
