import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { heroesChildrenRoutes } from './HeroesRoutes';
import ErrorPage from '../heroes/pages/ErrorPage';
import { PrivateRoutes } from './PrivateRoutes';

export const routes = [
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <HeroesRoutes />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: heroesChildrenRoutes,
  },

  {
    path: 'login',
    element: <LoginPage />,
  },
];
