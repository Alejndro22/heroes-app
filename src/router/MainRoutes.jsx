import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth/pages/LoginPage';
import { heroesChildrenRoutes } from './HeroesRoutes';
import ErrorPage from '../heroes/pages/ErrorPage';

export const routes = [
  {
    path: '/',
    element: <HeroesRoutes />,
    errorElement: <ErrorPage />,
    children: heroesChildrenRoutes,
  },

  {
    path: 'login',
    element: <LoginPage />,
  },
];
